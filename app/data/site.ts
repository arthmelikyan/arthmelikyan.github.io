import type {
  Certificate,
  Company,
  CvCertification,
  CvExperience,
  Portfolio,
  Skill,
  SocialLink,
} from '~/types/site'

export const profile = {
  name: 'Arthur Melikyan',
  role: 'Senior PHP / Laravel Engineer',
  tagline: 'Building reliable, performant Laravel applications since 2018.',
  location: 'Gyumri, Armenia',
  availability: 'Open to remote & relocation',
  email: 'arthmelikyan@gmail.com',
  phones: ['+374 94 112 182'],
  experienceStartDate: '2018-08-01',
  cvPdf: '/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
  bio: [
    'Senior PHP/Laravel engineer with {years}+ years building AI integrations, fast APIs and high-performance backends for consumer products.',
    'I write clean, secure, efficient code and tune the full stack — Linux, Nginx, Redis — when performance matters.',
  ],
  highlights: [
    'Integrated many AI providers (OpenAI, Anthropic, Google Gemini and more) behind one unified interface.',
    'Built multiple payment integrations with PCI-aware flows.',
    'Set up and tuned Linux servers with Nginx / Apache, Redis and queue workers.',
    'Test-driven development (TDD) and SOLID principles for reliable, maintainable code.',
    'Comfortable in Agile/Scrum teams (Jira, Trello, ClickUp).',
  ],
} as const

export const stats = [
  { value: 25, suffix: '+', label: 'Projects' },
  { value: 20, suffix: '+', label: 'Technologies used' },
  { value: 15, suffix: '+', label: 'Happy clients' },
  { value: '∞', suffix: '', label: 'Cups of coffee' },
] as const

export const skills: Skill[] = [
  { id: 'html', title: 'HTML 5', icon: '/img/icons/html.svg', group: 'frontend' },
  { id: 'css', title: 'CSS 3', icon: '/img/icons/css.svg', group: 'frontend' },
  { id: 'js', title: 'JavaScript', icon: '/img/icons/js.svg', group: 'frontend' },
  { id: 'vue', title: 'Vue.js', icon: '/img/icons/vue.svg', group: 'frontend' },
  { id: 'nuxt', title: 'Nuxt', icon: '/img/icons/nuxt.svg', group: 'frontend' },
  { id: 'alpine', title: 'Alpine.js', icon: '/img/icons/alpinejs.svg', group: 'frontend' },
  { id: 'bootstrap', title: 'Bootstrap', icon: '/img/icons/bootstrap.svg', group: 'frontend' },
  { id: 'php', title: 'PHP', icon: '/img/icons/php.svg', group: 'backend' },
  { id: 'laravel', title: 'Laravel', icon: '/img/icons/laravel.svg', group: 'backend' },
  { id: 'eloquent', title: 'Eloquent ORM', group: 'backend', cvOnly: true },
  { id: 'mvc', title: 'MVC', group: 'backend', cvOnly: true },
  { id: 'livewire', title: 'Livewire', icon: '/img/icons/livewire.svg', group: 'backend' },
  { id: 'filament', title: 'Filament', icon: '/img/icons/filament.jpg', group: 'backend' },
  { id: 'python', title: 'Python', icon: '/img/icons/python.svg', group: 'backend' },
  { id: 'django', title: 'Django', icon: '/img/icons/django.svg', group: 'backend' },
  { id: 'go', title: 'Go', icon: '/img/icons/go.svg', group: 'backend' },
  { id: 'mysql', title: 'MySQL', icon: '/img/icons/mysql..svg', group: 'database' },
  { id: 'postgres', title: 'PostgreSQL', icon: '/img/icons/postgresql.svg', group: 'database' },
  { id: 'redis', title: 'Redis', icon: '/img/icons/redis.svg', group: 'database' },
  { id: 'docker', title: 'Docker', icon: '/img/icons/docker.svg', group: 'devops' },
  { id: 'git', title: 'Git', icon: '/img/icons/git.svg', group: 'devops' },
  { id: 'linux', title: 'Linux', icon: '/img/icons/linux.svg', group: 'devops' },
  { id: 'nginx', title: 'Nginx', icon: '/img/icons/nginx.svg', group: 'devops' },
  { id: 'apache', title: 'Apache', icon: '/img/icons/apache.svg', group: 'devops' },
  { id: 'gcp', title: 'Google Cloud', group: 'devops', cvOnly: true },
  { id: 'digitalocean', title: 'DigitalOcean', group: 'devops', cvOnly: true },
  { id: 'phpunit', title: 'PHPUnit', group: 'testing', cvOnly: true },
  { id: 'pest', title: 'Pest', group: 'testing', cvOnly: true },
  { id: 'unit-testing', title: 'Unit testing', group: 'testing', cvOnly: true },
  { id: 'tdd', title: 'TDD', group: 'testing', cvOnly: true },
]

