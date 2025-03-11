import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate submission
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about our services? We're here to help and answer any question you might have.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <MapPin className="w-6 h-6 text-[#8000FF]" />, title: "Visit Us", content: "Chandigarh, India" },
            { icon: <Phone className="w-6 h-6 text-[#8000FF]" />, title: "Call Us", content: "+91 98761 72758" },
            { icon: <Mail className="w-6 h-6 text-[#8000FF]" />, title: "Email Us", content: "support@smartpath.co.in" },
            { icon: <Clock className="w-6 h-6 text-[#8000FF]" />, title: "Working Hours", content: "Mon - Sat: 9AM to 6PM" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  className="flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map and Contact Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905969579!2d76.68831226897115!3d30.732949372629778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1701806056938!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-md p-6 lg:p-8 transition-all duration-300 border border-purple-100"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-[#8000FF] focus:border-transparent bg-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-[#8000FF] focus:border-transparent bg-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-[#8000FF] focus:border-transparent bg-white transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-[#8000FF] focus:border-transparent bg-white transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What services do you offer?",
              answer: "We offer comprehensive educational solutions including AI-powered learning platforms, personalized study plans, and expert guidance for competitive exams.",
            },
            {
              question: "How can I start learning?",
              answer: "Getting started is easy! Simply sign up on our platform, complete your profile, and our AI system will create a personalized learning path for you.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 border border-purple-100"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;