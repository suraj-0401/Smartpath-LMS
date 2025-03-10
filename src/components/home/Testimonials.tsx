import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "School Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    content: "Smart Path has transformed our school's administrative processes. The comprehensive management system has helped us maintain better academic records and streamline communication with parents.",
    rating: 5,
    school: "Delhi Public School, Bangalore",
    location: "Karnataka, India"
  },
  {
    name: "Rajesh Patel",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    content: "The examination management and result analysis features have significantly reduced our workload. Parents especially appreciate the real-time updates about their children's progress.",
    rating: 5,
    school: "Modern School, Mumbai",
    location: "Maharashtra, India"
  },
  {
    name: "Anjali Verma",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    content: "As a tech administrator, I find Smart Path's interface incredibly user-friendly. The integration with our existing systems was seamless, and the digital attendance system is a game-changer.",
    rating: 5,
    school: "Ryan International School, Chennai",
    location: "Tamil Nadu, India"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevious();
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(128, 0, 255, 0.1) 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, rgba(151, 71, 255, 0.1) 2%, transparent 0%)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Success Stories
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Join the community of leading Indian educational institutions transforming education with Smart Path
          </p>
        </motion.div>

        {/* Enhanced Carousel Container with better mobile handling */}
        <div className="max-w-6xl mx-auto relative">
          <div 
            className="overflow-hidden relative rounded-2xl md:rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <motion.div
                    className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-purple-100 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
                      {/* Improved image container for mobile */}
                      <div className="relative w-full lg:w-1/3 aspect-[4/3] sm:aspect-square lg:aspect-auto">
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10">
                          <motion.div 
                            className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] rounded-full p-2 sm:p-3 shadow-lg"
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </motion.div>
                        </div>
                        <motion.div
                          className="relative group h-full"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center rounded-lg sm:rounded-xl shadow-lg ring-2 ring-purple-50"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl">
                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                              <p className="text-sm font-medium">{testimonial.location}</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content section with adjusted spacing */}
                      <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
                        <div className="flex items-center gap-1 sm:gap-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8000FF] text-[#8000FF]" />
                            </motion.div>
                          ))}
                        </div>

                        <blockquote className="relative">
                          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic">
                            "{testimonial.content}"
                          </p>
                        </blockquote>

                        <div className="pt-4 sm:pt-6 border-t border-purple-50">
                          <h4 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">{testimonial.name}</h4>
                          <p className="text-purple-600 font-medium text-base sm:text-lg mb-1">{testimonial.role}</p>
                          <p className="text-gray-500 text-sm sm:text-base">{testimonial.school}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons with better mobile positioning */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-1 sm:px-2 md:px-4">
            <motion.button 
              onClick={handlePrevious}
              className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-purple-50 transition-all duration-300 transform hover:-translate-x-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </motion.button>
            <motion.button 
              onClick={handleNext}
              className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-purple-50 transition-all duration-300 transform hover:translate-x-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </motion.button>
          </div>

          {/* Pagination Dots with adjusted spacing */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-gradient-to-r from-[#8000FF] to-[#9747FF]' 
                    : 'w-1.5 sm:w-2 bg-purple-200 hover:bg-purple-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;