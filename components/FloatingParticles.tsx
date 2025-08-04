
import React from 'react';

const FloatingParticles: React.FC<{ count?: number; colorClass?: string }> = ({ count = 20, colorClass = 'bg-primary-light' }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 3 + 2;
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 5 + 5}s`,
        };
        return (
          <div
            key={i}
            className={`particle absolute rounded-full ${colorClass}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
