export const techStacks = [
  {
    id: 'nextjs-fullstack',
    name: 'Next.js Full-Stack',
    description: 'Modern React framework with built-in API routes, perfect for full-stack applications',
    frontend: [
      { name: 'Next.js', description: 'React framework with SSR/SSG', icon: '⚛️', documentation_link: 'https://nextjs.org/docs' },
      { name: 'React', description: 'Component-based UI library', icon: '⚛️', documentation_link: 'https://react.dev/' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨', documentation_link: 'https://tailwindcss.com/docs' }
    ],
    backend: [
      { name: 'Next.js API Routes', description: 'Built-in serverless functions', icon: '🔧', documentation_link: 'https://nextjs.org/docs/api-routes/introduction' },
      { name: 'Node.js', description: 'JavaScript runtime', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' }
    ],
    database: [
      { name: 'PostgreSQL', description: 'Powerful relational database', icon: '🐘', documentation_link: 'https://www.postgresql.org/docs/' },
      { name: 'Prisma', description: 'Type-safe database ORM', icon: '🔷', documentation_link: 'https://www.prisma.io/docs' }
    ],
    deployment: [
      { name: 'Vercel', description: 'Optimized for Next.js deployment', icon: '▲', documentation_link: 'https://vercel.com/docs' }
    ],
    score: 0,
    pros: [
      'Excellent developer experience',
      'Built-in optimization features',
      'Strong TypeScript support',
      'Great for SEO with SSR/SSG',
      'Large community and ecosystem'
    ],
    cons: [
      'Can be overkill for simple sites',
      'Learning curve for beginners',
      'Vendor lock-in with Vercel features'
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://nextjs.org/docs',
    bestFor: ['SaaS Applications', 'E-commerce', 'Business Websites', 'Portfolios']
  },
  {
    id: 'mern-stack',
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js - Popular JavaScript full-stack solution',
    frontend: [
      { name: 'React', description: 'Component-based UI library', icon: '⚛️', documentation_link: 'https://react.dev/' },
      { name: 'Redux/Zustand', description: 'State management', icon: '🔄', documentation_link: 'https://redux.js.org/' }
    ],
    backend: [
      { name: 'Node.js', description: 'JavaScript runtime', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', description: 'Web application framework', icon: '🚂', documentation_link: 'https://expressjs.com/' }
    ],
    database: [
      { name: 'MongoDB', description: 'NoSQL document database', icon: '🍃', documentation_link: 'https://www.mongodb.com/docs/' },
      { name: 'Mongoose', description: 'MongoDB object modeling', icon: '🦫', documentation_link: 'https://mongoosejs.com/docs/' }
    ],
    deployment: [
      { name: 'AWS/Heroku', description: 'Cloud deployment platforms', icon: '☁️', documentation_link: 'https://devcenter.heroku.com/categories/reference' }
    ],
    score: 0,
    pros: [
      'Single language (JavaScript) throughout',
      'Flexible NoSQL database',
      'Large community support',
      'Great for rapid prototyping',
      'Excellent for real-time applications'
    ],
    cons: [
      'Can become complex at scale',
      'NoSQL may not fit all use cases',
      'Requires more setup than frameworks'
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://www.mongodb.com/mern-stack',
    bestFor: ['Social Media', 'Real-time Apps', 'Startups', 'APIs']
  },
  {
    id: 'jamstack',
    name: 'JAMstack',
    description: 'JavaScript, APIs, and Markup - Modern web development architecture',
    frontend: [
      { name: 'Gatsby/Nuxt', description: 'Static site generators', icon: '🚀', documentation_link: 'https://www.gatsbyjs.com/docs/' },
      { name: 'React/Vue', description: 'Frontend frameworks', icon: '⚛️', documentation_link: 'https://vuejs.org/guide/introduction.html' }
    ],
    backend: [
      { name: 'Serverless Functions', description: 'Event-driven compute', icon: '⚡', documentation_link: 'https://vercel.com/docs/functions' },
      { name: 'Headless CMS', description: 'Content management', icon: '📝', documentation_link: 'https://www.sanity.io/docs' }
    ],
    database: [
      { name: 'Headless CMS', description: 'Strapi, Contentful, Sanity', icon: '📊', documentation_link: 'https://strapi.io/documentation' }
    ],
    deployment: [
      { name: 'Netlify/Vercel', description: 'Static site hosting', icon: '🌐', documentation_link: 'https://docs.netlify.com/' }
    ],
    score: 0,
    pros: [
      'Excellent performance',
      'Great security',
      'Cost-effective',
      'Easy to scale',
      'Great developer experience'
    ],
    cons: [
      'Limited dynamic functionality',
      'Build times can be long',
      'Not suitable for complex apps'
    ],
    learningCurve: 'Easy',
    documentation_link: 'https://jamstack.org/docs/',
    bestFor: ['Blogs', 'Portfolios', 'Marketing Sites', 'Documentation']
  },
  {
    id: 'django-fullstack',
    name: 'Django Full-Stack',
    description: 'Python web framework with batteries included approach',
    frontend: [
      { name: 'Django Templates', description: 'Server-side rendering', icon: '🐍', documentation_link: 'https://docs.djangoproject.com/en/stable/ref/templates/' },
      { name: 'Bootstrap/Tailwind', description: 'CSS frameworks', icon: '🎨', documentation_link: 'https://getbootstrap.com/docs/' }
    ],
    backend: [
      { name: 'Django', description: 'High-level Python framework', icon: '🐍', documentation_link: 'https://docs.djangoproject.com/en/stable/' },
      { name: 'Django REST Framework', description: 'API development', icon: '🔧', documentation_link: 'https://www.django-rest-framework.org/' }
    ],
    database: [
      { name: 'PostgreSQL', description: 'Advanced relational database', icon: '🐘', documentation_link: 'https://www.postgresql.org/docs/' },
      { name: 'Django ORM', description: 'Built-in object-relational mapping', icon: '🗄️', documentation_link: 'https://docs.djangoproject.com/en/stable/topics/db/models/' }
    ],
    deployment: [
      { name: 'Heroku/DigitalOcean', description: 'Python-friendly hosting', icon: '☁️', documentation_link: 'https://devcenter.heroku.com/categories/reference' }
    ],
    score: 0,
    pros: [
      'Rapid development',
      'Built-in admin interface',
      'Excellent security features',
      'Great for data-heavy applications',
      'Strong community'
    ],
    cons: [
      'Can be heavy for simple projects',
      'Less flexibility than microframeworks',
      
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://docs.djangoproject.com/en/stable/',
    bestFor: ['Data Analytics', 'Content Management', 'Enterprise Apps', 'APIs']
  },
  {
    id: 'laravel-fullstack',
    name: 'Laravel Full-Stack',
    description: 'Elegant PHP framework for web artisans',
    frontend: [
      { name: 'Blade Templates', description: 'Laravel templating engine', icon: '🔪', documentation_link: 'https://laravel.com/docs/blade' },
      { name: 'Vue.js/Alpine.js', description: 'JavaScript frameworks', icon: '💚', documentation_link: 'https://vuejs.org/guide/introduction.html' }
    ],
    backend: [
      { name: 'Laravel', description: 'PHP web application framework', icon: '🐘', documentation_link: 'https://laravel.com/docs' },
      { name: 'PHP', description: 'Server-side scripting language', icon: '🐘', documentation_link: 'https://www.php.net/docs.php' }
    ],
    database: [
      { name: 'MySQL/PostgreSQL', description: 'Relational databases', icon: '🗄️', documentation_link: 'https://dev.mysql.com/doc/' },
      { name: 'Eloquent ORM', description: "Laravel's ORM", icon: '💎', documentation_link: 'https://laravel.com/docs/eloquent' }
    ],
    deployment: [
      { name: 'Laravel Forge', description: 'Server management', icon: '🔨', documentation_link: 'https://forge.laravel.com/docs' }
    ],
    score: 0,
    pros: [
      'Elegant syntax',
      'Rich ecosystem',
      'Built-in features (auth, queues, etc.)',
      'Great documentation',
      'Strong community'
    ],
    cons: [
      'PHP performance limitations',
      'Can be resource-heavy',
      'Learning curve for PHP newcomers'
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://laravel.com/docs',
    bestFor: ['E-commerce', 'Business Apps', 'Content Management', 'APIs']
  },
  {
    id: 'serverless-stack',
    name: 'Serverless Stack',
    description: 'Event-driven, serverless computing architecture',
    frontend: [
      { name: 'React/Vue', description: 'Modern frontend frameworks', icon: '⚛️', documentation_link: 'https://react.dev/' },
      { name: 'Static Hosting', description: 'CDN-based delivery', icon: '🌐', documentation_link: 'https://vercel.com/docs/deployments/static-sites' }
    ],
    backend: [
      { name: 'AWS Lambda', description: 'Serverless compute', icon: '⚡', documentation_link: 'https://docs.aws.amazon.com/lambda/' },
      { name: 'API Gateway', description: 'API management', icon: '🚪', documentation_link: 'https://docs.aws.amazon.com/apigateway/' }
    ],
    database: [
      { name: 'DynamoDB', description: 'NoSQL serverless database', icon: '⚡', documentation_link: 'https://docs.aws.amazon.com/dynamodb/' },
      { name: 'RDS Serverless', description: 'Serverless SQL database', icon: '🗄️', documentation_link: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html' }
    ],
    deployment: [
      { name: 'AWS/Serverless Framework', description: 'Infrastructure as code', icon: '☁️', documentation_link: 'https://www.serverless.com/framework/docs/' }
    ],
    score: 0,
    pros: [
      'Pay-per-use pricing',
      'Automatic scaling',
      'No server management',
      'High availability',
      'Fast deployment'
    ],
    cons: [
      'Vendor lock-in',
      'Cold start latency',
      'Complex debugging',
      'Limited execution time'
    ],
    learningCurve: 'Hard',
    documentation_link: 'https://serverless.com/framework/docs/',
    bestFor: ['APIs', 'Microservices', 'Event Processing', 'Scalable Apps']
  },
  {
    id: 'react-native-expo',
    name: 'React Native + Expo',
    description: 'Cross-platform mobile development with JavaScript and React',
    frontend: [
      { name: 'React Native', description: 'Cross-platform mobile framework', icon: '📱', documentation_link: 'https://reactnative.dev/docs/getting-started' },
      { name: 'Expo', description: 'Platform for universal React applications', icon: '🚀', documentation_link: 'https://docs.expo.dev/' },
      { name: 'Native Base/Tamagui', description: 'Mobile UI component libraries', icon: '🎨', documentation_link: 'https://nativebase.io/' }
    ],
    backend: [
      { name: 'Firebase', description: 'Backend-as-a-service platform', icon: '🔥', documentation_link: 'https://firebase.google.com/docs' },
      { name: 'Expo Router', description: 'File-based routing', icon: '🗂️', documentation_link: 'https://docs.expo.dev/router/introduction/' },
      { name: 'Node.js API', description: 'JavaScript runtime', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' }

    ],
    database: [
      { name: 'Firebase Firestore', description: 'NoSQL cloud database', icon: '🔥', documentation_link: 'https://firebase.google.com/docs/firestore' },
      { name: 'SQLite', description: 'Local mobile database', icon: '💾', documentation_link: 'https://docs.expo.dev/versions/latest/sdk/sqlite/' }
    ],
    deployment: [
      { name: 'Expo Application Services', description: 'Build and submit to app stores', icon: '🏪', documentation_link: 'https://docs.expo.dev/eas/' }
    ],
    score: 0,
    pros: [
      'Write once, run on iOS and Android',
      'Hot reloading for fast development',
      'Large ecosystem of packages',
      'Over-the-air updates',
      'Native performance capabilities'
    ],
    cons: [
      'Limited access to some native APIs',
      'App size can be larger',
      'Performance not quite native',
      'iOS deployment requires Mac for certain features'
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://reactnative.dev/',
    bestFor: ['Mobile Apps', 'Cross-platform Development', 'MVPs', 'Startups']
  },
  {
    id: 'flutter-stack',
    name: 'Flutter Full-Stack',
    description: 'Google\'s UI toolkit for cross-platform development',
    frontend: [
      { name: 'Flutter', description: 'Cross-platform UI framework', icon: '💙', documentation_link: 'https://docs.flutter.dev/' },
      { name: 'Dart', description: 'Programming language for Flutter', icon: '🎯', documentation_link: 'https://dart.dev/guides' },
      { name: 'Material Design', description: 'Google\'s design system', icon: '🎨', documentation_link: 'https://docs.flutter.dev/ui/widgets/material' }
    ],
    backend: [
      { name: 'Firebase', description: 'Google\'s backend services', icon: '🔥', documentation_link: 'https://firebase.google.com/docs' },
      { name: 'FastAPI', description: 'Modern Python web framework', icon: '⚡', documentation_link: 'https://fastapi.tiangolo.com/' },

    ],
    database: [
      { name: 'Firebase Firestore', description: 'NoSQL cloud database', icon: '🔥', documentation_link: 'https://firebase.google.com/docs/firestore' },
      { name: 'SQLite/Hive', description: 'Local storage solutions', icon: '💾', documentation_link: 'https://pub.dev/packages/hive' }
    ],
    deployment: [
      { name: 'Google Play/App Store', description: 'Mobile app stores', icon: '🏪', documentation_link: 'https://docs.flutter.dev/deployment' },
      { name: 'Flutter Web', description: 'Web deployment', icon: '🌐', documentation_link: 'https://docs.flutter.dev/platform-integration/web' }
    ],
    score: 0,
    pros: [
      'Single codebase for mobile, web, desktop',
      'High performance (compiled to native)',
      'Rich UI components out of the box',
      'Strong Google backing',
      'Hot reload for fast development'
    ],
    cons: [
      'Dart language learning curve',
      'Large app size',
      'Newer ecosystem (fewer packages)',
      'Limited web SEO capabilities'
    ],
    learningCurve: 'Medium-Hard',
    documentation_link: 'https://docs.flutter.dev/',
    bestFor: ['Mobile Apps', 'Cross-platform Development', 'UI-rich Applications', 'Enterprise Apps']
  },
  {
    id: 'ionic-stack',
    name: 'Ionic Framework',
    description: 'Cross-platform mobile and web app development with web technologies',
    frontend: [
      { name: 'Ionic', description: 'UI component library for mobile', icon: '⚡', documentation_link: 'https://ionicframework.com/docs' },
      { name: 'Angular/React/Vue', description: 'Framework of your choice', icon: '🎯', documentation_link: 'https://ionicframework.com/docs/intro/frameworks' },
      { name: 'Capacitor', description: 'Native runtime for web apps', icon: '⚙️', documentation_link: 'https://capacitorjs.com/docs' }
    ],
    backend: [
      { name: 'Node.js/Any Backend', description: 'Framework agnostic backend', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' },
      { name: 'Firebase/Supabase', description: 'Common backend services', icon: '🔥', documentation_link: 'https://firebase.google.com/docs' }
    ],
    database: [
      { name: 'Firebase/Supabase', description: 'Cloud database solutions', icon: '🔥', documentation_link: 'https://firebase.google.com/docs/firestore' },
      { name: 'SQLite', description: 'Local mobile database', icon: '💾', documentation_link: 'https://capacitorjs.com/docs/apis/sqlite' },
      { name: 'IndexedDB', description: 'Browser storage', icon: '🗄️', documentation_link: 'https://ionicframework.com/docs/angular/storage' }
    ],
    deployment: [
      { name: 'Ionic Appflow', description: 'CI/CD for Ionic apps', icon: '🚀', documentation_link: 'https://ionic.io/docs/appflow' },
      { name: 'App Store/Play Store', description: 'Mobile app distribution', icon: '🏪', documentation_link: 'https://ionicframework.com/docs/deployment/app-store' }
    ],
    score: 0,
    pros: [
      'Single codebase for iOS, Android, and Web',
      'Uses familiar web technologies (HTML, CSS, JS)',
      'Large library of pre-built UI components',
      'Framework flexibility (Angular, React, Vue)',
      'Progressive Web App (PWA) support',
      'Active community and ecosystem'
    ],
    cons: [
      'Performance not quite native',
      'WebView limitations for complex animations',
      'App size can be larger than native',
      'Limited access to latest native features',
      'UI may not feel 100% native'
    ],
    learningCurve: 'Easy-Medium',
    documentation_link: 'https://ionicframework.com/docs',
    bestFor: ['Mobile Apps', 'Cross-platform Development', 'PWAs', 'Hybrid Apps', 'Rapid Prototyping']
  },

  {
    id: 'tstack',
    name: 'T3 Stack',
    description: 'TypeScript-first full-stack framework (Next.js + tRPC + Prisma + Tailwind)',
    frontend: [
      { name: 'Next.js', description: 'React framework with TypeScript', icon: '⚛️', documentation_link: 'https://nextjs.org/docs' },
      { name: 'TypeScript', description: 'Type-safe JavaScript', icon: '📘', documentation_link: 'https://www.typescriptlang.org/docs/' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨', documentation_link: 'https://tailwindcss.com/docs' }
    ],
    backend: [
      { name: 'tRPC', description: 'End-to-end typesafe APIs', icon: '🔗', documentation_link: 'https://trpc.io/docs' },
      { name: 'NextAuth.js', description: 'Authentication for Next.js', icon: '🔐', documentation_link: 'https://next-auth.js.org/' }
    ],
    database: [
      { name: 'Prisma', description: 'Type-safe database ORM', icon: '🔷', documentation_link: 'https://www.prisma.io/docs' },
      { name: 'PostgreSQL/MySQL', description: 'Relational databases', icon: '🗄️', documentation_link: 'https://www.postgresql.org/docs/' }
    ],
    deployment: [
      { name: 'Vercel', description: 'Optimized Next.js hosting', icon: '▲', documentation_link: 'https://vercel.com/docs' },
      { name: 'Railway/PlanetScale', description: 'Database hosting', icon: '🚅', documentation_link: 'https://docs.railway.app/' }
    ],
    score: 0,
    pros: [
      'End-to-end type safety',
      'Excellent developer experience',
      'Modern tech stack',
      'Great for rapid development',
      'Strong community adoption'
    ],
    cons: [
      'Steep learning curve for beginners',
      'Opinionated technology choices',
      'Smaller ecosystem than MERN',
      'TypeScript complexity'
    ],
    learningCurve: 'Hard',
    documentation_link: 'https://create.t3.gg/',
    bestFor: ['SaaS Applications', 'Type-safe Development', 'Modern Web Apps', 'Rapid Prototyping']
  },
  {
    id: 'supabase-stack',
    name: 'Supabase Full-Stack',
    description: 'Open-source Firebase alternative with PostgreSQL',
    frontend: [
      { name: 'React/Next.js', description: 'Modern React frameworks', icon: '⚛️', documentation_link: 'https://react.dev/' },
      { name: 'Supabase Auth UI', description: 'Pre-built auth components', icon: '🔐', documentation_link: 'https://supabase.com/docs/guides/auth/auth-helpers' }
    ],
    backend: [
      { name: 'Supabase', description: 'Backend-as-a-service platform', icon: '⚡', documentation_link: 'https://supabase.com/docs' },
      { name: 'PostgreSQL', description: 'Robust relational database', icon: '🐘', documentation_link: 'https://supabase.com/docs/guides/database' }
    ],
    database: [
      { name: 'PostgreSQL', description: 'Advanced SQL database', icon: '🐘', documentation_link: 'https://www.postgresql.org/docs/' },
      { name: 'Row Level Security', description: 'Built-in data security', icon: '🔒', documentation_link: 'https://supabase.com/docs/guides/auth/row-level-security' }
    ],
    deployment: [
      { name: 'Vercel/Netlify', description: 'Frontend hosting', icon: '🌐', documentation_link: 'https://vercel.com/docs' },
      { name: 'Supabase Cloud', description: 'Managed backend hosting', icon: '☁️', documentation_link: 'https://supabase.com/docs/guides/platform' }
    ],
    score: 0,
    pros: [
      'Real-time subscriptions out of the box',
      'SQL database with full PostgreSQL features',
      'Open-source and self-hostable',
      'Built-in authentication and authorization',
      'Generous free tier'
    ],
    cons: [
      'Smaller ecosystem than Firebase',
      'Less mature than established solutions',
      'SQL knowledge required',
      'Limited offline capabilities'
    ],
    learningCurve: 'Easy-Medium',
    documentation_link: 'https://supabase.com/docs',
    bestFor: ['Real-time Apps', 'SQL-based Projects', 'Open-source Preference', 'Rapid Development']
  },
  {
    id: 'sveltekit-stack',
    name: 'SvelteKit Full-Stack',
    description: 'Svelte\'s full-stack framework with excellent performance',
    frontend: [
      { name: 'SvelteKit', description: 'Full-stack Svelte framework', icon: '🔥', documentation_link: 'https://kit.svelte.dev/docs' },
      { name: 'Svelte', description: 'Compile-time optimized framework', icon: '🔥', documentation_link: 'https://svelte.dev/docs' },
      { name: 'Tailwind CSS', description: 'Utility-first styling', icon: '🎨', documentation_link: 'https://tailwindcss.com/docs' }
    ],
    backend: [
      { name: 'SvelteKit API Routes', description: 'Built-in server endpoints', icon: '🔧', documentation_link: 'https://kit.svelte.dev/docs/routing#server' },
      { name: 'Node.js', description: 'JavaScript runtime', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' }
    ],
    database: [
      { name: 'Prisma/Drizzle', description: 'Modern database ORMs', icon: '🔷', documentation_link: 'https://www.prisma.io/docs' },
      { name: 'PostgreSQL/SQLite', description: 'SQL databases', icon: '🗄️', documentation_link: 'https://www.postgresql.org/docs/' }
    ],
    deployment: [
      { name: 'Vercel/Netlify', description: 'Modern hosting platforms', icon: '🌐', documentation_link: 'https://kit.svelte.dev/docs/adapters' }
    ],
    score: 0,
    pros: [
      'Excellent performance (no virtual DOM)',
      'Small bundle sizes',
      'Great developer experience',
      'Built-in state management',
      'Less boilerplate code'
    ],
    cons: [
      'Smaller ecosystem than React/Vue',
      'Newer framework (less community resources)',
      'Limited job market',
      'Learning curve for component concepts'
    ],
    learningCurve: 'Easy-Medium',
    documentation_link: 'https://kit.svelte.dev/',
    bestFor: ['Performance-critical Apps', 'Small to Medium Projects', 'Modern Development', 'Fast Loading Sites']
  },
  {
    id: 'dotnet-blazor',
    name: '.NET Blazor Stack',
    description: 'Microsoft\'s web framework using C# for frontend and backend',
    frontend: [
      { name: 'Blazor', description: 'C# web UI framework', icon: '🔷', documentation_link: 'https://docs.microsoft.com/en-us/aspnet/core/blazor/' },
      { name: 'Bootstrap/MudBlazor', description: 'UI component libraries', icon: '🎨', documentation_link: 'https://mudblazor.com/' }
    ],
    backend: [
      { name: 'ASP.NET Core', description: 'High-performance web framework', icon: '🔷', documentation_link: 'https://docs.microsoft.com/en-us/aspnet/core/' },
      { name: 'C#', description: 'Strongly-typed programming language', icon: '🔷', documentation_link: 'https://docs.microsoft.com/en-us/dotnet/csharp/' }
    ],
    database: [
      { name: 'Entity Framework', description: 'Object-relational mapper', icon: '🗄️', documentation_link: 'https://docs.microsoft.com/en-us/ef/' },
      { name: 'SQL Server/PostgreSQL', description: 'Enterprise databases', icon: '💾', documentation_link: 'https://docs.microsoft.com/en-us/sql/' }
    ],
    deployment: [
      { name: 'Azure', description: 'Microsoft cloud platform', icon: '☁️', documentation_link: 'https://docs.microsoft.com/en-us/azure/' },
      { name: 'Docker', description: 'Containerization platform', icon: '🐳', documentation_link: 'https://docs.docker.com/' }
    ],
    score: 0,
    pros: [
      'Single language (C#) for full stack',
      'Strong typing throughout',
      'Excellent tooling and IDE support',
      'Enterprise-grade performance',
      'Great for existing .NET teams'
    ],
    cons: [
      'Microsoft ecosystem lock-in',
      'Larger learning curve for non-.NET devs',
      'Less flexible than JavaScript stacks',
      'Higher hosting costs'
    ],
    learningCurve: 'Medium-Hard',
    documentation_link: 'https://docs.microsoft.com/en-us/aspnet/core/blazor/',
    bestFor: ['Enterprise Applications', 'Desktop-to-Web Migration', 'C# Developers', 'Large-scale Systems']
  },
  {
    id: 'fastapi-react',
    name: 'FastAPI + React',
    description: 'High-performance Python API with modern React frontend',
    frontend: [
      { name: 'React', description: 'Popular UI library', icon: '⚛️', documentation_link: 'https://react.dev/' },
      { name: 'Vite', description: 'Fast build tool', icon: '⚡', documentation_link: 'https://vitejs.dev/guide/' },
      { name: 'React Query', description: 'Data fetching and caching', icon: '🔄', documentation_link: 'https://tanstack.com/query/latest' }
    ],
    backend: [
      { name: 'FastAPI', description: 'Modern Python web framework', icon: '⚡', documentation_link: 'https://fastapi.tiangolo.com/' },
      { name: 'Python', description: 'Versatile programming language', icon: '🐍', documentation_link: 'https://docs.python.org/3/' }
    ],
    database: [
      { name: 'SQLAlchemy', description: 'Python SQL toolkit', icon: '🗄️', documentation_link: 'https://docs.sqlalchemy.org/' },
      { name: 'PostgreSQL/MongoDB', description: 'Database options', icon: '🐘', documentation_link: 'https://www.postgresql.org/docs/' }
    ],
    deployment: [
      { name: 'Docker', description: 'Containerization', icon: '🐳', documentation_link: 'https://docs.docker.com/' },
      { name: 'AWS/DigitalOcean', description: 'Cloud hosting', icon: '☁️', documentation_link: 'https://docs.aws.amazon.com/' }
    ],
    score: 0,
    pros: [
      'Automatic API documentation',
      'High performance async support',
      'Great for data science integration',
      'Modern Python features',
      'Excellent type hints support'
    ],
    cons: [
      'Python performance limitations',
      'Separate frontend/backend deployment',
      'More complex setup than full-stack frameworks',
      'Requires API design knowledge'
    ],
    learningCurve: 'Medium',
    documentation_link: 'https://fastapi.tiangolo.com/',
    bestFor: ['APIs', 'Data Science Apps', 'ML Integration', 'Python Developers']
  },
  {
    id: 'astro-stack',
    name: 'Astro Multi-Framework',
    description: 'Modern static site generator with partial hydration',
    frontend: [
      { name: 'Astro', description: 'Multi-framework static generator', icon: '🚀', documentation_link: 'https://docs.astro.build/' },
      { name: 'React/Vue/Svelte', description: 'Choose your framework', icon: '🔧', documentation_link: 'https://docs.astro.build/en/core-concepts/framework-components/' },
      { name: 'Tailwind CSS', description: 'Utility-first styling', icon: '🎨', documentation_link: 'https://tailwindcss.com/docs' }
    ],
    backend: [
      { name: 'Astro API Routes', description: 'Server-side endpoints', icon: '🔧', documentation_link: 'https://docs.astro.build/en/core-concepts/endpoints/' },
      { name: 'Node.js', description: 'JavaScript runtime', icon: '🟢', documentation_link: 'https://nodejs.org/en/docs' }
    ],
    database: [
      { name: 'Headless CMS', description: 'Content management systems', icon: '📝', documentation_link: 'https://docs.astro.build/en/guides/cms/' },
      { name: 'Static Files', description: 'Markdown/JSON content', icon: '📄', documentation_link: 'https://docs.astro.build/en/guides/content-collections/' }
    ],
    deployment: [
      { name: 'Netlify/Vercel', description: 'Static hosting platforms', icon: '🌐', documentation_link: 'https://docs.astro.build/en/guides/deploy/' }
    ],
    score: 0,
    pros: [
      'Framework agnostic (use React, Vue, Svelte)',
      'Excellent performance (minimal JS)',
      'Great SEO out of the box',
      'Partial hydration for better UX',
      'Modern developer experience'
    ],
    cons: [
      'Limited to mostly static sites',
      'Newer framework (smaller community)',
      'Learning curve for hydration concepts',
      'Not suitable for complex interactive apps'
    ],
    learningCurve: 'Easy-Medium',
    documentation_link: 'https://docs.astro.build/',
    bestFor: ['Content Sites', 'Blogs', 'Documentation', 'Marketing Sites', 'Multi-framework Projects']
  }
];

const SCORING_WEIGHTS = {
  EXPERIENCE: 25,
  PROJECT_BASE: 30,
  PROJECT_TYPE: 25,
  TECHNOLOGY_FAMILIARITY: 20,
  BUDGET: 15,
  SCALABILITY: 20,
  PERFORMANCE: 20,
  MAINTENANCE: 15,
  DEPLOYMENT: 10,
  DATABASE: 15,
  FEATURES: 15,
  TIMELINE: 10
};

const STACK_CHARACTERISTICS = {
  'nextjs-fullstack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)'],
    features: ['SEO Optimization', 'Mobile Responsiveness', 'User Authentication'],
    timelinePreference: ['1-3 months', '3-6 months']
  },
  
  'mern-stack': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)', 'Critical (100K+ users)'],
    performanceLevels: ['Basic (Standard web performance)', 'Important (Fast loading times)'],
    maintenanceLevels: ['Medium (Few hours per week)', 'High (Daily maintenance)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)', 'VPS/Dedicated servers'],
    databaseTypes: ['Flexible/Document data (NoSQL)', 'Real-time data (Firebase, Supabase)'],
    features: ['Real-time Updates', 'User Authentication', 'API Integration'],
    timelinePreference: ['1-3 months', '3-6 months', '6-12 months']
  },

  'jamstack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)'],
    scalabilityLevels: ['Not important (< 1K users)', 'Somewhat important (1K-10K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Minimal (Set and forget)', 'Low (Few hours per month)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)'],
    databaseTypes: ['No database needed', 'Files and media'],
    features: ['SEO Optimization', 'Mobile Responsiveness'],
    timelinePreference: ['Less than 1 month', '1-3 months']
  },

  'django-fullstack': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Small ($50-200/month)', 'Medium ($200-1000/month)', 'Large ($1000+/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Basic (Standard web performance)', 'Important (Fast loading times)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)', 'VPS/Dedicated servers'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)', 'Large datasets (Big Data)'],
    features: ['User Authentication', 'Admin Dashboard', 'Analytics/Tracking'],
    timelinePreference: ['3-6 months', '6-12 months']
  },

  'laravel-fullstack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Basic (Standard web performance)', 'Important (Fast loading times)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)', 'VPS/Dedicated servers'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)'],
    features: ['User Authentication', 'Payment Processing', 'Admin Dashboard'],
    timelinePreference: ['1-3 months', '3-6 months']
  },

  'serverless-stack': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Medium ($200-1000/month)', 'Large ($1000+/month)'],
    scalabilityLevels: ['Very important (10K-100K users)', 'Critical (100K+ users)'],
    performanceLevels: ['Critical (Sub-second responses)', 'Extreme (Real-time requirements)'],
    maintenanceLevels: ['Minimal (Set and forget)', 'Low (Few hours per month)'],
    deploymentTypes: ['Serverless functions', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Flexible/Document data (NoSQL)', 'Real-time data (Firebase, Supabase)'],
    features: ['Real-time Updates', 'Push Notifications', 'API Integration'],
    timelinePreference: ['3-6 months', '6-12 months', 'More than 1 year']
  },

  'react-native-expo': {
    projectBases: ['Mobile App'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Not important (< 1K users)', 'Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Basic (Standard web performance)', 'Important (Fast loading times)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Flexible/Document data (NoSQL)', 'Real-time data (Firebase, Supabase)'],
    features: ['Push Notifications', 'Offline Support', 'User Authentication'],
    timelinePreference: ['1-3 months', '3-6 months']
  },

  'flutter-stack': {
    projectBases: ['Mobile App'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Flexible/Document data (NoSQL)', 'Real-time data (Firebase, Supabase)'],
    features: ['Push Notifications', 'Offline Support', 'Mobile Responsiveness'],
    timelinePreference: ['3-6 months', '6-12 months']
  },

  'ionic-stack': {
    projectBases: ['Mobile App', 'Website/WebApp'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Not important (< 1K users)', 'Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Basic (Standard web performance)', 'Important (Fast loading times)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Flexible/Document data (NoSQL)', 'Real-time data (Firebase, Supabase)', 'Files and media'],
    features: ['User Authentication', 'Push Notifications', 'Offline Support', 'Mobile Responsiveness', 'File Uploads'],
    timelinePreference: ['Less than 1 month', '1-3 months', '3-6 months']
  },

  'tstack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)'],
    features: ['User Authentication', 'API Integration', 'SEO Optimization'],
    timelinePreference: ['1-3 months', '3-6 months']
  },

  'supabase-stack': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Minimal (Set and forget)', 'Low (Few hours per month)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)', 'Cloud platforms (AWS, GCP, Azure)'],
    databaseTypes: ['Simple structured data (SQL)', 'Real-time data (Firebase, Supabase)'],
    features: ['User Authentication', 'Real-time Updates', 'API Integration'],
    timelinePreference: ['Less than 1 month', '1-3 months', '3-6 months']
  },

  'sveltekit-stack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)'],
    scalabilityLevels: ['Not important (< 1K users)', 'Somewhat important (1K-10K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Low (Few hours per month)', 'Medium (Few hours per week)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)'],
    features: ['SEO Optimization', 'Mobile Responsiveness'],
    timelinePreference: ['1-3 months', '3-6 months']
  },

  'dotnet-blazor': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Medium ($200-1000/month)', 'Large ($1000+/month)'],
    scalabilityLevels: ['Very important (10K-100K users)', 'Critical (100K+ users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Medium (Few hours per week)', 'High (Daily maintenance)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)', 'Containerized (Docker/Kubernetes)'],
    databaseTypes: ['Simple structured data (SQL)', 'Complex relationships (SQL)'],
    features: ['User Authentication', 'Admin Dashboard', 'Analytics/Tracking'],
    timelinePreference: ['6-12 months', 'More than 1 year']
  },

  'fastapi-react': {
    projectBases: ['Website/WebApp', 'API/Backend Service'],
    budgetRanges: ['Small ($50-200/month)', 'Medium ($200-1000/month)'],
    scalabilityLevels: ['Somewhat important (1K-10K users)', 'Very important (10K-100K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Medium (Few hours per week)', 'High (Daily maintenance)'],
    deploymentTypes: ['Cloud platforms (AWS, GCP, Azure)', 'Containerized (Docker/Kubernetes)'],
    databaseTypes: ['Simple structured data (SQL)', 'Flexible/Document data (NoSQL)', 'Large datasets (Big Data)'],
    features: ['API Integration', 'Analytics/Tracking', 'Search Functionality'],
    timelinePreference: ['3-6 months', '6-12 months']
  },

  'astro-stack': {
    projectBases: ['Website/WebApp'],
    budgetRanges: ['Free/Minimal ($0-50/month)', 'Small ($50-200/month)'],
    scalabilityLevels: ['Not important (< 1K users)', 'Somewhat important (1K-10K users)'],
    performanceLevels: ['Important (Fast loading times)', 'Critical (Sub-second responses)'],
    maintenanceLevels: ['Minimal (Set and forget)', 'Low (Few hours per month)'],
    deploymentTypes: ['Simple hosting (Netlify, Vercel)'],
    databaseTypes: ['No database needed', 'Files and media'],
    features: ['SEO Optimization', 'Mobile Responsiveness', 'Multi-language Support'],
    timelinePreference: ['Less than 1 month', '1-3 months']
  }
};

