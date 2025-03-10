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
    {
      name: "Ajay Tiwari",
      role: "Founder & CEO",
    },
    {
      name: "Kajal Chhabra",
      role: "Academic Director",
    },
  
  ];

  const achievements: Achievement[] = [
    {
      number: "50,000+",
      label: "Students Enrolled",
      icon: <Users className="w-8 h-8 text-[#052D56]" />
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <Award className="w-8 h-8 text-[#052D56]" />
    },
    {
      number: "1000+",
      label: "Video Lectures",
      icon: <BookOpen className="w-8 h-8 text-[#052D56]" />
    },
    {
      number: "24/7",
      label: "Expert Support",
      icon: <Zap className="w-8 h-8 text-[#052D56]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white py-20 text-black mt-6"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About SmartPath
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-black mb-8 max-w-2xl mx-auto"
          >
            Empowering students to achieve their dreams through innovative learning solutions
          </motion.p>
        </div>
      </motion.div>      

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#052D56]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Target className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in education and student support</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Heart className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Passion</h3>
                <p className="text-gray-600">Dedicated to helping every student succeed in their academic journey</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300">
                <Users className="w-12 h-12 text-[#052D56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#052D56]">Community</h3>
                <p className="text-gray-600">Building a supportive environment for collaborative learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#052D56]">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#052D56] transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#052D56]">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#052D56]">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#052D56] transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-[#052D56] mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-black rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Join Our Learning Community</h2>
            <p className="text-xl mb-8 text-gray-100">Be part of our success story and achieve your academic goals with SmartPath</p>
            <button className="bg-white text-[#052D56] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
              Start Learning Today
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
