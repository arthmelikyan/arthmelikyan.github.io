import { createServer } from 'node:http'
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'
import sirv from 'sirv'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'

const PORT = process.env.CV_PDF_PORT ? Number(process.env.CV_PDF_PORT) : 4321
const BUILD_DIR = '.output/public'
const AUTHOR = 'Arthur Melikyan'
const BROWSER_EXECUTABLE =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  process.env.CHROME_PATH ||
  (existsSync('/usr/bin/chromium-browser') ? '/usr/bin/chromium-browser' : undefined)
const CV_ROLE = 'Senior PHP / Laravel Engineer'
const ROLE_KEYWORDS = [
  'Senior Software Engineer', 'Backend Engineer', 'Full-Stack Engineer',
  'REST API', 'AI integration', 'Agile', 'Scrum',
]

function skillKeywords() {
  const source = readFileSync('app/data/site.ts', 'utf8')
  const start = source.indexOf('export const skills: Skill[] = [')
  const end = source.indexOf('\n]', start)
  if (start < 0 || end < 0) {
    throw new Error('Could not locate the skills array in app/data/site.ts')
  }
  const titles = [...source.slice(start, end).matchAll(/title: '([^']+)'/g)].map((m) => m[1])
  if (titles.length === 0) throw new Error('No skill titles found in app/data/site.ts')

  return titles.flatMap((title) => {
    const paren = title.match(/^(.+?)\s*\(([^)]+)\)$/)
    return paren ? [paren[1], paren[2]] : [title]
  })
}

const KEYWORDS = [...new Set([...skillKeywords(), ...ROLE_KEYWORDS])]

if (!existsSync(BUILD_DIR)) {
  console.error(`[pdf] ${BUILD_DIR} not found. Run \`npm run generate\` first.`)
  process.exit(1)
}

const handler = sirv(BUILD_DIR, { extensions: ['html'], dev: false, single: false })
const server = createServer((req, res) => handler(req, res))
await new Promise((resolve, reject) => {
  server.once('error', reject)
  server.listen(PORT, '127.0.0.1', resolve)
})
console.log(`[pdf] serving ${BUILD_DIR} → http://127.0.0.1:${PORT}`)

const documents = [
  {
    route: '/cv-print',
    title: `${AUTHOR} - ${CV_ROLE}`,
    subject: `${CV_ROLE} resume - ${AUTHOR}`,
    targets: [
      '.output/public/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
      'public/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
    ],
    maxPages: 2,
  },
  {
    route: '/cover-letter-print',
    title: `${AUTHOR} - Cover Letter`,
    subject: 'General software-engineering cover letter',
    targets: [
      '.output/public/Arthur_Melikyan_Cover_Letter.pdf',
      'public/Arthur_Melikyan_Cover_Letter.pdf',
    ],
    maxPages: 1,
  },
]

let browser
try {
  browser = await puppeteer.launch({
    headless: true,
    executablePath: BROWSER_EXECUTABLE,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 })
  await page.emulateMediaType('print')

  for (const item of documents) {
    await page.goto(`http://127.0.0.1:${PORT}${item.route}`, {
      waitUntil: 'networkidle0',
      timeout: 60_000,
    })
    await page.evaluate(() => document.fonts.ready)
    await new Promise((resolve) => setTimeout(resolve, 200))

    const raw = await page.pdf({
      format: 'A4',
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })
    const doc = await PDFDocument.load(raw)
    doc.setTitle(item.title)
    doc.setAuthor(AUTHOR)
    doc.setSubject(item.subject)
    doc.setKeywords(KEYWORDS)
    doc.setCreator(AUTHOR)
    doc.setProducer(AUTHOR)
    const buf = Buffer.from(await doc.save())
    const pageCount = doc.getPageCount()
    console.log(`[pdf] ${item.route} pages: ${pageCount}`)
    if (pageCount > item.maxPages) {
      throw new Error(`${item.route} produced ${pageCount} pages; expected at most ${item.maxPages}.`)
    }

    for (const target of item.targets) {
      mkdirSync(dirname(target), { recursive: true })
      writeFileSync(target, buf)
      console.log(`[pdf] wrote ${target} (${(buf.length / 1024).toFixed(1)} KB)`)
    }
  }
} catch (err) {
  console.error('[pdf] failed:', err)
  process.exitCode = 1
} finally {
  if (browser) await browser.close()
  server.close()
}
