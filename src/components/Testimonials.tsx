import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "School Principal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200",
    content: "Smart Path has revolutionized how we manage our school. The automated attendance system have saved us countless hours.",
    rating: 5,
    school: "Global International School"
  },
  {
    name: "Michael Chen",
    role: "IT Administrator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200",
    content: "The platform's security features and ease of use are outstanding. Integration was smooth, and the support team has been exceptional.",
    rating: 5,
    school: "Tech Valley Academy"
  },
  {
    name: "Emily Rodriguez",
    role: "Department Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200",
    content: "The analytics dashboard provides invaluable insights into student performance. It's helped us improve our teaching methods significantly.",
    rating: 5,
    school: "Riverside High School"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(128, 0, 255, 0.03) 2%, transparent 0%)',
        backgroundSize: '50px 50px'
      }} />

      {/* Large Quote Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-purple-100/30">
        "
      </div>

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
            <span className="text-[#4A4A4A]">What Our</span>{' '}
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why educational institutions trust Smart Path for their management needs
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg 
                            transition-all duration-300 group-hover:shadow-2xl 
                            border border-transparent group-hover:border-purple-100">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4">
                  <motion.div 
                    className="bg-[#8000FF] rounded-full p-3"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-[#8000FF] text-[#8000FF]" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-[#8000FF]">{testimonial.school}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
                              bg-gradient-to-r from-[#8000FF] to-[#9747FF] 
                              group-hover:w-1/2 transition-all duration-300" />
              </div>

              {/* Background Glow */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#8000FF] to-[#9747FF] opacity-0 
                            group-hover:opacity-5 blur-xl rounded-2xl transition-all duration-300
                            group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;