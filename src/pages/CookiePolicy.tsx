import React from 'react';
import { Shield, Cookie, Lock, Settings } from 'lucide-react';

const CookiePolicy: React.FC = () => {

  const handleContactClick = () => {
    const supportEmail = 'support@smartpath.co.in';
    const subject = encodeURIComponent('Question about Cookie Policy');
    const body = encodeURIComponent('Dear SmartPath Team,\n\nI have a question about your Cookie Policy.\n\nBest regards');
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${supportEmail}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: December 10, 2023
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-16">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#what-are-cookies" className="block text-blue-600 hover:underline">1. What Are Cookies</a>
            <a href="#how-we-use" className="block text-blue-600 hover:underline">2. How We Use Them</a>
            <a href="#types-of-cookies" className="block text-blue-600 hover:underline">3. Types of Cookies We Use</a>
            <a href="#managing-preferences" className="block text-blue-600 hover:underline">4. Managing Your Cookie Preferences</a>
            <a href="#updates-to-this-policy" className="block text-blue-600 hover:underline">5. Updates to This Policy</a>
            <a href="#questions-about-our-cookie-policy" className="block text-blue-600 hover:underline">6. Questions About Our Cookie Policy?</a>
          </nav>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div id="what-are-cookies" className="bg-white p-6 rounded-xl shadow-sm">
            <Cookie className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">1. What Are Cookies</h3>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website.
              They help us provide you with a better experience.
            </p>
          </div>
          <div id="how-we-use" className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">2. How We Use Them</h3>
            <p className="text-gray-600">
              We use cookies to understand how you use our website and to improve our services,
              including personalized learning experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Lock className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your Privacy</h3>
            <p className="text-gray-600">
              We respect your privacy and ensure that all data collected through cookies is
              handled securely and in accordance with our privacy policy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Settings className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your Control</h3>
            <p className="text-gray-600">
              You can control and/or delete cookies as you wish. You can delete all cookies
              that are already on your device and set most browsers to prevent them from being placed.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div id="types-of-cookies" className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Essential Cookies</h3>
                <p className="text-gray-600">
                  These cookies are necessary for the website to function properly. They enable core
                  functionality such as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Performance Cookies</h3>
                <p className="text-gray-600">
                  These cookies help us understand how visitors interact with our website by collecting
                  and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Functional Cookies</h3>
                <p className="text-gray-600">
                  These cookies enable the website to provide enhanced functionality and personalization.
                  They may be set by us or by third-party providers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Targeting Cookies</h3>
                <p className="text-gray-600">
                  These cookies may be set through our site by our advertising partners to build a
                  profile of your interests and show you relevant adverts on other sites.
                </p>
              </div>
            </div>
          </section>

          <section id="managing-preferences">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Your Cookie Preferences</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                Most web browsers allow some control of most cookies through the browser settings.
                To find out more about cookies, including how to see what cookies have been set,
                visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">Find out how to manage cookies on popular browsers:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Google Chrome</li>
                  <li>Microsoft Edge</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Internet Explorer</li>
                  <li>Opera</li>
                  <li>Apple Safari</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="updates-to-this-policy">
            <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time in order to reflect changes to the
                cookies we use or for other operational, legal, or regulatory reasons. Please therefore
                revisit this Cookie Policy regularly to stay informed about our use of cookies and
                related technologies.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div id="questions-about-our-cookie-policy" className="mt-16 text-center bg-black text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Questions About Our Cookie Policy?
          </h2>
          <p className="mb-8">
            If you have any questions about our use of cookies or your personal data, please
            contact our privacy team.
          </p>
          <button onClick={handleContactClick} className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Contact Privacy Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;