/**
 * Calculate tech stack scores based on user profile
 * @param {Object} userProfile - User's quiz responses
 * @param {Array} allTechStacks - Array of all available tech stacks
 * @returns {Array} Sorted array of tech stacks with scores
 */
export function calculateTechStackScores(userProfile, allTechStacks) {
  return techStacks.map(stack => {
    let score = 0;
    const characteristics = STACK_CHARACTERISTICS[stack.id];
    
    if (!characteristics) {
      return calculateBasicScore(stack, userProfile);
    }

    score += calculateExperienceScore(stack.learningCurve, userProfile.experience);

    score += calculateProjectBaseScore(characteristics, userProfile.projectBase);

    score += calculateProjectTypeScore(stack, userProfile.projectType);

    score += calculateTechnologyFamiliarityScore(stack, userProfile.technologies);

    score += calculateBudgetScore(characteristics, userProfile.budget);

    score += calculateScalabilityScore(characteristics, userProfile.scalability);

    score += calculatePerformanceScore(characteristics, userProfile.performance);

    score += calculateMaintenanceScore(characteristics, userProfile.maintenance);

    score += calculateDeploymentScore(characteristics, userProfile.deployment);

    score += calculateDatabaseScore(characteristics, userProfile.database);

    score += calculateFeaturesScore(characteristics, userProfile.features);

    score += calculateTimelineScore(characteristics, userProfile.timeline);

    score += calculateTeamSizeScore(stack, userProfile.teamSize);

    return { ...stack, score: Math.round(score) };
  }).sort((a, b) => b.score - a.score);
}

