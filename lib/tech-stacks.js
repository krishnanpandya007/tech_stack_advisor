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
    bestFor: ['APIs', 'Microservices', 'Event Processing', 'Scalable Apps']
  }
];


export function calculateTechStackScores(userProfile) {
  return techStacks.map(stack => {
    let score = 0;

    // Experience level scoring
    const experienceMap = {
      'Beginner (0-1 years)': stack.learningCurve === 'Easy' ? 30 : stack.learningCurve === 'Medium' ? 15 : 5,
      'Intermediate (1-3 years)': stack.learningCurve === 'Easy' ? 25 : stack.learningCurve === 'Medium' ? 30 : 15,
      'Advanced (3-5 years)': stack.learningCurve === 'Easy' ? 20 : stack.learningCurve === 'Medium' ? 25 : 30,
      'Expert (5+ years)': 25
    };
    score += experienceMap[userProfile.experience] || 0;

    // Project type scoring
    if (stack.bestFor.some(type => userProfile.projectType.includes(type.toLowerCase()))) {
      score += 25;
    }

    // Technology familiarity
    const stackTechs = [
      ...stack.frontend.map(t => t.name.toLowerCase()),
      ...stack.backend.map(t => t.name.toLowerCase()),
      ...stack.database.map(t => t.name.toLowerCase())
    ];

    const familiarTechs = userProfile.technologies?.map(t => t.toLowerCase()) || [];
    const matchingTechs = stackTechs.filter(tech =>
      familiarTechs.some(familiar => tech.includes(familiar.toLowerCase()) || familiar.toLowerCase().includes(tech))
    );
    score += matchingTechs.length * 5;

    // Budget considerations
    const budgetScores = {
      'Free/Minimal ($0-50/month)': {
        'jamstack': 20,
        'nextjs-fullstack': 15,
        'mern-stack': 10
      },
      'Small ($50-200/month)': {
        'nextjs-fullstack': 20,
        'mern-stack': 15,
        'django-fullstack': 15,
        'laravel-fullstack': 15
      },
      'Medium ($200-1000/month)': {
        'serverless-stack': 20,
        'nextjs-fullstack': 15,
        'django-fullstack': 15
      },
      'Large ($1000+/month)': {
        'serverless-stack': 25,
        'django-fullstack': 20
      }
    };
    score += budgetScores[userProfile.budget]?.[stack.id] || 0;

    // Scalability requirements
    const scalabilityScores = {
      'Not important (< 1K users)': {
        'jamstack': 20,
        'nextjs-fullstack': 15
      },
      'Somewhat important (1K-10K users)': {
        'nextjs-fullstack': 20,
        'mern-stack': 15,
        'django-fullstack': 15
      },
      'Very important (10K-100K users)': {
        'serverless-stack': 25,
        'nextjs-fullstack': 20,
        'mern-stack': 15
      },
      'Critical (100K+ users)': {
        'serverless-stack': 30,
        'mern-stack': 20
      }
    };
    score += scalabilityScores[userProfile.scalability]?.[stack.id] || 0;

    return { ...stack, score };
  }).sort((a, b) => b.score - a.score);
}
