import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ChevronDown, Download, Github } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import resumePdf from '../../assets/resume.pdf';

const letterAnimation = {
  hidden: { y: 100, opacity: 0, rotate: 10 },
  visible: { 
    y: 0, 
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function Hero() {
  const containerRef = useRef(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      id="home"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          width: '100%', 
          maxWidth: '1000px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          opacity: opacityText
        }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="glass-panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 24px',
            borderRadius: '100px',
            marginBottom: '40px',
            border: '1px solid var(--border-glass)'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Floating Avatar & Accents */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
          style={{ position: 'relative', marginBottom: '40px' }}
        >
          <motion.div
            style={{ scale: scaleImage }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
              padding: '4px',
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.4)'
            }}>
              <img 
                src={profileImg} 
                alt="Gobi Krishnan" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block'
                }} 
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Massive Name Reveal */}
        <h1 
          className="text-gradient" 
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 6.5rem)', 
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden' // Important for the slide-up reveal
          }}
        >
          {PORTFOLIO_DATA.name.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'inline-flex', overflow: 'hidden', marginRight: '0.3em' }}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 + (wordIndex * 0.1) + (charIndex * 0.05) }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Role & Summary */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: 1.6,
            marginBottom: '48px',
            fontWeight: 300
          }}
        >
          Creative Engineer focusing on immersive digital experiences. Bridging the gap between interactive design and robust system architecture.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href={resumePdf} download="Gobikrishnan_Resume.pdf" style={{ textDecoration: 'none' }}>
            <button className="glass-panel" style={{
              padding: '16px 32px',
              borderRadius: '100px',
              border: 'none',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Download size={18} />
              Grab Resume
            </button>
          </a>
          
          <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button className="glass-panel" style={{
              padding: '16px 32px',
              borderRadius: '100px',
              border: '1px solid var(--border-glass)',
              background: 'var(--bg-glass-heavy)',
              color: 'var(--text-primary)',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Github size={18} />
              View Code
            </button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 2, duration: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)'
          }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Discover</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
