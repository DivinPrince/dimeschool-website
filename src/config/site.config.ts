/**
 * DimeSchool Site Configuration
 * 
 * The Complete School Management Platform
 */

export const siteConfig = {
  // Basic Site Info
  name: "DimeSchool",
  tagline: "The Complete School Management Platform",
  description: "From enrollment to graduation, DimeSchool streamlines every aspect of school operations. One platform for administrators, teachers, parents, and students.",
  domain: "dimeschool.com",
  
  // Contact Information
  contact: {
    email: "team@dime.rw",
    phones: ["+250 798 579 079", "+250 729 355 090"],
    address: {
      line1: "Kigali Innovation City",
      line2: "Kigali, Rwanda",
    },
  },
  
  // Social Media Links (leave empty string to hide)
  social: {
    linkedin: "https://linkedin.com/company/dimeschool",
    twitter: "https://twitter.com/dimeschool",
    instagram: "",
    youtube: "",
    github: "",
  },
  
  // Hero Section
  hero: {
    headline: "Empower Your School",
    rotatingWords: ["Digitally", "Seamlessly", "Efficiently", "Smarter"],
    subheadline: "From enrollment to graduation, DimeSchool streamlines every aspect of school operations. One platform for administrators, teachers, parents, and students.",
    primaryCta: "Get Started Free",
    secondaryCta: "Schedule a Demo",
    stats: [
      { number: "01", value: "All-in-One", label: "Platform" },
      { number: "02", value: "Real-Time", label: "Updates" },
      { number: "03", value: "AI-Powered", label: "Marking" },
    ],
  },
  
  // Navigation
  navigation: {
    links: ["Features", "Pricing", "Integrations", "FAQ"],
    ctaText: "Access Portal",
    loginText: "Contact Us",
    megaMenu: {
      solutions: {
        featured: {
          title: "MarkEase AI",
          description: "Automate exam grading with our AI-powered marking engine. Upload answer papers, receive graded results in minutes.",
          href: "#integrations",
        },
        items: [
          { name: "For Administrators", description: "Complete school operations management", href: "#features", icon: "sparkles" },
          { name: "For Teachers", description: "Class management and AI-powered marking", href: "#features", icon: "code" },
          { name: "For Parents", description: "Real-time academic visibility", href: "#features", icon: "cloud" },
          { name: "For Students", description: "Personal academic dashboard", href: "#features", icon: "cpu" },
          { name: "Financial Operations", description: "Fee management and payment tracking", href: "#features", icon: "server" },
          { name: "Data Security", description: "Enterprise-grade protection", href: "#features", icon: "shield" },
        ],
      },
    },
  },
  
  // Problem Section (used in Manifesto)
  manifesto: {
    title: "Schools Are Drowning in Administrative Chaos",
    quote: "One platform to connect everyone in your school community.",
    timeline: [
      {
        year: "Problem",
        title: "Paper-Based Chaos",
        description: "Student records scattered across filing cabinets. Excel spreadsheets that break. Payment tracking in notebooks that get lost.",
      },
      {
        year: "Impact",
        title: "Wasted Time & Resources",
        description: "Hours wasted on manual processes. Frustrated staff. Confused parents. Students who fall through the cracks.",
      },
      {
        year: "Solution",
        title: "DimeSchool",
        description: "A unified platform that connects everyone in your school community and automates the work that slows you down.",
      },
    ],
    principles: [
      {
        title: "For Administrators",
        description: "Maintain complete student records, smart enrollment, staff management, financial operations, and curriculum management all in one secure location.",
      },
      {
        title: "For Teachers",
        description: "Class dashboards, assessment management, AI-powered marking with MarkEase integration, and student performance insights.",
      },
      {
        title: "For Parents & Students",
        description: "Real-time academic visibility, fee tracking, multi-child support, and personalized dashboards with detailed feedback.",
      },
    ],
    statements: [
      "Eliminate administrative chaos",
      "Give time back to teachers",
      "Connect your entire school community",
    ],
    founderMessage: "DimeSchool was built to solve the daily struggles that school administrators, teachers, and parents face. We believe schools should focus on education, not paperwork.",
  },
  
  // Features/Products
  products: [
    {
      id: "administrators",
      name: "For Administrators",
      tagline: "Complete Operations Management",
      description: "Manage every aspect of your school from student records to financial operations. Search any student in seconds, handle enrollments with drag-and-drop simplicity.",
      cta: "Learn More",
      features: [
        "Student Information Management",
        "Smart Enrollment & Class Assignment",
        "Staff & Role Management",
        "Fee Management & Payment Tracking",
        "Expense Management with Audit Trails",
        "Program & Curriculum Management",
        "Promotion & Graduation Workflows",
      ],
    },
    {
      id: "teachers",
      name: "For Teachers",
      tagline: "AI-Powered Teaching Tools",
      description: "Everything you need to manage your classes and assessments. Create assessments, grade with AI assistance, and track student performance all in one place.",
      cta: "Explore Features",
      features: [
        "Class Dashboard with Student Overview",
        "Assessment Management",
        "AI-Powered Marking with MarkEase",
        "Student Performance Insights",
        "AI-Generated Study Recommendations",
        "Results Management & Reports",
      ],
    },
    {
      id: "parents-students",
      name: "For Parents & Students",
      tagline: "Real-Time Visibility",
      description: "Stay connected to academic progress. Parents see grades as soon as teachers publish them. Students track their performance and receive personalized feedback.",
      cta: "See Portal",
      features: [
        "Real-Time Academic Visibility",
        "Fee & Payment Tracking",
        "Multi-Child Support",
        "Direct Communication Channel",
        "Personal Academic Dashboard",
        "Assessment Results & Feedback",
        "Enrollment History",
      ],
    },
  ],
  
  // Featured Project (set to null to hide)
  featuredProject: null as {
    name: string;
    tagline: string;
    description: string;
    features: string[];
    screenshots: string[];
  } | null,
  
  // Team Members (empty since this is a product, not a company)
  team: [] as {
    name: string;
    title: string;
    imageSrc: string;
    skills: string[];
    social: {
      linkedin?: string;
      twitter?: string;
    };
  }[],
  
  // Careers (empty - not needed for product)
  careers: [] as {
    title: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
  }[],
  
  // Testimonials
  testimonials: [
    {
      quote: "DimeSchool has transformed how we run our school. What used to take our admin team hours now takes minutes. Report cards that took weeks are now generated instantly.",
      author: "Sarah Mensah",
      role: "Principal",
      company: "Horizon Academy",
    },
    {
      quote: "The MarkEase AI marking feature is a game-changer. I used to spend entire weekends grading papers. Now I can focus that time on actually teaching my students.",
      author: "David Okonkwo",
      role: "Senior Teacher",
      company: "Unity Secondary School",
    },
    {
      quote: "As a parent of three children in different grades, having one dashboard to see all their progress is incredible. No more waiting for term reports - I see grades in real-time.",
      author: "Amina Hassan",
      role: "Parent",
      company: "Riverside International",
    },
  ],
  
  // FAQ
  faq: [
    {
      question: "Can I import existing student data?",
      answer: "Yes. DimeSchool supports bulk import from Excel and CSV files. Our team can assist with data migration for larger schools.",
    },
    {
      question: "Does DimeSchool work offline?",
      answer: "The core platform requires an internet connection. We're developing offline capabilities for areas with limited connectivity.",
    },
    {
      question: "Can parents access the system on mobile?",
      answer: "Yes. The parent and student portals are fully responsive and work on any device with a web browser.",
    },
    {
      question: "How is student data protected?",
      answer: "All data is encrypted in transit and at rest. We follow industry best practices for data security and comply with applicable data protection regulations.",
    },
    {
      question: "Can we customize the grading system?",
      answer: "Absolutely. DimeSchool supports custom grade scales, passing thresholds, and outcome labels for any curriculum standard.",
    },
    {
      question: "What happens if we outgrow our plan?",
      answer: "Upgrade anytime. Your data stays intact, and you gain immediate access to additional features.",
    },
  ],
  
  // Blog/Insights (empty - not needed)
  blog: [] as {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    link: string;
  }[],
  
  // Footer
  footer: {
    description: "The modern school management platform. From enrollment to graduation, we streamline every aspect of school operations.",
    links: [
      {
        title: "Product",
        links: [
          { name: "Features", href: "#features" },
          { name: "Pricing", href: "#pricing" },
          { name: "Integrations", href: "#integrations" },
          { name: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Portals",
        links: [
          { name: "School Portal", href: "https://school.dimeschool.tech" },
          { name: "Teacher Portal", href: "https://teacher.dimeschool.tech" },
          { name: "Parent Portal", href: "https://parent.dimeschool.tech" },
          { name: "Student Portal", href: "https://student.dimeschool.tech" },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "Dime", href: "https://dime.rw" },
          { name: "MarkEase", href: "https://markease.dime.rw" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" },
        ],
      },
    ],
    newsletter: {
      enabled: true,
      title: "Stay Updated",
      description: "Get notified about new features and school management tips.",
      placeholder: "Your email",
      buttonText: "Subscribe",
    },
  },
  
  // Process Flow - Getting Started
  processFlow: [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your school account in under 2 minutes. No credit card required to start your free trial.",
    },
    {
      step: 2,
      title: "Set Up Your Structure",
      description: "Import your students, create classes, and assign teachers. Use our bulk import tools or add manually.",
    },
    {
      step: 3,
      title: "Go Live",
      description: "Invite parents and students to their portals. Start managing your school the modern way.",
    },
  ],

  // Pricing
  pricing: {
    label: "Pricing",
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that fits your school. All plans include core features with no hidden fees.",
    currency: "$",
    note: "Contact us for custom pricing for school networks.",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "",
        description: "For small schools getting organized.",
        features: [
          "Up to 200 students",
          "Unlimited staff accounts",
          "Student Information Management",
          "Class & Enrollment Management",
          "Basic Reporting",
          "Email support",
        ],
        cta: "Get Started Free",
        note: "No credit card required",
      },
      {
        name: "Growth",
        price: "Contact Us",
        period: "",
        description: "For schools ready to scale.",
        featured: true,
        badge: "Most Popular",
        features: [
          "Up to 1,000 students",
          "Everything in Starter",
          "Advanced Financial Reports",
          "Fee Management & Payment Tracking",
          "Priority support",
          "MarkEase AI marking (limited)",
          "Parent & Student Portals",
        ],
        cta: "Contact Sales",
        note: "",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large schools and school networks.",
        features: [
          "Unlimited students",
          "Everything in Growth",
          "Custom integrations",
          "Dedicated support",
          "Unlimited MarkEase usage",
          "Multi-school management",
          "Custom training & onboarding",
          "SLA guarantee",
        ],
        cta: "Contact Sales",
      },
    ],
    enterpriseCta: {
      title: "Ready to Transform Your School?",
      description: "Join hundreds of schools that have eliminated administrative chaos and given time back to teachers.",
      cta: "Talk to Sales",
    },
  },
  
  // Why Choose DimeSchool (additional config for new section)
  whyChoose: [
    {
      title: "Multi-Program Support",
      description: "Run primary school, secondary school, and technical programs on the same platform with their own curriculum structure.",
    },
    {
      title: "Flexible Academic Structures",
      description: "Support any curriculum model: traditional grades, subject combinations, electives, and custom grading scales.",
    },
    {
      title: "Role-Based Access Control",
      description: "Define exactly who can see and do what. Create custom roles for headmasters, department heads, accountants, and more.",
    },
    {
      title: "Data Security & Privacy",
      description: "Student data stays secure with encryption at rest and in transit. Full audit logs track every change.",
    },
    {
      title: "Library Management",
      description: "Track books, borrowings, and returns. Know which students have overdue materials without additional software.",
    },
  ],
  
  // Portals
  portals: [
    {
      name: 'School Portal',
      description: 'Complete school administration and management dashboard.',
      href: 'https://school.dimeschool.tech',
    },
    {
      name: 'Teacher Portal',
      description: 'Manage classes, assessments, and AI-powered grading.',
      href: 'https://teacher.dimeschool.tech',
    },
    {
      name: 'Parent Portal',
      description: 'Track your children\'s academic progress and fees.',
      href: 'https://parent.dimeschool.tech',
    },
    {
      name: 'Student Portal',
      description: 'View your grades, assessments, and academic history.',
      href: 'https://student.dimeschool.tech',
    },
  ],

  // Integrations
  integrations: {
    title: "MarkEase AI Marking",
    description: "Automate exam grading with our AI-powered marking engine. Upload answer papers, receive graded results with detailed feedback in minutes. Teachers review and approve, saving hours every assessment cycle.",
    cta: "Learn more about MarkEase",
  },
};

export type SiteConfig = typeof siteConfig;
