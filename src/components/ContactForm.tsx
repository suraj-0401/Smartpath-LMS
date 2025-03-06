import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, MessageSquare, Phone, Mail, Clock } from 'lucide-react';

type FormType = 'query' | 'demo';

const ContactForm = () => {
  const [formType, setFormType] = useState<FormType>('query');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // Add your form submission logic here
  };

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
            <span className="text-[#4A4A4A]">Get in</span>{' '}
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to transform your school? We're here to help!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Form Type Selector */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setFormType('query')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                          ${formType === 'query' 
                            ? 'bg-[#8000FF] text-white shadow-lg' 
                            : 'bg-purple-50 text-gray-600 hover:bg-purple-100'}`}
              >
                <MessageSquare className="w-4 h-4" />
                Ask a Question
              </button>
              <button
                onClick={() => setFormType('demo')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                          ${formType === 'demo' 
                            ? 'bg-[#8000FF] text-white shadow-lg' 
                            : 'bg-purple-50 text-gray-600 hover:bg-purple-100'}`}
              >
                <Calendar className="w-4 h-4" />
                Book a Demo
              </button>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                <input
                  type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8000FF] 
                             focus:ring-2 focus:ring-[#8000FF]/20 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                <input
                  type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8000FF] 
                             focus:ring-2 focus:ring-[#8000FF]/20 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {formType === 'demo' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name
                    </label>
                <input
                  type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8000FF] 
                               focus:ring-2 focus:ring-[#8000FF]/20 outline-none transition-all duration-300"
                      placeholder="Your School"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8000FF] 
                               focus:ring-2 focus:ring-[#8000FF]/20 outline-none transition-all duration-300"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {formType === 'query' ? 'Your Question' : 'Additional Information'}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8000FF] 
                           focus:ring-2 focus:ring-[#8000FF]/20 outline-none transition-all duration-300"
                  placeholder={formType === 'query' 
                    ? "Type your question here..." 
                    : "Tell us about your school and specific requirements..."}
                />
              </div>

              <motion.button
                  type="submit"
                className="w-full bg-[#8000FF] text-white rounded-lg px-6 py-4 font-medium
                         hover:bg-[#6700D1] transition-all duration-300 flex items-center 
                         justify-center gap-2 disabled:opacity-50"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {formType === 'query' ? 'Send Message' : 'Schedule Demo'}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-gray-600 hover:text-[#8000FF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#8000FF]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+1 (234) 567-890</p>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:support@smartpath.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-[#8000FF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#8000FF]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>support@smartpath.com</p>
                  </div>
                </motion.a>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#8000FF]" />
                  </div>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Support</h3>
              <p className="text-gray-600 mb-4">
                Check our comprehensive FAQ section for immediate answers to common questions.
              </p>
              <motion.a
                href="#faqs"
                className="inline-flex items-center gap-2 text-[#8000FF] font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                View FAQs
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;