function calculateExperienceScore(learningCurve, experience) {
  const experienceMap = {
    'Beginner (0-1 years)': {
      'Easy': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Easy-Medium': SCORING_WEIGHTS.EXPERIENCE * 0.8,
      'Medium': SCORING_WEIGHTS.EXPERIENCE * 0.5,
      'Medium-Hard': SCORING_WEIGHTS.EXPERIENCE * 0.2,
      'Hard': SCORING_WEIGHTS.EXPERIENCE * 0.1
    },
    'Intermediate (1-3 years)': {
      'Easy': SCORING_WEIGHTS.EXPERIENCE * 1.0,
      'Easy-Medium': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Medium': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Medium-Hard': SCORING_WEIGHTS.EXPERIENCE * 0.8,
      'Hard': SCORING_WEIGHTS.EXPERIENCE * 0.4
    },
    'Advanced (3-5 years)': {
      'Easy': SCORING_WEIGHTS.EXPERIENCE * 0.8,
      'Easy-Medium': SCORING_WEIGHTS.EXPERIENCE * 1.0,
      'Medium': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Medium-Hard': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Hard': SCORING_WEIGHTS.EXPERIENCE * 0.8
    },
    'Expert (5+ years)': {
      'Easy': SCORING_WEIGHTS.EXPERIENCE * 0.6,
      'Easy-Medium': SCORING_WEIGHTS.EXPERIENCE * 0.8,
      'Medium': SCORING_WEIGHTS.EXPERIENCE * 1.0,
      'Medium-Hard': SCORING_WEIGHTS.EXPERIENCE * 1.2,
      'Hard': SCORING_WEIGHTS.EXPERIENCE * 1.2
    }
  };
  
  return experienceMap[experience]?.[learningCurve] || 0;
}

