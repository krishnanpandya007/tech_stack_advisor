export const quizQuestions = [
  {
    id: 'experience',
    type: 'multiple-choice',
    question: 'What is your development experience level?',
    description: 'This helps us recommend technologies that match your skill level',
    options: [
      'Beginner (0-1 years)',
      'Intermediate (1-3 years)',
      'Advanced (3-5 years)',
      'Expert (5+ years)'
    ],
    required: true
  },
  {
    id: 'projectBase',
    type: 'multiple-choice',
    question: 'What type of project base are you planning?',
    description: 'Platform which best suites your use case',
    options: [
      'Website/WebApp',
      'Mobile App',
      'API/Backend Service',
      'Other'
    ],
    required: true
  },
  {
    id: 'projectType',
    type: 'multiple-choice',
    question: 'What type of project are you building?',
    description: 'Different project types have different technical requirements',
    options: [
      'Personal Portfolio/Blog',
      'E-commerce Website',
      'Social Media Platform',
      'Business/Corporate Website',
      'SaaS Application',
      'Real-time Application (Chat, Gaming)',
      'Data Analytics Dashboard',
      'Other'
    ],
    required: true
  },
  {
    id: 'timeline',
    type: 'multiple-choice',
    question: 'What is your project timeline?',
    description: 'Timeline affects technology choices and development approach',
    options: [
      'Less than 1 month',
      '1-3 months',
      '3-6 months',
      '6-12 months',
      'More than 1 year'
    ],
    required: true
  },
  {
    id: 'teamSize',
    type: 'slider',
    question: 'How many developers will work on this project?',
    description: 'Team size influences architecture and technology decisions',
    min: 1,
    max: 20,
    step: 1,
    required: true
  },
  {
    id: 'budget',
    type: 'multiple-choice',
    question: 'What is your budget range?',
    description: 'Budget affects hosting, tools, and service choices',
    options: [
      'Free/Minimal ($0-50/month)',
      'Small ($50-200/month)',
      'Medium ($200-1000/month)',
      'Large ($1000+/month)'
    ],
    required: true
  },
  {
    id: 'scalability',
    type: 'multiple-choice',
    question: 'How important is scalability?',
    description: 'Expected user growth and traffic patterns',
    options: [
      'Not important (< 1K users)',
      'Somewhat important (1K-10K users)',
      'Very important (10K-100K users)',
      'Critical (100K+ users)'
    ],
    required: true
  },
  {
    id: 'performance',
    type: 'multiple-choice',
    question: 'How critical is performance?',
    description: 'Performance requirements affect technology choices',
    options: [
      'Basic (Standard web performance)',
      'Important (Fast loading times)',
      'Critical (Sub-second responses)',
      'Extreme (Real-time requirements)'
    ],
    required: true
  },
  {
    id: 'maintenance',
    type: 'multiple-choice',
    question: 'How much time can you dedicate to maintenance?',
    description: 'Some technologies require more ongoing maintenance',
    options: [
      'Minimal (Set and forget)',
      'Low (Few hours per month)',
      'Medium (Few hours per week)',
      'High (Daily maintenance)'
    ],
    required: true
  },
  {
    id: 'technologies',
    type: 'checkbox',
    question: 'Which technologies are you familiar with?',
    description: 'Select all that apply - this helps us recommend similar technologies',
    options: [
      'JavaScript/TypeScript',
      'React',
      'Vue.js',
      'Angular',
      'Node.js',
      'Flutter',
      'Python',
      'Java',
      'C#/.NET',
      'PHP',
      'Ruby',
      'Go',
      'Rust',
      'Swift',
      'Kotlin',
      'SQL Databases',
      'NoSQL Databases',
      'Docker',
      'Kubernetes',
      'AWS',
      'Google Cloud',
      'Azure'
    ],
    required: false
  },
  {
    id: 'deployment',
    type: 'multiple-choice',
    question: 'What is your preferred deployment approach?',
    description: 'Deployment preferences affect infrastructure choices',
    options: [
      'Simple hosting (Netlify, Vercel)',
      'Cloud platforms (AWS, GCP, Azure)',
      'VPS/Dedicated servers',
      'Containerized (Docker/Kubernetes)',
      'Serverless functions',
      'No preference'
    ],
    required: true
  },
  {
    id: 'database',
    type: 'multiple-choice',
    question: 'What type of data will you primarily store?',
    description: 'Data type influences database technology choice',
    options: [
      'Simple structured data (SQL)',
      'Complex relationships (SQL)',
      'Flexible/Document data (NoSQL)',
      'Real-time data (Firebase, Supabase)',
      'Large datasets (Big Data)',
      'Files and media',
      'No database needed'
    ],
    required: true
  },
  {
    id: 'features',
    type: 'checkbox',
    question: 'Which features do you need?',
    description: 'Select all features your project requires',
    options: [
      'User Authentication',
      'Payment Processing',
      'Real-time Updates',
      'File Uploads',
      'Search Functionality',
      'Email Notifications',
      'Push Notifications',
      'Analytics/Tracking',
      'Admin Dashboard',
      'API Integration',
      'Multi-language Support',
      'SEO Optimization',
      'Mobile Responsiveness',
      'Offline Support'
    ],
    required: false
  }
];
