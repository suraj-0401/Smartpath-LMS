
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Features from './components/Features';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <Stats />
      <Benefits />
      <Features />
      <Testimonials/>
      <FAQs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;