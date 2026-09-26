import {
  Briefcase, GraduationCap, Award, Code2, Layers, Cpu, Database, 
  Terminal, Server, Globe, ExternalLink, Heart, MessageCircle, 
  Bookmark, Send, Share2, Sparkles, CheckCircle2, FileText,
  Phone, Mail, MapPin, Github, Linkedin, Calendar, Flame, Star,
  Activity, Play, Check, ShieldCheck, Zap, Box, Cloud
} from "lucide-react";

import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/resume.pdf";

export const USER_INFO = {
  name: "Gobi Krishnan K",
  username: "gobikrishnan.dev",
  badge: "Verified Engineer",
  pronouns: "he/him",
  tagline: "Junior Full Stack Engineer · Java · Spring Boot · React · PostgreSQL",
  roleTitle: "Junior Full Stack Engineer",
  avatar: profileImg,
  resumeUrl: resumePdf,
  location: "Theni, Tamil Nadu, India",
  phone: "+91 90879 22707",
  email: "gobikrishnan.pro@gmail.com",
  linkedin: "https://linkedin.com/in/gobikrishnanpro",
  github: "https://github.com/KGobikrishnan",
  website: "https://gobikrishnan.vercel.app",
  status: "Ready for High-Impact Product Teams 🚀",
  stats: {
    posts: "3 Featured",
    experience: "Enterprise",
    techStack: "15+ Tech",
    education: "MCA (AI)"
  },
  bio: [
    "⚡ Junior Full Stack Engineer with hands-on enterprise web experience.",
    "☕ Java 21 · Spring Boot 3.x · React 19 · PostgreSQL 16 · Docker",
    "🏥 Architected OPD Real-time Queues & Athletic Management Systems",
    "📍 Theni, Tamil Nadu | Immediate Contributor for Fast-paced Teams"
  ],
  quickBadges: [
    { label: "Available for Hire", color: "#10b981", icon: Zap },
    { label: "MCA - AI (SRMIST)", color: "#8b5cf6", icon: GraduationCap },
    { label: "Enterprise Ready", color: "#3b82f6", icon: ShieldCheck },
  ]
};

