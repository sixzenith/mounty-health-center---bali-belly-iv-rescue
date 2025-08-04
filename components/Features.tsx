import React, { useRef } from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';
import useOnScreen from '../hooks/useOnScreen';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`relative bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent-green"></div>
      <div className="flex items-start space-x-4">
        <div className="text-3xl mt-1 group-hover:animate-bounce">{feature.icon}</div>
        <div>
          <h3 className="font-bold text-lg text-deep-charcoal">{feature.title}</h3>
          <p className="text-gray-600 mt-1 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal">Fast Relief For Bali Belly Symptoms</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our IV therapy is specifically designed to target the worst symptoms of Bali Belly and help you recover quickly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;