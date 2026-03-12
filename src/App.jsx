// ================================================================
// GOBI KRISHNAN K — Advanced Portfolio v2.1
// npm install framer-motion lucide-react
// ================================================================

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  motion, AnimatePresence, useScroll, useSpring,
  useTransform, useMotionValue, useInView
} from "framer-motion";
import {
  Monitor, Server, Database, Wrench, Cpu,
  Home, Code2, Briefcase, FolderOpen, GraduationCap,
  Mail, MapPin, Github, Linkedin, ChevronDown, Phone,
  ExternalLink, Award, Star, Globe, Download
} from "lucide-react";

// ── DATA ─────────────────────────────────────────────────────────
const R = {
  name: "Gobi Krishnan K",
  email: "gobikrishnan.pro@gmail.com",
  phone: "+91 90879 22707",
  location: "Theni, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/gobikrishnanpro",
  github: "https://github.com/Gobikrishnanpro",
  summary: "Highly motivated Full Stack Developer with expertise in Java, JavaScript, React.js, and SQL. Passionate about building scalable, efficient applications that solve real-world problems — thriving in collaborative environments with a strong problem-solving mindset.",
  roles: ["Full Stack Developer", "React.js Specialist", "Java Engineer", "API Architect", "UI/UX Builder"],
  stats: [
    { value: "1+", label: "Years Exp" },
    { value: "4+", label: "Projects" },
    { value: "15+", label: "Technologies" },
    { value: "5", label: "Certifications" },
  ],
  skills: [
    { cat: "Frontend", Icon: Monitor, color: "#a78bfa", bg: "rgba(167,139,250,0.10)", items: ["React.js","JavaScript ES6+","HTML5","CSS3","Tailwind CSS","Bootstrap"], level: 88 },
    { cat: "Backend", Icon: Server, color: "#38bdf8", bg: "rgba(56,189,248,0.10)", items: ["Java","Spring Boot","Node.js","Express.js","Servlets","JDBC"], level: 82 },
    { cat: "Databases", Icon: Database, color: "#34d399", bg: "rgba(52,211,153,0.10)", items: ["MySQL","PostgreSQL","MongoDB"], level: 78 },
    { cat: "Cloud & Tools", Icon: Wrench, color: "#fbbf24", bg: "rgba(251,191,36,0.10)", items: ["Git","GitHub","Postman","AWS","Firebase","VS Code","IntelliJ"], level: 75 },
    { cat: "Architecture", Icon: Cpu, color: "#f472b6", bg: "rgba(244,114,182,0.10)", items: ["REST APIs","OOP","Agile/Scrum","SDLC","CRM Systems","Cloud Deploy"], level: 80 },
  ],
  experience: [
    {
      company: "Navi Promotions", role: "Full Stack Developer",
      period: "Jan 2026 – Present", location: "Theni, Tamil Nadu",
      current: true, color: "#a78bfa", icon: "🚀",
      points: [
        "Architected Navi Promo Workspace from scratch — a full CRM & office management system streamlining internal operations.",
        "Designed scalable database schemas and integrated secure backend APIs managing client workflows and promotional data.",
        "Driving end-to-end development, debugging, and deployment across multiple live projects in an Agile setup.",
      ],
    },
    {
      company: "JSPiders", role: "Full Stack Developer Intern",
      period: "2024", location: "Remote / Onsite",
      current: false, color: "#38bdf8", icon: "💻",
      points: [
        "Built real-time web applications, optimizing complex database queries for measurable performance improvements.",
        "Implemented secure authentication systems and contributed to seamless third-party API integrations.",
      ],
    },
    {
      company: "Kurinji Technology Solutions", role: "Salesforce Developer",
      period: "Jan – Mar 2024", location: "Bodinayakkanur, TN",
      current: false, color: "#34d399", icon: "☁️",
      points: [
        "Gained hands-on exposure to enterprise cloud solutions and CRM architecture in a production environment.",
        "Collaborated in Agile sprints deepening understanding of SDLC best practices and customer-centric design.",
        "Built foundational knowledge of multi-tenant architectures aligned with Azure cloud service principles.",
      ],
    },
  ],
  projects: [
    {
      name: "Theni Offers", sub: "Full Stack E-Commerce Platform", emoji: "🛍️",
      color: "#a78bfa", glow: "rgba(167,139,250,0.18)",
      tech: ["React","Java","Spring Boot","REST APIs","PostgreSQL"], status: "Production",
      desc: "Full-stack e-commerce platform for localized promotional offers — complete frontend, backend business logic, and database architecture, production-ready for VPS deployment.",
    },
    {
      name: "Skill-Sharing Community", sub: "Social Media Platform", emoji: "🤝",
      color: "#f472b6", glow: "rgba(244,114,182,0.18)",
      tech: ["PHP","MySQL"], status: "Deployed",
      desc: "Social platform connecting learners and experts with user profiles, content sharing, and real-time collaboration. Demonstrates initiative and end-to-end product thinking.",
    },
    {
      name: "School Dashboard", sub: "Management Interface", emoji: "🏫",
      color: "#38bdf8", glow: "rgba(56,189,248,0.18)",
      tech: ["React.js","Tailwind CSS"], status: "Live",
      desc: "Interactive school management UI improving data accessibility and visualization by 50% through dashboards, analytics charts, and a fully responsive design system.",
    },
    {
      name: "TinyLink", sub: "URL Shortener Service", emoji: "🔗",
      color: "#34d399", glow: "rgba(52,211,153,0.18)",
      tech: ["Java","Spring Boot","REST APIs","MySQL"], status: "API Live",
      desc: "Custom URL shortening service with robust routing, efficient database management, and sub-millisecond redirection logic — built for high reliability and link analytics at scale.",
    },
  ],
  education: {
    degree: "Bachelor of Computer Applications (BCA)", field: "Computer Science",
    university: "Madurai Kamaraj University", period: "Aug 2021 – May 2024", location: "Madurai, India",
  },
  certifications: [
    { name: "HackerRank Java Intermediate", org: "HackerRank", emoji: "⚡", color: "#fbbf24" },
    { name: "AWS Solutions Architecture Simulation", org: "Forage", emoji: "☁️", color: "#38bdf8" },
    { name: "Deloitte Cyber Security Simulation", org: "Forage", emoji: "🛡️", color: "#f472b6" },
    { name: "Electronic Arts Software Engineering", org: "Forage", emoji: "🎮", color: "#a78bfa" },
    { name: "Microsoft Cybersecurity Certification", org: "Microsoft", emoji: "🔒", color: "#34d399" },
  ],
};

