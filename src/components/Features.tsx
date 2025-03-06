import React from 'react';
import { motion } from 'framer-motion';
import { 
  Fingerprint, 
  BarChart2, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  Bell,
  PieChart,
  Users,
  FileText 
} from 'lucide-react';

const features = [
  {
    title: "Smart Attendance System",
    description: "AI-powered attendance tracking with facial recognition and real-time monitoring",
    icon: Fingerprint,
    color: "from-[#8000FF] to-[#9747FF]",
    highlight: true
  },
  {
    title: "Performance Analytics",
    description: "Advanced analytics dashboard with predictive insights and progress tracking",
    icon: BarChart2,
    color: "from-[#FF6B6B] to-[#FF8E8E]",
    highlight: true
  },
  {
    title: "Scheduling & Calendar",
    description: "Automated timetable management with smart conflict resolution",
    icon: Calendar,
    color: "from-[#4CAF50] to-[#69F0AE]"
  },
  {
    title: "Parent Communication",
    description: "Real-time updates and direct messaging system for parent engagement",
    icon: MessageSquare,
    color: "from-[#FF9800] to-[#FFB74D]"
  },
  {
    title: "Digital Learning Hub",
    description: "Centralized platform for course materials and interactive learning",
    icon: BookOpen,
    color: "from-[#00BCD4] to-[#80DEEA]"
  },
  {
    title: "Smart Notifications",
    description: "Automated alerts for important events and deadlines",
    icon: Bell,
    color: "from-[#7C4DFF] to-[#B388FF]"
  },
  {
    title: "Result Management",
    description: "Comprehensive exam and assessment management system",
    icon: PieChart,
    color: "from-[#F50057] to-[#FF4081]"
  },
  {
    title: "Staff Management",
    description: "Complete HR management and staff attendance tracking",
    icon: Users,
    color: "from-[#1E88E5] to-[#64B5F6]"
  },
  {
    title: "Report Generation",
    description: "Automated report cards and performance analysis documents",
    icon: FileText,
    color: "from-[#43A047] to-[#81C784]"
  }
];

const Features = () => {
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
            <span className="text-[#4A4A4A]">Powerful</span>{' '}
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the tools that make Smart Path the leading choice for educational institutions
          </p>
        </motion.div>

        {/* Features Grid - Hexagonal Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg 
                              transition-all duration-300 group-hover:shadow-2xl 
                              border border-transparent group-hover:border-purple-100
                              transform-gpu group-hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3
                                  transform-gpu rotate-45 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full -rotate-45">
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} 
                                  opacity-20 blur-xl rounded-full scale-150 -z-10`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div 
                    className="mt-6 inline-flex items-center gap-2 text-[#8000FF] font-medium
                              opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <span>→</span>
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}
                                  absolute top-4 right-4 transform-gpu scale-0 
                                  group-hover:scale-100 transition-transform duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-[#8000FF] text-white rounded-full font-medium 
                     hover:bg-[#6700D1] transition-all duration-300 shadow-lg 
                     hover:shadow-[#8000FF]/25 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;