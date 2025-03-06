import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Smartpath?",
      answer: "Smartpath is an innovative, all-in-one educational platform tailored for modern schools, integrating AI-driven learning tools, student management systems, and real-time parent-teacher collaboration features."
    },
    {
      question: "How does the smart attendance feature work?",
      answer: "Our smart attendance leverages facial recognition and RFID technology to track student presence instantly, providing detailed analytics and instant notifications to parents via the mobile app."
    },
    {
      question: "Can parents monitor academic performance?",
      answer: "Absolutely! Parents get a personalized dashboard with real-time updates on grades, attendance, homework, and teacher feedback, plus direct messaging capabilities."
    },
    {
      question: "What support options are available?",
      answer: "We offer round-the-clock technical support via chat, email, and phone, along with comprehensive onboarding, video tutorials, and monthly webinars for staff."
    }
  ];

  interface FAQItemProps {
    faq: { question: string; answer: string };
    index: number;
  }

  const FAQItem = memo(({ faq, index }: FAQItemProps) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/50 overflow-hidden"
      >
        <button
          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-300"
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          <span className="font-semibold text-lg text-indigo-900 pr-4">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <ChevronUp className="w-6 h-6 text-teal-500" />
            ) : (
              <ChevronDown className="w-6 h-6 text-teal-500" />
            )}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-4 bg-gradient-to-r from-teal-50/50 to-indigo-50/50"
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent mb-16"
        >
          Your Questions, Answered
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;