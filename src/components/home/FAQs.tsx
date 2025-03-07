import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does Smart Path's attendance system work?",
    answer: "Our AI-powered attendance system uses facial recognition technology to automatically mark attendance. It's secure, fast, and eliminates manual entry errors. The system also sends real-time notifications to parents."
  },
  {
    question: "Is the platform secure for student data?",
    answer: "Yes, Smart Path implements enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with educational data protection standards to ensure student information is always protected."
  },
  {
    question: "Can parents track their child's progress?",
    answer: "Absolutely! Parents get access to a dedicated portal where they can view attendance, academic performance, upcoming assignments, and communicate directly with teachers."
  }
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm
                    transition-all duration-300 group-hover:shadow-lg">
        {/* Question Header */}
        <button
          onClick={onToggle}
          className="w-full px-8 py-6 flex items-center justify-between text-left 
                   group-hover:bg-purple-50/50 transition-all duration-300"
        >
          <h3 className="font-semibold text-gray-900 pr-8">
            {faq.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <div className={`p-2 rounded-full transition-colors duration-300
                          ${isOpen ? 'bg-[#8000FF] text-white' : 'text-[#8000FF] bg-purple-50'}`}>
              {isOpen ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          </motion.div>
        </button>

        {/* Answer Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-8 pb-6 text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                      bg-gradient-to-r from-[#8000FF] to-[#9747FF] 
                      group-hover:w-full transition-all duration-300" />
      </div>
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(128, 0, 255, 0.03) 2%, transparent 0%)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#4A4A4A]">Frequently Asked</span>{' '}
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Smart Path's features and capabilities
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        {/* Support Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-[#8000FF] font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;