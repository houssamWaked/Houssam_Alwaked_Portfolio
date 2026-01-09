export const heroStats = [
  { value: '+1', label: 'Years of Experience' },
  { value: '+5', label: 'Projects Completed' },
  { value: '+2', label: 'Worldwide Clients' },
];

export const projects = [
  {
    id: 'gpa-calc',
    name: 'GradePoint',
    type: 'Mobile App (Education)',
    tone: 'blue',
    image: '/projects/GradePoint.png',
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
      { label: 'Play Store', href: '#' },
    ],
  },

  {
    id: 'damas',
    name: 'Damas',
    type: 'Pro Framer Template',
    tone: 'mint',
    image: '/projects/damas.svg',
    summary: 'Commerce template focused on clarity and speed.',
    overview:
      'Damas is a commerce-ready template focused on fast product discovery and a clean checkout experience.',
    challenge:
      'Organize large catalogs without overwhelming the user while preserving brand elegance.',
    solution:
      'Built a layered card system with clear hierarchy, plus a tight typographic scale for quick scanning.',
    role: 'Visual design, design system',
    year: '2023',
    stack: ['Framer', 'Figma', 'Tailwind'],
    highlights: [
      'Product card system',
      'Clean checkout flow',
      'Performance-minded layout',
    ],
    metrics: [
      { label: 'Pages shipped', value: '14' },
      { label: 'Avg load', value: '1.2s' },
      { label: 'Templates', value: '9' },
    ],
    deliverables: ['Ecommerce UI kit', 'Component library', 'Brand guidelines'],
    links: [
      { label: 'Live preview', href: '#' },
      { label: 'Case study', href: '#' },
    ],
  },
  {
    id: 'scout-app',
    name: 'ScoutHub',
    type: 'Mobile App (Community / Youth)',
    tone: 'green',
    image: '/projects/scouthub.svg',
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
    ],
    highlights: [
      'Division-based scout management',
      'Leader and member role separation',
      'Arabic-safe data normalization',
      'Resilient Supabase data fetching',
      'Mobile-first UI optimized for field use',
    ],
    metrics: [
      { label: 'Platforms', value: 'Android' },
      { label: 'Divisions', value: '3+' },
      { label: 'Members', value: '50+' },
      { label: 'Screens', value: '8+' },
    ],
    deliverables: [
      'Mobile application',
      'Supabase database schema',
      'Division and member data model',
      'Reusable data hooks',
    ],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Play Store', href: '#' },
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
    title: 'Founder',
    summary:
      'Founded Aqlura, a startup focused on building modern digital products and software solutions.',
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
    icon: 'JS',
  },
  {
    name: 'TypeScript',
    description: 'Typed superset of JavaScript for scalable apps',
    icon: 'TS',
  },
  {
    name: 'C++',
    description: 'Systems programming and algorithmic problem solving',
    icon: 'C++',
  },
  {
    name: 'Java',
    description: 'Object-oriented programming and backend foundations',
    icon: 'J',
  },

  // Frontend
  {
    name: 'React',
    description: 'Component-based UI library for web interfaces',
    icon: 'R',
  },
  {
    name: 'Next.js',
    description: 'React framework for production-ready web apps',
    icon: 'Nx',
  },
  {
    name: 'HTML',
    description: 'Structuring web content',
    icon: 'H',
  },
  {
    name: 'CSS',
    description: 'Styling and responsive layouts',
    icon: 'C',
  },

  // Mobile
  {
    name: 'React Native',
    description: 'Cross-platform mobile development',
    icon: 'RN',
  },
  {
    name: 'Expo',
    description: 'React Native toolchain and deployment',
    icon: 'EX',
  },
  {
    name: 'JavaFX',
    description: 'Desktop application development with Java',
    icon: 'FX',
  },

  // Backend
  {
    name: 'Node.js',
    description: 'JavaScript runtime for backend services',
    icon: 'N',
  },
  {
    name: 'Express.js',
    description: 'Minimal backend framework for APIs',
    icon: 'EX',
  },
  {
    name: 'Spring Boot',
    description: 'Java framework for building RESTful backends',
    icon: 'SB',
  },

  // Database & Backend Services
  {
    name: 'MySQL',
    description: 'Relational database management system',
    icon: 'SQL',
  },
  {
    name: 'Supabase',
    description: 'Backend-as-a-service with auth and database',
    icon: 'S',
  },

  // Design & Product
  {
    name: 'Figma',
    description: 'UI/UX design and prototyping',
    icon: 'Fi',
  },
  {
    name: 'Framer',
    description: 'Interactive website builder and animations',
    icon: 'F',
  },

  // Tools
  {
    name: 'Git',
    description: 'Version control and collaboration',
    icon: 'G',
  },
];
