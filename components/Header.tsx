import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-soft-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-lg font-extrabold text-deep-charcoal tracking-tight">Mounty Health Center</span>
        </a>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={trackWhatsAppClick}
          className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 hover:scale-105">
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;