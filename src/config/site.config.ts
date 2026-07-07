/**
 * DimeSchool Site Configuration
 * 
 * The Complete School Management Platform
 */

// Android APK served by the DimeSchool OTA Worker (dimeschool repo, apps/ota).
const ANDROID_APK_URL = "https://dimeschool-ota.dimerw.workers.dev/download/dimeschool.apk";

export const siteConfig = {
  // Basic Site Info
  name: "DimeSchool",
  tagline: "The Complete School Management Platform",
  description: "The school management platform with MarkEase AI marking built in. From enrollment to graduation, DimeSchool streamlines every aspect of school operations for administrators, teachers, parents, and students.",
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
    subheadline: "The only school platform with MarkEase AI marking built in. DimeSchool runs your whole school, from enrollment and fees to attendance and communication, while MarkEase grades the papers in minutes, not weekends.",
    primaryCta: "Get Started Free",
    secondaryCta: "Schedule a Demo",
    downloadCta: "Download the App",
    downloadUrl: ANDROID_APK_URL,
    stats: [
      { number: "01", value: "MarkEase AI", label: "Marking built-in" },
      { number: "02", value: "5 Portals", label: "One login" },
      { number: "03", value: "SMS + MoMo", label: "Built for Rwanda" },
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
          href: "/markease",
        },
        items: [
          { name: "For Administrators", description: "Complete school operations management", href: "/services/administrators", icon: "sparkles" },
          { name: "For Teachers", description: "Class management and AI-powered marking", href: "/services/teachers", icon: "code" },
          { name: "For Parents", description: "Real-time academic visibility", href: "/services/parents-students", icon: "cloud" },
          { name: "For Students", description: "Personal academic dashboard", href: "/services/parents-students", icon: "cpu" },
          { name: "Financial Operations", description: "Fee management and payment tracking", href: "/services/administrators", icon: "server" },
          { name: "Data Security", description: "Enterprise-grade protection", href: "/features", icon: "shield" },
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
        description: "A unified platform that connects everyone in your school community, with MarkEase AI marking built into every assessment, so the heaviest workload of all gets automated too.",
      },
    ],
    principles: [
      {
        title: "For Administrators",
        description: "Student records, enrollment, staff and roles, attendance (even biometric), plus fees, expenses, SMS communication, and report cards in one secure place.",
      },
      {
        title: "For Teachers",
        description: "Class dashboards, assessments and online exams with live monitoring, AI-powered marking with MarkEase, and per-class performance insights.",
      },
      {
        title: "For Parents & Students",
        description: "Real-time grades and fee visibility for parents. Personal dashboards, online exams, an AI study tutor, and an e-book library for students.",
      },
    ],
    statements: [
      "Eliminate administrative chaos",
      "AI marking built in, not bolted on",
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
      description: "Run the whole school from one dashboard: records, enrollment, attendance, finance, and communication. Find any student in seconds and keep every change on an audit trail.",
      cta: "Learn More",
      features: [
        "Student, Parent & Staff Records",
        "Enrollment, Classes & Subject Combinations",
        "Attendance: Manual or Biometric Devices",
        "Fees, Mobile Money & Expense Tracking",
        "Bulk SMS & School Announcements",
        "Report Cards, Results & Promotions",
        "Custom Roles & Granular Permissions",
      ],
    },
    {
      id: "teachers",
      name: "For Teachers",
      tagline: "AI-Powered Teaching Tools",
      description: "Everything you need to run your classes. Create assessments and online exams, grade handwritten papers with AI assistance, and publish results parents see instantly.",
      cta: "Explore Features",
      features: [
        "AI-Powered Marking with MarkEase",
        "Class Dashboard with Student Overview",
        "Assessments: Create, Mark, Publish",
        "Online Exams with Live Monitoring",
        "Student Mark Appeals Handled In-App",
        "AI Class Insights & Performance Trends",
      ],
    },
    {
      id: "parents-students",
      name: "For Parents & Students",
      tagline: "Real-Time Visibility",
      description: "Parents see grades the moment teachers publish them, with per-child analytics and fee balances. Students get their own portal, no email address required.",
      cta: "See Portal",
      features: [
        "Real-Time Grades & Results",
        "Fee & Payment Tracking",
        "Multi-Child Support with Per-Child Analytics",
        "Online Exams from Any Device",
        "AI Study Tutor for Students",
        "E-Book Library Access",
        "Simple Student Code Login",
      ],
    },
    {
      id: "librarians",
      name: "For Librarians",
      tagline: "The Library, Organized",
      description: "A dedicated librarian portal tracks every book from donation to shelf to student hands: individual loans, whole-class sets, and overdue follow-ups without extra software.",
      cta: "See Library Tools",
      features: [
        "Book Catalog with Source Tracking",
        "Individual Student Loans",
        "Class-Set Loans for Whole Classes",
        "Overdue & Return Tracking",
        "E-Books Students Read in Their Portal",
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
      quote: "As a parent of three children in different grades, having one dashboard to see all their progress is incredible. No more waiting for term reports. I see grades in real time.",
      author: "Amina Hassan",
      role: "Parent",
      company: "Riverside International",
    },
  ],
  
  // FAQ
  faq: [
    {
      question: "How do students log in?",
      answer: "Every student gets a simple school code, like KCS4869, and sets a password on first login. No email address needed, so even the youngest learners can access their portal.",
    },
    {
      question: "Can we record Mobile Money payments?",
      answer: "Yes. Fees can be recorded against cash, Mobile Money (MoMo), bank transfer, or cheque, and parents see their balance update in real time in their portal.",
    },
    {
      question: "Does DimeSchool send SMS to parents?",
      answer: "Yes. Send bulk SMS and targeted announcements to parents, students, staff, or a single class directly from the school portal.",
    },
    {
      question: "Can we use fingerprint attendance devices?",
      answer: "Yes. DimeSchool connects to fingerprint and RFID readers, so attendance is captured the moment a student checks in. No roll call needed.",
    },
    {
      question: "Can we customize the grading system?",
      answer: "Absolutely. DimeSchool supports custom grade scales, passing thresholds, subject combinations, and outcome labels for any curriculum standard, academic or vocational.",
    },
    {
      question: "Can I import existing student data?",
      answer: "Yes. Our team helps you migrate existing student records during onboarding, so your school can go live without re-typing years of data.",
    },
    {
      question: "Can parents access the system on mobile?",
      answer: "Yes. Every portal is fully responsive in any mobile browser, and the free DimeSchool Android app bundles all portals in one place with automatic over-the-air updates.",
    },
    {
      question: "How is student data protected?",
      answer: "All data is encrypted in transit and at rest, access is controlled by granular role permissions, and full audit logs track who changed what and when.",
    },
    {
      question: "Does DimeSchool work offline?",
      answer: "The core platform requires an internet connection. Our biometric attendance gateway buffers check-ins during outages and syncs when connectivity returns.",
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
          { name: "Features", href: "/features" },
          { name: "MarkEase AI", href: "/markease" },
          { name: "Pricing", href: "/pricing" },
          { name: "Services", href: "/services" },
          { name: "How It Works", href: "/how-it-works" },
          { name: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Portals",
        links: [
          { name: "School Portal", href: "https://school.dimeschool.tech" },
          { name: "Teacher Portal", href: "https://teacher.dimeschool.tech" },
          { name: "Parent Portal", href: "https://parent.dimeschool.tech" },
          { name: "Student Portal", href: "https://student.dimeschool.tech" },
          { name: "Librarian Portal", href: "https://librarian.dimeschool.tech" },
          { name: "Android App", href: ANDROID_APK_URL },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About", href: "/about" },
          { name: "Careers", href: "/careers" },
          { name: "Contact", href: "/contact" },
          { name: "Dime", href: "https://dime.rw" },
          { name: "MarkEase", href: "https://markease.dime.rw" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Terms of Service", href: "/terms" },
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
    title: "Per-Student Pricing",
    description: "Our pricing is per student, per term with clear rates for DimeSchool only or DimeSchool with MarkEase.",
    currency: "RWF",
    note: "Pricing is billed per student each term.",
    plans: [
      {
        name: "DimeSchool",
        price: "2,999",
        period: "student per term",
        description: "Core DimeSchool platform for school operations and academic management.",
        features: [
          "Per-student billing",
          "Unlimited staff accounts",
          "Student Information Management",
          "Enrollment & Class Management",
          "Academic reporting",
          "Email support",
        ],
        cta: "Contact Sales",
        note: "",
      },
      {
        name: "DimeSchool + MarkEase",
        price: "4,999",
        period: "student per term",
        description: "DimeSchool with MarkEase AI grading included for faster assessment workflows.",
        featured: true,
        badge: "With MarkEase",
        features: [
          "Everything in DimeSchool",
          "MarkEase AI grading for handwritten papers",
          "AI grading for online exam essays",
          "Fee Management & Payment Tracking",
          "Parent & Student Portals",
          "Priority support",
        ],
        cta: "Contact Sales",
        note: "",
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
      description: "Run academic and vocational (TVET) programs side by side, each with its own levels, courses, and curriculum structure.",
    },
    {
      title: "Flexible Academic Structures",
      description: "Support any curriculum model: custom grading schemes, subject combinations, electives, and promotion rules.",
    },
    {
      title: "Role-Based Access Control",
      description: "Create custom roles for headmasters, accountants, receptionists, and more, with granular permissions and full audit logs on every change.",
    },
    {
      title: "Biometric Attendance",
      description: "Connect fingerprint and RFID readers so attendance records itself the moment students walk in, buffered offline and synced automatically.",
    },
    {
      title: "Fees, MoMo & Expenses",
      description: "Track student fees across cash, Mobile Money, bank transfer, and cheque, with expense management and a full school balance log.",
    },
    {
      title: "SMS & Announcements",
      description: "Reach every parent by SMS or targeted announcement: the whole school, one class, or one family at a time.",
    },
    {
      title: "Online Exams, Monitored Live",
      description: "Students sit exams on any device while teachers watch progress in real time. Objective questions auto-grade; essays go to MarkEase.",
    },
    {
      title: "Student AI Tutor & E-Library",
      description: "Students get an AI study companion and an e-book library right inside their portal, learning support beyond the classroom.",
    },
  ],
  
  // Portals
  portals: [
    {
      name: 'School Portal',
      description: 'Records, attendance, finance, and communication in one dashboard.',
      href: 'https://school.dimeschool.tech',
    },
    {
      name: 'Teacher Portal',
      description: 'Classes, assessments, online exams, and AI-powered grading.',
      href: 'https://teacher.dimeschool.tech',
    },
    {
      name: 'Parent Portal',
      description: 'Real-time grades, per-child analytics, and fee balances.',
      href: 'https://parent.dimeschool.tech',
    },
    {
      name: 'Student Portal',
      description: 'Grades, online exams, an AI study tutor, and e-books.',
      href: 'https://student.dimeschool.tech',
    },
    {
      name: 'Librarian Portal',
      description: 'Book catalog, student loans, and whole-class sets.',
      href: 'https://librarian.dimeschool.tech',
    },
  ],

  // Mobile App (shown under the portals grid)
  mobileApp: {
    title: "Take DimeSchool everywhere",
    description: "Every portal in one Android app, with instant over-the-air updates so you always run the latest version.",
    cta: "Download for Android",
    note: "Free APK · Android 7.0+",
    href: ANDROID_APK_URL,
  },

  // Integrations
  integrations: {
    title: "MarkEase AI Marking",
    description: "Scan or upload handwritten answer papers and MarkEase identifies each student, marks every question, and drafts feedback in minutes, not weekends. Teachers stay in charge: every AI mark is reviewed before students see it, and students can appeal any mark in-app.",
    cta: "Learn more about MarkEase",
  },
};

export type SiteConfig = typeof siteConfig;