export const companies: Company[] = [
  {
    id: 'brain-fors',
    name: 'Brain Fors',
    logo: '/img/companies/brain_fors.svg',
    dateFrom: 'November 2018',
    dateTo: 'March 2021',
    role: 'Laravel Developer',
  },
  {
    id: 'aist-global',
    name: 'Aist Global',
    logo: '/img/companies/aist.svg',
    dateFrom: 'March 2021',
    dateTo: 'August 2021',
    role: 'Laravel Full-Stack Developer',
  },
  {
    id: 'code-alliance',
    name: 'Code Alliance',
    logo: '/img/companies/code_alliance.svg',
    dateFrom: 'August 2021',
    dateTo: 'November 2021',
    role: 'Laravel Developer',
  },
  {
    id: 'elite-dev-squad',
    name: 'Elite Dev Squad',
    logo: '/img/companies/ellite.svg',
    dateFrom: 'November 2021',
    dateTo: 'February 2024',
    role: 'Laravel Full-Stack Developer',
  },
  {
    id: 'lovel-ai',
    name: 'Lovel AI',
    logo: '/img/companies/lovel_ai.png',
    dateFrom: 'January 2026',
    dateTo: 'April 2026',
    role: 'Backend Engineer',
  },
  {
    id: 'hyperspace',
    name: 'Hyperspace.ai',
    logo: '/img/companies/hs.webp',
    dateFrom: 'April 2024',
    dateTo: 'Present',
    role: 'Senior Full-Stack Engineer (PHP/Laravel)',
  },
]

