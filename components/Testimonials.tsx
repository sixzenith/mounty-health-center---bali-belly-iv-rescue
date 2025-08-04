import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-premium-gold">
    {Array.from({ length: rating }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[85vw] sm:w-80 md:w-96 mx-4 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-lg flex flex-col">
    <div className="flex-grow">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
    </div>
    <div className="mt-6 border-t border-gray-200 pt-4">
      <p className="font-bold text-deep-charcoal">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS]; // Duplicate for seamless loop

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary-powder to-soft-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal">What Our Recovered Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Travelers from around the world trust us to get them back on their feet and enjoying their Bali vacation.
          </p>
        </div>
      </div>
      <div className="w-full group flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
        <div className="flex animate-scroll-x group-hover:[animation-play-state:paused]">
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;