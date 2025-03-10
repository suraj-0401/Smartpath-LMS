import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, School } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    value: '20K+',
    label: 'Active Students',
    description: 'Students actively using our platform',
    color: 'from-[#8000FF] to-[#9747FF]'
  },
  {
    icon: School,
    value: '100+',
    label: 'Partner Schools',
    description: 'Educational institutions trust us',
    color: 'from-[#FF6B6B] to-[#FF8E8E]'
  },
  {
    icon: GraduationCap,
    value: '95%',
    label: 'Success Rate',
    description: 'Students showing improved performance',
    color: 'from-[#4CAF50] to-[#69F0AE]'
  }
];

const Stats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
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
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Trusted by Leading Institutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform has helped thousands of students and educators achieve better learning outcomes
          </p>
        </motion.div>

        {/* Stats Grid - Centered with max-width */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group w-full max-w-sm cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ translateY: -8 }}
              >
                <div className="relative z-10 bg-white rounded-2xl p-8 h-[280px] w-full
                              shadow-lg transition-all duration-300 group-hover:shadow-2xl
                              border border-transparent group-hover:border-purple-100
                              flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} p-3 mb-6
                               transition-all duration-300 ease-out`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Stats */}
                  <motion.h3 
                    className="text-4xl font-bold text-gray-900 mb-3"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 
                               group-hover:text-[#8000FF] transition-colors duration-300">
                    {stat.label}
                  </h4>
                  
                  <p className="text-gray-600">
                    {stat.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
                                bg-gradient-to-r from-[#8000FF] to-[#9747FF] 
                                group-hover:w-1/2 transition-all duration-300" />
                </div>

                {/* Background Glow */}
                <div className={`absolute -z-10 inset-0 bg-gradient-to-r ${stat.color} opacity-0 
                               group-hover:opacity-5 blur-xl rounded-2xl transition-all duration-300
                               group-hover:scale-110`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;