
import React, { useRef } from 'react';
import { TRUST_BADGES } from '../constants';
import type { TrustBadge } from '../types';
import useOnScreen from '../hooks/useOnScreen';

const TrustBadgeCard: React.FC<{ badge: TrustBadge, index: number }> = ({ badge, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div 
      ref={ref}
      className={`bg-secondary-powder/60 p-6 rounded-lg text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center justify-center">
        <span className="text-2xl text-accent-green mr-2">{badge.icon}</span>
        <h3 className="font-bold text-lg text-deep-charcoal">{badge.text}</h3>
      </div>
      <p className="text-gray-600 mt-1 text-sm">{badge.subtext}</p>
    </div>
  );
}

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal">You're in Safe Hands</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We promise top-notch medical care and friendly service every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TRUST_BADGES.map((badge, index) => (
            <TrustBadgeCard key={badge.text} badge={badge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;