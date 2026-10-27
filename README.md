# Arthur Melikyan — PHP & Laravel Engineer

Portfolio: https://arthmelikyan.github.io/

CV: https://arthmelikyan.github.io/cv

## Development

Run `npm ci`, then `npm run dev`. `npm run build` generates the static site and the CV and cover-letter PDFs in `.output/public`. PDF generation uses Puppeteer; set `PUPPETEER_EXECUTABLE_PATH` if using a system Chrome installation.

Run `npm run check:seo` after building. GitHub Actions runs this check before deploying to GitHub Pages on a push to `main`.

Profile, job history and skills live in `app/data/site.ts`. Both public pages share a Person identifier and ProfilePage structured data in `app/utils/profileSeo.ts`. The portrait is hosted locally and referenced in profile and social metadata, without being displayed on the homepage. It does not depend on an expiring Facebook image URL.

## Search indexing after deployment

1. Add `https://arthmelikyan.github.io/` as a URL-prefix property in [Google Search Console](https://search.google.com/search-console). Use the HTML-file or HTML-tag verification method. For a file, put Google's exact file in `public/`; for a tag, add the supplied `google-site-verification` meta value to `app.head.meta` in `nuxt.config.ts`, then deploy.
2. Submit `https://arthmelikyan.github.io/sitemap.xml` in Search Console. It lists the homepage, HTML CV and downloadable CV PDF.
3. Inspect `/` and `/cv` using URL Inspection and request indexing after the deployment. Validate the profile markup with [Google's Rich Results Test](https://search.google.com/test/rich-results).
4. Add the same canonical website URL to LinkedIn, GitHub and any CV copies shared with recruiters. The generated CV already contains a visible website link and selectable text.
5. Optionally submit the site to [Bing Webmaster Tools](https://www.bing.com/webmasters/).

The print-only pages have `noindex` and are excluded from the sitemap. Their downloadable PDFs remain public. `robots.txt` allows crawlers, including AI search clients, to retrieve the public profile. Canonical links, absolute social images, readable HTML and consistent identity links help search systems understand the site.

Google says [ordinary SEO practices also apply to its AI search features](https://developers.google.com/search/docs/appearance/ai-features); no special AI file or markup is required. There is no guarantee of indexing, ranking, a profile photo, or inclusion in an AI answer. A recruiter uploading a CV can reach this site if their tool follows its website link or searches the web; uploading a CV alone does not force a lookup.

Avoid hidden keyword lists and invented claims. Google [does not use the keywords meta tag](https://developers.google.com/search/docs/crawling-indexing/special-tags). Useful search terms belong in accurate descriptions of the work, skills and availability visitors can read.