// Instagram Story Highlights
export const STORY_HIGHLIGHTS = [
  {
    id: "about",
    title: "About Me",
    coverIcon: Flame,
    color: "from-amber-500 to-rose-500",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    stories: [
      {
        type: "intro",
        tag: "ABOUT GOBI",
        title: "Who Am I?",
        subtitle: "Full Stack Engineer & System Builder",
        content: "Junior Full Stack Engineer with hands-on experience building enterprise web applications using Java, Spring Boot, React, and PostgreSQL. Proven track record delivering real-time hospital queue systems, athletic facility management platforms, and internal ERP/CRM tools.",
        highlightBadge: "Full Stack · Java & React"
      },
      {
        type: "strengths",
        tag: "CORE CAPABILITIES",
        title: "Engineering Superpowers",
        bullets: [
          "REST API design & Microservice patterns",
          "JWT & Role-Based Access Control (RBAC)",
          "Database optimization (Compound Indexes, HikariCP, JOIN FETCH)",
          "Modern high-framerate React 19 interfaces"
        ],
        highlightBadge: "Production Ready"
      }
    ]
  },
  {
    id: "experience",
    title: "Experience",
    coverIcon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
    stories: [
      {
        company: "Navi Promotions",
        role: "Junior Full Stack Engineer",
        period: "Apr 2026 – Present",
        type: "Full-Time",
        points: [
          "Build and maintain enterprise applications using Java 21, Spring Boot 3.x, React 19, and PostgreSQL.",
          "Design and implement REST APIs, JWT-based authentication, role-based access control, and database-driven business modules.",
          "Deliver ERP/CRM workflows covering CRM, finance, HRMS, project management, and payroll."
        ]
      },
      {
        company: "Navi Promotions",
        role: "Full Stack Developer Intern",
        period: "Jan 2026 – Mar 2026",
        type: "Internship",
        points: [
          "Developed full-stack features using Java, Spring Boot, React, and PostgreSQL under Agile/Scrum practices.",
          "Implemented REST APIs, authentication flows, and contributed to enterprise business module validation."
        ]
      }
    ]
  },
  {
    id: "techstack",
    title: "Tech Stack",
    coverIcon: Cpu,
    color: "from-emerald-400 to-teal-600",
    gradient: "linear-gradient(135deg, #10b981, #0d9488)",
    stories: [
      {
        category: "Backend & Systems",
        skills: ["Java 21", "Spring Boot 3.x", "Spring Security 6", "Hibernate", "REST APIs", "WebSocket/STOMP", "JWT/RBAC"]
      },
      {
        category: "Frontend & UI",
        skills: ["React 19", "JavaScript (ES6+)", "Vite", "TailwindCSS", "Zustand", "Three.js", "Framer Motion", "Recharts"]
      },
      {
        category: "Databases & DevOps",
        skills: ["PostgreSQL 16", "Redis 7", "Docker", "Docker Compose", "Nginx", "Linux (systemd)", "HikariCP"]
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    coverIcon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    stories: [
      {
        degree: "MCA — AI Specialization",
        institution: "SRMIST",
        period: "2024 – Present",
        details: "Specialized in Artificial Intelligence, Machine Learning, Deep Learning, and Advanced Software Engineering."
      },
      {
        degree: "BCA (Bachelor of Computer Applications)",
        institution: "Madurai Kamaraj University",
        period: "2021 – 2024",
        details: "Graduated with CGPA 7.5. Core computer science foundations, Data Structures, OOPs, and Database Systems."
      }
    ]
  },
  {
    id: "certs",
    title: "Certs",
    coverIcon: Award,
    color: "from-amber-400 to-orange-500",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    stories: [
      {
        title: "Verified Certifications",
        items: [
          "HackerRank — SQL (Advanced, Intermediate, Basic)",
          "HackerRank — React Basic",
          "JetBrains — Java Foundations Professional",
          "QSpiders — Java Full Stack Development Program",
          "Forage — AWS Solutions Architecture Job Simulation",
          "Forage — Electronic Arts Software Engineering (OOP)",
          "Infosys Springboard — AI, Deep Learning, NLP, Computer Vision"
        ]
      }
    ]
  }
];

// Instagram Grid Feed Posts (Featured Projects)
export const POSTS = [
  {
    id: "mediqueue-pro",
    title: "MediQueue Pro",
    tagline: "Enterprise OPD Queue & Prescription System",
    category: "Full Stack · Healthcare Tech",
    tech: ["Java 21", "Spring Boot 3.3", "React 19", "PostgreSQL 16", "WebSocket/STOMP", "Spring Security 6"],
    accentGradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    likes: 342,
    commentsCount: 28,
    metrics: [
      { label: "Latency", value: "<15ms" },
      { label: "Sync", value: "STOMP Live" },
      { label: "Security", value: "PIN & RBAC" }
    ],
    features: [
      "Architected distributed OPD queue management with real-time multi-terminal sync via WebSocket/STOMP.",
      "Engineered three-tier triage engine (BP, SpO2, heart rate, RBG) and ICD-10-compatible digital prescription workflows.",
      "Client-side PDF prescription export with jsPDF.",
      "Secured with Spring Security 6, JWT, RBAC, inactivity locks, and 4-digit PIN.",
      "Optimized PostgreSQL with compound indexes and JOIN FETCH query strategies.",
      "Public live-queue TV display featuring Web Speech API audio announcements."
    ],
    demoUrl: "https://github.com/KGobikrishnan",
    githubUrl: "https://github.com/KGobikrishnan",
    codeSnippet: `@MessageMapping("/queue/triage")
@SendTo("/topic/opd-live")
public QueueTicketUpdate processTriage(@Valid TriageDTO dto) {
    return queueTriageService.computePriorityTier(dto);
}`
  },
  {
    id: "fitpulse-360",
    title: "FitPulse 360",
    tagline: "Athletic Facility Management & Telemetry PWA",
    category: "Full Stack · PWA · 3D Telemetry",
    tech: ["Java 21", "Spring Boot 3.3", "React 19", "PostgreSQL 16", "Redis 7", "Docker", "Three.js"],
    accentGradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    likes: 418,
    commentsCount: 39,
    metrics: [
      { label: "Offline", value: "IndexedDB PWA" },
      { label: "Graphics", value: "Three.js 60fps" },
      { label: "Invoicing", value: "BigDecimal GST" }
    ],
    features: [
      "Developed end-to-end athletic facility platform: billing, GST invoicing with BigDecimal precision, attendance, coaching, and telemetry.",
      "Offline-first PWA for workout logging using Service Worker and IndexedDB; QR-based attendance scanning.",
      "Redis-backed JWT invalidation and session blacklist.",
      "Three.js muscle/exercise visualizations optimized with React.memo and requestAnimationFrame.",
      "Containerized with Docker multi-stage builds and Nginx reverse proxy."
    ],
    demoUrl: "https://github.com/KGobikrishnan",
    githubUrl: "https://github.com/KGobikrishnan",
    codeSnippet: `// Offline Sync with IndexedDB Service Worker
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-workouts') {
    event.waitUntil(flushOfflineWorkoutsToCloud());
  }
});`
  },
  {
    id: "navi-workspace",
    title: "Navi Promo WorkSpace",
    tagline: "Enterprise ERP/CRM with General Ledger",
    category: "Enterprise Software · ERP / CRM",
    tech: ["Java 21", "Spring Boot 3.2", "React 18", "PostgreSQL", "TailwindCSS", "HikariCP"],
    accentGradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    likes: 289,
    commentsCount: 19,
    metrics: [
      { label: "Architecture", value: "Double-Entry GL" },
      { label: "Auth", value: "Refresh Rotation" },
      { label: "Scale", value: "HikariCP Tuned" }
    ],
    features: [
      "Internal ERP/CRM covering CRM, project management, finance, HRMS, payroll, double-entry General Ledger, and security tooling.",
      "JWT auth with refresh-token rotation, granular RBAC, and inactivity timeouts.",
      "Database performance tuning with HikariCP, Hibernate batching, and PostgreSQL JSONB via Hypersistence.",
      "Deployed on Linux with systemd daemons and Nginx + SSL configuration."
    ],
    demoUrl: "https://github.com/KGobikrishnan",
    githubUrl: "https://github.com/KGobikrishnan",
    codeSnippet: `@Entity
@Table(name = "gl_ledger_entries")
public class GeneralLedgerEntry {
    @JdbcTypeCode(SqlTypes.JSON)
    private Map<String, Object> transactionAuditMeta;
}`
  }
];

// REELS TAB: Technical Stacks & Architecture Showcase (Organized by Stack Pillars)
export const REELS = [
  {
    id: "reel-backend",
    category: "BACKEND STACK",
    badge: "Core Enterprise",
    title: "Java 21 & Spring Boot 3.x",
    subtitle: "Enterprise Backend Architecture",
    views: "24.6K",
    likes: "2.4K",
    duration: "1:00",
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
    skills: ["Java 21", "Spring Boot 3.x", "Spring Security 6", "REST APIs", "WebSocket/STOMP", "JWT/RBAC", "Hibernate"],
    description: "Production-grade backend engineering with strict JWT/RBAC security, distributed STOMP WebSockets, and clean DTO architectures.",
    stats: "Sub-15ms Latency",
    highlights: [
      "Spring Security 6 with JWT & Refresh Token Rotation",
      "WebSocket/STOMP Real-Time Event Broadcasting",
      "Spring Data JPA with HikariCP & Hibernate Batching"
    ]
  },
  {
    id: "reel-frontend",
    category: "FRONTEND STACK",
    badge: "Modern UI/UX",
    title: "React 19 & Modern Web",
    subtitle: "Interactive Client Systems",
    views: "31.2K",
    likes: "3.8K",
    duration: "0:45",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #e11d48, #fb7185)",
    skills: ["React 19", "JavaScript (ES6+)", "Vite", "TailwindCSS", "Zustand", "Three.js", "Framer Motion", "Recharts"],
    description: "Ultra high-performance client rendering, offline-first PWA caching with Service Workers & IndexedDB, and 60fps Three.js 3D animations.",
    stats: "60 FPS Render",
    highlights: [
      "React 19 concurrent features & Zustand state",
      "Three.js 3D visualizations with requestAnimationFrame",
      "Offline-first PWA with Service Worker & IndexedDB"
    ]
  },
  {
    id: "reel-database",
    category: "DATABASE & SCALE",
    badge: "High Performance",
    title: "PostgreSQL 16 & Redis 7",
    subtitle: "Persistent & In-Memory Layer",
    views: "19.8K",
    likes: "1.9K",
    duration: "0:50",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
    skills: ["PostgreSQL 16", "Redis 7", "Compound Indexing", "HikariCP", "JSONB", "Hibernate Batching", "JOIN FETCH"],
    description: "Engineered high-throughput relational schemas, double-entry General Ledger systems, and Redis caching for JWT session invalidation.",
    stats: "Zero Lock Drift",
    highlights: [
      "Compound Indexing & JOIN FETCH query tuning",
      "PostgreSQL JSONB storage via Hypersistence",
      "Redis 7 distributed token blacklist & cache"
    ]
  },
  {
    id: "reel-devops",
    category: "DEVOPS & TOOLS",
    badge: "CI/CD & Deploy",
    title: "Docker, Nginx & Linux",
    subtitle: "Infrastructure & Deployment",
    views: "15.4K",
    likes: "1.5K",
    duration: "0:40",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #7e22ce, #c084fc)",
    skills: ["Docker", "Docker Compose", "Nginx", "Linux (systemd)", "Git", "Maven", "Postman", "Swagger / OpenAPI"],
    description: "Multi-stage Docker builds, reverse proxy configuration with Nginx SSL termination, Linux systemd daemon orchestration, and automated pipelines.",
    stats: "Production VPS",
    highlights: [
      "Multi-stage Docker builds & optimized images",
      "Nginx reverse proxy with SSL & WebSocket pass",
      "Linux systemd service monitoring & automation"
    ]
  },
  {
    id: "reel-architecture",
    category: "SYSTEM PATTERNS",
    badge: "Clean Architecture",
    title: "Architecture & Security",
    subtitle: "Enterprise Principles",
    views: "21.0K",
    likes: "2.1K",
    duration: "0:35",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
    skills: ["RBAC Auth", "DTO Pattern", "SOLID Principles", "DRY", "PWA Architecture", "Agile / Scrum"],
    description: "Enterprise software design adhering strictly to SOLID, layered domain-driven DTO separation, and multi-tenant security workflows.",
    stats: "Clean Arch",
    highlights: [
      "Role-Based Access Control (RBAC) & 4-Digit PIN",
      "Strict separation of DTO, Service & Entity layers",
      "Agile/Scrum delivery of ERP, CRM & Queue tools"
    ]
  }
];

// Tagged tab: Recommendations, Endorsements & Certifications
export const TAGGED = [
  {
    id: "tag-1",
    author: "SRMIST Faculty & Evaluators",
    handle: "@srmist_ai",
    badge: "Academic",
    date: "2024 - 2026",
    title: "Master of Computer Applications (AI)",
    quote: "Gobi consistently demonstrates top-tier aptitude in backend system design, database modeling, and artificial intelligence architectures.",
    tags: ["#Java21", "#AI_Specialization", "#SRMIST", "#SoftwareEngineering"]
  },
  {
    id: "tag-2",
    author: "HackerRank Skill Verification",
    handle: "@hackerrank",
    badge: "Verified Skill",
    date: "Certified",
    title: "SQL (Advanced) & React Basic Certified",
    quote: "Demonstrated advanced relational query competencies, complex join execution plans, aggregation and frontend component design.",
    tags: ["#SQLAdvanced", "#ReactCertified", "#DatabaseMastery"]
  },
  {
    id: "tag-3",
    author: "Navi Promotions Engineering",
    handle: "@navi_promotions",
    badge: "Enterprise Peer",
    date: "2026",
    title: "Full Stack Contributor & Internal Tool Builder",
    quote: "Architected Navi Promo WorkSpace ERP/CRM from scratch. Outstanding work ethic and immediate contribution to real-time production requirements.",
    tags: ["#FullStack", "#EnterpriseERP", "#SpringSecurity", "#SpringBoot"]
  }
];
