export const heroStats = [
  { value: '+1', label: 'Years of Experience' },
  { value: '+8', label: 'Projects Completed' },
  { value: '+2', label: 'Worldwide Clients' },
];

export const projects = [
  {
    id: 'triviav',
    name: 'TriviaV',
    type: 'Web & Mobile Trivia Platform (Gaming/Education)',
    tone: 'purple',
    image: 'projects/TriviaV.png',
    summary:
      'A fast, competitive trivia platform with story levels, blitz modes, duels, and progression systems.',
    overview:
      'TriviaV is a modern trivia experience that mixes quick-match intensity with structured progression. Players can climb through story levels, jump into Blitz (easy/medium/hard), and compete in duels—all with clean UX, consistent design tokens, and a backend built for scalable question delivery.',
    challenge:
      'Building a trivia platform that feels instant and fair: low-latency question loading, clean anti-duplication pools, clear difficulty scaling, and a content pipeline that makes adding hundreds of questions realistic.',
    solution:
      'Designed a mode-based architecture with reusable pools, server-validated sessions, and a consistent UI system. Implemented structured difficulty tiers, optimized fetching patterns (session-based question bundles instead of per-question round trips), and built admin-friendly endpoints to seed, assign, and manage question pools.',
    role: 'Full-stack engineering, product design, UI system, backend architecture',
    year: '2026',
    stack: [
      'React',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'JWT Auth',
      'Vercel',
    ],
    highlights: [
      'Story mode with level-based progression (10 levels × 10 questions)',
      'Blitz mode with Easy/Medium/Hard tiers mapped to difficulty ranges',
      'Question pools + assignment system to reduce repeats and keep sessions consistent',
      'Admin APIs for categories, levels, pools, and question management',
      'Consistent design tokens (colors, gradients, buttons, cards)',
    ],
    metrics: [
      { label: 'Modes', value: 'Story • Blitz • Duels • Classic' },
      { label: 'Questions per level', value: '10' },
      { label: 'Difficulty bands', value: '1–3 • 4–7 • 8–10' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Web application',
      'REST API backend',
      'Supabase database schema + seed scripts',
      'UI design system (tokens + reusable components)',
      'Question pipeline (levels, pools, difficulty mapping)',
    ],
    links: [
      {
        label: 'Website ',
        href: 'https://trivia-verse-eight.vercel.app/',
      },
    ],
  },

  {
    id: 'gpa-calc',
    name: 'GradePoint',
    type: 'Mobile App (Education)',
    tone: 'blue',
    image: 'projects/GradePoint.png',
    summary:
      'A clean, offline-first GPA and cumulative grade calculator for students.',
    overview:
      'GradePoint is a mobile GPA calculator designed for students who want clarity without clutter. It focuses on fast grade entry, instant GPA feedback, and a distraction-free experience with full offline support.',
    challenge:
      'Designing a GPA calculator that stays simple for everyday use while supporting cumulative tracking, theming, and real-world academic workflows.',
    solution:
      'Built a focused navigation flow with a splash onboarding, semester and cumulative GPA views, and persistent local state powered by context. The UI prioritizes readability, speed, and mobile ergonomics.',
    role: 'Product design, mobile UI, frontend engineering',
    year: '2025',
    stack: ['Expo', 'React Native', 'Expo Router', 'TypeScript', 'Context API'],
    highlights: [
      'Offline-first GPA calculations',
      'Custom theme system',
      'Cumulative and semester GPA views',
      'Production-safe file-based routing',
    ],
    metrics: [
      { label: 'Platforms', value: 'Android' },
      { label: 'Cold start', value: '< 1s' },
      { label: 'Screens', value: '6+' },
    ],
    progress: { value: 92, label: 'Launch-ready' },
    deliverables: [
      'Mobile application',
      'UI theme system',
      'Navigation architecture',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/houssamWaked/Simple-GPA-Calculator',
      },
      {
        label: 'EXPO APK',
        href: 'https://expo.dev/accounts/houssamwaked/projects/grade-point/builds/fa2890b8-dcff-4be1-a146-7a04537d9c15',
        note: 'Play Store build is half the size of the Expo APK.',
      },
    ],
  },
  {
    id: 'portfolio-site',
    name: 'Personal Portfolio',
    type: 'Web App (Portfolio)',
    tone: 'purple',
    image: 'projects/cv.png',
    summary:
      'A modern developer portfolio to showcase projects, skills, and experience.',
    overview:
      'A fast, responsive personal portfolio built to present projects with clear structure and strong visual identity. It focuses on readability, smooth navigation, and performance while staying minimal and professional.',
    challenge:
      'Creating a portfolio that feels professional without being boring, while keeping load time fast and content easy to update.',
    solution:
      'Designed a component-based layout with reusable project cards, smooth routing, and a structured data-driven system for easy scaling and maintenance.',
    role: 'UI design, frontend development, content architecture',
    year: '2025',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Data-driven project sections',
      'Responsive layout for all screen sizes',
      'Animated transitions',
      'SEO-friendly structure',
    ],
    metrics: [
      { label: 'Pages', value: '4+' },
      { label: 'Lighthouse', value: '95+' },
      { label: 'Load time', value: '< 1s' },
    ],
    progress: { value: 100, label: 'Completed' },
    deliverables: [
      'Portfolio website',
      'Reusable UI components',
      'Project showcase system',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/houssamWaked/Houssam_Alwaked_Portfolio',
      },
      {
        label: 'Live Site',
        href: 'https://houssamwaked.github.io/Houssam_Alwaked_Portfolio/',
      },
    ],
  },

  {
    id: 'aqlura-website',
    name: 'Aqlura Website',
    type: 'Full-Stack Production Website',
    tone: 'dark',
    image: 'projects/aqlura.png',
    summary:
      'Full-stack company website with authenticated inquiry flow, admin panel, content CRUD, analytics, notifications, and audit logging.',
    overview:
      'Aqlura’s website is a production-ready platform designed for client acquisition and credibility. It includes a public marketing site, user authentication, a gated inquiry system, and a full admin panel for inquiry handling, analytics, content management, and audit logs.',
    challenge:
      'Build a fast, credible, engineering-driven website that converts visitors into qualified leads while keeping data secure, workflows structured, and administration scalable for a small team.',
    solution:
      'Implemented a separated frontend/backend architecture with a layered monolith API, RDS-backed data model, role-based access control, admin 2FA, audit logging, and an inquiry lifecycle designed for real operations. Deployed with independent CI/CD pipelines for frontend and backend.',
    role: 'Full-stack engineering, system architecture, backend/API, database design, deployment',
    year: '2026',
    stack: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MySQL (RDS)',
      'AWS ECS Fargate',
      'AWS SES',
      'AWS Secrets Manager',
      'Vercel',
      'GitHub Actions',
      'Google reCAPTCHA',
    ],
    highlights: [
      'Public site + authenticated user portal + admin panel',
      'Gated inquiry submission (login required) with dynamic inquiry types',
      'Inquiry lifecycle: New → In Progress → Closed → Archived',
      'Multi-admin assignment per inquiry + single official stored response',
      'In-app notifications + email notifications (SES)',
      'Admin 2FA via email OTP',
      'Analytics dashboards + exports (CSV/PDF)',
      'Audit logs for role/status/assignment/replies/exports',
    ],
    metrics: [
      { label: 'Environments', value: '2 ' },
      { label: 'Primary modules', value: '7' },
      { label: 'Auth model', value: 'JWT + Refresh Tokens' },
    ],
    progress: { value: 25, label: 'UI/UX Almost Done' },
    deliverables: [
      'Production Next.js frontend',
      'Node/Express API (layered monolith)',
      'MySQL schema + migrations',
      'Admin panel (CRUD + workflows)',
      'Analytics & reporting',
      'Audit logging system',
      'CI/CD pipelines (GitHub Actions)',
      'Deployment on Vercel + AWS ECS/RDS',
    ],
    links: [
      {
        label: 'UI Design',
        href: 'https://incomparable-answers-288116.framer.app/',
      },
      { label: 'Website Domain', href: 'https://aqlura.com/' },
    ],
  },
  {
    id: 'burger-bachelor',
    name: 'Burger Bachelor',
    type: 'Multi-Page Restaurant Website (Burger Brand)',
    tone: 'dark',
    image: 'projects/burger-website.png',
    summary:
      'A fully animated burger website connected to a live multi-tenant backend with dynamic menu/cart/admin flows.',
    overview:
      'Burger Bachelor is a full restaurant website with modern landing sections, category-based menu browsing, cart controls, responsive layouts, and a tenant admin dashboard. The frontend consumes live API data and supports multi-page routing and deployment-ready behavior on Vercel.',
    challenge:
      'Build a polished food website with real backend data, tenant isolation, admin controls, responsive UI, and deployment-safe routing/CORS behavior.',
    solution:
      'Implemented a data-driven frontend with tenant-aware API integration, local caching to reduce request costs, role-based admin flows, and backend endpoints for menu/content management. Finalized production deployment across Vercel (frontend) and Railway (API).',
    role: 'Full-stack development, API integration, admin UX, deployment',
    year: '2026',
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Vercel',
      'Railway',
    ],
    highlights: [
      'Category-sorted menu with animated cards and detail interactions',
      'Cart system with quantity controls and persistent state',
      'Dedicated pages: Home, Menu, About, Blog, Contact',
      'Tenant-aware admin dashboard with role-based access',
      'Live API integration with cache-first behavior',
      'Responsive design across desktop/tablet/mobile',
    ],
    metrics: [
      { label: 'Architecture', value: 'Multi-tenant' },
      { label: 'Frontend', value: 'Vercel' },
      { label: 'Backend', value: 'Railway + PostgreSQL' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Production web frontend',
      'Tenant-aware admin dashboard',
      'API-backed menu and content management',
      'Deployment + environment setup',
    ],
    links: [
      { label: 'Live Website', href: 'https://menu-client-pi.vercel.app/' },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/houssamWaked/MenuClient',
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/houssamWaked/Menu_api',
      },
      { label: 'API', href: 'https://menuapi-production.up.railway.app/' },
    ],
  },
  {
    id: 'Savoria',
    name: 'Savoria',
    type: 'Coffe Restaurant Website',
    tone: 'dark',
    image: 'projects/coffee-website.png',
    summary:
      'A modern coffee restaurant website with dynamic menu, cart, and admin features powered by a shared multi-tenant backend.',
    overview:
      'Savoria is a full-featured restaurant website designed for a coffee brand. It includes a dynamic menu, cart system, responsive design, and an admin dashboard for content management. The frontend connects to the same multi-tenant backend as Burger Bachelor but presents a distinct tenant experience.',
    challenge:
      'Creating a second restaurant website that reuses the existing backend architecture while maintaining separate tenant data, branding, and deployment compatibility.',
    solution:
      'Extended the multi-tenant model to support Savoria as a new tenant with its own branding and content. Configured tenant-specific login and data handling while sharing the same API endpoints. Deployed the frontend on Vercel with environment variables to ensure proper CORS and API integration.',
    role: 'Full-stack development, multi-tenant architecture, frontend theming, deployment configuration',
    year: '2026',
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Vercel',
      'Railway',
    ],
    highlights: [
      'Shared backend with separate tenant experience',
      'Coffee-themed design and menu content',
      'Admin dashboard for Savoria content management',
      'Deployment-ready configuration for multi-tenant setup',
    ],
    metrics: [
      { label: 'Tenant Slug', value: 'savoria' },
      { label: 'Backend Reuse', value: '100%' },
      { label: 'Admin Model', value: 'Role-based' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Savoria-branded production frontend',
      'Tenant data + admin setup',
      'Shared backend integration',
      'Deployment-ready environment configuration',
    ],
    links: [
      {
        label: 'Live Website',
        href: 'https://menu-client-uswm.vercel.app/?slug=savoria',
      },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/houssamWaked/MenuClient',
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/houssamWaked/Menu_api',
      },
      { label: 'API', href: 'https://menuapi-production.up.railway.app/' },
    ],
  },
  {
    id: 'pizza-palazzo',
    name: 'Pizza Palazzo',
    type: 'Multi-Page Restaurant Website (Pizza Brand)',
    tone: 'purple',
    image: 'projects/pizza-website.png',
    summary:
      'A full pizza website rebuilt on the same backend platform with a distinct visual style and tenant-specific content.',
    overview:
      'Pizza Palazzo reuses the same production backend architecture but presents a separate tenant experience with different branding, sections, and menu data. It demonstrates how one backend can power multiple restaurant websites with isolated accounts and content.',
    challenge:
      'Launch a second brand fast without cloning backend complexity, while preserving separate tenant data, admin accounts, and deployment compatibility.',
    solution:
      'Extended the existing multi-tenant model and connected a redesigned frontend tenant to the same API. Configured tenant-specific login/content and deployment variables to keep both websites independent but operationally efficient.',
    role: 'Multi-tenant product engineering, frontend theming, backend reuse strategy',
    year: '2026',
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Vercel',
      'Railway',
    ],
    highlights: [
      'Separate tenant content and admin credentials',
      'Same backend, different brand/site experience',
      'Reusable architecture for future restaurant brands',
      'CORS, env, and deployment troubleshooting in production',
      'Data seeding and tenant bootstrap workflow',
    ],
    metrics: [
      { label: 'Tenant Slug', value: 'pizza-palazzo' },
      { label: 'Backend Reuse', value: '100%' },
      { label: 'Admin Model', value: 'Role-based' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Pizza-branded production frontend',
      'Tenant data + admin setup',
      'Shared backend integration',
      'Deployment-ready environment configuration',
    ],
    links: [
      { label: 'Live Website', href: 'https://menu-client-hkrw.vercel.app/' },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/houssamWaked/MenuClient',
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/houssamWaked/Menu_api',
      },
      { label: 'API', href: 'https://menuapi-production.up.railway.app/' },
    ],
  },
  {
    id: 'menu-admin-dashboard',
    name: 'Menu Admin Dashboard',
    type: 'SaaS Admin Dashboard (Multi-Tenant Restaurant CMS)',
    tone: 'blue',
    image: 'projects/menu-admin-dashboard.png',
    summary:
      'A role-based dashboard that lets non-technical restaurant owners manage menus, categories, items, pricing, and media in a simple workflow.',
    overview:
      'This admin dashboard powers tenant operations for the restaurant platform. It includes super-admin and tenant-admin access levels, guided CRUD flows, KPI cards, file-based image uploads, and streamlined management screens built for users with no programming background.',
    challenge:
      'Design an admin experience that stays powerful for business operations but remains simple enough for first-time users, while preserving strict tenant isolation.',
    solution:
      'Implemented email/password role detection, separated super-admin and tenant-admin responsibilities, card-based management UX, image upload processing, and API-driven CRUD backed by PostgreSQL with production deployment on Railway/Vercel.',
    role: 'Full-stack engineering, admin UX architecture, API design',
    year: '2026',
    stack: [
      'React',
      'Vite',
      'Axios',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'JWT',
      'Railway',
      'Vercel',
    ],
    highlights: [
      'Automatic role detection from login email (super admin vs tenant admin)',
      'Tenant-only content management with permission guards',
      'Super-admin tenant/account provisioning workflow',
      'Guided add/manage/account tabs with KPI summaries',
      'Image upload support via local file selection and preview',
      'Search + edit + remove flows for large menu datasets',
    ],
    metrics: [
      { label: 'Roles', value: 'Super Admin + Tenant Admin' },
      { label: 'Core entities', value: 'Menus • Categories • Items' },
      { label: 'Data model', value: 'Multi-tenant PostgreSQL' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Responsive admin frontend',
      'Secure admin auth/session flow',
      'Tenant account management',
      'Menu/category/item management UI',
      'Production backend integration',
    ],
    links: [
      { label: 'Preview Image', href: '/projects/menu-admin-dashboard.png' },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/houssamWaked/MenuClient',
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/houssamWaked/Menu_api',
      },
    ],
  },
  {
    id: 'Manakish Shop Menu',
    name: 'Manakish Shop Menu',
    type: 'Single-Page Restaurant Website (Manakish Brand)',
    tone: 'green',
    image: 'projects/manakish.png',
    summary:
      'A single-page website for a manakish restaurant with menu, contact info, and location sections.',
    overview:
      'This project is a simple, elegant single-page website designed for a manakish restaurant. It features a clean layout with sections for the menu, contact information, and location details, all optimized for quick updates and mobile viewing.',
    challenge:
      'Create a focused restaurant website that delivers essential information without overwhelming visitors, while maintaining a distinct brand identity.',
    solution:
      'Designed a single-page layout with clear sections for menu items, contact details, and location. Used a consistent color scheme and typography to reflect the brand while ensuring the site is easy to navigate and update.',
    role: 'Frontend development, UI design',
    year: '2025',
    stack: [
      'React',
      'Vite',
      'CSS',
      'node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Vercel',
      'Railway',
    ],
    highlights: [
      'Single-page design with clear sections',
      'Cart system with quantity controls and persistent state',
      'Mobile-first responsive layout',
      'Brand-focused color scheme and typography',
      'Easy content update structure',
      'Easy to Use Admin Dashboard',
    ],
    metrics: [
      { label: 'Pages', value: '1' },
      { label: 'Load time', value: '< 1s' },
      { label: 'Sections', value: 'Menu • Cart' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Single-page restaurant website',
      'Menu and contact sections',
      'Mobile-responsive design',
    ],
    links: [
      {
        label: 'Live Website',
        href: 'https://manakish.vercel.app/',
      },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/houssamWaked/Manakish',
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/houssamWaked/Manakish',
      },
    ],
  },
  // {
  //   id: 'mini-market-api',
  //   name: 'Mini Market API',
  //   type: 'Backend API (E-commerce / Inventory & Orders)',
  //   tone: 'blue',
  //   image: 'projects/market.png',
  //   summary:
  //     'A production-ready Spring Boot REST API for product and order management with Firestore persistence, stock validation, and API-key protection.',
  //   overview:
  //     'Mini Market API is a backend service built for a mini market system. It provides CRUD for products, predefined categories, and order creation with transactional stock decrement in Firestore. It is designed to be frontend-friendly with consistent JSON errors, environment-based CORS, and secure access via an API key header.',
  //   challenge:
  //     'Ensuring stock integrity during concurrent order creation while keeping the API simple, predictable, and safe for browser-based clients (CORS + preflight) without adding heavy infrastructure or SQL.',
  //   solution:
  //     'Implemented Firestore-backed repositories with transactional stock checks and atomic decrement during order creation. Added dedicated stock adjustment endpoints, centralized error handling with a consistent JSON schema, environment-driven CORS allowlist for web clients, and API-key middleware for all /api/* routes.',
  //   role: 'Backend development, API design, security, deployment configuration',
  //   year: '2026',
  //   stack: [
  //     'Java 17',
  //     'Spring Boot',
  //     'Firestore',
  //     'Firebase Admin SDK',
  //     'REST API',
  //     'Railway',
  //   ],
  //   highlights: [
  //     'Product CRUD (create/list/update/delete)',
  //     'Order creation with stock validation',
  //     'Atomic stock decrement with Firestore transactions',
  //     'Dedicated stock set/decrement endpoints',
  //     'Predefined categories endpoint',
  //     'Centralized JSON error responses',
  //     'API key protection for all /api/* routes',
  //     'Environment-based CORS allowlist for frontend access',
  //   ],
  //   metrics: [
  //     { label: 'Deploy', value: 'Railway' },
  //     { label: 'Persistence', value: 'Firestore' },
  //     { label: 'Auth', value: 'X-API-KEY' },
  //     { label: 'Core Resources', value: 'Products / Orders / Categories' },
  //   ],
  //   progress: { value: 100, label: 'PRODUCTION READY' },
  //   deliverables: [
  //     'Spring Boot backend service',
  //     'Firestore collections (products, categories, orders)',
  //     'Order transaction + stock integrity logic',
  //     'API key security layer',
  //     'CORS configuration via environment variables',
  //     'Postman-ready API documentation (README)',
  //   ],
  //   links: [
  //     { label: 'GitHub', href: 'https://github.com/houssamWaked/MiniShopApi' },
  //   ],
  // },
  {
    id: 'scout-app',
    name: 'ScoutHub',
    type: 'Mobile App (Community / Youth)',
    tone: 'green',
    image: 'projects/scouthub.png',
    summary:
      'A digital hub for managing scout divisions, members, and leadership roles in a clear, modern mobile experience.',
    overview:
      'ScoutHub is a mobile-first scouting management app built to replace fragmented paper-based workflows. It centralizes scout divisions, leaders, and members into a single, intuitive interface while respecting the structure and culture of scouting organizations.',
    challenge:
      'Translating a real-world scouting hierarchy into a digital system without making it complex or bureaucratic, while supporting Arabic content, offline tolerance, and role-based access.',
    solution:
      'Designed a division-based data model backed by Supabase, paired with a clean navigation flow and Arabic-safe data handling. The app uses normalized division logic, leader detection, and resilient fetching to ensure accurate data display even with inconsistent naming.',
    role: 'Product design, mobile UI, frontend architecture, backend integration',
    year: '2025',
    stack: [
      'Expo',
      'React Native',
      'Expo Router',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Context API',
      'Forest Admin Dashboard',
    ],
    highlights: [
      'Division-based scout management',
      'Leader and member role separation',
      'Arabic-safe data normalization',
      'Resilient Supabase data fetching',
      'Mobile-first UI optimized for field use',
      'Easy to Use Dashboard',
    ],
    metrics: [
      { label: 'Platforms', value: 'Android' },
      { label: 'Divisions', value: '3+' },
      { label: 'Members', value: '50+' },
      { label: 'Screens', value: '8+' },
    ],
    progress: { value: 85, label: 'V1 READY' },
    deliverables: [
      'Mobile application',
      'Supabase database schema',
      'Division and member data model',
      'Reusable data hooks',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/houssamWaked/alforqan-scout',
      },
      {
        label: 'Expo Apk',
        href: 'https://expo.dev/accounts/houssamwaked/projects/alforqanapp/builds/43800def-2833-49e2-ba06-c92830fb66f7',
      },
    ],
  },
];

