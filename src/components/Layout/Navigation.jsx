import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../data/portfolioData';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      top: isMobile ? 'auto' : '32px',
      bottom: isMobile ? '24px' : 'auto',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }}>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ pointerEvents: 'auto' }}
      >
      <div 
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '12px' : '8px',
          padding: isMobile ? '12px 24px' : '8px 8px',
          borderRadius: '100px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: isMobile ? '8px' : '10px 20px',
                borderRadius: '100px',
                border: 'none',
                background: 'transparent',
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '100px',
                      background: 'var(--border-glass)',
                      zIndex: -1,
                    }}
                  />
                )}
              </AnimatePresence>
              
              <link.Icon size={isMobile ? 24 : 18} style={{ opacity: isActive ? 1 : 0.7 }} />
              {!isMobile && <span>{link.label}</span>}
            </button>
          );
        })}
      </div>
      </motion.nav>
    </div>
  );
}
