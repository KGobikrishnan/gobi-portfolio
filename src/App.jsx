import React from 'react';
import SmoothScroll from './components/Layout/SmoothScroll';
import Navigation from './components/Layout/Navigation';
import LiveBackground from './components/Layout/LiveBackground';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

import './index.css';

export default function App() {
  return (
    <SmoothScroll>
      <LiveBackground />
      <Navigation />
      
      <main style={{ position: 'relative' }}>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}