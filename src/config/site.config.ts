/**
 * Site Configuration Template
 * 
 * This file contains all customizable content for the website.
 * Update these values to personalize the site for your product/company.
 */

export const siteConfig = {
  // Basic Site Info
  name: "Your Company",
  tagline: "Your Tagline Here",
  description: "Your company description for SEO and meta tags. We deliver innovative technology solutions that drive growth and lasting impact.",
  domain: "example.com",
  
  // Contact Information
  contact: {
    email: "hello@example.com",
    phones: ["+1 234 567 8900", "+1 234 567 8901"],
    address: {
      line1: "123 Innovation Street",
      line2: "Tech City, TC 12345",
    },
  },
  
  // Social Media Links (leave empty string to hide)
  social: {
    linkedin: "https://linkedin.com/company/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    youtube: "https://youtube.com/@yourcompany",
    github: "https://github.com/yourcompany",
  },
  
  // Hero Section
  hero: {
    headline: "Transforming Ideas Into\nDigital Excellence",
    subheadline: "We partner with forward-thinking organizations to deliver innovative technology solutions that drive growth, efficiency, and lasting impact.",
    primaryCta: "Our Services",
    secondaryCta: "Get In Touch",
    stats: [
      { number: "01", value: "2024", label: "Founded" },
      { number: "02", value: "Global", label: "Reach" },
      { number: "03", value: "Innovation", label: "Driven" },
    ],
  },
  
  // Navigation
  navigation: {
    links: ["Solutions", "Products", "Technology", "About"],
    ctaText: "Get Started",
    loginText: "Log In",
    // Mega menu configuration for "Solutions" - customize in Navbar.tsx for full control
    megaMenu: {
      solutions: {
        featured: {
          title: "Enterprise Suite",
          description: "Complete digital transformation solution for large organizations with dedicated support.",
          href: "#",
        },
        items: [
          { name: "Digital Transformation", description: "Modernize your business processes", href: "#", icon: "sparkles" },
          { name: "Custom Development", description: "Tailored software solutions", href: "#", icon: "code" },
          { name: "Cloud Services", description: "Scalable cloud infrastructure", href: "#", icon: "cloud" },
          { name: "AI & Automation", description: "Intelligent process automation", href: "#", icon: "cpu" },
          { name: "DevOps & Infrastructure", description: "Streamlined deployment pipelines", href: "#", icon: "server" },
          { name: "Security & Compliance", description: "Enterprise-grade protection", href: "#", icon: "shield" },
        ],
      },
    },
  },
  
  // Manifesto / About Section
  manifesto: {
    title: "What Is Your Company?",
    quote: "Where bold ideas become intelligent realities.",
    timeline: [
      {
        year: "2024",
        title: "The Genesis",
        description: "Our company was founded with a vision to transform the digital landscape through cutting-edge technology solutions.",
      },
      {
        year: "2025",
        title: "Innovation & Growth",
        description: "We expanded our team and capabilities, developing proprietary technologies and methodologies that set new standards.",
      },
      {
        year: "Today",
        title: "The Future Is Now",
        description: "We continue to push boundaries, creating intelligent solutions that bridge technology and creativity.",
      },
    ],
    principles: [
      {
        title: "Mission",
        description: "To revolutionize the digital landscape by creating intelligent solutions that empower businesses and individuals to achieve their full potential.",
      },
      {
        title: "Vision",
        description: "A world where technology seamlessly integrates with human creativity, making digital transformation accessible, efficient, and impactful.",
      },
      {
        title: "Values",
        description: "Innovation, Excellence, Integrity, Collaboration, and Client-Centricity form the foundation of everything we do.",
      },
    ],
    statements: [
      "Build with purpose",
      "Innovate without limits",
      "Transform the ordinary into extraordinary",
    ],
    founderMessage: "We started this company to bridge the gap between human creativity and technical execution. Our platform empowers visionaries to build what they imagine without the traditional barriers.",
  },
  
  // Products/Services
  products: [
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      tagline: "Enterprise Solutions",
      description: "Comprehensive digital transformation services that help businesses evolve in the modern digital landscape.",
      cta: "Learn More",
      features: [
        "Business process optimization",
        "Legacy system modernization",
        "Cloud migration strategies",
        "Digital workflow implementation",
        "Technology stack assessment",
      ],
    },
    {
      id: "software-development",
      name: "Software Development",
      tagline: "Custom Solutions",
      description: "End-to-end software development services tailored to your specific business requirements and goals.",
      cta: "Our Process",
      features: [
        "Web application development",
        "Mobile app development",
        "API integration services",
        "UI/UX design and implementation",
        "Quality assurance and testing",
      ],
    },
    {
      id: "tech-consulting",
      name: "Tech Consulting",
      tagline: "Strategic Advisory",
      description: "Expert technology consulting to help you make informed decisions about your digital strategy.",
      cta: "Get Advice",
      features: [
        "Technology roadmap planning",
        "IT infrastructure assessment",
        "Security and compliance review",
        "Vendor selection assistance",
        "Digital strategy development",
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
  
  // Team Members
  team: [
    {
      name: "Divin Prince",
      title: "Founder & CEO",
      imageSrc: "/assets/team/1.png",
      skills: ["Leadership", "Strategy", "Innovation"],
      social: {
        linkedin: "https://linkedin.com/in/divinprince",
        twitter: "https://twitter.com/divinprince",
      },
    },
  ],
  
  // Careers
  careers: [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a skilled Frontend Developer with experience in React, Next.js, and TypeScript to join our growing team.",
      requirements: [
        "3+ years of experience with React",
        "Experience with Next.js and TypeScript",
        "Strong UI/UX sensibilities",
        "Excellent communication skills",
      ],
    },
    {
      title: "Backend Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Join us as a Backend Engineer to build scalable and efficient server-side applications.",
      requirements: [
        "3+ years of experience with Node.js or similar",
        "Experience with databases (SQL and NoSQL)",
        "Knowledge of API design and implementation",
        "Understanding of cloud services (AWS, Azure, or GCP)",
      ],
    },
    {
      title: "Product Designer",
      location: "Remote",
      type: "Full-time",
      description: "We're seeking a creative Product Designer to craft beautiful, intuitive user experiences for our products.",
      requirements: [
        "Portfolio demonstrating UI/UX design skills",
        "Experience with Figma or similar design tools",
        "Understanding of user-centered design principles",
        "Ability to work closely with development teams",
      ],
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      quote: "This team has transformed how we build software. What used to take months now happens in days, with better quality and fewer resources.",
      author: "Alex Rivera",
      role: "CTO",
      company: "TechFront",
    },
    {
      quote: "As a startup founder with limited resources, their platform has been a game-changer. We've built our entire MVP in weeks instead of months.",
      author: "Priya Sharma",
      role: "Founder",
      company: "InnovateLabs",
    },
    {
      quote: "The level of innovation they bring to the table is unmatched. Their approach has completely revolutionized our development process.",
      author: "Marcus Johnson",
      role: "VP of Engineering",
      company: "DataSphere",
    },
  ],
  
  // FAQ
  faq: [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive digital transformation, custom software development, and technology consulting services. Our team specializes in web and mobile applications, cloud solutions, and enterprise software.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while larger enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with startups or only enterprises?",
      answer: "We work with organizations of all sizes, from early-stage startups to Fortune 500 companies. Our flexible engagement models allow us to adapt our approach to meet your specific needs and budget.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Google Cloud. We stay current with industry trends to deliver cutting-edge solutions.",
    },
    {
      question: "How do you handle project communication?",
      answer: "We believe in transparent, frequent communication. You'll have a dedicated project manager, regular status updates, and access to our project management tools. We adapt our communication style to your preferences.",
    },
  ],
  
  // Blog/Insights
  blog: [
    {
      title: "The Future of Digital Transformation",
      excerpt: "Exploring how emerging technologies are reshaping the business landscape and what it means for your organization.",
      date: "Jan 15, 2025",
      category: "Technology",
      link: "#",
    },
    {
      title: "Building Scalable Systems: Best Practices",
      excerpt: "Learn the key principles and patterns for building software systems that can grow with your business.",
      date: "Jan 8, 2025",
      category: "Engineering",
      link: "#",
    },
    {
      title: "Case Study: 70% Faster Time to Market",
      excerpt: "How we helped a client dramatically reduce their development cycle and launch ahead of schedule.",
      date: "Dec 20, 2024",
      category: "Case Study",
      link: "#",
    },
  ],
  
  // Footer
  footer: {
    description: "Empowering businesses with innovative technology solutions. We transform ideas into digital excellence.",
    links: [
      {
        title: "Services",
        links: [
          { name: "Digital Transformation", href: "#" },
          { name: "Software Development", href: "#" },
          { name: "Tech Consulting", href: "#" },
          { name: "Enterprise Solutions", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Documentation", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Tutorials", href: "#" },
          { name: "Case Studies", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About", href: "#" },
          { name: "Careers", href: "#" },
          { name: "Contact", href: "#" },
          { name: "Press Kit", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" },
          { name: "Cookie Policy", href: "#" },
          { name: "Security", href: "#" },
        ],
      },
    ],
    newsletter: {
      enabled: true,
      title: "Newsletter",
      description: "Stay updated with our latest insights and announcements.",
      placeholder: "Your email",
      buttonText: "Subscribe",
    },
  },
  
  // Process Flow
  processFlow: [
    {
      step: 1,
      title: "Discover",
      description: "Tell us what you need. We analyze your requirements and translate them into clear technical specifications.",
    },
    {
      step: 2,
      title: "Design",
      description: "Our team creates optimized architectural designs and solutions tailored to your specific use case.",
    },
    {
      step: 3,
      title: "Develop",
      description: "We build and test your solution across multiple environments to ensure reliability and performance.",
    },
    {
      step: 4,
      title: "Deploy",
      description: "Your solution is deployed with proper scaling, monitoring, and continuous optimization support.",
    },
  ],

  // Pricing
  pricing: {
    label: "Pricing",
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that fits your needs. All plans include core features with no hidden fees.",
    currency: "$",
    note: "All prices are in USD. Taxes may apply based on your location.",
    plans: [
      {
        name: "Starter",
        price: "49",
        period: "month",
        description: "Perfect for small teams and startups getting started.",
        features: [
          "Up to 5 team members",
          "10 GB storage",
          "Basic analytics",
          "Email support",
          "API access",
        ],
        cta: "Start Free Trial",
        note: "14-day free trial, no credit card required",
      },
      {
        name: "Professional",
        price: "149",
        period: "month",
        description: "For growing businesses that need more power and flexibility.",
        featured: true,
        badge: "Most Popular",
        features: [
          "Up to 25 team members",
          "100 GB storage",
          "Advanced analytics & reports",
          "Priority email & chat support",
          "Full API access",
          "Custom integrations",
          "SSO authentication",
        ],
        cta: "Start Free Trial",
        note: "14-day free trial, no credit card required",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations with custom requirements and dedicated support.",
        features: [
          "Unlimited team members",
          "Unlimited storage",
          "Custom analytics & dashboards",
          "24/7 dedicated support",
          "Full API access with higher limits",
          "Custom integrations & workflows",
          "SSO & advanced security",
          "Dedicated account manager",
          "SLA guarantee",
        ],
        cta: "Contact Sales",
      },
    ],
    enterpriseCta: {
      title: "Need a custom solution?",
      description: "Get in touch with our sales team to discuss your specific requirements and get a tailored quote for your organization.",
      cta: "Talk to Sales",
    },
  },
};

export type SiteConfig = typeof siteConfig;
