import React, { Suspense, lazy } from 'react';
import Spinner from './components/Spinner';
const Navbar = lazy(() => import('./components/Navbar'));
const Stats = lazy(() => import('./components/Stats'));
const Benefits = lazy(() => import('./components/Benefits'));
const Features = lazy(() => import('./components/Features'));
const FAQs = lazy(() => import('./components/FAQs'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const HeroSection = lazy(() => import('./components/HeroSection'));

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(124 58 237 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(124 58 237 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <main>
            <HeroSection />
            <Stats />
            <Benefits />
            <Features />
            <Testimonials />
            <FAQs />
            <ContactForm />
          </main>
          <Footer />
        </Suspense>
      </div>

      {/* Gradient Orbs */}
      <div className="fixed top-1/4 -right-64 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="fixed top-1/3 -left-64 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
}

export default App;