const splitTech = (s: string) =>
  s.split(',').map((t) => t.trim().replace(/^#/, '')).filter(Boolean)

export const portfolios: Portfolio[] = [
  {
    id: '4business',
    type: 'Online shop',
    name: '4business.am',
    url: null,
    releaseDate: 'March 2021',
    title: 'Online shop with delivery',
    description: 'Online shop with full delivery management system.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap 4, #JavaScript, #jQuery, #Vue.js, #PHP, #Laravel, #Google API'
    ),
    cover: '/img/portfolio/4business.jpg',
    full: '/img/portfolio/4business-full.png',
  },
  {
    id: 'powerinyou',
    type: 'YouTube blogger website',
    name: 'Mia Power In You',
    url: null,
    releaseDate: 'January 2021',
    title: 'YouTube blogger website',
    description: 'Personal site for a YouTube blogger with motivational and psychological content.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap 4, #JavaScript, #jQuery, #Vue.js, #PHP, #Laravel, #YouTube API'
    ),
    cover: '/img/portfolio/power_new.png',
    full: '/img/portfolio/power_full_new.png',
  },
  {
    id: 'elaser',
    type: 'Service website',
    name: 'Elaser London',
    url: 'https://elaserlondon.com/',
    releaseDate: 'October 2022',
    title: 'Elaser London',
    description: 'Professional laser hair-removal and skin-care services website.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap 5, #JavaScript, #jQuery, #Vite, #Alpine.js, #PHP, #Laravel, #Livewire, #Filament'
    ),
    cover: '/img/portfolio/laser-london-cover.png',
    full: '/img/portfolio/laser-london-full.png',
  },
  {
    id: 'landing',
    type: 'PSD → HTML / Laravel',
    name: 'Laravel landing page',
    url: null,
    releaseDate: 'January 2017',
    title: 'Laravel-based landing page',
    description:
      'Demo project: a landing page paired with a Laravel admin panel including text editor, CRUD and contact form.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap, #JavaScript, #jQuery, #PHP, #Laravel, #Swift Mailer'
    ),
    cover: '/img/portfolio/arthdev.jpg',
    full: '/img/portfolio/arthdev-full.jpg',
  },
  {
    id: 'sanremo',
    type: 'Festival website',
    name: 'SanRemo Junior Armenia',
    url: null,
    releaseDate: 'March 2018',
    title: 'San Remo Junior Armenia',
    description: 'Demo project: contest-festival website for SanRemo Junior Armenia.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap, #JavaScript, #jQuery, #PHP, #Laravel, #Swift Mailer, #AJAX, #YouTube API'
    ),
    cover: '/img/portfolio/remo.jpg',
    full: '/img/portfolio/sanremo-full.jpg',
  },
  {
    id: 'renaissance',
    type: 'Festival website',
    name: 'Gyumri Renaissance Festival',
    url: 'https://gyumrirenaissance.com',
    releaseDate: 'February 2018',
    title: 'Gyumri Renaissance contest festival',
    description: 'Website of the Gyumri Renaissance contest festival.',
    technologies: splitTech(
      '#HTML, #CSS, #Bootstrap, #JavaScript, #jQuery, #PHP, #Laravel, #Swift Mailer, #AJAX, #YouTube API'
    ),
    cover: '/img/portfolio/rena.jpg',
    full: '/img/portfolio/rena-full.jpg',
  },
  {
    id: 'calihigh',
    type: 'Static website',
    name: 'Calihigh',
    url: '/routes/california/',
    releaseDate: 'March 2020',
    title: 'Calihigh website',
    description: 'Calihigh website markup and static build.',
    technologies: splitTech('#HTML, #CSS, #JavaScript, #Bootstrap'),
    cover: '/img/portfolio/calihigh.jpg',
    full: '/img/portfolio/calihigh-full.png',
  },
  {
    id: 'psd1',
    type: 'PSD → HTML',
    name: 'Business landing',
    url: null,
    releaseDate: 'January 2016',
    title: 'PSD to HTML',
    description: 'PSD to HTML markup conversion.',
    technologies: splitTech(
      '#PSD to HTML, #HTML, #CSS, #Bootstrap, #JavaScript, #jQuery'
    ),
    cover: '/img/portfolio/bussines-page-cover.jpg',
    full: '/img/portfolio/bussines-page.jpg',
  },
  {
    id: 'psd2',
    type: 'PSD → HTML',
    name: 'Doggy landing',
    url: null,
    releaseDate: 'January 2016',
    title: 'PSD to HTML',
    description: 'PSD to HTML markup conversion.',
    technologies: splitTech('#PSD to HTML, #HTML, #CSS, #Bootstrap, #JavaScript'),
    cover: '/img/portfolio/dogg-page-cover.jpg',
    full: '/img/portfolio/dogg-page.jpg',
  },
  {
    id: 'wp-web',
    type: 'WordPress',
    name: 'WordPress blog',
    url: null,
    releaseDate: 'February 2018',
    title: 'Simple WordPress blog',
    description: 'Custom-themed WordPress blog.',
    technologies: splitTech('#WordPress'),
    cover: '/img/portfolio/wp-blog-cover.jpg',
    full: '/img/portfolio/wp-blog-full.jpg',
  },
]

