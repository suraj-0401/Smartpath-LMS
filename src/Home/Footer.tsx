import { Facebook, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-[#052D56] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold">Smartpath</h2>
            <p className="text-gray-300 px-8 -ml-8 mt-2">
              Transforming education through AI-powered personalized learning experiences.
            </p>
            <div className="flex space-x-4 mt-2 -ml-2">
              <a href="https://www.facebook.com/share/PchY6FwysKKdd7EZ/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/smartpath-in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/smartpath.co.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/about" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/features" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Features
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Pricing
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Contact
                </RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/help" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Help Center
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/docs" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Documentation
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/api" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> API Reference
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/status" className="text-gray-300 hover:text-white flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Status
                </RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>support@smartpath.co.in</li>
              <li>Chandigarh, India</li>
              <li>+91 98761 72758</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Smartpath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;