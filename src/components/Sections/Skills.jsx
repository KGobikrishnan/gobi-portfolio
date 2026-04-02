import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 50 }}
      className="timeline-item"
    >
      {/* Node */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px'
      }}>
        <div className="timeline-node" style={{
          borderRadius: '50%',
          background: exp.current ? 'var(--accent-violet)' : 'var(--bg-glass)',
          border: '1px solid var(--border-glass)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: exp.current ? '0 0 20px rgba(139, 92, 246, 0.4)' : 'none',
          position: 'relative',
          zIndex: 2
        }}>
          <exp.icon size={20} color={exp.color} />
        </div>
        {/* Connection Line */}
        {index !== PORTFOLIO_DATA.experience.length - 1 && (
          <div style={{
            width: '2px',
            flex: 1,
            background: 'linear-gradient(to bottom, var(--border-glass), transparent)',
            borderRadius: '100px'
          }} />
        )}
      </div>

      {/* Content */}
      <div className="glass-panel timeline-content" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 className="timeline-title" style={{ marginBottom: '4px' }}>{exp.role}</h3>
            <div style={{ color: exp.color, fontWeight: 600, fontSize: '15px' }}>{exp.company}</div>
          </div>
          <div style={{
            padding: '6px 16px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border-glass)',
            fontSize: '13px',
            color: 'var(--text-secondary)'
          }}>
            {exp.period}
          </div>
        </div>
        <ul style={{ 
          color: 'var(--text-secondary)',
          paddingLeft: '20px',
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          lineHeight: 1.6
        }}>
          {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  // Repeated items for seamless infinite marquee loop
  const marqueeItems = [...PORTFOLIO_DATA.skills.flatMap(s => s.items), ...PORTFOLIO_DATA.skills.flatMap(s => s.items)];

  return (
    <section id="skills" ref={containerRef} style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px', overflow: 'hidden' }}>
          <motion.div style={{ y: titleY }}>
            <span style={{ 
              color: 'var(--accent-cyan)', 
              fontWeight: 600, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase',
              fontSize: '14px',
              display: 'block',
              marginBottom: '16px'
            }}>Expertise</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>
              Crafting Digital <span className="text-gradient">Masterpieces</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
              A specialized skill set engineered for high-performance and interactive web applications.
            </p>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          marginBottom: '100px',
          display: 'flex',
          overflow: 'hidden',
          background: 'var(--bg-glass)',
          borderTop: '1px solid var(--border-glass)',
          borderBottom: '1px solid var(--border-glass)',
          padding: '24px 0'
        }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
            style={{ display: 'flex', gap: '48px', paddingRight: '48px', alignItems: 'center' }}
          >
            {marqueeItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <item.icon size={36} color="currentColor" style={{ opacity: 0.4 }} />
                <span style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                  fontWeight: 700, 
                  color: 'transparent',
                  WebkitTextStroke: '1px var(--text-muted)',
                  whiteSpace: 'nowrap'
                }}>
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '120px' }}>
          {PORTFOLIO_DATA.skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel"
              style={{
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderTop: `2px solid ${skill.color}50`
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle at center, ${skill.bg}, transparent 50%)`,
                opacity: 0.5,
                zIndex: 0,
                pointerEvents: 'none'
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <skill.Icon size={36} color={skill.color} style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{skill.cat}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {skill.items.map((item, idx) => (
                    <span key={idx} style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-glass)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: 500
                    }}>
                      <item.icon size={16} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '64px' }}>Professional <span className="text-gradient">Journey</span></h2>
          <div style={{ position: 'relative' }}>
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
