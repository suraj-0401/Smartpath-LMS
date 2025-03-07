import React, { Suspense, lazy } from 'react';
import Spinner from './Home/Spinner';
const Navbar = lazy(() => import('./Home/Navbar'));
const Stats = lazy(() => import('./Home/Stats'));
const Benefits = lazy(() => import('./Home/Benefits'));
const Features = lazy(() => import('./Home/Features'));
const FAQs = lazy(() => import('./Home/FAQs'));
const ContactForm = lazy(() => import('./Home/ContactForm'));
const Footer = lazy(() => import('./Home/Footer'));
const Testimonials = lazy(() => import('./Home/Testimonials'));
const HeroSection = lazy(() => import('./Home/HeroSection'));

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