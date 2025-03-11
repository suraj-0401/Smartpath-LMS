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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 md:py-28 bg-gray-50"
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent text-center"
          >
            Transform Your Educational Institution
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Comprehensive AI-driven solutions to streamline operations and elevate learning outcomes
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Why Choose SmartPath?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Innovative tools for the future of education management
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className="mb-6 flex justify-center">
                  <div className="text-[#8000FF] transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-gradient-to-b from-[#8000FF]/5 via-[#9747FF]/10 to-[#8000FF]/5">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Choose the perfect solution for your institution
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  product.popular ? 'border-[#8000FF]' : 'border-purple-100'
                }`}
              >
                {product.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#8000FF] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>
                  <div className="mb-10 space-y-4">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <Check className="w-6 h-6 text-[#8000FF] mr-4 flex-shrink-0" />
                        <span className="text-gray-600 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white py-4 px-8 rounded-xl 
                             hover:shadow-lg transition-all duration-300 flex items-center justify-center 
                             text-lg font-semibold space-x-2 transform hover:-translate-y-0.5"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Zap className="w-12 h-12 text-[#8000FF]" />, title: "Enhanced Efficiency", desc: "Streamline operations and save time" },
              { icon: <Award className="w-12 h-12 text-[#8000FF]" />, title: "Proven Results", desc: "Trusted by leading institutions" },
              { icon: <Crown className="w-12 h-12 text-[#8000FF]" />, title: "Premium Support", desc: "Dedicated assistance for success" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 border border-purple-100"
              >
                <div className="mb-6 flex justify-center">
                  <div className="transform transition-transform duration-300 hover:scale-110">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;