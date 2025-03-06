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
    <div className="min-h-screen bg-white">
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <HeroSection />
        <Stats />
        <Benefits />
        <Features />
        <Testimonials />
        <FAQs />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;