import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(45, 212, 191, 0.3)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.97 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
    // Removed hover variant to avoid mobile issues as per request
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white overflow-hidden relative rounded-xl shadow-lg mx-4 sm:mx-6 lg:mx-8">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* Combined Form Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h2
              variants={inputVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight text-center lg:text-left"
            >
              Ready to revolutionize your teaching experience?
              <br />
              <span className="text-teal-600">Contact us for more information.</span>
            </motion.h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div variants={inputVariants}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300 appearance-none"
                >
                  <option>Select Your Role</option>
                  <option>Teacher</option>
                  <option>Principal</option>
                  <option>Admin</option>
                </select>
              </motion.div>

              <motion.div variants={inputVariants}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants} className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="School Pincode"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={inputVariants} className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={inputVariants} className="sm:col-span-2">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 transition-all duration-300 appearance-none"
                >
                  <option>Select Board</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </motion.div>

              <motion.div variants={inputVariants} className="sm:col-span-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  By sharing your details, you agree to receive emails / sms / calls.
                </label>
              </motion.div>

              <motion.div variants={buttonVariants} className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                >
                  Book a Free Demo
                </button>
              </motion.div>
            </form>
          </div>

          {/* Image Section (hidden on mobile) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end lg:block hidden"
          >
            <div className="relative w-full max-w-xs lg:max-w-lg h-[590px] rounded-full overflow-hidden lg:shadow-lg">
              <img
                src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=279.825&fit=crop&h=453.05"
                alt="Teacher with book and thumbs-up"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-400 opacity-20 rounded-full"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent rounded-full"
                animate={{ opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;