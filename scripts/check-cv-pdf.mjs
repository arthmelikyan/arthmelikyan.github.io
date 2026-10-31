import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'

// Poppler checks the actual PDF, independently of Chromium's HTML rendering.
// Install Poppler (brew install poppler / apt install poppler-utils) first.
const file = 'public/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf'
const employers = ['Hyperspace.ai', 'Elite Dev Squad', 'Code Alliance', 'Aist Global', 'Brain Fors']
for (const mode of [[], ['-layout'], ['-raw']]) {
  const extracted = execFileSync('pdftotext', [...mode, file, '-'], { encoding: 'utf8' })
  const text = extracted.replace(/\s+/g, ' ')
  const pages = extracted.split('\f').filter((page) => page.trim())
  assert.equal(pages.length, 2, 'CV must remain two nonempty pages')
  assert(!text.includes('\uFFFD'), 'PDF contains replacement characters')
  for (const value of ['Arthur Melikyan', 'arthmelikyan@gmail.com', '+374 94 112 182',
    'Senior PHP / Laravel Engineer', 'Lovel.ai (Jan 2026 - Apr 2026)',
    'Apr 2024 - Jul 2026', '4-5 times faster', 'PostgreSQL', 'PHPUnit',
    'TECHNICAL SKILLS', 'EDUCATION', 'CERTIFICATIONS', 'LANGUAGES']) {
    assert(text.includes(value), `Missing or garbled PDF text: ${value}`)
  }
  let previous = -1
  for (const employer of employers) {
    const position = text.indexOf(employer)
    assert(position > previous, `Employer out of order or missing: ${employer}`)
    assert.equal(text.split(employer).length - 1, 1, `Duplicated employer: ${employer}`)
    previous = position
  }
  const lovel = text.indexOf('Lovel.ai')
  assert(lovel > text.indexOf('Hyperspace.ai') && lovel < text.indexOf('Elite Dev Squad'),
    'Lovel.ai must belong to the Hyperspace.ai experience')
  for (let i = 0; i < employers.length; i++) {
    const page = pages.find((content) => content.includes(employers[i]))
    const end = page?.slice(page.indexOf(employers[i]))
    assert(end?.includes('Technologies:'), `Job split across pages: ${employers[i]}`)
  }
  console.log(`[cv] ${mode[0] || 'reading order'}: contact, employers, dates, assignment and pagination passed`)
}
