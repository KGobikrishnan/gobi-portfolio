import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, type: 'spring', stiffness: 40 }}
      whileHover={{ scale: 1.02 }}
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${project.color}30`,
        cursor: 'pointer'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle at top right, ${project.glow}, transparent 70%)`,
        opacity: 0.8,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'var(--bg-core)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${project.color}50`
        }}>
          <project.MainIcon size={32} color={project.color} />
        </div>
        
        <div style={{
          padding: '6px 12px',
          borderRadius: '100px',
          background: `${project.color}15`,
          border: `1px solid ${project.color}40`,
          color: project.color,
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {project.status}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '8px' }}>{project.name}</h3>
        <p style={{ color: project.color, fontWeight: 500, fontSize: '14px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {project.sub}
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '15px' }}>
          {project.desc}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '16px' }}>
        {project.tech.map((t, i) => (
          <span key={i} style={{
            padding: '6px 12px',
            background: 'var(--bg-glass-heavy)',
            border: '1px solid var(--border-glass)',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'var(--text-muted)'
          }}>
            {t}
          </span>
        ))}
      </div>
      
      <div style={{ position: 'absolute', bottom: '32px', right: '32px', zIndex: 1 }}>
        <motion.div
           whileHover={{ rotate: 45, scale: 1.1 }}
           style={{ color: 'var(--text-muted)' }}
        >
          <ExternalLink size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            color: 'var(--accent-pink)', 
            fontWeight: 600, 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase',
            fontSize: '14px',
            display: 'block',
            marginBottom: '16px'
          }}>Works</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
            A selection of complex applications and elegant solutions architected from the ground up.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{
          display: 'grid',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
