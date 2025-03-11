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
    { icon: <Laptop className="w-8 h-8 text-[#8000FF]" />, title: "Getting Started", description: "Learn the basics and set up your account" },
    { icon: <BookOpen className="w-8 h-8 text-[#8000FF]" />, title: "Course Materials", description: "Access study resources and tests" },
    { icon: <Users className="w-8 h-8 text-[#8000FF]" />, title: "Community", description: "Connect with other learners" },
    { icon: <Shield className="w-8 h-8 text-[#8000FF]" />, title: "Account & Security", description: "Manage your settings" }
  ];

  const quickLinks = [
    { icon: <Book className="w-10 h-10 text-[#8000FF]" />, title: "Documentation", description: "Browse detailed guides", buttonText: "View Docs" },
    { icon: <HelpCircle className="w-10 h-10 text-[#8000FF]" />, title: "Help Center", description: "Find common answers", buttonText: "Visit Help" },
    { icon: <MessageCircle className="w-10 h-10 text-[#8000FF]" />, title: "Live Chat", description: "Get instant support", buttonText: "Start Chat" }
  ];

  const resources = [
    { icon: <FileText className="w-8 h-8 text-[#8000FF]" />, title: "User Guides", description: "Step-by-step platform guides" },
    { icon: <Book className="w-8 h-8 text-[#8000FF]" />, title: "Video Tutorials", description: "Visual learning resources" },
    { icon: <Users className="w-8 h-8 text-[#8000FF]" />, title: "Forums", description: "Connect with our community" }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              How Can We Help You?
            </h1>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8000FF] w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#8000FF] 
                       focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 border border-purple-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  className="mb-6 flex justify-center"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{category.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#8000FF] font-medium flex items-center hover:text-[#9747FF] transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#8000FF]/5 via-[#9747FF]/10 to-[#8000FF]/5">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {quickLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 border border-purple-100 flex flex-col items-center text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  className="mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white px-6 py-3 rounded-xl
                           font-medium transition-all duration-300 hover:shadow-lg"
                >
                  {item.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-xl border border-purple-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#8000FF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8000FF]" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Resources */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 border border-purple-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  className="mb-6 flex justify-center"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;