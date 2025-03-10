import React, { useState } from 'react';
import { Search, Book, HelpCircle, MessageCircle, FileText, ArrowRight, ChevronDown, ChevronUp, Laptop, BookOpen, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and enter your email to receive reset instructions."
    },
    {
      question: "Can I use multiple devices?",
      answer: "Yes, access SmartPath on any device via our web platform with automatic sync."
    },
    {
      question: "How do I track my progress?",
      answer: "View your progress, analytics, and metrics in the 'Progress' section of your dashboard."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept cards, UPI, net banking, and digital wallets through our secure gateway."
    }
  ];

  const helpCategories = [
    { icon: <Laptop className="w-6 h-6 text-black" />, title: "Getting Started", description: "Learn the basics and set up your account" },
    { icon: <BookOpen className="w-6 h-6 text-black" />, title: "Course Materials", description: "Access study resources and tests" },
    { icon: <Users className="w-6 h-6 text-black" />, title: "Community", description: "Connect with other learners" },
    { icon: <Shield className="w-6 h-6 text-black" />, title: "Account & Security", description: "Manage your settings" }
  ];

  const quickLinks = [
    { icon: <Book className="w-8 h-8 text-black" />, title: "Documentation", description: "Browse detailed guides", buttonText: "View Docs" },
    { icon: <HelpCircle className="w-8 h-8 text-black" />, title: "Help Center", description: "Find common answers", buttonText: "Visit Help" },
    { icon: <MessageCircle className="w-8 h-8 text-black" />, title: "Live Chat", description: "Get instant support", buttonText: "Start Chat" }
  ];

  const resources = [
    { icon: <FileText className="w-6 h-6 text-black" />, title: "User Guides", description: "Step-by-step platform guides" },
    { icon: <Book className="w-6 h-6 text-black" />, title: "Video Tutorials", description: "Visual learning resources" },
    { icon: <Users className="w-6 h-6 text-black" />, title: "Forums", description: "Connect with our community" }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">How Can We Help You?</h1>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-black">{category.title}</h3>
                <p className="text-sm mb-4 text-black">{category.description}</p>
                <button className="text-sm font-medium flex items-center hover:underline text-black">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {quickLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-sm mb-4 text-black">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-auto bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {item.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">Frequently Asked Questions</h2>
            <p className="text-sm text-black">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <h3 className="text-base font-semibold text-black">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-black" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="p-4 pt-0 text-sm text-black">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">Still Need Help?</h2>
          <p className="text-sm mb-6 text-black">Our support team is here 24/7</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-6 py-2.5 rounded-lg flex items-center mx-auto gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Contact Support
          </motion.button>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-sm text-black">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;