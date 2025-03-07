import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  MessageCircle, 
  Clock, 
  Shield 
} from 'lucide-react';

const benefits = [
  {
    title: "Enhanced Learning Experience",
    description: "Personalized learning paths and interactive content delivery for enhanced student engagement",
    icon: BookOpen,
    color: "from-[#8000FF] to-[#9747FF]"
  },
  {
    title: "Streamlined Administration",
    description: "Automated attendance system with real-time monitoring and reporting capabilities",
    icon: Users,
    color: "from-[#FF6B6B] to-[#FF8E8E]"
  },
  {
    title: "Data-Driven Insights",
    description: "Comprehensive analytics and insights to track student progress and identify areas for improvement",
    icon: BarChart3,
    color: "from-[#4CAF50] to-[#69F0AE]"
  },
  {
    title: "Better Communication",
    description: "Seamless communication channel between teachers and parents for better student support",
    icon: MessageCircle,
    color: "from-[#FF9800] to-[#FFB74D]"
  },
  {
    title: "Time Management",
    description: "Efficient scheduling and calendar management for classes and activities",
    icon: Clock,
    color: "from-[#00BCD4] to-[#80DEEA]"
  },
  {
    title: "Enhanced Security",
    description: "Advanced security measures to protect sensitive student and institutional data",
    icon: Shield,
    color: "from-[#7C4DFF] to-[#B388FF]"
  }
];

const Benefits = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50/50 to-white">
      {/* Background Elements */}
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
              Benefits
            </span>{' '}
            <span className="text-[#4A4A4A]">for Everyone</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the advantages that make Smart Path the preferred choice for educational excellence
          </p>
        </motion.div>

        {/* Benefits Grid - Alternating Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg 
                              transition-all duration-300 group-hover:shadow-2xl border border-transparent 
                              group-hover:border-purple-100 ${index % 2 === 0 ? 'mt-8' : ''}`}>
                  {/* Icon Container */}
                  <div className="relative mb-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.color} p-2.5
                                  transform-gpu group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-full h-full text-white" />
                    </div>
                    <div className={`h-0.5 flex-grow bg-gradient-to-r ${benefit.color} opacity-20`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8000FF] 
                               transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>

                  {/* Background Accent */}
                  <div className={`absolute -bottom-1/2 -right-1/2 w-2/3 h-2/3 bg-gradient-to-r 
                                ${benefit.color} opacity-0 group-hover:opacity-5 blur-3xl 
                                rounded-full transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of educational institutions that have transformed their management with Smart Path
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;