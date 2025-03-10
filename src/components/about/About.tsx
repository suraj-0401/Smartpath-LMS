import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, Zap, BookOpen } from 'lucide-react';

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
    { number: "20,000+", label: "Students Enrolled", icon: <Users className="w-8 h-8 text-black" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-8 h-8 text-black" /> },
    { number: "24/7", label: "Expert Support", icon: <Zap className="w-8 h-8 text-black" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-black"
          >
            About SmartPath
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Empowering students to achieve their dreams through innovative, AI-driven learning solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">Our Mission</h2>
            <p className="text-gray-600 text-lg sm:text-xl md:max-w-3xl mx-auto mb-8">
              To revolutionize education by providing accessible, technology-driven solutions that inspire lifelong learning and empower every student to reach their full potential.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <BookOpen className="w-12 h-12 text-black" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-10 h-10 text-black" />, title: "Excellence", desc: "Striving for the highest standards in education and support" },
                { icon: <Heart className="w-10 h-10 text-black" />, title: "Passion", desc: "Dedicated to every student’s academic success" },
                { icon: <Users className="w-10 h-10 text-black" />, title: "Community", desc: "Fostering a collaborative learning environment" },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, ease: 'easeOut' }}
                  className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{member.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, ease: 'easeOut' }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-2">{achievement.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{achievement.label}</div>
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