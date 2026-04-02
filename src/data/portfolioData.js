import {
  Monitor, Server, Database, Wrench, Cpu,
  Home, Code2, Briefcase, FolderOpen, GraduationCap,
  Mail, MapPin, Github, Linkedin, ChevronDown, Phone,
  ExternalLink, Award, Star, Globe, Download,
  ShoppingCart, Users, LayoutDashboard, Link2
} from "lucide-react";

import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaGithub
} from "react-icons/fa";
import {
  SiJavascript, SiSpringboot, SiExpress, SiMysql, SiPostgresql, SiMongodb
} from "react-icons/si";

export const PORTFOLIO_DATA = {
  name: "Gobi Krishnan K",
  email: "gobikrishnan.pro@gmail.com",
  phone: "+91 90879 22707",
  location: "Theni, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/gobikrishnanpro",
  github: "https://github.com/Gobikrishnanpro",
  summary: "Highly motivated Full Stack Developer with expertise in Java, JavaScript, React.js, and SQL. Passionate about building highly scalable, efficient web apps that solve real-world problems. Thriving in collaborative environments with a strong problem-solving mindset and a sharp eye for aesthetic UI/UX.",
  roles: ["Full Stack Developer", "Creative Engineer", "UI/UX Artisan", "React Innovator"],
  stats: [
    { value: "1+", label: "Years Exp" },
    { value: "4+", label: "Projects" },
    { value: "15+", label: "Technologies" },
    { value: "5", label: "Certifications" },
  ],
  skills: [
    {
      cat: "Frontend", Icon: Monitor, color: "#a78bfa", bg: "rgba(167,139,250,0.10)",
      items: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt }
      ], level: 88
    },
    {
      cat: "Backend", Icon: Server, color: "#38bdf8", bg: "rgba(56,189,248,0.10)",
      items: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress }
      ], level: 82
    },
    {
      cat: "Databases", Icon: Database, color: "#34d399", bg: "rgba(52,211,153,0.10)",
      items: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb }
      ], level: 78
    },
    {
      cat: "Cloud & Tools", Icon: Wrench, color: "#fbbf24", bg: "rgba(251,191,36,0.10)",
      items: [
        { name: "GitHub", icon: FaGithub },
        { name: "AWS", icon: FaAws },
        { name: "Figma", icon: Globe } /* generic */
      ], level: 75
    },
    {
      cat: "Architecture", Icon: Cpu, color: "#f472b6", bg: "rgba(244,114,182,0.10)",
      items: [
        { name: "Microservices", icon: Server },
        { name: "System Design", icon: LayoutDashboard },
        { name: "Web Perf", icon: Award }
      ], level: 80
    },
  ],
  experience: [
    {
      company: "Navi Promotions", role: "Full Stack Developer",
      period: "April 2026 – Present", location: "Theni, Tamil Nadu",
      current: true, color: "#a78bfa", icon: Star,
      points: [
        "Architected Navi Promo Workspace from scratch — a full CRM & office management system streamlining internal operations.",
        "Designed scalable database schemas and integrated secure backend APIs managing client workflows and promotional data.",
        "Driving end-to-end development, debugging, and deployment across multiple live projects in an Agile setup.",
      ],
    },
    {
      company: "Navi Promotions", role: "Full Stack Developer Intern",
      period: "Jan 2024 - Mar 2024", location: "Remote / Onsite",
      current: false, color: "#38bdf8", icon: Code2,
      points: [
        "Built real-time web applications, optimizing complex database queries for measurable performance improvements.",
        "Implemented secure authentication systems and contributed to seamless third-party API integrations.",
      ],
    },
    {
      company: "Kurinji Technology Solutions", role: "Salesforce Developer Intern",
      period: "Jan – Mar 2024", location: "Bodinayakkanur, TN",
      current: false, color: "#34d399", icon: Database,
      points: [
        "Gained hands-on exposure to enterprise cloud solutions and CRM architecture in a production environment.",
        "Collaborated in Agile sprints deepening understanding of SDLC best practices and customer-centric design.",
        "Built foundational knowledge of multi-tenant architectures aligned with Azure cloud service principles.",
      ],
    },
  ],
  projects: [
    {
      id: "theni-offers",
      name: "Theni Offers", sub: "Full Stack E-Commerce Platform", MainIcon: ShoppingCart,
      color: "#a78bfa", glow: "rgba(167,139,250,0.18)",
      tech: ["React", "Java", "Spring Boot", "REST APIs", "PostgreSQL"], status: "Production",
      desc: "Full-stack e-commerce platform for localized promotional offers — complete frontend, backend business logic, and database architecture, production-ready for VPS deployment.",
    },
    {
      id: "skill-share",
      name: "Skill-Sharing Community", sub: "Social Media Platform", MainIcon: Users,
      color: "#f472b6", glow: "rgba(244,114,182,0.18)",
      tech: ["PHP", "MySQL"], status: "Deployed",
      desc: "Social platform connecting learners and experts with user profiles, content sharing, and real-time collaboration. Demonstrates initiative and end-to-end product thinking.",
    },
    {
      id: "school-dash",
      name: "School Dashboard", sub: "Management Interface", MainIcon: LayoutDashboard,
      color: "#38bdf8", glow: "rgba(56,189,248,0.18)",
      tech: ["React.js", "CSS3 Data Viz"], status: "Live",
      desc: "Interactive school management UI improving data accessibility and visualization by 50% through dashboards, analytics charts, and a fully responsive design system.",
    },
    {
      id: "tinylink",
      name: "TinyLink", sub: "URL Shortener Service", MainIcon: Link2,
      color: "#34d399", glow: "rgba(52,211,153,0.18)",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL"], status: "API Live",
      desc: "Custom URL shortening service with robust routing, efficient database management, and sub-millisecond redirection logic — built for high reliability and link analytics at scale.",
    },
  ]
};

export const NAV_LINKS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "contact", label: "Contact", Icon: Mail },
];
