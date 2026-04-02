import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function StarBackground() {
  const ref = useRef();
  const [dotColor, setDotColor] = useState('#ffffff');
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setDotColor(mediaQuery.matches ? '#0f172a' : '#ffffff');
    const handler = (e) => setDotColor(e.matches ? '#0f172a' : '#ffffff');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const [positions] = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          transparent 
          color={dotColor} 
          size={0.025} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.4} 
        />
      </points>
    </group>
  );
}

export default function LiveBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden', background: 'var(--bg-core)' }}>
      {/* Three.js Canvas */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.8 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      {/* Aurora Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%', left: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, var(--accent-violet) 0%, transparent 60%)',
          opacity: 0.15, filter: 'blur(80px)',
          animation: 'aurora1 25s linear infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%', right: '-10%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 60%)',
          opacity: 0.1, filter: 'blur(80px)',
          animation: 'aurora2 30s linear infinite'
        }}
      />
    </div>
  );
}
