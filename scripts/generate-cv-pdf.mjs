import { createServer } from 'node:http'
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'
import sirv from 'sirv'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'

const PORT = process.env.CV_PDF_PORT ? Number(process.env.CV_PDF_PORT) : 4321
const BUILD_DIR = '.output/public'
const ROUTE = '/cv-print'
const TARGETS = [
  '.output/public/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
  'public/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
]

const AUTHOR = 'Arthur Melikyan'
const ROLE = 'Senior PHP / Laravel Engineer'
const KEYWORDS = [
  'PHP',
  'Laravel',
  'Laravel Octane',
  'Livewire',
  'Filament',
  'Hypervel',
  'Python',
  'Django',
  'Go',
  'Vue.js',
  'Nuxt',
  'JavaScript',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Linux',
  'Nginx',
  'REST API',
  'Microservices',
  'CI/CD',
  'PHPUnit',
  'Pest',
  'AI integration',
  'Backend Engineer',
  'Full-Stack Engineer',
]

if (!existsSync(BUILD_DIR)) {
  console.error(
    `[cv-pdf] ${BUILD_DIR} not found. Run \`npm run build:nuxt\` (or nuxt generate) first.`,
  )
  process.exit(1)
}

const handler = sirv(BUILD_DIR, { extensions: ['html'], dev: false, single: false })
const server = createServer((req, res) => handler(req, res))
await new Promise((resolve, reject) => {
  server.once('error', reject)
  server.listen(PORT, '127.0.0.1', resolve)
})
console.log(`[cv-pdf] serving ${BUILD_DIR} → http://127.0.0.1:${PORT}`)

let browser
try {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  // A4 width in CSS px (210mm @ 96dpi ≈ 794) — content reflows at print width.
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 })
  await page.emulateMediaType('print')

  await page.goto(`http://127.0.0.1:${PORT}${ROUTE}`, {
    waitUntil: 'networkidle0',
    timeout: 60_000,
  })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 200))

  const { width, height } = await page.evaluate(() => {
    const root = document.documentElement
    return {
      width: Math.max(root.scrollWidth, root.clientWidth),
      height: Math.max(root.scrollHeight, root.clientHeight),
    }
  })
  console.log(`[cv-pdf] content size: ${width}px × ${height}px`)

  const raw = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  const doc = await PDFDocument.load(raw)
  doc.setTitle(`${AUTHOR} — ${ROLE}`)
  doc.setAuthor(AUTHOR)
  doc.setSubject(`${ROLE} resume — ${AUTHOR}`)
  doc.setKeywords(KEYWORDS)
  doc.setCreator(AUTHOR)
  doc.setProducer(AUTHOR)
  const buf = Buffer.from(await doc.save())

  const pageCount = doc.getPageCount()
  console.log(`[cv-pdf] pages: ${pageCount}`)
  if (pageCount > 2) {
    console.warn(
      `[cv-pdf] WARNING: ${pageCount} pages — the CV is meant to fit on 2.`,
    )
  }

  for (const target of TARGETS) {
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, buf)
    console.log(`[cv-pdf] wrote ${target} (${(buf.length / 1024).toFixed(1)} KB)`)
  }
} catch (err) {
  console.error('[cv-pdf] failed:', err)
  process.exitCode = 1
} finally {
  if (browser) await browser.close()
  server.close()
}
