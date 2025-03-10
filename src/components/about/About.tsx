import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, BookOpen, Zap } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: JSX.Element;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Ajay Tiwari", role: "Founder & CEO" },
    { name: "Kajal Chhabra", role: "Academic Director" },
  ];

  const achievements: Achievement[] = [
    { number: "25,000+", label: "Students Enrolled", icon: <Users className="w-8 h-8 text-[#052D56]" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-8 h-8 text-[#052D56]" /> },
    { number: "24/7", label: "Expert Support", icon: <Zap className="w-8 h-8 text-[#052D56]" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-10 sm:py-12 md:py-20 text-black"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            About SmartPath
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Empowering students to achieve their dreams through innovative learning solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-[#052D56]">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Target className="w-10 sm:w-12 h-10 sm:h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#052D56]">Excellence</h3>
                <p className="text-black text-xs sm:text-sm md:text-base">Striving for the highest standards in education and student support</p>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#052D56]">Passion</h3>
                <p className="text-black text-xs sm:text-sm md:text-base">Dedicated to helping every student succeed in their academic journey</p>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Users className="w-10 sm:w-12 h-10 sm:h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#052D56]">Community</h3>
                <p className="text-black text-xs sm:text-sm md:text-base">Building a supportive environment for collaborative learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-[#052D56]">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300 p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#052D56]">{member.name}</h3>
                  <p className="text-black text-xs sm:text-sm md:text-base">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-[#052D56]">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#052D56] mb-2">{achievement.number}</div>
                  <div className="text-black text-xs sm:text-sm md:text-base">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;