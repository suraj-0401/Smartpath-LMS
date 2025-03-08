import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-700"
        >
          Blog Not Found
        </motion.h2>
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <motion.div variants={imageVariants} className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl" />
            <motion.h1
              variants={itemVariants}
              className="absolute bottom-6 left-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md"
            >
              {post.title}
            </motion.h1>
          </motion.div>

       
          <motion.div
            variants={itemVariants}
            className="px-6 py-4 sm:px-8 sm:py-6 bg-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-600 rounded-b-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700">By {post.author}</span>
              </div>
            </div>
            <span className="mt-2 sm:mt-0 text-gray-500">
              Category: <span className="font-medium text-blue-600">{post.category}</span>
            </span>
          </motion.div>

          
          <motion.div
            variants={itemVariants}
            className="px-6 py-8 sm:px-8 sm:py-10 prose prose-sm sm:prose-base md:prose-lg max-w-none"
          >
            {post.fullContent.split("\n").map((line, index) => {
              line = line.trim();
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="mt-8 mb-4 text-2xl sm:text-3xl font-semibold text-gray-900"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="mt-6 mb-3 text-xl sm:text-2xl font-medium text-gray-800"
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li
                    key={index}
                    className="ml-4 sm:ml-6 list-disc text-gray-700 leading-relaxed"
                  >
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("> ")) {
                return (
                  <blockquote
                    key={index}
                    className="pl-4 sm:pl-6 border-l-4 border-blue-500 text-gray-600 italic my-4"
                  >
                    {line.replace("> ", "")}
                  </blockquote>
                );
              }
              if (line === "") {
                return <br key={index} />;
              }
              return (
                <p
                  key={index}
                  className="mb-4 text-gray-700 leading-relaxed"
                >
                  {line}
                </p>
              );
            })}
          </motion.div>

         
          <motion.div
            variants={itemVariants}
            className="px-6 py-4 sm:px-8 sm:py-6 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <Link
              to="/blogs"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
            >
              Share This Post
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;