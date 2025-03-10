import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Brain, Target, Clock, Users, Zap, Award, Crown } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "Smart School Management",
      description: "Complete school management solution with attendance, analytics, and communication tools",
      features: [
        "Automated attendance tracking",
        "Real-time parent communication",
        "Fee management system",
        "Performance analytics",
        "Timetable management",
        "Library management"
      ],
      popular: true
    },
    {
      name: "Institute Analytics Pro",
      description: "Advanced analytics and reporting system for educational institutes",
      features: [
        "Student performance tracking",
        "Customizable dashboards",
        "Automated report generation",
        "Batch management",
        "Resource allocation",
        "Exam management"
      ],
    },

  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-[#052D56]" />,
      title: "Smart Management",
      description: "AI-powered system for efficient institution management"
    },
    {
      icon: <Target className="w-12 h-12 text-[#052D56]" />,
      title: "Data Analytics",
      description: "Comprehensive analytics for informed decision making"
    },
    {
      icon: <Clock className="w-12 h-12 text-[#052D56]" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and training"
    },
    {
      icon: <Users className="w-12 h-12 text-[#052D56]" />,
      title: "Scalable Solution",
      description: "Grows with your institution's needs and requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black mt-7"
          >
            Transform Your Educational Institution
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Comprehensive solutions for schools and institutes to streamline operations and enhance learning
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#052D56]">Why Choose SmartPath?</h2>
            <p className="text-gray-600">Experience the future of education management with our innovative solutions</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#052D56] transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#052D56]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#052D56]">Our Products</h2>
            <p className="text-gray-600">Select the perfect plan for your preparation</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative bg-white rounded-2xl border border-gray-200 hover:border-[#052D56] transition-all duration-300 overflow-hidden"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#052D56] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#052D56]">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center mb-3">
                        <Check className="w-5 h-5 text-[#052D56] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-[#052D56] text-white py-3 rounded-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
              <Zap className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Enhanced Efficiency</h3>
              <p className="text-gray-600">Streamline operations and save valuable time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
              <Award className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Proven Results</h3>
              <p className="text-gray-600">Trusted by leading educational institutions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
              <Crown className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Premium Support</h3>
              <p className="text-gray-600">Dedicated assistance for smooth implementation</p>
            </div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default Products;
