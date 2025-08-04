import React, { useState, useEffect, useRef } from 'react';
import FloatingParticles from './FloatingParticles';
import useOnScreen from '../hooks/useOnScreen';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const AnimatedStat: React.FC<{ finalValue: number; label: string; suffix?: string }> = ({ finalValue, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const end = finalValue;
      if (start === end) return;

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, finalValue]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-5xl font-extrabold text-primary">
        {count}{suffix}
      </p>
      <p className="text-sm font-medium text-gray-500 mt-1">{label}</p>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-soft-white to-secondary-powder">
      <FloatingParticles colorClass="bg-primary/20" />
      <div className="relative z-10 p-6 flex flex-col items-center w-full max-w-4xl mx-auto">
        <div className="absolute top-0 -mt-24 -ml-32 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 -right-20 -mb-24 w-80 h-80 bg-accent-green rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="bg-white/60 backdrop-blur-md rounded-full px-5 py-2 text-sm font-semibold text-primary border border-black/5 shadow-sm mb-6">
          Villa & Hotel Service in Bali
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-sm">
          <div className="text-gray-800">Bali Belly</div>
          <div className="text-primary">Rescue</div>
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg text-gray-700 font-normal leading-relaxed">
          Don't let stomach issues ruin your trip. Get fast, effective relief from Bali Belly delivered directly to your villa or hotel.
        </p>

        <div className="grid grid-cols-3 gap-8 md:gap-12 mt-10 mb-12">
          <AnimatedStat finalValue={90} label="Relief Within" suffix=" Min" />
          <AnimatedStat finalValue={100} label="Rehydration" suffix="%" />
          <AnimatedStat finalValue={24} label="Service" suffix="/7" />
        </div>

        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick} 
          className="animate-pulse-glow bg-primary text-white font-bold text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-primary/50">
          Get Help Now
        </a>
      </div>
    </section>
  );
};

export default Hero;