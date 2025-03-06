import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Amelia Chen",
    role: "Dean, Horizon Academy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d877993ecb?auto=format&fit=crop&q=80&w=150&h=150",
    review: "Smartpath has transformed our institution's workflow with its cutting-edge features and seamless integration. It's a game-changer for modern education.",
    rating: 5
  },
  {
    name: "Prof. Marcus Alvarez",
    role: "Director, Nova Institute",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=150&h=150",
    review: "The AI-powered analytics and personalized learning paths have elevated our teaching standards to unprecedented levels.",
    rating: 5
  },
  {
    name: "Emma Richardson",
    role: "Academic Head, Stellar Prep",
    image: "https://images.unsplash.com/photo-1593104537481-1e2f69a0be1e?auto=format&fit=crop&q=80&w=150&h=150",
    review: "An exceptional platform that bridges the gap between technology and education, making learning more interactive and engaging.",
    rating: 4.5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent mb-16"
        >
          Voices of Excellence
        </motion.h2>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-100/50"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-teal-200/50 transition-transform hover:scale-110"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {testimonials[currentIndex].rating} ★
                  </div>
                </div>
                
                <blockquote className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                  <span className="text-indigo-500 text-3xl">“</span>
                  {testimonials[currentIndex].review}
                  <span className="text-indigo-500 text-3xl">”</span>
                </blockquote>

                <div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-teal-600 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gradient-to-r from-indigo-500 to-teal-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gradient-to-r from-indigo-500 to-teal-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 w-8 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;