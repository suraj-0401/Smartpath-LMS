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
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password."
    },
    {
      question: "Can I access the platform on multiple devices?",
      answer: "Yes! You can access SmartPath on any device through our web platform. Your progress and settings will sync automatically across all your devices."
    },
    {
      question: "How do I track my learning progress?",
      answer: "Your learning progress is automatically tracked in your dashboard. You can view detailed analytics, completion rates, and performance metrics in the 'Progress' section."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed securely through our payment gateway."
    }
  ];

  const helpCategories = [
    {
      icon: <Laptop className="w-8 h-8 text-[#052D56]" />,
      title: "Getting Started",
      description: "New to SmartPath? Learn the basics and set up your account."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#052D56]" />,
      title: "Course Materials",
      description: "Access study materials, practice tests, and resources."
    },
    {
      icon: <Users className="w-8 h-8 text-[#052D56]" />,
      title: "Community Support",
      description: "Connect with other learners and share experiences."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#052D56]" />,
      title: "Account & Security",
      description: "Manage your account settings and security preferences."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#052D56]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {helpCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button className="text-[#052D56] font-medium flex items-center hover:text-blue-700">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <Book className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Documentation</h3>
              <p className="text-gray-600 mb-4">Browse our detailed documentation for in-depth learning.</p>
              <button className="text-[#052D56] font-medium">View Docs</button>
            </div>
            <div className="text-center p-6">
              <HelpCircle className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Help Center</h3>
              <p className="text-gray-600 mb-4">Find answers to frequently asked questions.</p>
              <button className="text-[#052D56] font-medium">Visit Help Center</button>
            </div>
            <div className="text-center p-6">
              <MessageCircle className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team.</p>
              <button className="text-[#052D56] font-medium">Start Chat</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#052D56]">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our platform.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white p-6 rounded-lg border border-gray-200 hover:border-[#052D56] transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#052D56]">{faq.question}</h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-[#052D56]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#052D56]" />
                    )}
                  </div>
                  {expandedFAQ === index && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Still Need Help Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#052D56]">Still Need Help?</h2>
            <p className="text-gray-600 mb-8">Our support team is available 24/7 to assist you.</p>
            <button className="bg-[#052D56] text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-300 flex items-center mx-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>

      {/* Support Resources */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
            <FileText className="w-8 h-8 text-[#052D56] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#052D56]">User Guides</h3>
            <p className="text-gray-600">Step-by-step guides to help you make the most of our platform.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
            <Book className="w-8 h-8 text-[#052D56] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Video Tutorials</h3>
            <p className="text-gray-600">Watch our video tutorials for visual learning and guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
            <Users className="w-8 h-8 text-[#052D56] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Community Forums</h3>
            <p className="text-gray-600">Join our community forums to connect with other users.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
