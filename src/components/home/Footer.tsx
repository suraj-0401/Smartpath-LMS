import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
      { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ];

  const productLinks = [
    { name: 'Smart Attendance', href: '#' },
    { name: 'Analytics Dashboard', href: '#' },
    { name: 'Parent Portal', href: '#' },
    { name: 'School Management', href: '#' }
  ];

  const socialLinks = [
    { 
      Icon: Facebook, 
      href: 'https://www.facebook.com/share/PchY6FwysKKdd7EZ/?mibextid=LQQJ4d',
      ariaLabel: 'Visit SmartPath Facebook page'
    },
    { 
      Icon: Instagram, 
      href: 'https://www.instagram.com/smartpath.co.in/',
      ariaLabel: 'Follow SmartPath on Instagram'
    },
    { 
      Icon: Linkedin, 
      href: 'https://www.linkedin.com/company/smartpath-in/',
      ariaLabel: 'Connect with SmartPath on LinkedIn'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#8000FF]/5 via-[#9747FF]/10 to-[#8000FF]/5">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-[#8000FF]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
                Smart Path
              </span>
            </div>
            <p className="text-gray-600">
              Transforming education management with innovative solutions for schools and institutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, ariaLabel }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center
                           text-[#8000FF] hover:bg-[#8000FF] hover:text-white 
                           transition-all duration-300 shadow-sm"
                  whileHover={{ y: -3 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-600 hover:text-[#8000FF] flex items-center gap-2
                                               transition-colors duration-300">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Our Products</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-600 hover:text-[#8000FF] flex items-center gap-2
                                               transition-colors duration-300">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <p className="text-gray-600">
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-purple-100 bg-white/80
                           focus:border-[#8000FF] focus:ring-2 focus:ring-[#8000FF]/20 
                           outline-none transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8000FF] text-white 
                           px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#6700D1] 
                           transition-colors duration-300 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-purple-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Smart Path. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-[#8000FF] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#8000FF] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#8000FF] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;