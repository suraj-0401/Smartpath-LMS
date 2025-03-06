import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import { memo } from 'react';

const benefits = [
  'Comprehensive digital learning platform',
  'Real-time student performance tracking',
  'Interactive virtual classrooms',
  'Automated attendance management',
  'Seamless parent-teacher communication',
  'Detailed analytics and reports'
];

const BenefitItem = memo(({ benefit }) => (
  <motion.div
    className="group flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#00BFB3] cursor-pointer transition-all duration-300"
    whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 191, 179, 0.1)' }}
    whileTap={{ scale: 0.98 }}
  >
    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFB3] group-hover:text-[#2A1A5E] transition-colors duration-300" />
    <span className="text-gray-800 text-sm sm:text-base lg:text-lg font-medium group-hover:text-[#00BFB3] transition-colors duration-300">
      {benefit}
    </span>
  </motion.div>
));

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1A5E] tracking-tight">
            Transform Your School with{' '}
            <motion.span
              className="text-[#00BFB3] inline-block"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Smartpath
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Elevate education management with our cutting-edge, all-in-one solution
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-[#00BFB3] opacity-10 rounded-2xl"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
              alt="Teacher and student"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transition-transform duration-300"
            />
            <motion.div
              className="absolute bottom-4 right-4 bg-[#00BFB3] text-white px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} benefit={benefit} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;