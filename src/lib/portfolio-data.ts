export const portfolioData = {
  personal: {
    name: "Aditya Thakur",
    title: "Full-Stack Product Engineer",
    tagline: "Transforming ideas into intelligent digital experiences through software, AI, and thoughtful engineering.",
    shortBio:
      "Product-oriented engineer combining full-stack development, AI integration, and design obsession to ship complete digital products.",
    longBio: `I'm an Electronics & Computer Engineering student at SRMIST with a genuine obsession for building complete products — not just features, not just demos, but end-to-end digital experiences that work and feel right.

My engineering philosophy sits at the intersection of three things most engineers treat separately: technical execution, AI integration, and product design. I don't just write code. I think about why a system is architected a certain way, whether the user experience makes sense, and whether the details — the transition curves, the response latency, the error states — are handled with the same care as the core logic.

The project I'm most proud of isn't the one with the most lines of code. It's BOVISION — because it required me to think like a researcher, an engineer, and a product designer simultaneously. 96.25% accuracy on a custom attention-based architecture isn't something you stumble into.

Currently interning at Xyzon Innovations, building a full LMS platform and leading a complete website redesign with advanced animation systems. Previously at Bellwether Business Solutions, where I migrated production React codebases to TypeScript and contributed to a decentralized identity platform.

I'm building toward roles where I can own problems end to end — from architecture decisions to the final pixel.`,
    email: "adityabt24@gmail.com",
    location: "Kattankulathur, Tamil Nadu",
    availableFor:
      "SDE-1 · Full Stack Engineer · Product Engineer · AI/ML Engineer",
  },

  links: {
  github: "https://github.com/Adityabt",
  linkedin: "https://linkedin.com/in/adityabt/",
  portfolio: "https://chatbot-integrated-portfolio.vercel.app",
  resume: "/resume/resume.pdf",
},

  education: [
    {
      degree: "B.Tech — Electronics & Computer Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Kattankulathur, Tamil Nadu",
      duration: "2023 – 2027",
      cgpa: "8.79",
      highlights: [
        "Focused on software engineering, AI/ML, and full-stack development",
        "Built production-grade projects spanning computer vision, IoT, and web platforms",
        "Active technical member of SQAC (Software Quality Assurance Community)",
      ],
    },
    {
      degree: "Class XII — CBSE",
      institution: "PSBB Learning Leadership Academy",
      location: "Bangalore",
      duration: "2022 – 2023",
      score: "75.4%",
      highlights: [],
    },
    {
      degree: "Class X — CBSE",
      institution: "PSBB Learning Leadership Academy",
      location: "Bangalore",
      duration: "2020 – 2021",
      score: "93.8%",
      highlights: [],
    },
  ],

  experience: [
    {
      company: "Xyzon Innovations Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      duration: "Mar 2026 – Present",
      type: "current",
      highlights: [
        "Architecting and building a full Learning Management System (LMS) from scratch — home, login, dashboard, course listing, and course detail pages with complete auth and API flow",
        "Leading a complete website redesign with scroll-based animations, micro-interactions, page transitions, and a consistent design system",
        "Building REST APIs, managing MongoDB schema design, and handling full frontend-backend integration",
        "Owning the entire MERN stack — React frontend, Node/Express backend, MongoDB, deployment",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Framer Motion",
        "Tailwind CSS",
      ],
    },
    {
      company: "Bellwether Business Solutions Pvt. Ltd.",
      role: "Web Developer Intern",
      duration: "Dec 2025 – Jan 2026",
      type: "completed",
      highlights: [
        "Migrated a production-level React.js codebase from JavaScript to TypeScript — improving type safety, catching runtime errors at compile time, and improving long-term maintainability",
        "Contributed to frontend architecture for a decentralized identity platform handling individual and organization-level authentication workflows",
        "Integrated AI-powered features through external API connections",
        "First exposure to professional engineering workflows — PR reviews, production-grade code standards, and collaborative development",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Frontend Architecture",
        "AI Integration",
        "Authentication Systems",
      ],
    },
  ],

  projects: [
    {
      id: "bovision",
      title: "BOVISION",
      subtitle: "AI-Powered Cattle Breed Classification",
      category: "AI / Computer Vision",
      featured: true,
      priority: 1,
      status: "live",

      problem:
        "Manual cattle breed identification is time-consuming, error-prone, and requires domain expertise. There was no accessible, accurate automated solution.",
      solution:
        "Built a deep learning system combining ResNet50 backbone with Attention-Guided Part Network (AGPN) and Meta Multi-View Fusion (MVFF) to focus on discriminative cattle features. Added Grad-CAM explainability so predictions aren't a black box.",
      outcome:
        "96.25% peak validation accuracy across 5 breeds. Deployed as a live Flask web application with real-time prediction and visual explainability.",

      metrics: [
        { label: "Validation Accuracy", value: "96.25%" },
        { label: "Training Images", value: "1,208" },
        { label: "Breeds Classified", value: "5" },
        { label: "Architecture", value: "ResNet50 + AGPN + MVFF" },
      ],

      keyDecisions: [
        "Chose attention mechanisms (AGPN) over vanilla CNNs to improve focus on breed-specific features",
        "Added Grad-CAM post-hoc to make the model's reasoning interpretable — not just accurate",
        "70-15-15 train/val/test split to prevent data leakage during evaluation",
        "Flask deployment over FastAPI for simpler integration with the CV pipeline",
      ],

      technologies: [
        "Python",
        "Flask",
        "ResNet50",
        "AGPN",
        "MVFF",
        "OpenCV",
        "Grad-CAM",
        "TensorFlow",
        "Computer Vision",
        "Deep Learning",
      ],

      links: {
        github: "https://github.com/Adityabt/cattle-breed-classifier",
        live: "https://web-production-fb38a9.up.railway.app/",
      },
    },

    {
      id: "bellwether-platform",
      title: "Decentralized Identity Platform",
      subtitle: "Production Frontend at Bellwether Business Solutions",
      category: "Industry / Full Stack",
      featured: true,
      priority: 2,
      status: "industry",

      problem:
        "A growing production platform needed its entire frontend codebase migrated from JavaScript to TypeScript without disrupting active development — while also building out new identity and authentication features.",
      solution:
        "Systematically migrated components, added strict typing across the codebase, and contributed to role-based authentication workflows for both individual and organization-level users. Integrated AI-powered features through API connections.",
      outcome:
        "Improved type safety and long-term maintainability of a production codebase. Gained deep exposure to professional engineering workflows, PR-driven development, and industry-grade code standards.",

      metrics: [
        { label: "Environment", value: "Production" },
        { label: "Migration", value: "JS → TypeScript" },
        { label: "Company", value: "Bellwether Business Solutions" },
        { label: "Duration", value: "Dec 2025 – Jan 2026" },
      ],

      keyDecisions: [
        "Incremental TypeScript migration — file by file — to avoid breaking production",
        "Strict mode enabled from the start to maximize type safety benefits",
        "Role-based UX designed separately for individual vs organization user flows",
      ],

      technologies: [
        "React.js",
        "TypeScript",
        "Authentication",
        "Frontend Architecture",
        "AI Integration",
        "REST APIs",
      ],

      links: {
        github: null,
        live: null,
        note: "Production codebase — not publicly available",
      },
    },

    {
      id: "portfolio",
      title: "This Portfolio",
      subtitle: "AI-Integrated Personal Portfolio with Digital Twin Assistant",
      category: "Product Engineering",
      featured: true,
      priority: 3,
      status: "live",

      problem:
        "Traditional portfolios are static. They communicate what you've built but not how you think, what you'd do next, or what makes you different. A recruiter with 3 minutes gets the same experience as one with 30.",
      solution:
        "Built the portfolio itself as a product — with a persistent AI assistant trained on my entire background that can give a 60-second profile summary, walk through my strongest projects, or answer specific technical questions. The portfolio adapts to the visitor's time and intent.",
      outcome:
        "A portfolio that demonstrates the very skills it claims to have — AI integration, product thinking, frontend engineering, and attention to detail. The meta-narrative is the point.",

      metrics: [
        { label: "AI Model", value: "Gemini 2.5 Flash" },
        { label: "Stack", value: "React + TypeScript + Vite" },
        { label: "Feature", value: "Context-Aware Assistant" },
        { label: "Design", value: "Adaptive Dark/Light" },
      ],

      keyDecisions: [
        "Portfolio as a product, not a website — every interaction is intentional",
        "AI assistant as the primary navigation mechanism, not a secondary feature",
        "Single-page scroll architecture to keep the recruiter in flow",
        "Design system built from scratch — no UI library defaults",
      ],

      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Gemini API",
        "Express.js",
      ],

      links: {
        github: "https://github.com/Adityabt",
        live: "https://chatbot-integrated-portfolio.vercel.app",
      },
    },

    {
      id: "lms-platform",
      title: "LMS Portal",
      subtitle: "Full-Stack Learning Management System at Xyzon",
      category: "Full Stack / MERN",
      featured: false,
      priority: 4,
      status: "in-progress",

      problem:
        "Xyzon needed a complete Learning Management System built from scratch — student authentication, course browsing, and a structured learning flow.",
      solution:
        "Architecting the full MERN stack platform with student login, JWT-protected dashboard, course listing from MongoDB, and individual course detail pages. Complete frontend-backend integration with clean API design.",
      outcome:
        "Currently in active development. Full functional flow from landing → login → dashboard → courses → course detail.",

      metrics: [
        { label: "Stack", value: "MERN" },
        { label: "Status", value: "In Progress" },
        { label: "Pages", value: "5 Core Pages" },
        { label: "Auth", value: "JWT" },
      ],

      keyDecisions: [
        "JWT-based stateless authentication for scalability",
        "MongoDB schema designed for extensible course content",
        "Separation of student and admin data flows from the start",
      ],

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
        "Tailwind CSS",
      ],

      links: {
        github: null,
        live: null,
        note: "Active internship project",
      },
    },

    {
      id: "ai-chatbot",
      title: "AI Chatbot Platform",
      subtitle: "Multi-Model Conversational AI Web Application",
      category: "Generative AI",
      featured: false,
      priority: 5,
      status: "live",

      problem:
        "Most AI chat interfaces lock users into a single model. Different tasks benefit from different models — needed a unified interface across providers.",
      solution:
        "Built a full-stack chat platform integrating Gemini, Claude, and OpenAI APIs with a secure Node.js backend handling API key management, and a clean conversational React frontend.",
      outcome:
        "Live deployed application with multi-model support, JWT authentication, and responsive conversational UI.",

      metrics: [
        { label: "AI Models", value: "3 Providers" },
        { label: "Auth", value: "JWT" },
        { label: "Status", value: "Live" },
      ],

      keyDecisions: [
        "Backend-proxied API calls to protect API keys from client exposure",
        "Unified message format across different provider response schemas",
      ],

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Claude API",
        "Gemini API",
        "OpenAI API",
        "JWT",
        "Tailwind CSS",
      ],

      links: {
        github: "https://github.com/Adityabt/Ai-Chatbot",
        live: "https://ai-chatbot-adityabts-projects.vercel.app/",
      },
    },

    {
      id: "dsa-quiz",
      title: "DSA Quiz Platform",
      subtitle: "Full-Stack Learning & Assessment Platform",
      category: "Full Stack",
      featured: false,
      priority: 6,
      status: "live",

      problem:
        "Students needed an engaging, structured way to self-assess their DSA knowledge with real tracking.",
      solution:
        "Built a complete MERN application with JWT auth, quiz management, result tracking, and a responsive UI — entirely independently.",
      outcome:
        "Complete full-stack platform demonstrating end-to-end ownership across auth, APIs, database, and frontend.",

      metrics: [
        { label: "Stack", value: "MERN" },
        { label: "Auth", value: "JWT" },
        { label: "Built", value: "Solo" },
      ],

      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "JavaScript",
        "HTML",
        "CSS",
      ],

      links: {
        github: "https://github.com/Adityabt",
        live: null,
      },
    },

    {
      id: "envirosense",
      title: "EnviroSense",
      subtitle: "Industrial IoT Environmental Monitoring System",
      category: "IoT / Hardware-Software",
      featured: false,
      priority: 7,
      status: "live",

      problem:
        "Real-time environmental monitoring required bridging hardware communication protocols with a software dashboard.",
      solution:
        "Built a hardware-software integrated system using Modbus RTU communication with a real-time web dashboard for temperature and humidity monitoring.",
      outcome:
        "Demonstrated ability to work across the hardware-software boundary — a rare skill for a web engineer.",

      metrics: [
        { label: "Protocol", value: "Modbus RTU" },
        { label: "Monitoring", value: "Real-Time" },
        { label: "Deployed", value: "Render" },
      ],

      technologies: [
        "Python",
        "Flask",
        "Modbus",
        "IoT",
        "JavaScript",
        "Web Dashboard",
        "Networking",
      ],

      links: {
        github: "https://github.com/Adityabt/envirosense",
        live: "https://envirosense-z1ov.onrender.com/",
      },
    },
  ],

  skills: {
    primary: [
      {
        domain: "Frontend Engineering",
        items: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Framer Motion",
          "Responsive Design",
        ],
      },
      {
        domain: "Backend Engineering",
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "MongoDB",
          "SQL",
        ],
      },
      {
        domain: "AI & Machine Learning",
        items: [
          "Python",
          "TensorFlow",
          "Computer Vision",
          "Deep Learning",
          "OpenCV",
          "Grad-CAM",
          "ResNet50",
        ],
      },
      {
        domain: "Generative AI",
        items: [
          "Gemini API",
          "Claude API",
          "OpenAI API",
          "LLM Integration",
          "Prompt Engineering",
          "AI Assistant Development",
        ],
      },
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Railway",
      "VS Code",
      "Postman",
    ],
    languages: ["Python", "TypeScript", "JavaScript", "C", "C++"],
    emerging: [
      "Agentic AI Systems",
      "Product Engineering",
      "System Design",
      "DevOps Fundamentals",
    ],
  },

  certifications: [
    {
      name: "Generative AI Fundamentals",
      issuer: "Databricks",
      credible: true,
    },
    {
      name: "Docker & Kubernetes Fundamentals",
      issuer: "Online",
      credible: true,
    },
    {
      name: "DBMS Fundamentals & Advanced Concepts",
      issuer: "Online",
      credible: true,
    },
    {
      name: "Python Programming Masterclass",
      issuer: "Online",
      credible: false,
    },
    {
      name: "Microcontroller Embedded C Programming",
      issuer: "Online",
      credible: false,
    },
    {
      name: "C & C++ Essentials",
      issuer: "Online",
      credible: false,
    },
  ],

  achievements: [
    "96.25% validation accuracy on custom ResNet50 + AGPN + MVFF architecture (BOVISION)",
    "Trained and deployed a computer vision model on 1,208 labeled images across 5 cattle breeds",
    "Migrated production React codebase from JavaScript to TypeScript at Bellwether Business Solutions",
    "Built and deployed AI-powered applications integrating Gemini, Claude, and OpenAI APIs",
    "Currently architecting a full LMS platform from scratch at Xyzon Innovations",
    "Technical Member — Software Quality Assurance Community (SQAC), SRMIST",
    "7+ complete projects deployed across Vercel, Render, Railway, and Hugging Face Spaces",
  ],

  meta: {
    seoTitle: "Aditya Thakur — Full-Stack Product Engineer",
    seoDescription:
      "Full-stack product engineer building AI-powered digital products. React, Node.js, Python, computer vision, and modern web experiences.",
    ogImage: "/og-image.png",
  },
};

export type PortfolioData = typeof portfolioData;
