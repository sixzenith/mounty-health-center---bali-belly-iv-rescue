
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import TrustIndicators from './components/TrustIndicators';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <TrustIndicators />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;