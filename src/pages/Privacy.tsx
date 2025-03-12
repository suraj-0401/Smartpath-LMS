import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    // Handle smooth scrolling when clicking on anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          // Update URL without page jump
          window.history.pushState({}, '', target.hash);
        }
      }
    };

    // Add click event listeners to all anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Privacy Policy
          </h1>

          <p className="text-center text-gray-600 mb-12">Last updated: December 10, 2023</p>

          <div className="mb-12">
            <p className="text-gray-600 mb-6">
              Thank you for joining SmartPath. We at SmartPath ("SmartPath", "we", "us") respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights regarding your personal data.
            </p>
            <p className="text-gray-600 mb-6">
              Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use SmartPath websites, mobile applications, APIs, or related services. It also applies to prospective customers of our business and enterprise products. The Services are governed by this Policy and any other rules, policies or guidelines published on the Platform as applicable to you.
            </p>
            <p className="text-gray-600">
              By using the Services, you agree to the terms of this Privacy Policy. You shouldn't use the Services if you don't agree with this Privacy Policy or any other agreement that governs your use of the Services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Table of Contents</h2>
            <ul className="space-y-2 text-purple-600">
              <li><a href="#scope" className="hover:text-purple-800">1. Scope and Consent</a></li>
              <li><a href="#data-we-get" className="hover:text-purple-800">2. What Data We Get</a></li>
              <li><a href="#how-we-get" className="hover:text-purple-800">3. How We Get Data About You</a></li>
              <li><a href="#children" className="hover:text-purple-800">4. Use of the Platform/Services by Children</a></li>
              <li><a href="#data-sharing" className="hover:text-purple-800">5. Who We Share Your Data With</a></li>
              <li><a href="#data-usage" className="hover:text-purple-800">6. What We Use Your Data For</a></li>
              <li><a href="#security" className="hover:text-purple-800">7. Security</a></li>
              <li><a href="#rights" className="hover:text-purple-800">8. Your Rights</a></li>
              <li><a href="#updates" className="hover:text-purple-800">9. Updates and Modifications to Privacy Policy</a></li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section id="scope">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Scope and Consent</h2>
              <p className="text-gray-600">
                When you participate in or begin to use our products, services, content, features, technologies, or functions using our websites, associated sites, portals, applications, and services, you agree to this policy, and it becomes effective. However, Smartpath will not be held liable for any breach or misuse of information gathered and is not in charge of how third-party customers or websites handle information obtained through our tools, platform, and services.
              </p>
            </section>

            <section id="data-we-get">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. What Data We Get</h2>
              <p className="text-gray-600 mb-4">
                We collect Required data from you directly, like information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with Smartpath. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1. Data provided by you to us</h3>
              <p className="text-gray-600 mb-4">
                Different data shall be collected from and about you depending on your consumption of our services. When you create an account and use the Services, including through a third-party platform, we collect any data you provide directly, including:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium">Account Data:</span> Basic information such as name, email address, phone number, country of residence, and password.
                </li>
                <li>
                  <span className="font-medium">Public Profile Information:</span> Information for your public profile on the Platform.
                </li>
                <li>
                  <span className="font-medium">Shared Content:</span> Content you share through courses, reviews, questions, or messages.
                </li>
                <li>
                  <span className="font-medium">Payment Data:</span> Information required for processing payments and transactions.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.2. Information We Gather Automatically</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium">System Information:</span> Technical information about your device and system.
                </li>
                <li>
                  <span className="font-medium">Usage Information:</span> Data about how you use our platform.
                </li>
                <li>
                  <span className="font-medium">Geographic Information:</span> Location data based on IP address.
                </li>
              </ul>
            </section>

            <section id="how-we-get">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Get Data About You</h2>
              <p className="text-gray-600 mb-4">
                We collect data through cookies and related tracking technologies. You can choose not to have your data collected by using some of these tools.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1. Cookies and Data Collection Tools</h3>
              <p className="text-gray-600">
                We use cookies to collect, store, and share information about your activity on SmartPath and other websites. These help us improve your experience and remember your preferences.
              </p>
            </section>

            <section id="children">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Use of the Platform/Services by Children</h2>
              <p className="text-gray-600">
                You must fulfill the "Age Requirements" to register on the platform. If you are a "Minor" or "Child," only your parent may register on your behalf and grant you access under their supervision.
              </p>
            </section>

            <section id="data-sharing">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Who We Share Your Data With</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>With Your instructors (excluding email address)</li>
                <li>With SmartPath Affiliates</li>
                <li>With other students and instructors (based on your preferences)</li>
                <li>With service providers and contractors</li>
                <li>With analytics services</li>
                <li>For social media functionalities</li>
                <li>For advertising purposes (if applicable)</li>
                <li>For security and legal compliance</li>
              </ul>
            </section>

            <section id="data-usage">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. What We Use Your Data For</h2>
              <p className="text-gray-600 mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide and manage services</li>
                <li>Process payments</li>
                <li>Handle support requests</li>
                <li>Ensure platform security</li>
                <li>Improve user experience</li>
                <li>Analyze usage patterns</li>
                <li>Comply with legal requirements</li>
              </ul>
            </section>

            <section id="security">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Security</h2>
              <p className="text-gray-600">
                SmartPath implements appropriate security measures to protect against unauthorized access, modification, disclosure, or destruction of personal information. However, no system can be completely secure, and we cannot guarantee absolute security of your information.
              </p>
            </section>

            <section id="rights">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct your personal data</li>
                <li>Delete your personal data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section id="updates">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Updates and Modifications to Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Users will be notified of significant changes through email, in-product notices, or other legally required methods. Continued use of our services after changes indicates acceptance of the updated policy.
              </p>
            </section>

            <div className="mt-12">
              <p className="text-gray-600 mb-4">
                For any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:support@SmartPath.co.in" className="text-purple-600 hover:text-purple-800">support@SmartPath.co.in</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;