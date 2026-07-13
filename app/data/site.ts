import type {
  Certificate,
  Company,
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
  phones: ['+374 94-112-182', '+374 44-126-136'],
  experienceStartDate: '2018-08-01',
  cvPdf: '/Arthur_Melikyan_Senior_PHP_Laravel_Engineer_CV.pdf',
  bio: [
    'Senior PHP/Laravel engineer with {years}+ years building AI-integration layers, high-throughput APIs and performance-critical backends for consumer-facing products.',
    'I build high-performing, secure applications with well-structured, efficient code, and tune the full stack — Linux, Nginx, Redis — when performance demands it.',
  ],
  highlights: [
    'Deep experience integrating LLM and generative-AI providers (OpenAI, Anthropic, Google Gemini and more) behind a single unified interface.',
    'Hands-on experience with multiple payment-system integrations and PCI-conscious flows.',
    'Server provisioning and tuning on Linux with Nginx / Apache, Redis and queue workers.',
    'Test-first mindset and SOLID principles for dependable, maintainable code.',
    'Comfortable in Agile/Scrum teams using Jira, Trello and ClickUp.',
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
  { id: 'livewire', title: 'Livewire', icon: '/img/icons/livewire.svg', group: 'backend' },
  { id: 'filament', title: 'Filament', icon: '/img/icons/filament.jpg', group: 'backend' },
  { id: 'python', title: 'Python', icon: '/img/icons/python.svg', group: 'language' },
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
    role: 'Laravel Fullstack Developer',
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
    role: 'Laravel Fullstack Developer',
  },
  {
    id: 'lovel-ai',
    name: 'Lovel AI',
    logo: '/img/companies/lovel_ai.png',
    dateFrom: 'January 2026',
    dateTo: 'April 2026',
    role: 'Backend Engineer · Interim',
  },
  {
    id: 'hyperspace',
    name: 'Hyperspace.ai',
    logo: '/img/companies/hs.webp',
    dateFrom: 'April 2024',
    dateTo: 'Present',
    role: 'Senior Fullstack Engineer',
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
    href: 'https://www.linkedin.com/in/arthur-melikyan-67a668127/',
    icon: '/img/icons/Linkedin.svg',
    display: 'linkedin.com/in/arthmelikyan',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/arthmelikyan',
    icon: '/img/icons/github.svg',
    display: 'github.com/arthmelikyan',
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
    role: 'Senior Fullstack Engineer',
    period: 'Apr. 2024 – Present',
    achievements: [
      'Leading the AI integration layer of a generative-AI consumer product — integrated more than a dozen external models (OpenAI, Anthropic Claude, Google Gemini, Mistral, Midjourney, Leonardo, fal.ai, ElevenLabs, Suno and more) behind a uniform interface so the rest of the product does not need to care which model is doing the work.',
      'Shipping and maintaining the chat and content-generation flows across text, image, audio and voice models — streaming responses, plan-based quotas, multi-model selection and a migration of the legacy chat schema into a new conversations model.',
      'Cut API response times by 4–5× — profiling and rewriting hot SQL queries, refactoring application code, trimming response payloads and adding targeted caching, plus running the app on Laravel Octane for a persistent high-performance runtime.',
      'Designed new API layers that streamlined data flow between the backend and the web and mobile clients.',
      'Engineering SEO at scale for a high-page-count product — sitemap splitting, feeds and structured-data enrichment.',
      'Keeping the platform current — recurring PHP and Laravel upgrades, dependency hygiene and queue tuning.',
    ],
    technologies:
      'PHP/Laravel, Laravel Octane, Vue, Nuxt, PostgreSQL, Redis, Algolia, Laravel Horizon, WebSockets, CI/CD, PM2, PHPUnit.',
  },
  {
    company: 'Lovel AI',
    role: 'Backend Engineer · Interim (concurrent with Hyperspace.ai)',
    period: 'Jan. 2026 – Apr. 2026',
    achievements: [
      'Interim engagement taken on as primary focus while continuing to support Hyperspace.ai part-time, then returned to Hyperspace.ai full-time.',
      'Implemented new product features and resolved high-impact bugs across a Hypervel-based stack of 10+ microservices.',
      'Investigated and fixed payment-flow issues — refunds, webhook retries and idempotency edge cases — affecting live transactions.',
      'Improved caching strategy and Redis usage, cutting repeated database round-trips for hot read paths.',
      'Designed and shipped REST API endpoints consumed by internal services and the client-facing application.',
      'Collaborated across services communicating over a NATS message broker for low-latency event distribution.',
    ],
    technologies:
      'PHP/Hypervel, PostgreSQL, Redis, NATS, microservices, REST API design, payment-system integration, caching strategy.',
  },
  {
    company: 'Elite Dev Squad',
    role: 'Laravel Fullstack Developer',
    period: 'Nov. 2021 – Feb. 2024',
    achievements: [
      'Worked on a wide variety of projects: company-management software, APIs, online stores, web-scraping tools and dashboards.',
      'Optimised project performance — reduced memory usage through efficient queries, dynamic content loading and bug fixes.',
      'Replaced a buggy, unmaintainable legacy codebase with a fully functional, scalable Laravel application.',
      'Led the development of complex company-management software using a large central repository of Irish businesses.',
      'Designed key features including task management (with recurring jobs), document management, event management, and automated/manual time tracking with rich visualisations.',
      'Reviewed teammates’ code carefully to maintain quality and best practices.',
      'Automated testing and deployment with CI/CD and GitHub Actions, cutting deploy time by 50%.',
    ],
    technologies:
      'PHP/Laravel, Livewire, MySQL, Postgres, Clickhouse, Redis, JavaScript, Alpine.js, jQuery, CRON job scheduling, queued jobs, external API integration, large-file handling, Microsoft files viewing integration, online payment integrations, REST API integration, PHPUnit, Pest, code-coverage analysis.',
  },
  {
    company: 'Code Alliance',
    role: 'Laravel Developer',
    period: 'Aug. 2021 – Nov. 2021',
    achievements: [
      'Built and managed CRM systems with a focus on easy-to-use dashboards and secure data management.',
      'Automated large-scale bank-transaction processing using efficient queued jobs and memory optimisation.',
    ],
    technologies:
      'PHP/Laravel, MySQL, Redis, JavaScript, CSS, bank-transaction APIs, queued jobs, optimisation, secure data management.',
  },
  {
    company: 'Aist Global',
    role: 'Laravel Fullstack Developer',
    period: 'Mar. 2021 – Aug. 2021',
    achievements: [
      'Contributed to an online-school platform similar to Udemy with course uploads, online meetings and student interactions.',
      'Added secure payment systems, created a custom quiz package and published it on Packagist.',
      'Created a Lottie Animation Marketplace with a friendly dashboard, REST APIs and clear documentation for front-end developers.',
    ],
    technologies:
      'PHP/Laravel, JavaScript, multi-tenant applications, Vue.js, jQuery, MySQL, Redis, package development, payment-system integration, front-end development, Lottie animation integration.',
  },
  {
    company: 'Brain Fors',
    role: 'Laravel Developer',
    period: 'Nov. 2018 – Mar. 2021',
    achievements: [
      'Developed and launched a high-engagement e-sports platform for gamers, attracting hundreds of active users on release.',
      'Integrated external APIs (Riot, Valve) for real-time match results, statistics, player positions and ELO-based tournament organisation.',
      'Implemented robust security measures to ensure data integrity and user privacy.',
      'Built real-time chat functionality to enhance communication and engagement among gamers.',
      'Contributed to additional REST APIs for mobile applications and online-shopping platforms.',
    ],
    technologies:
      'PHP/Laravel, MySQL, Redis, JavaScript, Vue.js, jQuery, Pusher.js, REST API development, external API integrations, real-time communication protocols, data visualisation, security best practices.',
  },
]

export const education = [
  { period: '2016 – 2017', name: 'Gyumri Technology Center — Web Development' },
] as const

export const languages = [
  { id: 'am', name: 'Armenian', level: 'Native', flag: 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/am.svg' },
  { id: 'en', name: 'English', level: 'B2', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg' },
  { id: 'ru', name: 'Russian', level: 'Fluent', flag: 'https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/ru.svg' },
] as const

export const hobbies = ['Chess', 'Music', 'Tech news', 'Football'] as const