export const certificates: Certificate[] = [
  {
    id: 'gyumri-college',
    title: 'Gyumri State Technical College',
    dates: '2009 – 2012',
    thumb: '/img/certificates/technic-certificate-small.jpg',
    full: '/img/certificates/technic-certificate-big.jpg',
    width: 900,
    height: 1389,
  },
  {
    id: 'gitc',
    title: 'Gyumri Information Technologies Center',
    dates: '2016 – 2017',
    thumb: '/img/certificates/gitc-small.jpg',
    full: '/img/certificates/gitc-big.jpg',
    width: 1080,
    height: 1562,
  },
  {
    id: 'stepik-python',
    title: 'Stepik · Python: basics and using',
    dates: '2018',
    thumb: '/img/certificates/stepik_py.jpg',
    full: '/img/certificates/stepik_py.jpg',
    width: 1010,
    height: 713,
  },
  {
    id: 'eduonix-redis',
    title: 'Eduonix · Redis: From Scratch',
    dates: '2023',
    thumb: '/img/certificates/redis.jpg',
    full: '/img/certificates/redis.jpg',
    width: 842,
    height: 595,
  },
]

const urlLabel = (href: string) =>
  href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '')

const LINKEDIN_URL = 'https://www.linkedin.com/in/arthmelikyan'
const GITHUB_URL = 'https://github.com/arthmelikyan'

export const socials: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: '/img/icons/Gmail_Icon.svg',
    display: profile.email,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: '/img/icons/Linkedin.svg',
    display: urlLabel(LINKEDIN_URL),
  },
  {
    id: 'github',
    label: 'GitHub',
    href: GITHUB_URL,
    icon: '/img/icons/github.svg',
    display: urlLabel(GITHUB_URL),
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/arthmelikyan',
    icon: '/img/icons/telegram.svg',
    display: '@arthmelikyan',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/+37494112182',
    icon: '/img/icons/whatsapp.svg',
    display: '+374 94 112 182',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/arthmelikyan',
    icon: '/img/icons/facebook.svg',
    display: 'facebook.com/arthmelikyan',
  },
]

