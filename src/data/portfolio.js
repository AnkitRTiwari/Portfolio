export const profile = {
  name: "Ankit Tiwari",
  initials: "A.T",
  role: "React.js & Node.js Full Stack Developer",
  currently: "Senior Developer at Quality Kiosk Technologies",
  location: "Mumbai, India",
  email: "ankitrtiwari2@gmail.com",
  linkedin: "https://www.linkedin.com/in/contactankitrtiwari2",
  github: "https://github.com/AnkitRTiwari",
  resume: "/resume.pdf",
  tagline:
    "4+ years designing, building and shipping production web apps across the MERN stack, from requirements gathering through deployment.",
  buildPhrases: [
    "fast React interfaces",
    "secure REST APIs",
    "scalable MongoDB schemas",
    "production apps on AWS",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "25%", label: "Less dev time with reusable components" },
  { value: "MERN", label: "Stack, owned end to end" },
  { value: "EC2", label: "Production deployments on AWS" },
];

export const about = {
  paragraphs: [
    "I'm a full stack developer with 4+ years of experience building production web applications across the MERN stack. I like owning features end to end: gathering requirements, designing the data model and APIs, building fast React interfaces, and deploying to AWS.",
    "I came to software from commerce. After a B.Com and a CA articleship, I taught myself web development and joined Zeal Interactive Services in 2022. Today I'm a Senior Developer at Quality Kiosk Technologies, where I architected and deployed a full-stack online examination platform.",
  ],
  focus: [
    {
      title: "Frontend",
      description:
        "Responsive, high-performance React interfaces with Redux, reusable component libraries, lazy loading and code splitting.",
    },
    {
      title: "Backend",
      description:
        "RESTful APIs on Node.js and Express.js with MVC structure, request validation, centralized error handling and MongoDB schema design.",
    },
    {
      title: "Security & Deployment",
      description:
        "JWT authentication, role-based access control, secure coding practices and production deployments on AWS EC2.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "jQuery"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful APIs",
      "MVC Architecture",
      "JWT",
      "bcrypt",
      "Middleware Design",
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS (EC2)",
      "Git",
      "GitHub",
      "Webpack",
      "NPM",
      "VS Code",
      "Figma",
      "Postman",
      "Agile/Scrum",
    ],
  },
  {
    title: "AI Tools",
    items: ["Claude AI", "ChatGPT", "GitHub Copilot"],
  },
  {
    title: "Practices",
    items: [
      "OOP",
      "Application Architecture",
      "Secure Coding",
      "Performance Optimization",
      "Code Reviews",
      "Debugging",
      "Requirements Gathering",
    ],
  },
];

export const experience = [
  {
    role: "Senior Developer",
    company: "Quality Kiosk Technologies",
    period: "Oct 2025 – Present",
    location: "Mumbai, India",
    highlights: [
      "Architected and deployed a full-stack online examination platform to production on AWS EC2, independently owning the backend and frontend end to end.",
      "Engineered JWT-based authentication with role-based access control, giving students and admins secure, isolated login flows.",
      "Designed RESTful APIs on an MVC architecture with request validation, centralized error handling and reusable middleware.",
      "Built a reusable React.js component library and shared utility modules that sped up delivery and kept the UI consistent.",
      "Reduced API latency with asynchronous patterns, MongoDB query optimization and caching, and cut initial load time with lazy loading, code splitting and memoization.",
      "Worked with product managers, UI/UX designers and QA in Agile/Scrum, and with engineering leadership to turn business requirements into technical solutions.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React.js",
      "JWT",
      "AWS EC2",
    ],
  },
  {
    role: "Junior Developer",
    company: "Zeal Interactive Services",
    period: "May 2022 – Sep 2025",
    location: "Mumbai, India",
    highlights: [
      "Built the product listing module for a B2B e-commerce platform connecting manufacturers to wholesalers, across React.js and Node.js/Express.js REST APIs.",
      "Developed reusable React.js components and centralized state with Redux, reducing development time by 25%.",
      "Integrated internal and third-party REST APIs and implemented JWT-based login and session handling.",
      "Improved Lighthouse performance scores with lazy loading and caching.",
      "Migrated the platform's legacy styling system to Tailwind CSS, standardizing the design language across projects.",
      "Grew from code reviews and debugging sessions with senior engineers into owning features end to end.",
    ],
    tech: ["React.js", "Redux", "Node.js", "Express.js", "Tailwind CSS", "JWT"],
  },
];

export const projects = [
  {
    title: "Online Examination Platform",
    type: "Professional",
    context: "Quality Kiosk Technologies",
    description:
      "A production exam platform with separate student and admin experiences, which I architected and shipped end to end.",
    highlights: [
      "Isolated student and admin flows with JWT and role-based access control",
      "REST APIs on MVC with validation and centralized error handling",
      "Deployed and running on AWS EC2",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AWS EC2"],
  },
  {
    title: "Wanderlust",
    type: "Personal",
    description:
      "A responsive app for exploring every country in the world, powered by a public REST API and hosted on Netlify.",
    highlights: [
      "Search and pagination across the full country list",
      "Dynamic routes for country details and border navigation, plus a Google Maps view",
      "Shimmer loading states and a dark/light theme saved in Local Storage",
    ],
    tech: ["React.js", "REST API", "SCSS"],
    link: "https://wanderlustankit.netlify.app/",
  },
  {
    title: "B2B Product Listing",
    type: "Professional",
    context: "Zeal Interactive Services",
    description:
      "The product listing module for a B2B e-commerce platform that connects manufacturers with wholesalers.",
    highlights: [
      "React.js front end backed by Node.js/Express.js REST APIs",
      "Centralized state management with Redux",
      "Styling migrated from a legacy system to Tailwind CSS",
    ],
    tech: ["React.js", "Redux", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Focus on Today",
    type: "Personal",
    description:
      "A task management app for planning the day, with a built-in progress tracker.",
    highlights: [
      "Add, remove and track daily tasks",
      "Built-in progress tracker",
      "Built with plain JavaScript and CSS, no frameworks",
    ],
    tech: ["JavaScript", "CSS"],
    link: "https://polite-ganache-b87c0d.netlify.app/",
  },
];

export const education = [
  {
    title: "Articleship (CA)",
    place: "RMJ & Associates, Mumbai",
    period: "2018 – 2022",
  },
  {
    title: "B.Com",
    place: "Sydenham College of Commerce and Economics, Mumbai",
    period: "2018",
  },
  {
    title: "Web Development",
    place: "Self-taught with W3Schools and MDN Web Docs",
  },
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    issuer: "freeCodeCamp",
  },
  { title: "Claude Code in Action", issuer: "Anthropic" },
];
