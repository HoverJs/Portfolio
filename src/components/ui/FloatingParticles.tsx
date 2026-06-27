'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  style: React.CSSProperties;
}

export const FloatingParticles: React.FC<{ count?: number }> = ({ count = 30 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() > 0.65 ? 4 : 2; // 2px or 4px pixel squares
      const left = Math.random() * 100; // Random horizontal starting point
      const delay = Math.random() * 20; // Staggered start delay up to 20s
      const duration = 12 + Math.random() * 18; // 12s to 30s float duration
      const opacity = 0.15 + Math.random() * 0.55;
      
      const colors = ['#8B5CF6', '#A855F7', '#22D3EE', '#FFFFFF'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        style: {
          position: 'absolute',
          left: `${left}%`,
          bottom: '-20px',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          opacity: opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          boxShadow: size === 4 ? `0 0 8px ${color}` : 'none',
        } as React.CSSProperties,
      };
    });
    setParticles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          style={p.style}
          className="animate-float-up"
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
