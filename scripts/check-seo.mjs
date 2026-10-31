import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const root = '.output/public'
const origin = 'https://arthmelikyan.github.io'
const pdf = '/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf'
const read = (path) => readFileSync(`${root}/${path}`, 'utf8')
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(([tag]) => tag)
const meta = (html, name) => tags(html, 'meta')
  .filter((tag) => [attribute(tag, 'name'), attribute(tag, 'property')].includes(name))
  .map((tag) => attribute(tag, 'content'))

for (const [file, path] of [['index.html', '/'], ['cv/index.html', '/cv']]) {
  const html = read(file)
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one main heading`)
  assert.match(html, /<title>Arthur Melikyan[^<]*(?:PHP|Laravel)/)
  assert.equal(meta(html, 'description').length, 1, `${path}: one description`)
  assert.ok(meta(html, 'description')[0].includes('Arthur Melikyan'))
  assert.equal(meta(html, 'robots').length, 1, `${path}: one robots directive`)
  assert.match(meta(html, 'robots')[0], /^index, follow/)
  const canonicals = tags(html, 'link').filter((tag) => attribute(tag, 'rel') === 'canonical')
  assert.equal(canonicals.length, 1)
  assert.equal(attribute(canonicals[0], 'href'), `${origin}${path}`)
  assert.deepEqual(meta(html, 'og:url'), [`${origin}${path}`])
  for (const name of ['og:image', 'twitter:image']) {
    const [url] = meta(html, name)
    assert.ok(url?.startsWith(`${origin}/`), `${path}: absolute ${name}`)
    assert.ok(existsSync(`${root}${new URL(url).pathname}`), `${path}: image exists`)
  }
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map(([, json]) => JSON.parse(json))
  const nodes = schemas.flatMap((schema) => schema['@graph'] ?? [schema])
  const person = nodes.find((node) => node['@type'] === 'Person')
  const page = nodes.find((node) => node['@type'] === 'ProfilePage')
  assert.equal(person?.['@id'], `${origin}/#person`)
  assert.equal(page?.mainEntity['@id'], person['@id'])
  if (path === '/cv') {
    assert.equal(person.address.addressLocality, 'Gyumri')
    assert.equal(person.address.addressCountry, 'AM')
  } else {
    assert.equal(person.address, undefined)
    assert.doesNotMatch(meta(html, 'description')[0], /Gyumri|Armenia/)
  }
  assert.equal(person.worksFor, undefined, 'Do not imply a previous job is current')
  assert.equal(person.alumniOf, undefined, 'Do not describe former employers as schools')
  assert.equal(person.subjectOf.url, `${origin}${pdf}`)
  const body = html.split('<body')[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  for (const term of ['Hyperspace.ai', 'Lovel.ai', 'PostgreSQL', 'Redis', 'remote']) {
    assert.ok(body.includes(term), `${path}: readable ${term}`)
  }
  assert.ok(body.includes(`href="${pdf}"`), `${path}: PDF link`)
}

const home = read('index.html')
assert.doesNotMatch(home, /Gyumri, Armenia/)
assert.match(home, /href="\/cv"/)
const cv = read('cv/index.html')
assert.match(cv, /Gyumri, Armenia/)
assert.match(cv, /4-5 times faster/)
assert.match(cv, /12\+/)
assert.doesNotMatch(home, />0<span class="text-3xl">/, 'Static career counts must not start at zero')

for (const route of ['cv-print', 'cover-letter-print']) {
  assert.ok(meta(read(`${route}/index.html`), 'robots').some((rule) => rule.includes('noindex')))
}
const sitemap = read('sitemap.xml')
for (const path of ['/', '/cv', pdf]) assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`))
assert.doesNotMatch(sitemap, /cv-print|cover-letter-print/)
const robots = read('robots.txt')
assert.match(robots, /User-agent: \*/)
assert.doesNotMatch(robots, /Disallow:\s*\/\s*(?:\n|$)/)
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`))
assert.ok(existsSync(`${root}${pdf}`))
console.log('SEO checks passed: static content, profile data, metadata, images, robots, sitemap and CV links.')
