import { languages, profile, skills, socials } from '~/data/site'

export const siteUrl = 'https://arthmelikyan.github.io'
export const profileImage = `${siteUrl}${profile.image}`
export const socialImage = profileImage

export function profilePageSchema(path: '/' | '/cv', title: string, description: string) {
  const url = `${siteUrl}${path}`
  const personId = `${siteUrl}/#person`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: profile.name,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': personId },
        relatedLink: path === '/' ? `${siteUrl}/cv` : `${siteUrl}/`,
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        alternateName: 'arthmelikyan',
        url: `${siteUrl}/`,
        jobTitle: profile.role,
        description: 'Senior PHP and Laravel engineer. REST APIs, AI integrations and full-stack development with Vue.js and Nuxt.',
        image: profileImage,
        email: `mailto:${profile.email}`,
        ...(path === '/cv' ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Gyumri',
            addressCountry: 'AM',
          },
        } : {}),
        knowsAbout: skills.map((skill) => skill.title),
        knowsLanguage: languages.map((language) => language.name),
        sameAs: socials
          .filter((social) => ['linkedin', 'github', 'facebook'].includes(social.id))
          .map((social) => social.href),
        subjectOf: {
          '@type': 'DigitalDocument',
          '@id': `${siteUrl}${profile.cvPdf}`,
          url: `${siteUrl}${profile.cvPdf}`,
          name: `${profile.name} — ${profile.role} CV`,
          encodingFormat: 'application/pdf',
          inLanguage: 'en',
          about: { '@id': personId },
        },
      },
    ],
  }
}