const NAV = [
  { id: "home", label: "Home", Icon: Home },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "experience", label: "Work", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail },
];

// ── ANIMATED TEXT COMPONENTS ─────────────────────────────────────

// Character-by-character animation for headings
function AnimatedChars({ text, style, delay = 0, className }) {
  const chars = text.split("");
  return (
    <motion.span
      style={{ display: "inline-block", ...style }}
      className={className}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.035,
            duration: 0.55,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            display: "inline-block",
            transformOrigin: "bottom center",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Word-by-word animation for paragraphs
function AnimatedWords({ text, style, delay = 0 }) {
  const words = text.split(" ");
  return (
    <motion.p style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * 0.028,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

// Shimmer reveal for section titles
function ShimmerTitle({ children, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
      style={style}
    >
      {children}
    </motion.h2>
  );
}

// ── HOOKS ────────────────────────────────────────────────────────

function useBreakpoint() {
  const get = () => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth < 640) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  };
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const fn = () => setBp(get());
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return bp;
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && e.intersectionRatio >= 0.25) setActive(e.target.id); }),
      { threshold: 0.25 }
    );
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
}

function useTyped(texts) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const cur = texts[index];
    const t = setTimeout(() => {
      if (!deleting) {
        if (display.length < cur.length) setDisplay(cur.slice(0, display.length + 1));
        else setTimeout(() => setDeleting(true), 2000);
      } else {
        if (display.length > 0) setDisplay(display.slice(0, -1));
        else { setDeleting(false); setIndex((index + 1) % texts.length); }
      }
    }, deleting ? 42 : 88);
    return () => clearTimeout(t);
  }, [display, deleting, index, texts]);
  return display;
}

function useRipple() {
  useEffect(() => {
    const fn = (e) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;pointer-events:none;z-index:9990;left:${e.clientX-40}px;top:${e.clientY-40}px;width:80px;height:80px;border-radius:50%;border:1.5px solid rgba(167,139,250,0.45);animation:rippleOut 0.85s ease-out forwards;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 900);
    };
    window.addEventListener("click", fn);
    return () => window.removeEventListener("click", fn);
  }, []);
}

// ── STYLES ───────────────────────────────────────────────────────