function calculateProjectBaseScore(characteristics, projectBase) {
  return characteristics.projectBases.includes(projectBase) 
    ? SCORING_WEIGHTS.PROJECT_BASE 
    : 0;
}

function calculateProjectTypeScore(stack, projectType) {
  const matchingTypes = stack.bestFor.filter(type => 
    projectType.toLowerCase().includes(type.toLowerCase()) ||
    type.toLowerCase().includes(projectType.toLowerCase())
  );
  return matchingTypes.length > 0 ? SCORING_WEIGHTS.PROJECT_TYPE : 0;
}

function calculateTechnologyFamiliarityScore(stack, technologies) {
  if (!technologies || technologies.length === 0) return 0;

  const stackTechs = [
    ...stack.frontend.map(t => t.name.toLowerCase()),
    ...stack.backend.map(t => t.name.toLowerCase()),
    ...stack.database.map(t => t.name.toLowerCase())
  ];

  const familiarTechs = technologies.map(t => t.toLowerCase());
  let matches = 0;

  stackTechs.forEach(stackTech => {
    familiarTechs.forEach(familiarTech => {
      if (stackTech.includes(familiarTech) || familiarTech.includes(stackTech)) {
        matches++;
      }
    });
  });

  return Math.min(matches * 3, SCORING_WEIGHTS.TECHNOLOGY_FAMILIARITY);
}