export const cvExperience: CvExperience[] = [
  {
    company: 'Hyperspace.ai',
    role: 'Senior Full-Stack Engineer (PHP/Laravel)',
    location: 'Remote',
    period: 'Apr 2024 - Present',
    achievements: [
      'Lead the AI-integration layer of a generative-AI product — 12+ external models (OpenAI, Anthropic Claude, Google Gemini, Mistral, Midjourney, Leonardo, fal.ai, ElevenLabs, Suno and more) behind one interface, so the rest of the product need not know which model runs.',
      'Build and maintain chat and content-generation flows across text, image, audio and voice — streaming responses, plan-based quotas, multi-model selection, and a migration of the old chat schema to a new conversations model.',
      'Cut API response times 4–5× through query tuning, code refactoring, smaller payloads, caching and Laravel Octane, and build new API layers for cleaner data flow to web and mobile.',
      'Scale SEO for a large-page product (sitemap splitting, feeds, structured data) and keep the platform current with regular PHP/Laravel upgrades and queue tuning.',
    ],
    technologies:
      'PHP/Laravel, Laravel Octane, Eloquent ORM, Vue, Nuxt, PostgreSQL, Redis, Algolia, Laravel Horizon, WebSockets, Docker, Linux, Nginx, CI/CD, PM2, PHPUnit, unit testing.',
  },
  {
    company: 'Lovel AI',
    role: 'Backend Engineer',
    location: 'Remote',
    period: 'Jan 2026 - Apr 2026',
    achievements: [
      'Interim engagement held concurrently with Hyperspace.ai, which continued part-time throughout; returned to Hyperspace.ai full-time afterwards.',
      'Built new features and fixed high-impact bugs across a Hypervel stack of 10+ microservices.',
      'Fixed payment-flow issues — refunds, webhook retries and idempotency — affecting live transactions.',
      'Improved caching and Redis usage, cutting repeated database calls on hot read paths.',
      'Built REST API endpoints for internal services and the client app, with services talking over a NATS message broker for low-latency events.',
    ],
    technologies:
      'PHP/Hypervel, PostgreSQL, Redis, NATS, microservices, REST API design, payment-system integration, caching strategy, Docker, Linux, Nginx.',
  },
  {
    company: 'Elite Dev Squad',
    role: 'Laravel Full-Stack Developer',
    location: 'Yerevan, Armenia (Hybrid)',
    period: 'Nov 2021 - Feb 2024',
    achievements: [
      'Delivered many projects — company-management software, APIs, online stores, web scrapers and dashboards — including rebuilding a buggy legacy codebase into a scalable Laravel app.',
      'Led a complex company-management app over a large database of Irish businesses — task management with recurring jobs, document and event management, and automated/manual time tracking with charts.',
      'Improved performance — lower memory use through efficient queries, dynamic loading and bug fixes.',
      'Reviewed teammates’ code for quality, and automated tests and deploys with CI/CD and GitHub Actions — 50% faster deploys.',
    ],
    technologies:
      'PHP/Laravel, Livewire, MySQL, Postgres, Clickhouse, Redis, JavaScript, Alpine.js, jQuery, CRON job scheduling, queued jobs, external API integration, large-file handling, Microsoft files viewing integration, online payment integrations, REST API integration, Docker, Linux, Nginx, PHPUnit, Pest, unit testing, code-coverage analysis.',
  },
  {
    company: 'Code Alliance',
    role: 'Laravel Developer',
    location: 'Yerevan, Armenia',
    period: 'Aug 2021 - Nov 2021',
    achievements: [
      'Built and ran CRM systems with easy dashboards and secure data, and automated large-scale bank-transaction processing via queued jobs and memory tuning.',
    ],
    technologies:
      'PHP/Laravel, MySQL, Redis, JavaScript, CSS, bank-transaction APIs, queued jobs, optimization, secure data management, Linux, Nginx.',
  },
  {
    company: 'Aist Global',
    role: 'Laravel Full-Stack Developer',
    location: 'Yerevan, Armenia',
    period: 'Mar 2021 - Aug 2021',
    achievements: [
      'Worked on a Udemy-like online-school platform (course uploads, online meetings, student interactions) and added secure payments.',
      'Built a Lottie Animation Marketplace with a dashboard, REST APIs and docs, and published a custom quiz package on Packagist.',
    ],
    technologies:
      'PHP/Laravel, JavaScript, multi-tenant applications, Vue.js, jQuery, MySQL, Redis, package development, payment-system integration, front-end development, Lottie animation integration, Linux, Nginx.',
  },
  {
    company: 'Brain Fors',
    role: 'Laravel Developer',
    location: 'Gyumri, Armenia',
    period: 'Nov 2018 - Mar 2021',
    achievements: [
      'Built and launched an e-sports platform (hundreds of active users at launch), using Riot and Valve APIs for live match results, stats, player positions and ELO-based tournaments.',
      'Added real-time chat, strong security for data integrity and privacy, and REST APIs for mobile apps and online shops.',
    ],
    technologies:
      'PHP/Laravel, MySQL, Redis, JavaScript, Vue.js, jQuery, Pusher.js, REST API development, external API integrations, real-time communication protocols, data visualization, security best practices, Linux, Nginx.',
  },
]

export const education = [
  {
    period: '2016 - 2017',
    name: 'Gyumri Information Technologies Center (GITC) — Web Development',
  },
  { period: '2009 - 2012', name: 'Gyumri State Technical College' },
] as const

export const cvCertifications: CvCertification[] = [
  { name: 'Redis: From Scratch', issuer: 'Eduonix', year: '2023' },
  { name: 'Python: Basics and Using', issuer: 'Stepik', year: '2018' },
]

export const languages = [
  { id: 'am', name: 'Armenian', level: 'Native', flag: 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/am.svg' },
  { id: 'en', name: 'English', level: 'B2', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg' },
  { id: 'ru', name: 'Russian', level: 'Fluent', flag: 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/ru.svg' },
] as const

export const hobbies = ['Chess', 'Music', 'Tech news', 'Football'] as const
