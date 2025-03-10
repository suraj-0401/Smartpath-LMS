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
      description: "Complete school management solution with AI-driven tools for seamless operations",
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
      description: "Advanced AI analytics and reporting for educational institutes",
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
      icon: <Brain className="w-10 h-10 text-black" />,
      title: "Smart Management",
      description: "AI-powered system for efficient institution management"
    },
    {
      icon: <Target className="w-10 h-10 text-black" />,
      title: "Data Analytics",
      description: "Comprehensive analytics for informed decision making"
    },
    {
      icon: <Clock className="w-10 h-10 text-black" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and training"
    },
    {
      icon: <Users className="w-10 h-10 text-black" />,
      title: "Scalable Solution",
      description: "Grows with your institution's needs and requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-black"
          >
            Transform Your Educational Institution
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive AI-driven solutions to streamline operations and elevate learning outcomes
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Why Choose SmartPath?</h2>
            <p className="text-gray-600 text-lg">Innovative tools for the future of education management</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Our Products</h2>
            <p className="text-gray-600 text-lg">Choose the perfect solution for your institution</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${product.popular ? 'border-indigo-500' : 'border-gray-200'}`}
              >
                {product.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">{product.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{product.description}</p>
                  <div className="mb-8 space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base font-semibold">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              { icon: <Zap className="w-10 h-10 text-black" />, title: "Enhanced Efficiency", desc: "Streamline operations and save time" },
              { icon: <Award className="w-10 h-10 text-black" />, title: "Proven Results", desc: "Trusted by leading institutions" },
              { icon: <Crown className="w-10 h-10 text-black" />, title: "Premium Support", desc: "Dedicated assistance for success" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;