function calculateBudgetScore(characteristics, budget) {
  return characteristics.budgetRanges.includes(budget) 
    ? SCORING_WEIGHTS.BUDGET 
    : 0;
}

function calculateScalabilityScore(characteristics, scalability) {
  return characteristics.scalabilityLevels.includes(scalability) 
    ? SCORING_WEIGHTS.SCALABILITY 
    : 0;
}

function calculatePerformanceScore(characteristics, performance) {
  return characteristics.performanceLevels.includes(performance) 
    ? SCORING_WEIGHTS.PERFORMANCE 
    : 0;
}

function calculateMaintenanceScore(characteristics, maintenance) {
  return characteristics.maintenanceLevels.includes(maintenance) 
    ? SCORING_WEIGHTS.MAINTENANCE 
    : 0;
}

function calculateDeploymentScore(characteristics, deployment) {
  return characteristics.deploymentTypes.includes(deployment) 
    ? SCORING_WEIGHTS.DEPLOYMENT 
    : 0;
}

function calculateDatabaseScore(characteristics, database) {
  return characteristics.databaseTypes.includes(database) 
    ? SCORING_WEIGHTS.DATABASE 
    : 0;
}

function calculateFeaturesScore(characteristics, features) {
  if (!features || features.length === 0) return 0;
  
  const matchingFeatures = features.filter(feature => 
    characteristics.features.includes(feature)
  );
  
  return Math.min(matchingFeatures.length * 2, SCORING_WEIGHTS.FEATURES);
}

