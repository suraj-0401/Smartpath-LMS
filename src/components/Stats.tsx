import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, School, GraduationCap, FileText, MapPin } from 'lucide-react';

const stats = [
  { icon: School, number: 100, label: 'Schools Activated' },
  { icon: Users, number: 300, label: 'Dedicated Academic Team' },
  { icon: GraduationCap, number: 200000, label: 'MCQs Available' },
  { icon: FileText, number: 2500, label: 'Assignments Completed Daily' },
  { icon: MapPin, number: 72, label: 'Cities Empowered' },
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Re-trigger animations on scroll
    threshold: 0.3,
  });

  const [counts, setCounts] = useState(Array(stats.length).fill(0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const target = stat.number;
        const increment = Math.ceil(target / 50); // Faster counting
        const interval = setInterval(() => {
          setCounts((prev) => {
            const newCount = Math.min(prev[index] + increment, target);
            if (newCount >= target) {
              clearInterval(interval);
            }
            return [...prev.slice(0, index), newCount, ...prev.slice(index + 1)];
          });
        }, 20); // Faster interval
        return () => clearInterval(interval);
      });
    } else {
      setCounts(Array(stats.length).fill(0)); // Reset when out of view
    }
  }, [inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8FDFC] via-white to-[#E6F8F7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 md:mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1A5E] tracking-tight">
            Your Digital Classroom,{' '}
            <motion.span
              className="text-[#00BFB3]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Anytime, Anywhere
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium"
          >
            Empowering education with real impact across the globe
          </motion.p>
          <motion.div
            className="absolute -top-12 -left-12 w-24 h-24 bg-[#00BFB3] opacity-10 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0, 191, 179, 0.2)',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#00BFB3] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Animated background circle */}
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20 bg-[#00BFB3] opacity-5 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#00BFB3] hover:text-[#2A1A5E] transition-colors duration-300" />
                </motion.div>
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-[#2A1A5E] mb-2"
                  animate={{ scale: inView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {counts[index].toLocaleString()}+
                </motion.div>
                <div className="text-[#00BFB3] text-sm sm:text-base font-semibold hover:text-[#2A1A5E] transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;