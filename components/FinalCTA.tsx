import React from 'react';
import FloatingParticles from './FloatingParticles';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const FinalCTA: React.FC = () => {
  return (
    <section id="book-now" className="relative py-20 sm:py-28 bg-gradient-to-br from-secondary-powder to-secondary-light overflow-hidden">
      <FloatingParticles colorClass="bg-primary/20" count={15} />
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-charcoal leading-tight">
          Don't Lose a Day of Your Vacation
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Our medical team is on standby to help you feel better, fast. Get back to enjoying the beauty of Bali without delay.
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={trackWhatsAppClick}
          className="animate-pulse-glow mt-12 bg-primary text-white font-bold text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-primary/50">
          Book Your Recovery Now
        </a>
        <div className="mt-12 flex items-center bg-white/50 backdrop-blur-sm rounded-full p-2 pl-4 border border-primary/20">
          <span className="text-accent-green text-xl mr-2">✓</span>
          <span className="text-sm font-medium text-deep-charcoal">100% Satisfaction Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;