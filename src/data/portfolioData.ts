export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Experience {
  id: string;
  year: string;
  company: string;
  role: string;
  technologies: string[];
  responsibilities: string[];
  description?: string;
  achievements?: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web App' | 'Ecommerce' | 'CMS' | 'Tools';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const PERSONAL_INFO = {
  name: "Lethien.dev",
  fullName: "LE THIEN",
  title: "CREATIVE FULLSTACK WEB DEVELOPER",
  role: "Fullstack Developer",
  avatarUrl: "/avatar.png",
  level: 5,
  xp: 9400,
  maxXp: 9900,
  hp: 100,
  mp: 80,
  location: "Ho Chi Minh City, Vietnam",
  email: "lethienacqt@gmail.com",
  availability: "Open to opportunities",
  timezone: "GMT+7",
  socials: {
    github: "https://github.com/HoverJs",
    linkedin: "https://www.linkedin.com/in/thienle-dev/",
    facebook: "https://www.facebook.com/lethienacqt",
    email: "mailto:lethienacqt@gmail.com"
  }
};

export const ABOUT_STATS: Stat[] = [
  { label: "YEARS EXP", value: "2+", icon: "Shield" },
  { label: "COMPLETED", value: "12+", icon: "Sword" },
  { label: "SKILLS", value: "25+", icon: "BookOpen" },
  { label: "COFFEE/L", value: "450", icon: "Coffee" }
];

export const ABOUT_BIO = "Passionate and creative Fullstack Developer with an eye for detailed designs and interactive user experiences. Specialize in modern Javascript/Typescript frameworks. I enjoy gamifying the web and writing clean, reliable code. Ready to join challenging quests!";

export const EXPERIENCES: Experience[] = [
  {
    id: "wedo",
    year: "2025 - Present",
    company: "WEDO by Dr.Meddi",
    role: "Fullstack Developer",
    technologies: ["React", "Next.js", "TypeScript", "Strapi CMS", "WordPress", "Docker", "Jest Testing", "REST API"],
    description: "Working on building and maintaining websites and applications for healthcare and wellness products. Involved in both frontend and backend development, CMS integration, and testing.",
    responsibilities: [
      "Develop and maintain websites using Next.js and React.",
      "Integrate and customize Strapi CMS for content management.",
      "Build and customize WordPress themes and plugins.",
      "Containerize applications using Docker.",
      "Write unit and integration tests with Jest.",
      "Collaborate with cross-functional teams."
    ],
    achievements: [
      "Improved website performance by 30%.",
      "Implement automated testing, reducing bugs by 40%."
    ],
    link: "#"
  },
  {
    id: "fpt",
    year: "2025",
    company: "FPT Software",
    role: "Frontend Intern",
    technologies: ["React", "Next.js", "UI Development"],
    description: "Joined the UI team to build responsive and user-friendly interfaces. Gained hands-on experience in modern web development and collaboration in a professional environment.",
    responsibilities: [
      "Build responsive UI components with React and Next.js.",
      "Collaborate with designers and backend developers.",
      "Ensure cross-browser compatibility and performance.",
      "Participate in code reviews and team meetings."
    ],
    achievements: [
      "Contributed to UI components used in production."
    ],
    link: "#"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "freshfood",
    title: "FreshFoodStore",
    description: "An e-commerce platform for organic food featuring search, cart, and payment integrations.",
    category: "Ecommerce",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Strapi"],
    githubUrl: "https://github.com/HoverJs/freshfoodstore",
    liveUrl: "https://e-com-freshfoodstore.vercel.app/"
  },
  {
    id: "garage",
    title: "Garage Management",
    description: "Management dashboard for car service centers. Tracks mechanics, jobs, invoices, and scheduling.",
    category: "Web App",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/HoverJs/garage-management",
    liveUrl: "https://web-app-erp-garage-auto.vercel.app/"
  },
  {
    id: "mediclinic",
    title: "MediClinic",
    description: "Healthcare portal with doctor booking system, patient records, and live video consulting.",
    category: "Web App",
    technologies: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/HoverJs/mediclinic",
    liveUrl: "https://wedoskinclinic.com/"
  },
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    description: "A Different Approach to Portfolio Design — Blending Modern Development, Personal Branding, and User Experience into a Single Digital Presence.",
    category: "Web App",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/HoverJs/Portfolio",
    liveUrl: "https://portfolio-v2-swart-two.vercel.app/"
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "A headless CMS blog using Strapi with multi-language translation and static site generation.",
    category: "CMS",
    technologies: ["Strapi", "MySQL", "Tailwind", "Docker"],
    githubUrl: "https://github.com/HoverJs/blog-cms"
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Developer utility to format, parse, validate, and compare JSON data locally in the browser.",
    category: "Tools",
    technologies: ["React", "TypeScript", "CodeMirror"],
    githubUrl: "https://github.com/HoverJs/json-formatter"
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    title: "LANGUAGES",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    title: "FRONTEND",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" }
    ]
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Strapi CMS" },
      { name: "WordPress" }
    ]
  },
  {
    title: "DATABASE",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" }
    ]
  },
  {
    title: "TOOLS & DEVOPS",
    items: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" }
    ]
  },
  {
    title: "TESTING",
    items: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "Postman" }
    ]
  },
  {
    title: "OTHERS",
    items: [
      { name: "VS Code" },
      { name: "Figma" },
      { name: "ESLint" },
      { name: "Prettier" },
      { name: "Vercel" },
      { name: "Claude" },
      { name: "ChatGPT" },
      { name: "Gemini" },
      { name: "GitHub Copilot" },
      { name: "Weavy" }
    ]
  }
];
