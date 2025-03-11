import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  fullContent: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How AI-Powered Assessment Platforms are Transforming NEET Preparation",
    excerpt:
      "Preparing for NEET requires a strategic, data-driven approach. Discover how AI-powered platforms like SmartPath revolutionize preparation with personalized learning and real-time analytics.",
    author: "Dr. Priya Sharma",
    date: "Mar 5, 2025",
    readTime: "10 min read",
    category: "NEET Preparation",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
    fullContent: `
      ## Introduction: The Need for Smart Learning in Competitive Exams  
      Preparing for NEET (National Eligibility cum Entrance Test) requires a well-structured, data-driven, and strategic approach to ensure success. With millions of students appearing for limited medical seats, traditional learning methods often fall short in providing real-time insights, personalized learning, and adaptive testing. Incorporating AI-driven assessment platforms like SmartPath into NEET preparation has significantly improved learning outcomes by identifying knowledge gaps, optimizing test strategies, and providing real-time performance analytics. This technological advancement is reshaping how students prepare, making learning more efficient, focused, and data-backed.

      ## Challenges with Traditional NEET Preparation Methods  
      Conventional coaching methods, while effective, have limitations when it comes to personalized learning and real-time assessment tracking:  
      - Static learning models – Every student follows the same study plan, regardless of individual learning needs.  
      - Lack of performance insights – Students struggle to identify weak areas due to the absence of real-time analytics.  
      - Inefficient test preparation – Traditional mock tests do not adapt to individual progress, leading to repetitive and ineffective practice.  
      - Limited accessibility & flexibility – Students must follow rigid schedules, which may not suit every learner.  
      This is where AI-driven platforms offer a significant advantage by enabling customized learning, instant feedback, and intelligent assessment strategies.

      ## How AI-Powered Assessment Platforms Like SmartPath Enhance NEET Preparation  
      ### 1️⃣ Adaptive & Personalized Learning Paths  
      AI technology personalizes the learning experience by analyzing each student's strengths, weaknesses, and performance trends. Instead of following a generic syllabus, students get customized study plans that prioritize areas needing improvement.  
      > For instance: If a student struggles with Organic Chemistry, SmartPath's AI engine will recommend additional targeted practice sessions, concept reinforcement, and topic-specific mock tests.

      ### 2️⃣ Data-Driven Performance Analysis  
      AI-powered assessment platforms provide comprehensive performance tracking, offering valuable insights into:  
      - Accuracy in different subjects and topics  
      - Time management efficiency per question  
      - Comparative performance analytics with peers  
      - Predicted score trends based on historical performance  
      > These insights allow students to optimize their preparation strategies, improve weaker areas, and develop better time-management skills for the actual NEET exam.

      ### 3️⃣ AI-Generated Mock Tests Aligned with NEET Trends  
      Rather than relying on fixed mock tests, AI-based platforms dynamically generate subject-wise, full-length, and difficulty-based tests tailored to each student's progress.  
      - AI-Test Generator – Creates customized tests based on past performance and improvement needs.  
      - Exam Simulation Mode – Mimics the real NEET exam environment for enhanced familiarity.  
      - Difficulty Adjustment – AI adjusts test complexity in real-time to challenge students appropriately.  
      > This approach ensures that students receive a highly targeted, effective practice experience, improving their confidence and readiness.

      ### 4️⃣ Gamified Learning for Increased Engagement  
      Preparing for NEET can be intense and stressful. AI-driven platforms integrate engaging elements such as:  
      - Performance leaderboards – Encouraging healthy competition among students.  
      - Progress-based rewards & badges – Motivating students to stay consistent.  
      - AI-powered test-taking tips – Providing actionable insights to improve accuracy and efficiency.  
      > This approach makes learning interactive, helping students stay engaged and motivated throughout their NEET preparation journey.

      ## 🌟 Why SmartPath is the Ultimate AI-Powered Learning Partner for NEET?  
      - AI-Driven Adaptive Learning – Personalized study plans that evolve based on student progress.  
      - Real-Time Analytics & Feedback – Data-driven insights to refine preparation strategies.  
      - Customizable AI-Generated Mock Tests – Practice tests dynamically created for maximum efficiency.  
      - Smart Time Management Strategies – AI-powered exam simulations to improve speed and accuracy.  
      - Engaging & Interactive Learning Experience – Gamified elements to make studying more effective.  
      > With SmartPath, students can transform their NEET preparation by leveraging AI to study smarter, practice effectively, and achieve better results.  
      > Sign Up Now & Start Your AI-Powered NEET Journey  
      #NEET2025 #SmartPath #AIinEducation #NEETExam #EdTech
    `,
  },
  {
    id: 2,
    title: "Integration of Artificial Intelligence in Education & Mental Health",
    excerpt:
      "Explore how AI transforms education with personalized learning and supports mental well-being for a holistic student experience.",
    author: "Anita Mehra",
    date: "Mar 3, 2025",
    readTime: "12 min read",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600",
    fullContent: `
      Introduction  
      The education sector is undergoing a transformative shift with the integration of Artificial Intelligence (AI), creating personalized, efficient, and data-driven learning experiences. While AI enhances academic success, another crucial aspect of education—mental health and well-being—must be addressed. The growing stress among students due to academic pressure, competitive exams, and performance anxiety necessitates AI-powered solutions that not only improve learning but also support mental well-being. SmartPath is at the forefront of this transformation, combining AI-driven education with a strong focus on student mental health, ensuring holistic growth for learners.

      How AI is Transforming Education and Mental Health  
      1️⃣ Personalized & Adaptive Learning for Reduced Stress  
      AI-powered platforms like SmartPath offer customized learning paths based on individual strengths and weaknesses, eliminating the anxiety of a one-size-fits-all approach.  
      - AI-driven assessments adjust difficulty levels to prevent students from feeling overwhelmed.  
      - Smart analytics provide insights into learning gaps, allowing students to focus on areas needing improvement without unnecessary repetition.  
      - Progress tracking reduces last-minute exam cramming, improving confidence and retention.

      2️⃣ AI-Powered Emotional Intelligence & Mental Health Support  
      AI-driven tools are now capable of identifying stress patterns, burnout risks, and emotional challenges faced by students.  
      - AI chatbots can offer real-time mental health support, guiding students through mindfulness exercises or connecting them with counselors.  
      - Emotion AI (Affective Computing) can detect emotional distress through voice, facial recognition, and text analysis, prompting early intervention.  
      - AI-powered relaxation and mindfulness tools help manage exam stress, improving student focus and well-being.

      3️⃣ Automated Grading & Reduced Academic Pressure  
      One of the significant stressors in education is grading and evaluation. AI-powered systems help reduce this burden by automating grading, offering real-time feedback, and performance insights.  
      - AI-based grading tools evaluate assignments efficiently, ensuring quick results and reduced student anxiety.  
      - Data-driven performance insights allow educators to provide targeted feedback and motivation to students who need extra support.  
      - Instant feedback loops encourage students to learn from mistakes without the fear of judgment.

      4️⃣ Predictive Analytics for Early Intervention  
      AI can analyze academic performance and behavioral data to predict students who may be struggling mentally or academically.  
      - AI-powered predictive models can flag students at risk of burnout based on their learning patterns and engagement levels.  
      - Schools and institutions can intervene early, offering personalized guidance and counseling support.  
      - AI-driven learning schedules optimize workloads to prevent study fatigue.

      5️⃣ AI in Smart Content Curation & Gamified Learning for Engagement  
      AI helps create interactive, engaging learning experiences that reduce the monotony and stress associated with traditional study methods.  
      - Gamification techniques such as AI-generated quizzes, leaderboards, and performance-based rewards enhance motivation.  
      - AI-driven content curation personalizes learning resources, ensuring students receive relevant, digestible study materials.  
      - Smart study break recommendations ensure better focus, retention, and stress management.

      The Role of SmartPath: AI-Powered Learning with Mental Well-being  
      SmartPath stands out by integrating AI-driven education with mental wellness support, ensuring students not only excel academically but also maintain a healthy mind.  
      - AI-powered adaptive learning reduces pressure by offering personalized study plans.  
      - Real-time analytics & feedback help students stay on track, reducing last-minute stress.  
      - Gamified learning fosters engagement and enjoyment, preventing academic burnout.  
      - AI-powered chatbots provide emotional support, helping students manage anxiety and focus better.  
      - Smart recommendations ensure balanced study schedules, reducing fatigue and increasing efficiency.

      Conclusion  
      Artificial Intelligence is shaping the future of education by personalizing learning experiences, reducing academic stress, and offering mental health support. Platforms like SmartPath provide a holistic learning environment, ensuring students not only achieve academic excellence but also maintain their emotional well-being.  
      📌 Want to experience the future of AI-driven learning with mental wellness? 🎯 Join SmartPath today and unlock stress-free, intelligent learning! 🚀  
      #AIinEducation #EdTech #MentalHealthMatters #SmartLearning
    `,
  },
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === parseInt(id || "", 10));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-purple-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent mb-4">
            Blog Not Found
          </h2>
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white rounded-xl 
                       hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="py-20 bg-gradient-to-b from-[#8000FF]/5 via-[#9747FF]/10 to-[#8000FF]/5">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/blogs">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center text-[#8000FF] hover:text-[#9747FF] transition-colors duration-300 font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blogs
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-purple-100"
          >
            <motion.div variants={imageVariants} className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <motion.span
                  variants={itemVariants}
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r 
                           from-[#8000FF]/10 to-[#9747FF]/10 text-white backdrop-blur-sm mb-4"
                >
                  {post.category}
                </motion.span>
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  {post.title}
                </motion.h1>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="px-8 py-6 md:px-10 md:py-8 bg-gradient-to-r from-[#8000FF]/5 to-[#9747FF]/5 
                       flex flex-col md:flex-row md:items-center justify-between text-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#8000FF]" />
                  <span className="text-gray-600">{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#8000FF]" />
                  <span className="text-gray-600">{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-700">By {post.author}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 md:mt-0 flex items-center px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm 
                         border border-purple-100 text-[#8000FF] hover:bg-[#8000FF] hover:text-white 
                         transition-all duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="px-8 py-10 md:px-10 md:py-12"
            >
              <div className="prose prose-lg md:prose-xl max-w-none">
                {post.fullContent.split("\n").map((line, index) => {
                  line = line.trim();
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="mt-12 mb-6 text-2xl md:text-3xl font-bold bg-gradient-to-r 
                                 from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent"
                      >
                        {line.replace("## ", "")}
                      </h2>
                    );
                  } else if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="mt-8 mb-4 text-xl md:text-2xl font-semibold text-gray-900"
                      >
                        {line.replace("### ", "")}
                      </h3>
                    );
                  } else if (line.startsWith("- ")) {
                    return (
                      <li
                        key={index}
                        className="text-gray-600 leading-relaxed mb-2 list-none flex items-start"
                      >
                        <span className="text-[#8000FF] mr-2">•</span>
                        {line.replace("- ", "")}
                      </li>
                    );
                  } else if (line.startsWith("> ")) {
                    return (
                      <blockquote
                        key={index}
                        className="my-6 pl-6 border-l-4 border-[#8000FF] bg-gradient-to-r from-[#8000FF]/5 to-transparent 
                                 py-4 px-6 rounded-r-lg italic text-gray-700"
                      >
                        {line.replace("> ", "")}
                      </blockquote>
                    );
                  } else if (line) {
                    return (
                      <p key={index} className="text-gray-600 leading-relaxed mb-6">
                        {line}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;