function InjectStyles() {
  useEffect(() => {
    const id = "gkp-v2-styles";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'DM Sans', -apple-system, sans-serif; background: #040410; color: #eeeef8; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
      ::-webkit-scrollbar { width: 0; }
      h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

      @keyframes gradShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
      @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes pulseRing { 0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(167,139,250,.55)} 70%{transform:scale(1);box-shadow:0 0 0 22px rgba(167,139,250,0)} 100%{transform:scale(.95);box-shadow:0 0 0 0 rgba(167,139,250,0)} }
      @keyframes blob1 { 0%,100%{transform:translate(0,0)scale(1)} 30%{transform:translate(65px,-85px)scale(1.2)} 70%{transform:translate(-55px,65px)scale(.8)} }
      @keyframes blob2 { 0%,100%{transform:translate(0,0)scale(1)} 33%{transform:translate(-70px,55px)scale(1.15)} 66%{transform:translate(55px,-70px)scale(.88)} }
      @keyframes blob3 { 0%,100%{transform:translate(0,0)scale(.9)} 50%{transform:translate(65px,-52px)scale(1.2)} }
      @keyframes blob4 { 0%,100%{transform:translate(0,0)scale(1)} 40%{transform:translate(-58px,-44px)scale(1.12)} 80%{transform:translate(42px,62px)scale(.86)} }
      @keyframes rippleOut { 0%{transform:scale(0);opacity:.4} 100%{transform:scale(6);opacity:0} }
      @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      @keyframes slideInUp { 0%{transform:translateY(20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
      @keyframes fadeInBlur { 0%{opacity:0;filter:blur(12px)} 100%{opacity:1;filter:blur(0)} }

      .glass {
        background: rgba(255,255,255,.042);
        backdrop-filter: blur(32px) saturate(1.9) brightness(1.06);
        -webkit-backdrop-filter: blur(32px) saturate(1.9) brightness(1.06);
        border: 1px solid rgba(255,255,255,.08);
        border-top: 1px solid rgba(255,255,255,.14);
        border-left: 1px solid rgba(255,255,255,.10);
      }
      .glass-strong {
        background: rgba(4,4,20,.78);
        backdrop-filter: blur(40px) saturate(2);
        -webkit-backdrop-filter: blur(40px) saturate(2);
        border: 1px solid rgba(255,255,255,.10);
        border-top: 1px solid rgba(255,255,255,.18);
      }
      .inner-glow { box-shadow: inset 0 1px 0 rgba(255,255,255,.11), inset 0 -1px 0 rgba(0,0,0,.18), 0 8px 32px rgba(0,0,0,.35); }
      .text-grad {
        background: linear-gradient(135deg, #d8b4fe 0%, #67e8f9 40%, #f9a8d4 80%, #c4b5fd 100%);
        background-size: 300% 300%;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradShift 5s ease infinite;
      }
      .float { animation: floatY 4.2s ease-in-out infinite; }
      .pulse { animation: pulseRing 2.8s cubic-bezier(.455,.03,.515,.955) infinite; }

      /* Profile image circle */
      .avatar-circle {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
      }

      /* Noise texture */
      body::before {
        content: '';
        position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: .022;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 220px 220px;
      }
    `;
    document.head.appendChild(s);
    return () => document.getElementById(id)?.remove();
  }, []);
  return null;
}

// ── BACKGROUND ───────────────────────────────────────────────────

function Background() {
  const blobs = [
    { w:720, h:720, c:"rgba(109,40,217,.72)", t:-210, l:-170, a:"blob1 23s ease-in-out infinite" },
    { w:580, h:580, c:"rgba(6,182,212,.58)", t:"4%", r:-130, a:"blob2 29s ease-in-out infinite" },
    { w:500, h:500, c:"rgba(219,39,119,.52)", b:"4%", l:"6%", a:"blob3 20s ease-in-out infinite" },
    { w:420, h:420, c:"rgba(16,185,129,.45)", b:"16%", r:"3%", a:"blob4 25s ease-in-out infinite" },
  ];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:0, overflow:"hidden", background:"#040410" }}>
      {blobs.map((b, i) => (
        <div key={i} style={{
          position:"absolute", borderRadius:"50%", width:b.w, height:b.h,
          background:`radial-gradient(circle at 45% 45%, ${b.c}, transparent 62%)`,
          filter:"blur(85px)",
          top:b.t, left:b.l, right:b.r, bottom:b.b,
          animation:b.a, willChange:"transform",
        }} />
      ))}
      <div style={{ position:"absolute", inset:0, background:"rgba(4,4,16,.36)" }} />
    </div>
  );
}

// ── PARTICLES ────────────────────────────────────────────────────

function Particles() {
  const pts = useMemo(() => Array.from({ length: 38 }, (_, i) => {
    const colors = [
      "rgba(167,139,250,.55)", "rgba(56,189,248,.5)",
      "rgba(52,211,153,.5)", "rgba(244,114,182,.5)", "rgba(251,191,36,.45)"
    ];
    return {
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2.2 + .5, dur: Math.random() * 18 + 12,
      delay: Math.random() * -20, dx: (Math.random() - .5) * 45,
      color: colors[i % 5],
    };
  }), []);
  return (
    <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
      {pts.map(p => (
        <motion.div key={p.id}
          style={{ position:"absolute", left:`${p.x}%`, top:`${p.y}%`, width:p.size, height:p.size, borderRadius:"50%", background:p.color }}
          animate={{ y:[0,-55,0], x:[0,p.dx,0], opacity:[0,.75,0] }}
          transition={{ duration:p.dur, delay:p.delay, repeat:Infinity, ease:"easeInOut" }}
        />
      ))}
    </div>
  );
}

// ── SCROLL BAR ───────────────────────────────────────────────────

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness:100, damping:30 });
  return (
    <motion.div style={{
      position:"fixed", top:0, left:0, right:0, height:2, zIndex:300,
      scaleX, transformOrigin:"0%",
      background:"linear-gradient(90deg,#7c3aed,#06b6d4,#ec4899)",
    }} />
  );
}

// ── CUSTOM CURSOR ────────────────────────────────────────────────

function CustomCursor() {
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e) => { if (e.target.closest("button,a,[data-hover]")) setHov(true); };
    const out = () => setHov(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove",move); window.removeEventListener("mouseover",over); window.removeEventListener("mouseout",out); };
  }, [mx, my]);
  const sx = useSpring(mx, { damping:22, stiffness:180 });
  const sy = useSpring(my, { damping:22, stiffness:180 });
  return (
    <>
      <motion.div style={{ position:"fixed", left:mx, top:my, zIndex:9999, pointerEvents:"none", translateX:"-50%", translateY:"-50%" }}>
        <div style={{ width:5, height:5, borderRadius:"50%", background:"white" }} />
      </motion.div>
      <motion.div style={{ position:"fixed", left:sx, top:sy, zIndex:9998, pointerEvents:"none", translateX:"-50%", translateY:"-50%" }}>
        <motion.div animate={{ width:hov?50:34, height:hov?50:34, background:hov?"rgba(167,139,250,.14)":"transparent", borderColor:hov?"rgba(167,139,250,.8)":"rgba(255,255,255,.3)" }}
          style={{ borderRadius:"50%", border:"1.5px solid rgba(255,255,255,.3)", transition:"all .18s ease" }} />
      </motion.div>
    </>
  );
}

// ── STATUS BAR ───────────────────────────────────────────────────

function StatusBar({ active }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));
    tick(); const id = setInterval(tick,1000); return () => clearInterval(id);
  }, []);
  const label = NAV.find(n => n.id === active)?.label ?? "Portfolio";
  return (
    <motion.div initial={{ y:-60, opacity:0 }} animate={{ y:0, opacity:1 }}
      transition={{ delay:.5, type:"spring", stiffness:200 }}
      className="glass-strong inner-glow"
      style={{
        position:"fixed", top:14, left:"50%", transform:"translateX(-50%)", zIndex:200,
        display:"flex", alignItems:"center", gap:18, padding:"10px 26px",
        borderRadius:100, whiteSpace:"nowrap",
      }}>
      <div style={{ display:"flex", alignItems:"center", gap:7 }}>
        <div style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 9px #4ade80" }} />
        <span style={{ fontSize:13, fontWeight:600, fontFamily:"'Syne',sans-serif" }}>GK Portfolio</span>
      </div>
      <div style={{ width:1, height:13, background:"rgba(255,255,255,.12)" }} />
      <span style={{ fontSize:12, color:"rgba(238,238,248,.4)" }}>● {label}</span>
      <div style={{ width:1, height:13, background:"rgba(255,255,255,.12)" }} />
      <span style={{ fontSize:13, fontWeight:600, color:"rgba(238,238,248,.6)" }}>{time}</span>
    </motion.div>
  );
}

// ── MOBILE TAB BAR ───────────────────────────────────────────────

function TabBar({ active, scrollTo }) {
  return (
    <motion.div initial={{ y:80 }} animate={{ y:0 }} transition={{ delay:.5, type:"spring", stiffness:200 }}
      style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:200, paddingBottom:"env(safe-area-inset-bottom,0)" }}>
      <div className="glass-strong inner-glow" style={{
        display:"flex", justifyContent:"space-around", alignItems:"center",
        padding:"10px 6px 12px", margin:"8px 10px",
        borderRadius:26, boxShadow:"0 -4px 40px rgba(0,0,0,.55), 0 12px 40px rgba(0,0,0,.4)",
      }}>
        {NAV.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <motion.button key={id} whileTap={{ scale:.86 }} onClick={() => scrollTo(id)}
              style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:3, padding:"6px 2px", border:"none", background:"none", cursor:"pointer", position:"relative" }}>
              <motion.div animate={{ background:isActive?"rgba(167,139,250,.2)":"transparent", scale:isActive?1.08:1 }}
                style={{ width:44, height:34, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon size={20} color={isActive?"#c4b5fd":"rgba(238,238,248,.35)"} strokeWidth={isActive?2.2:1.7} />
              </motion.div>
              <span style={{ fontSize:9, fontFamily:"'DM Sans',sans-serif", fontWeight:isActive?700:400, color:isActive?"#c4b5fd":"rgba(238,238,248,.27)", letterSpacing:".05em", textTransform:"uppercase" }}>
                {label}
              </span>
              {isActive && (
                <motion.div layoutId="tab-dot"
                  style={{ position:"absolute", bottom:-3, left:"50%", transform:"translateX(-50%)", width:3, height:3, borderRadius:"50%", background:"#a78bfa", boxShadow:"0 0 7px #a78bfa" }} />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── DOCK ─────────────────────────────────────────────────────────

function DockItem({ item, active, scrollTo, mouseX }) {
  const ref = useRef(null);
  const [cx, setCx] = useState(null);
  useEffect(() => {
    const fn = () => { if (ref.current) { const r = ref.current.getBoundingClientRect(); setCx(r.left + r.width/2); }};
    fn(); window.addEventListener("resize", fn); return () => window.removeEventListener("resize", fn);
  }, []);
  const dist = mouseX !== null && cx !== null ? Math.abs(mouseX - cx) : 999;
  const scale = dist < 130 ? 1 + (1 - dist/130) * .78 : 1;
  const ty = dist < 130 ? -(1 - dist/130) * 20 : 0;
  const isActive = active === item.id;
  return (
    <motion.div ref={ref} animate={{ scale, y:ty }} transition={{ type:"spring", stiffness:380, damping:26 }}
      onClick={() => scrollTo(item.id)}
      style={{ cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
      <div style={{
        width:52, height:52, borderRadius:17, display:"flex", alignItems:"center", justifyContent:"center",
        background:isActive?"rgba(167,139,250,.2)":"rgba(255,255,255,.055)",
        border:`1px solid ${isActive?"rgba(167,139,250,.55)":"rgba(255,255,255,.08)"}`,
        boxShadow:isActive?"0 0 28px rgba(167,139,250,.5), inset 0 1px 0 rgba(255,255,255,.18)":"inset 0 1px 0 rgba(255,255,255,.08)",
        transition:"background .3s, border-color .3s, box-shadow .3s",
      }}>
        <item.Icon size={22} color={isActive?"#c4b5fd":"rgba(238,238,248,.48)"} strokeWidth={isActive?2.2:1.7} />
      </div>
      <span style={{ fontSize:9.5, fontWeight:isActive?700:400, color:isActive?"#c4b5fd":"rgba(238,238,248,.28)", letterSpacing:".06em", textTransform:"uppercase" }}>{item.label}</span>
      {isActive && <div style={{ width:3.5, height:3.5, borderRadius:"50%", background:"#a78bfa", boxShadow:"0 0 7px #a78bfa" }} />}
    </motion.div>
  );
}

function Dock({ active, scrollTo }) {
  const [mouseX, setMouseX] = useState(null);
  return (
    <motion.div initial={{ y:80, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:.6, type:"spring", stiffness:180 }}
      style={{ position:"fixed", bottom:22, left:"50%", transform:"translateX(-50%)", zIndex:200 }}>
      <div className="glass-strong inner-glow"
        onMouseMove={(e) => setMouseX(e.clientX)} onMouseLeave={() => setMouseX(null)}
        style={{
          display:"flex", alignItems:"flex-end", gap:10, padding:"12px 20px 10px",
          borderRadius:30, background:"rgba(4,4,22,.8)",
          boxShadow:"0 24px 64px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.1)",
        }}>
        {NAV.map(item => (
          <DockItem key={item.id} item={item} active={active} scrollTo={scrollTo} mouseX={mouseX} />
        ))}
      </div>
    </motion.div>
  );
}

// ── SECTION HEADER ───────────────────────────────────────────────

function SH({ badge, title, sub, accent = "#a78bfa" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:.7, ease:[.4,0,.2,1] }}
      style={{ textAlign:"center", marginBottom:"clamp(40px,6vw,68px)" }}>
      <motion.div
        initial={{ opacity:0, scale:0.85, y:10 }}
        animate={inView ? { opacity:1, scale:1, y:0 } : {}}
        transition={{ duration:0.5, ease:[.4,0,.2,1] }}
        style={{
          display:"inline-flex", alignItems:"center", gap:8, marginBottom:18,
          background:`${accent}12`, border:`1px solid ${accent}38`,
          borderRadius:100, padding:"7px 20px", fontSize:12.5, fontWeight:700,
          color:accent, letterSpacing:".08em", textTransform:"uppercase",
        }}>{badge}</motion.div>
      <ShimmerTitle style={{ fontSize:"clamp(30px,5vw,54px)", fontWeight:800, letterSpacing:"-.03em", marginBottom:14 }}>
        {title}
      </ShimmerTitle>
      {sub && (
        <motion.p
          initial={{ opacity:0, y:16 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.65, delay:0.2, ease:[.4,0,.2,1] }}
          style={{ color:"rgba(238,238,248,.4)", fontSize:"clamp(14px,2vw,17px)", maxWidth:580, margin:"0 auto", lineHeight:1.78, fontWeight:300 }}
        >{sub}</motion.p>
      )}
    </motion.div>
  );
}

// ── HERO ─────────────────────────────────────────────────────────

function Hero({ scrollTo, bp }) {
  const typed = useTyped(R.roles);
  const isMobile = bp === "mobile";

  const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:.11 }} };
  const child = { hidden:{ opacity:0, y:40 }, visible:{ opacity:1, y:0, transition:{ duration:.85, ease:[.4,0,.2,1] }} };

  return (
    <section id="home" style={{
      minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      padding:isMobile?"96px 20px 170px":"120px 24px 170px", position:"relative",
    }}>
      <motion.div variants={stagger} initial="hidden" animate="visible"
        style={{ textAlign:"center", maxWidth:860, width:"100%" }}>

        {/* Avatar — profile.jpg as circle */}
        <motion.div variants={child} style={{ display:"flex", justifyContent:"center", marginBottom:38 }}>
          <div className="float" style={{ position:"relative" }}>
            <div className="pulse" style={{
              width:isMobile?96:118, height:isMobile?96:118, borderRadius:"50%",
              background:"linear-gradient(135deg,#7c3aed,#0891b2,#be185d)",
              padding:3,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 20px 70px rgba(124,58,237,.55)",
              overflow:"hidden",
            }}>
              <img
                src="profile.jpg"
                alt="Gobi Krishnan K"
                className="avatar-circle"
                onError={(e) => {
                  // Fallback to initials if image not found
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback initials (hidden by default) */}
              <div style={{
                display:"none",
                width:"100%", height:"100%", borderRadius:"50%",
                background:"linear-gradient(135deg,#7c3aed,#0891b2,#be185d)",
                alignItems:"center", justifyContent:"center",
                fontSize:isMobile?34:42, fontWeight:900, fontFamily:"'Syne',sans-serif",
                color:"white", letterSpacing:"-2px",
              }}>GK</div>
            </div>

            {/* Orbiting dots */}
            <div style={{ position:"absolute", inset:-12, animation:"spin 7s linear infinite", pointerEvents:"none" }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:"#a78bfa", boxShadow:"0 0 14px #a78bfa", position:"absolute", top:0, left:"50%", transform:"translateX(-50%)" }} />
            </div>
            <div style={{ position:"absolute", inset:-20, animation:"spin 12s linear infinite reverse", pointerEvents:"none" }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"#38bdf8", boxShadow:"0 0 10px #38bdf8", position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)" }} />
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div variants={child} style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
          <div className="glass inner-glow" style={{
            display:"inline-flex", alignItems:"center", gap:8, padding:"6px 18px",
            borderRadius:100, fontSize:12, fontWeight:600, color:"rgba(238,238,248,.5)", letterSpacing:".12em", textTransform:"uppercase",
          }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 8px #4ade80" }} />
            Full Stack Developer · Open to Work
          </div>
        </motion.div>

        {/* Name — animated chars, single line on mobile */}
        <motion.div variants={child}>
          <h1
            className="text-grad"
            style={{
              fontSize: isMobile ? "clamp(26px,7.5vw,48px)" : "clamp(48px,10vw,98px)",
              fontWeight: 900,
              letterSpacing: "-.04em",
              lineHeight: 1.0,
              marginBottom: 18,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <AnimatedChars text="Gobi Krishnan K." delay={0.1} />
          </h1>
        </motion.div>

        {/* Typed role */}
        <motion.div variants={child} style={{
          fontSize:isMobile?17:22, fontWeight:300,
          color:"rgba(238,238,248,.48)", marginBottom:24, minHeight:34,
          letterSpacing:".02em",
        }}>
          <motion.span
            key={typed}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            {typed}
          </motion.span>
          <span style={{ display:"inline-block", width:2, height:".9em", background:"#a78bfa", marginLeft:3, verticalAlign:"middle", animation:"blink 1s step-end infinite" }} />
        </motion.div>

        {/* Summary */}
        <motion.div variants={child}>
          <AnimatedWords
            text={R.summary}
            delay={0.05}
            style={{
              fontSize: isMobile ? 14 : 16,
              color: "rgba(238,238,248,.38)",
              maxWidth: 620,
              margin: "0 auto 40px",
              lineHeight: 1.82,
              fontWeight: 300,
            }}
          />
        </motion.div>

        {/* Stats — 4 columns on all breakpoints */}
        <motion.div variants={child} style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: isMobile ? 8 : 16,
          marginBottom: 44,
          maxWidth: isMobile ? "100%" : 520,
          margin: "0 auto 44px",
        }}>
          {R.stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale:1.07, y:-5 }}
              whileTap={{ scale:.96 }}
              initial={{ opacity:0, y:30, scale:0.9 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease:[.4,0,.2,1] }}
              className="glass inner-glow"
              style={{
                padding: isMobile ? "10px 6px" : "17px 12px",
                borderRadius: 20,
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div className="text-grad" style={{ fontSize: isMobile ? 20 : 30, fontWeight: 900 }}>{s.value}</div>
              <div style={{
                fontSize: isMobile ? 9 : 10.5,
                color: "rgba(238,238,248,.38)",
                marginTop: 4,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                lineHeight: 1.2,
              }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={child} style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:64 }}>

          {/* Download Resume button */}
          <motion.a
            href="resume.pdf"
            download
            whileHover={{ scale:1.06, y:-3 }}
            whileTap={{ scale:.96 }}
            style={{ textDecoration:"none" }}
          >
            <button style={{
              background:"linear-gradient(135deg,#7c3aed,#0e86c8)", border:"none", borderRadius:16,
              color:"white", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600,
              padding:"14px 32px", cursor:"pointer", boxShadow:"0 8px 30px rgba(124,58,237,.5)",
              display:"flex", alignItems:"center", gap:8,
            }}>
              <Download size={16} />
              Download Resume
            </button>
          </motion.a>

          <motion.a whileHover={{ scale:1.06, y:-3 }} href={R.github} target="_blank" rel="noreferrer" style={{ textDecoration:"none" }}>
            <button className="glass inner-glow" style={{
              border:"none", borderRadius:16, color:"white", fontFamily:"'DM Sans',sans-serif",
              fontSize:15, fontWeight:500, padding:"13px 28px", cursor:"pointer",
              display:"flex", alignItems:"center", gap:8,
            }}><Github size={16} />GitHub</button>
          </motion.a>

          <motion.button whileHover={{ scale:1.06, y:-3 }} whileTap={{ scale:.96 }}
            className="glass inner-glow"
            onClick={() => scrollTo("projects")}
            style={{
              border:"none", borderRadius:16, color:"white", fontFamily:"'DM Sans',sans-serif",
              fontSize:15, fontWeight:500, padding:"13px 28px", cursor:"pointer",
              display:"flex", alignItems:"center", gap:8,
            }}><FolderOpen size={16} />Projects</motion.button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div variants={child} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:.26, cursor:"pointer" }} onClick={() => scrollTo("skills")}>
          <span style={{ fontSize:10.5, letterSpacing:".14em", textTransform:"uppercase" }}>Scroll</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────

function SkillCard({ sk, i, bp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const isMobile = bp === "mobile";
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:55 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:.65, delay:i*.1, ease:[.4,0,.2,1] }}
      whileHover={bp!=="mobile"?{ y:-10, scale:1.018 }:{}}
      className="glass inner-glow"
      style={{ padding:isMobile?18:28, borderRadius:24, position:"relative", overflow:"hidden", cursor:"default" }}>

      {/* Ambient glow */}
      <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:`radial-gradient(circle,${sk.color}1e,transparent)`, filter:"blur(28px)", pointerEvents:"none" }} />
      {/* Top accent bar */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${sk.color},${sk.color}44,transparent)`, borderRadius:"24px 24px 0 0" }} />

      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
        <div style={{ width:isMobile?38:44, height:isMobile?38:44, borderRadius:14, background:sk.bg, border:`1px solid ${sk.color}28`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <sk.Icon size={isMobile?17:20} color={sk.color} />
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontWeight:700, fontSize:isMobile?14:17 }}>{sk.cat}</div>
          <div style={{ fontSize:10, color:"rgba(238,238,248,.3)", marginTop:2 }}>{sk.items.length} technologies</div>
        </div>
        <div style={{ fontSize:isMobile?12:14, fontWeight:800, color:sk.color, fontFamily:"'Syne',sans-serif" }}>{sk.level}%</div>
      </div>

      {/* Progress track */}
      <div style={{ height:4, background:"rgba(255,255,255,.07)", borderRadius:100, marginBottom:14, overflow:"hidden" }}>
        <motion.div
          initial={{ width:0 }} animate={inView?{ width:`${sk.level}%` }:{}}
          transition={{ duration:1.3, delay:i*.1+.35, ease:[.4,0,.2,1] }}
          style={{ height:"100%", background:`linear-gradient(90deg,${sk.color},${sk.color}70)`, borderRadius:100 }} />
      </div>

      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
        {sk.items.map((item, j) => (
          <motion.span key={j}
            initial={{ opacity:0, scale:.8 }} animate={inView?{opacity:1,scale:1}:{}}
            transition={{ delay:i*.1+j*.06+.4, duration:.4 }}
            style={{
              display:"inline-flex", alignItems:"center", padding: isMobile ? "3px 9px" : "4px 12px",
              borderRadius:100, fontSize:isMobile?10.5:12, fontWeight:500,
              background:sk.bg, border:`1px solid ${sk.color}25`, color:sk.color,
            }}>{item}</motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills({ bp }) {
  // 1x2 on mobile, 2 on tablet, 3 on desktop
  const cols = bp==="mobile" ? 2 : bp==="tablet" ? 2 : 3;
  return (
    <section id="skills" style={{ padding:"clamp(80px,10vw,120px) clamp(16px,5vw,44px)", maxWidth:1160, margin:"0 auto" }}>
      <SH badge="⚡ Expertise" title="Technical Skills" sub="A battle-tested toolkit forged through real production environments and continuous learning" accent="#a78bfa" />
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap: bp==="mobile" ? 14 : 20 }}>
        {R.skills.map((sk,i) => <SkillCard key={i} sk={sk} i={i} bp={bp} />)}
      </div>
    </section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────────

function ExpCard({ exp, i, bp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const isMobile = bp === "mobile";
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, x:isMobile?0:-60 }} animate={inView?{opacity:1,x:0}:{}}
      transition={{ duration:.7, delay:i*.14, ease:[.4,0,.2,1] }}
      style={{ position:"relative" }}>

      {/* Timeline dot */}
      <div style={{
        position:"absolute", left:isMobile?-32:-38, top:30,
        width:18, height:18, borderRadius:"50%", zIndex:1,
        background:exp.color, border:"3px solid #040410",
        boxShadow:`0 0 22px ${exp.color}88`,
      }} />
      {exp.current && (
        <div style={{
          position:"absolute", left:isMobile?-39:-45, top:23,
          width:32, height:32, borderRadius:"50%",
          background:`${exp.color}22`, animation:"pulseRing 2.5s ease infinite", zIndex:0
        }} />
      )}

      <motion.div whileHover={!isMobile?{ y:-6 }:{}} className="glass inner-glow"
        style={{ padding:isMobile?20:28, borderRadius:24, marginLeft:6, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${exp.color},${exp.color}44,transparent)`, borderRadius:"24px 24px 0 0" }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:14 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:5 }}>
              <span style={{ fontSize:isMobile?20:24 }}>{exp.icon}</span>
              <h3 style={{ fontSize:isMobile?17:21, fontWeight:800 }}>{exp.company}</h3>
              {exp.current && (
                <span style={{ fontSize:10, fontWeight:700, background:"rgba(74,222,128,.1)", border:"1px solid rgba(74,222,128,.38)", color:"#4ade80", borderRadius:100, padding:"2px 10px" }}>● Live</span>
              )}
            </div>
            <div style={{ color:exp.color, fontWeight:600, fontSize:13.5 }}>{exp.role}</div>
          </div>
          <div style={{ textAlign:"right", flexShrink:0 }}>
            <div style={{ fontSize:12.5, color:"rgba(238,238,248,.42)", marginBottom:3 }}>{exp.period}</div>
            <div style={{ fontSize:11.5, color:"rgba(238,238,248,.26)", display:"flex", alignItems:"center", gap:3, justifyContent:"flex-end" }}>
              <MapPin size={10} />{exp.location}
            </div>
          </div>
        </div>
        <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
          {exp.points.map((pt,j) => (
            <motion.li
              key={j}
              initial={{ opacity:0, x:-20 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay: i*0.14 + j*0.1 + 0.3, duration:0.5 }}
              style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:isMobile?13:14.5, color:"rgba(238,238,248,.52)", lineHeight:1.72 }}
            >
              <div style={{ width:5, height:5, borderRadius:"50%", background:exp.color, flexShrink:0, marginTop:8 }} />
              {pt}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function Experience({ bp }) {
  const isMobile = bp === "mobile";
  return (
    <section id="experience" style={{ padding:"clamp(80px,10vw,120px) clamp(16px,5vw,44px)", maxWidth:900, margin:"0 auto" }}>
      <SH badge="💼 Career" title="Work Experience" sub="Building production systems across CRM, web applications, and enterprise cloud platforms" accent="#38bdf8" />
      <div style={{ position:"relative", paddingLeft:isMobile?36:44 }}>
        <div style={{ position:"absolute", left:isMobile?4:6, top:8, bottom:8, width:2, background:"linear-gradient(to bottom,#a78bfa,#38bdf8,#34d399,transparent)", borderRadius:2, opacity:.45 }} />
        <div style={{ display:"flex", flexDirection:"column", gap:26 }}>
          {R.experience.map((exp,i) => <ExpCard key={i} exp={exp} i={i} bp={bp} />)}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────────

function ProjectCard({ p, i, bp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useTransform(my, [-.5,.5], [7,-7]);
  const ry = useTransform(mx, [-.5,.5], [-7,7]);
  const isMobile = bp === "mobile";

  const handleMouse = useCallback((e) => {
    if (isMobile || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - .5);
    my.set((e.clientY - r.top) / r.height - .5);
  }, [isMobile, mx, my]);
  const reset = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:60 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:.7, delay:i*.11, ease:[.4,0,.2,1] }}
      style={{ perspective:1000 }}>
      <motion.div
        style={{ rotateX:!isMobile?rx:0, rotateY:!isMobile?ry:0, transformStyle:"preserve-3d" }}
        whileHover={!isMobile?{ scale:1.022 }:{}}
        onMouseMove={handleMouse} onMouseLeave={reset}
        transition={{ type:"spring", stiffness:300, damping:28 }}
        className="glass inner-glow"
        data-hover
        style={{
          padding: isMobile ? 18 : 32,
          borderRadius:24, position:"relative",
          overflow:"hidden", cursor:"default",
          rotateX:!isMobile?rx:0, rotateY:!isMobile?ry:0, transformStyle:"preserve-3d",
        }}>

        {/* Gradient bg */}
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 80% 10%, ${p.glow}, transparent 60%)`, pointerEvents:"none" }} />
        {/* Top bar */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${p.color},${p.color}44,transparent)`, borderRadius:"24px 24px 0 0" }} />

        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
            <span style={{ fontSize:isMobile?32:46, lineHeight:1 }}>{p.emoji}</span>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
              <span style={{ fontSize:10, fontWeight:700, background:`${p.color}16`, border:`1px solid ${p.color}38`, color:p.color, borderRadius:100, padding:"3px 11px", letterSpacing:".06em", textTransform:"uppercase" }}>{p.status}</span>
              <div style={{ width:30, height:30, borderRadius:10, background:`${p.color}12`, border:`1px solid ${p.color}28`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <ExternalLink size={13} color={p.color} />
              </div>
            </div>
          </div>
          <h3 style={{ fontSize:isMobile?16:23, fontWeight:800, marginBottom:3 }}>{p.name}</h3>
          <div style={{ fontSize:isMobile?10:11.5, color:p.color, fontWeight:700, marginBottom:12, textTransform:"uppercase", letterSpacing:".07em" }}>{p.sub}</div>
          <p style={{ fontSize:isMobile?12.5:14.5, color:"rgba(238,238,248,.48)", lineHeight:1.76, marginBottom:16 }}>{p.desc}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {p.tech.map((t,j) => (
              <span key={j} style={{ display:"inline-flex", alignItems:"center", padding: isMobile ? "3px 8px" : "4px 11px", borderRadius:100, fontSize:isMobile?10:11.5, fontWeight:600, background:`${p.color}0e`, border:`1px solid ${p.color}2e`, color:p.color }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects({ bp }) {
  // 1x2 on mobile and tablet, 2 on desktop
  const cols = 2;
  return (
    <section id="projects" style={{ padding:"clamp(80px,10vw,120px) clamp(16px,5vw,44px)", maxWidth:1120, margin:"0 auto" }}>
      <SH badge="🚀 Portfolio" title="Featured Projects" sub="Real-world applications engineered from concept to production-ready deployment" accent="#f472b6" />
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap: bp==="mobile" ? 14 : 22 }}>
        {R.projects.map((p,i) => <ProjectCard key={i} p={p} i={i} bp={bp} />)}
      </div>
    </section>
  );
}

// ── EDUCATION ────────────────────────────────────────────────────

function Education({ bp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const isMobile = bp === "mobile";
  const cols = isMobile ? 1 : 2;
  return (
    <section id="education" style={{ padding:"clamp(80px,10vw,120px) clamp(16px,5vw,44px)", maxWidth:1120, margin:"0 auto" }}>
      <SH badge="🎓 Learning" title="Education & Certifications" sub="Academic foundation combined with industry-recognized achievements and real-world simulations" accent="#34d399" />
      <div ref={ref} style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:22 }}>

        {/* Edu */}
        <motion.div initial={{ opacity:0, x:-50 }} animate={inView?{opacity:1,x:0}:{}}
          transition={{ duration:.7, ease:[.4,0,.2,1] }}
          className="glass inner-glow" style={{ padding:isMobile?22:32, borderRadius:24, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-50, left:-50, width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(167,139,250,.22),transparent)", filter:"blur(40px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#a78bfa,rgba(167,139,250,.4),transparent)", borderRadius:"24px 24px 0 0" }} />
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
            <div style={{ width:50, height:50, borderRadius:16, background:"rgba(167,139,250,.14)", border:"1px solid rgba(167,139,250,.28)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <GraduationCap size={24} color="#c4b5fd" />
            </div>
            <div>
              <h3 style={{ fontSize:19, fontWeight:700 }}>Education</h3>
              <div style={{ fontSize:12, color:"rgba(238,238,248,.32)", marginTop:2 }}>Academic Background</div>
            </div>
          </div>
          <div className="glass" style={{ padding:22, borderRadius:18, marginBottom:18 }}>
            <div style={{ fontSize:isMobile?16:20, fontWeight:800, marginBottom:5 }}>{R.education.degree}</div>
            <div style={{ color:"#a78bfa", fontWeight:600, fontSize:14, marginBottom:12 }}>{R.education.field}</div>
            <div style={{ fontSize:15, color:"rgba(238,238,248,.55)", marginBottom:8, fontWeight:500 }}>{R.education.university}</div>
            <div style={{ display:"flex", gap:16, fontSize:12.5, color:"rgba(238,238,248,.32)", flexWrap:"wrap" }}>
              <span>📅 {R.education.period}</span>
              <span>📍 {R.education.location}</span>
            </div>
          </div>
          <div style={{ padding:"14px 18px", background:"rgba(74,222,128,.06)", border:"1px solid rgba(74,222,128,.2)", borderRadius:14 }}>
            <div style={{ fontSize:13, color:"#4ade80", fontWeight:600 }}>✓ BCA Graduate — Computer Science</div>
            <div style={{ fontSize:12, color:"rgba(238,238,248,.32)", marginTop:4 }}>Madurai Kamaraj University</div>
          </div>
        </motion.div>

        {/* Certs */}
        <motion.div initial={{ opacity:0, x:isMobile?0:50 }} animate={inView?{opacity:1,x:0}:{}}
          transition={{ duration:.7, delay:.14, ease:[.4,0,.2,1] }}
          className="glass inner-glow" style={{ padding:isMobile?22:32, borderRadius:24, position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#fbbf24,rgba(251,191,36,.4),transparent)", borderRadius:"24px 24px 0 0" }} />
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
            <div style={{ width:50, height:50, borderRadius:16, background:"rgba(251,191,36,.14)", border:"1px solid rgba(251,191,36,.28)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Award size={24} color="#fcd34d" />
            </div>
            <div>
              <h3 style={{ fontSize:19, fontWeight:700 }}>Certifications</h3>
              <div style={{ fontSize:12, color:"rgba(238,238,248,.32)", marginTop:2 }}>{R.certifications.length} achievements</div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {R.certifications.map((c,i) => (
              <motion.div key={i} initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}}
                transition={{ delay:.2+i*.08 }}
                whileHover={{ x:5 }}
                className="glass" style={{ padding:"13px 17px", borderRadius:16, display:"flex", alignItems:"center", gap:13 }}>
                <span style={{ fontSize:22, flexShrink:0 }}>{c.emoji}</span>
                <div style={{ overflow:"hidden", flex:1, minWidth:0 }}>
                  <div style={{ fontSize:13.5, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.name}</div>
                  <div style={{ fontSize:12, color:"rgba(238,238,248,.32)", marginTop:2 }}>{c.org}</div>
                </div>
                <Star size={13} color={c.color} fill={c.color} style={{ flexShrink:0 }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────

function Contact({ bp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const isMobile = bp === "mobile";
  const contacts = [
    { Icon:Mail, label:"Email", value:R.email, href:`mailto:${R.email}`, color:"#f472b6" },
    { Icon:Phone, label:"Phone", value:R.phone, href:`tel:${R.phone}`, color:"#a78bfa" },
    { Icon:Linkedin, label:"LinkedIn", value:"gobikrishnanpro", href:R.linkedin, color:"#38bdf8" },
    { Icon:Github, label:"GitHub", value:"Gobikrishnanpro", href:R.github, color:"#34d399" },
    { Icon:MapPin, label:"Location", value:R.location, href:null, color:"#fbbf24" },
    { Icon:Globe, label:"Portfolio", value:"gobikrishnan.pro", href:null, color:"#f472b6" },
  ];
  const cols = isMobile?1:bp==="tablet"?2:3;

  return (
    <section id="contact" style={{ padding:`clamp(80px,10vw,120px) clamp(16px,5vw,44px) ${isMobile?"180px":"220px"}`, maxWidth:1000, margin:"0 auto" }}>
      <SH badge="👋 Connect" title="Get In Touch" sub="Open to exciting opportunities, interesting collaborations, and great conversations about technology" accent="#f472b6" />

      <div ref={ref}>
        {/* CTA card */}
        <motion.div initial={{ opacity:0, y:50 }} animate={inView?{opacity:1,y:0}:{}}
          className="glass inner-glow"
          style={{ padding:isMobile?30:52, borderRadius:28, textAlign:"center", marginBottom:24, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 0%,rgba(167,139,250,.11),transparent 60%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#a78bfa,#38bdf8,transparent)", borderRadius:"28px 28px 0 0" }} />
          <motion.div
            animate={{ scale:[1,1.08,1], rotate:[0,5,-5,0] }}
            transition={{ duration:3, repeat:Infinity, repeatDelay:2 }}
            style={{ fontSize:isMobile?42:56, marginBottom:16, display:"inline-block" }}
          >🤝</motion.div>
          <h3 style={{ fontSize:isMobile?20:28, fontWeight:800, marginBottom:12 }}>Let's Build Something Great</h3>
          <p style={{ color:"rgba(238,238,248,.4)", fontSize:isMobile?14:16, maxWidth:500, margin:"0 auto 34px", lineHeight:1.8, fontWeight:300 }}>
            Whether it's a new project, a job opportunity, or just a chat about technology — I'm always open to connecting.
          </p>
          <a href={`mailto:${R.email}`} style={{ textDecoration:"none" }}>
            <motion.button whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:.97 }}
              style={{ background:"linear-gradient(135deg,#7c3aed,#0e86c8)", border:"none", borderRadius:16, color:"white", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600, padding:"15px 36px", cursor:"pointer", boxShadow:"0 10px 35px rgba(124,58,237,.48)" }}>
              Send me an email →
            </motion.button>
          </a>
        </motion.div>

        {/* Contact grid */}
        <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:13 }}>
          {contacts.map((c, i) => {
            const shared = {
              initial:{ opacity:0, y:30 },
              animate:inView?{opacity:1,y:0}:{},
              transition:{ delay:.2+i*.07, duration:.5 },
              whileHover:{ y:-4 },
              whileTap:{ scale:.97 },
            };
            const inner = (
              <>
                <div style={{ width:44, height:44, borderRadius:14, background:`${c.color}12`, border:`1px solid ${c.color}28`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <c.Icon size={19} color={c.color} />
                </div>
                <div style={{ overflow:"hidden", minWidth:0 }}>
                  <div style={{ fontSize:10.5, color:"rgba(238,238,248,.28)", textTransform:"uppercase", letterSpacing:".1em", marginBottom:3 }}>{c.label}</div>
                  <div style={{ fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.value}</div>
                </div>
              </>
            );
            return c.href ? (
              <motion.a key={i} {...shared} href={c.href} target={c.href.startsWith("http")?"_blank":"_self"} rel="noreferrer"
                className="glass inner-glow"
                style={{ padding:"17px 19px", borderRadius:20, display:"flex", alignItems:"center", gap:13, textDecoration:"none", color:"inherit" }}>
                {inner}
              </motion.a>
            ) : (
              <motion.div key={i} {...shared} className="glass inner-glow"
                style={{ padding:"17px 19px", borderRadius:20, display:"flex", alignItems:"center", gap:13, cursor:"default" }}>
                {inner}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:.8 }}
          style={{ textAlign:"center", marginTop:60, color:"rgba(238,238,248,.18)", fontSize:13, fontWeight:300 }}>
          <div>✦ Designed & Built by <span style={{ color:"rgba(238,238,248,.42)", fontWeight:600 }}>Gobi Krishnan K</span> ✦</div>
          <div style={{ marginTop:8, fontSize:11, letterSpacing:".06em", textTransform:"uppercase" }}>React · Framer Motion · Liquid Glass Design</div>
        </motion.div>
      </div>
    </section>
  );
}

// ── APP ──────────────────────────────────────────────────────────

export default function App() {
  const bp = useBreakpoint();
  const active = useActiveSection();
  useRipple();

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  }, []);

  const isMobile = bp === "mobile";

  return (
    <>
      <InjectStyles />
      <Background />
      <Particles />
      <ScrollBar />
      {!isMobile && <CustomCursor />}
      {!isMobile && <StatusBar active={active} />}
      {!isMobile && <Dock active={active} scrollTo={scrollTo} />}
      {isMobile && <TabBar active={active} scrollTo={scrollTo} />}

      <div style={{ position:"relative", zIndex:1 }}>
        <Hero scrollTo={scrollTo} bp={bp} />
        <Skills bp={bp} />
        <Experience bp={bp} />
        <Projects bp={bp} />
        <Education bp={bp} />
        <Contact bp={bp} />
      </div>
    </>
  );
}