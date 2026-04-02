import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '160px 24px 80px',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Background Glow */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '500px',
          background: 'radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.3), transparent 70%)',
          opacity: opacity,
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <motion.div
        style={{ scale, opacity, zIndex: 1, width: '100%', maxWidth: '800px', textAlign: 'center' }}
      >
        <span style={{
          color: 'var(--accent-violet)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '14px',
          display: 'block',
          marginBottom: '24px'
        }}>
          What's Next
        </span>

        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '32px', lineHeight: 1.1 }}>
          Let's Build Something <br /><span className="text-gradient">Extraordinary</span>
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 64px', lineHeight: 1.6 }}>
          I am currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        {/* Contact Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
          <motion.a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontSize: '18px',
              fontWeight: 600,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
              border: '1px solid rgba(139, 92, 246, 0.4)'
            }}
          >
            <Mail size={24} />
            Say Hello
          </motion.a>
        </div>

        {/* Social / Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          paddingTop: '48px',
          borderTop: '1px solid var(--border-glass)'
        }}>
          <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div whileHover={{ y: -4 }} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <Linkedin size={28} color="var(--accent-cyan)" />
              <span style={{ fontWeight: 500 }}>LinkedIn</span>
            </motion.div>
          </a>

          <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div whileHover={{ y: -4 }} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <Github size={28} color="var(--text-primary)" />
              <span style={{ fontWeight: 500 }}>GitHub</span>
            </motion.div>
          </a>

          <motion.div whileHover={{ y: -4 }} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <MapPin size={28} color="var(--accent-pink)" />
            <span style={{ fontWeight: 500, fontSize: '14px', textAlign: 'center' }}>{PORTFOLIO_DATA.location}</span>
          </motion.div>

          <a href={`tel:${PORTFOLIO_DATA.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div whileHover={{ y: -4 }} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <Phone size={28} color="var(--accent-violet)" />
              <span style={{ fontWeight: 500, fontSize: '14px' }}>{PORTFOLIO_DATA.phone}</span>
            </motion.div>
          </a>
        </div>

      </motion.div>

      {/* Footer text */}
      <div style={{ position: 'absolute', bottom: '24px', color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center', width: '100%', zIndex: 1 }}>
        Designed and built by Gobi Krishnan. <br />
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </section>
  );
}
