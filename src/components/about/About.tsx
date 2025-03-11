import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Zap, BookOpen } from "lucide-react";

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
    { number: "20,000+", label: "Students Enrolled", icon: <Users className="w-10 h-10 text-[#8000FF]" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-10 h-10 text-[#8000FF]" /> },
    { number: "24/7", label: "Expert Support", icon: <Zap className="w-10 h-10 text-[#8000FF]" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent"
          >
            About SmartPath
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering students to achieve their dreams through innovative, AI-driven learning solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              To revolutionize education by providing accessible, technology-driven solutions that inspire lifelong learning and empower every student to reach their full potential.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: "easeOut" }}
              className="flex justify-center mt-6"
            >
              <BookOpen className="w-12 h-12 text-[#8000FF]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Target className="w-10 h-10 text-[#8000FF]" />,
                  title: "Excellence",
                  desc: "Striving for the highest standards in education and support",
                },
                {
                  icon: <Heart className="w-10 h-10 text-[#8000FF]" />,
                  title: "Passion",
                  desc: "Dedicated to every student’s academic success",
                },
                {
                  icon: <Users className="w-10 h-10 text-[#8000FF]" />,
                  title: "Community",
                  desc: "Fostering a collaborative learning environment",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div whileHover={{ scale: 1.1 }}>{value.icon}</motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-[#8000FF] text-sm font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div whileHover={{ scale: 1.1 }}>{achievement.icon}</motion.div>
                  </div>
                  <div className="text-3xl font-bold text-[#8000FF] mb-2">{achievement.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{achievement.label}</div>
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