export const experiences = [
  {
    company: 'University of Balamand',
    title: 'Computer Science Student',
    summary:
      'Studying computer science with a strong focus on software development, problem-solving, and real-world projects.',
    dates: '2023 - Present',
    location: 'Lebanon',
    highlights: [
      'Built practical projects alongside academic studies',
      'Focused on frontend development and application logic',
      'Applied theory through hands-on coding',
    ],
    stack: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
  },
  {
    company: 'Aqlura',
    title: 'Co-Founder',
    summary:
      'Co-Founded Aqlura, a startup focused on building modern digital products and software solutions.',
    dates: '2025 - Present',
    location: 'Remote',
    highlights: [
      'Started and structured a tech startup from scratch',
      'Designed and developed early-stage products',
      'Handled both technical and product decisions',
    ],
    stack: ['React', 'React Native', 'Expo', 'UI/UX', 'Git'],
  },
];

export const tools = [
  // Languages
  {
    name: 'JavaScript',
    description: 'Core language for web and app development',
    icon: 'javascript',
  },
  {
    name: 'TypeScript',
    description: 'Typed superset of JavaScript for scalable apps',
    icon: 'typescript',
  },
  {
    name: 'C++',
    description: 'Systems programming and algorithmic problem solving',
    icon: 'cplusplus',
  },
  {
    name: 'Java',
    description: 'Object-oriented programming and backend foundations',
    icon: 'java',
  },

  // Frontend
  {
    name: 'React',
    description: 'Component-based UI library for web interfaces',
    icon: 'react',
  },
  {
    name: 'Next.js',
    description: 'React framework for production-ready web apps',
    icon: 'nextjs',
  },
  {
    name: 'HTML',
    description: 'Structuring web content',
    icon: 'html5',
  },
  {
    name: 'CSS',
    description: 'Styling and responsive layouts',
    icon: 'css',
  },

  // Mobile
  {
    name: 'React Native',
    description: 'Cross-platform mobile development',
    icon: 'reactnative',
  },
  {
    name: 'Expo',
    description: 'React Native toolchain and deployment',
    icon: 'expo',
  },
  {
    name: 'JavaFX',
    description: 'Desktop application development with Java',
    icon: 'javafx',
  },

  // Backend
  {
    name: 'Node.js',
    description: 'JavaScript runtime for backend services',
    icon: 'nodejs',
  },
  {
    name: 'Express.js',
    description: 'Minimal backend framework for APIs',
    icon: 'express',
  },
  {
    name: 'Spring Boot',
    description: 'Java framework for building RESTful backends',
    icon: 'springboot',
  },

  // Database & Backend Services
  {
    name: 'MySQL',
    description: 'Relational database management system',
    icon: 'mysql',
  },
  {
    name: 'Supabase',
    description: 'Backend-as-a-service with auth and database',
    icon: 'supabase',
  },

  // Design & Product
  {
    name: 'Figma',
    description: 'UI/UX design and prototyping',
    icon: 'figma',
  },
  {
    name: 'Framer',
    description: 'Interactive website builder and animations',
    icon: 'framer',
  },

  // Tools
  {
    name: 'Git',
    description: 'Version control and collaboration',
    icon: 'git',
  },
];