function calculateTimelineScore(characteristics, timeline) {
  return characteristics.timelinePreference.includes(timeline) 
    ? SCORING_WEIGHTS.TIMELINE 
    : 0;
}

function calculateTeamSizeScore(stack, teamSize) {
  if (teamSize >= 10) {
    const enterpriseStacks = ['django-fullstack', 'laravel-fullstack', 'dotnet-blazor', 'serverless-stack'];
    return enterpriseStacks.includes(stack.id) ? 10 : 0;
  } else if (teamSize >= 5) {
    const mediumTeamStacks = ['nextjs-fullstack', 'mern-stack', 'tstack'];
    return mediumTeamStacks.includes(stack.id) ? 8 : 0;
  } else {
    const smallTeamStacks = ['jamstack', 'supabase-stack', 'sveltekit-stack', 'astro-stack'];
    return smallTeamStacks.includes(stack.id) ? 5 : 0;
  }
}

function calculateBasicScore(stack, userProfile) {
  let score = 0;
  
  score += calculateExperienceScore(stack.learningCurve, userProfile.experience);
  
  score += calculateProjectTypeScore(stack, userProfile.projectType);
  
  score += calculateTechnologyFamiliarityScore(stack, userProfile.technologies);
  
  return { ...stack, score: Math.round(score) };
}

export function getTopRecommendations(userProfile, allTechStacks, limit = 3) {
  const scoredStacks = calculateTechStackScores(userProfile, allTechStacks);
  return scoredStacks.slice(0, limit);
}

export function getRecommendationsByCategory(userProfile, allTechStacks) {
  const scoredStacks = calculateTechStackScores(userProfile, allTechStacks);
  
  return {
    web: scoredStacks.filter(stack => 
      STACK_CHARACTERISTICS[stack.id]?.projectBases.includes('Website/WebApp')
    ).slice(0, 3),
    mobile: scoredStacks.filter(stack => 
      STACK_CHARACTERISTICS[stack.id]?.projectBases.includes('Mobile App')
    ).slice(0, 2),
    backend: scoredStacks.filter(stack => 
      STACK_CHARACTERISTICS[stack.id]?.projectBases.includes('API/Backend Service')
    ).slice(0, 2)
  };
}