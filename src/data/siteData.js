export const heroStats = [
  { value: '+1', label: 'Years of Experience' },
  { value: '+8', label: 'Projects Completed' },
  { value: '+2', label: 'Worldwide Clients' },
];

export const projects = [
  {
    id: 'aqlura',
    name: 'Aqlura',
    type: 'Multi-Tenant SaaS Platform (Digital Menus)',
    tone: 'dark',
    image: 'projects/aqlura.png',
    summary:
      'A live multi-tenant SaaS platform providing digital menu systems for supermarket and restaurant clients in Lebanon, co-founded and built from the ground up.',
    overview:
      'Aqlura lets restaurant and retail brands launch a fully branded digital storefront in seconds through dynamic slug-based routing — no per-tenant deployment required. The platform serves paying clients with catalogs in the thousands of products, backed by a snapshot-caching architecture and a tuned Postgres database for production scale.',
    challenge:
      'Building a multi-tenant platform that can onboard a new store instantly, stay fast under real production load with large catalogs, and give non-technical store owners a dashboard powerful enough to run their business without needing a developer.',
    solution:
      'Designed dynamic slug-based tenant routing so every store is served by the same running app the moment it is provisioned. Built a snapshot-caching architecture that writes pre-built JSON to Supabase Storage so public storefronts serve as static reads, tuned PostgreSQL (autovacuum, ANALYZE, optimized RLS policies), and led a full frontend rewrite into clean services/hooks/utils layers. Also built a per-tenant storefront customizer (theme presets, layout, typography, custom code injection) and a super-admin layer for tenant provisioning and account management.',
    role: 'Co-Founder, Senior Developer — full-stack engineering, architecture, admin/superadmin dashboards',
    year: '2026',
    stack: ['React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Vite', 'PostgreSQL'],
    highlights: [
      'Dynamic slug-based routing so new tenant stores go live in seconds with no per-tenant deployment',
      'Snapshot-caching architecture: pre-built JSON to Supabase Storage for fast, static public menu reads',
      'Per-tenant admin dashboard (products, stock, orders, staff, analytics, bilingual EN/AR, light/dark mode)',
      'Super-admin layer for tenant provisioning, monitoring, and account management',
      'Per-tenant storefront customizer with theme presets, layout, typography, and custom code component injection',
      'Paying clients with catalogs up to 1,000-1,400+ products at $25-50/month subscription tiers',
    ],
    metrics: [
      { label: 'Status', value: 'Live, paying clients' },
      { label: 'Store go-live time', value: 'Seconds' },
      { label: 'Catalog size', value: 'Up to 1,400+ products' },
    ],
    progress: { value: 100, label: 'LIVE' },
    deliverables: [
      'Production multi-tenant web platform',
      'Per-tenant admin dashboard',
      'Super-admin tenant management layer',
      'Storefront customizer',
      'Snapshot-caching architecture',
    ],
    links: [
      { label: 'Website', href: 'https://www.aqlura.com/' },
      { label: 'Menu Platform', href: 'https://menu.aqlura.com/' },
      { label: 'Jinan Kids (live storefront)', href: 'https://menu.aqlura.com/jinan-kids' },
      { label: 'Baro Supermarket (live menu)', href: 'https://menus.aqlura.com/menu/baro-supermarket' },
    ],
  },

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
    progress: { value: 100, label: 'Backend paused (Railway)' },
    deliverables: [
      'Web application',
      'REST API backend',
      'Supabase database schema + seed scripts',
      'UI design system (tokens + reusable components)',
      'Question pipeline (levels, pools, difficulty mapping)',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/houssamWaked/TriviaVerse',
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

  {
    id: 'unity-platformer',
    name: 'Unity 3D Platformer',
    type: 'Game (3D Platformer)',
    tone: 'green',
    image: 'projects/unity.png',
    summary:
      'A low-poly 3D platformer built in Unity, my first Unity project, featuring multiplayer networking and a full playable track.',
    overview:
      'A cartoon-style 3D platformer with a complete track including music, animated character movement, moving hazards, and vehicle sections. Built from scratch as an introduction to Unity and C# game scripting, later expanded with multiplayer networking and a lobby system.',
    challenge:
      'Learning Unity and C# game scripting from scratch while building mechanics that feel responsive: character movement, moving traps, and vehicle controls, then extending a single-player prototype into a networked multiplayer experience.',
    solution:
      'Built a CharacterController-based player with idle/run/jump animations, scripted moving hazards (rolling log, explosive mines), a launch pad, and death/respawn/level-finish logic. Added a driveable car and a helicopter with attack mechanics, then layered in multiplayer networking and a lobby system so players can join the same track together.',
    role: 'Solo developer — game design, C# scripting, level design',
    year: '2026',
    stack: ['Unity', 'C#', 'CharacterController', 'Multiplayer Networking'],
    highlights: [
      'Multiplayer networking with a lobby system',
      'Custom C# character controller with idle/run/jump animations',
      'Moving hazards: rolling log traps and explosive mines',
      'Driveable car and a helicopter with attack/cannon mechanics',
      'Full track with music and cartoon-style visuals',
    ],
    metrics: [
      { label: 'Tracks', value: '1 full track' },
      { label: 'Mode', value: 'Multiplayer' },
      { label: 'Engine', value: 'Unity' },
    ],
    progress: { value: 100, label: 'PLAYABLE' },
    deliverables: [
      'Playable Unity build',
      'Multiplayer lobby system',
      'Custom player controller and animations',
      'Vehicle mechanics (car, helicopter)',
    ],
    links: [
      {
        label: 'Playable Demo',
        href: 'https://github.com/houssamWaked/PlatformGame/releases/tag/v0.1-demo',
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
  { name: 'JavaScript', description: 'Core language for web and app development', icon: 'javascript' },
  { name: 'TypeScript', description: 'Typed superset of JavaScript for scalable apps', icon: 'typescript' },
  { name: 'C++', description: 'Systems programming and algorithmic problem solving', icon: 'cplusplus' },
  { name: 'Java', description: 'Object-oriented programming and backend foundations', icon: 'java' },

  // Frontend
  { name: 'React', description: 'Component-based UI library for web interfaces', icon: 'react' },
  { name: 'Next.js', description: 'React framework for production-ready web apps', icon: 'nextjs' },
  { name: 'HTML', description: 'Structuring web content', icon: 'html5' },
  { name: 'CSS', description: 'Styling and responsive layouts', icon: 'css' },

  // Mobile
  { name: 'React Native', description: 'Cross-platform mobile development', icon: 'reactnative' },
  { name: 'Expo', description: 'React Native toolchain and deployment', icon: 'expo' },
  { name: 'JavaFX', description: 'Desktop application development with Java', icon: 'javafx' },

  // Backend
  { name: 'Node.js', description: 'JavaScript runtime for backend services', icon: 'nodejs' },
  { name: 'Express.js', description: 'Minimal backend framework for APIs', icon: 'express' },
  { name: 'Spring Boot', description: 'Java framework for building RESTful backends', icon: 'springboot' },

  // Database & Backend Services
  { name: 'MySQL', description: 'Relational database management system', icon: 'mysql' },
  { name: 'Supabase', description: 'Backend-as-a-service with auth and database', icon: 'supabase' },

  // Design & Product
  { name: 'Figma', description: 'UI/UX design and prototyping', icon: 'figma' },
  { name: 'Framer', description: 'Interactive website builder and animations', icon: 'framer' },

  // Tools
  { name: 'Git', description: 'Version control and collaboration', icon: 'git' },
];