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
      - **Static learning models** – Every student follows the same study plan, regardless of individual learning needs.  
      - **Lack of performance insights** – Students struggle to identify weak areas due to the absence of real-time analytics.  
      - **Inefficient test preparation** – Traditional mock tests do not adapt to individual progress, leading to repetitive and ineffective practice.  
      - **Limited accessibility & flexibility** – Students must follow rigid schedules, which may not suit every learner.  
      This is where AI-driven platforms offer a significant advantage by enabling customized learning, instant feedback, and intelligent assessment strategies.

      ## How AI-Powered Assessment Platforms Like SmartPath Enhance NEET Preparation  
      ### 1️⃣ Adaptive & Personalized Learning Paths  
      AI technology personalizes the learning experience by analyzing each student's strengths, weaknesses, and performance trends. Instead of following a generic syllabus, students get customized study plans that prioritize areas needing improvement.  
      > **For instance:** If a student struggles with Organic Chemistry, SmartPath's AI engine will recommend additional targeted practice sessions, concept reinforcement, and topic-specific mock tests.

      ### 2️⃣ Data-Driven Performance Analysis  
      AI-powered assessment platforms provide comprehensive performance tracking, offering valuable insights into:  
      - Accuracy in different subjects and topics  
      - Time management efficiency per question  
      - Comparative performance analytics with peers  
      - Predicted score trends based on historical performance  
      > These insights allow students to optimize their preparation strategies, improve weaker areas, and develop better time-management skills for the actual NEET exam.

      ### 3️⃣ AI-Generated Mock Tests Aligned with NEET Trends  
      Rather than relying on fixed mock tests, AI-based platforms dynamically generate subject-wise, full-length, and difficulty-based tests tailored to each student's progress.  
      - **AI-Test Generator** – Creates customized tests based on past performance and improvement needs.  
      - **Exam Simulation Mode** – Mimics the real NEET exam environment for enhanced familiarity.  
      - **Difficulty Adjustment** – AI adjusts test complexity in real-time to challenge students appropriately.  
      > This approach ensures that students receive a highly targeted, effective practice experience, improving their confidence and readiness.

      ### 4️⃣ Gamified Learning for Increased Engagement  
      Preparing for NEET can be intense and stressful. AI-driven platforms integrate engaging elements such as:  
      - **Performance leaderboards** – Encouraging healthy competition among students.  
      - **Progress-based rewards & badges** – Motivating students to stay consistent.  
      - **AI-powered test-taking tips** – Providing actionable insights to improve accuracy and efficiency.  
      > This approach makes learning interactive, helping students stay engaged and motivated throughout their NEET preparation journey.

      ## 🌟 Why SmartPath is the Ultimate AI-Powered Learning Partner for NEET?  
      - **AI-Driven Adaptive Learning** – Personalized study plans that evolve based on student progress.  
      - **Real-Time Analytics & Feedback** – Data-driven insights to refine preparation strategies.  
      - **Customizable AI-Generated Mock Tests** – Practice tests dynamically created for maximum efficiency.  
      - **Smart Time Management Strategies** – AI-powered exam simulations to improve speed and accuracy.  
      - **Engaging & Interactive Learning Experience** – Gamified elements to make studying more effective.  
      > With SmartPath, students can transform their NEET preparation by leveraging AI to study smarter, practice effectively, and achieve better results.  
      > **Sign Up Now & Start Your AI-Powered NEET Journey**  
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
  {
    id: 3,
    title: "Effective Study Tips for Academic Success",
    excerpt:
      "Discover proven study techniques that can help you maximize your learning and achieve your academic goals.",
    author: "John Doe",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1584697964167-1b0c1c1c1c1c?auto=format&fit=crop&w=600",
    fullContent: `
      Introduction: The Path to Academic Excellence  
      Achieving academic success is a goal shared by students worldwide, but the journey can often feel overwhelming. With the right study techniques, however, you can transform your learning experience, retain information more effectively, and perform at your best during exams. Whether you're preparing for a competitive test or aiming to excel in your coursework, mastering effective study habits is key. In this blog, we'll explore proven strategies that can help you maximize your learning potential, boost productivity, and achieve your academic goals with confidence.
  
      Why Effective Study Techniques Matter  
      Studying isn't just about spending hours with your books—it's about studying smarter, not harder. Many students fall into the trap of passive learning, like re-reading notes or cramming the night before an exam, which often leads to burnout and poor retention. Effective study techniques focus on active engagement, time management, and understanding your unique learning style. By adopting these methods, you can reduce stress, improve comprehension, and build a solid foundation for long-term success.
  
      Top Study Tips for Academic Success  
      Here are five powerful strategies to elevate your study game and achieve outstanding results:
  
      1️⃣ Set Clear Goals and Prioritize Your Tasks  
      Success begins with a plan. Start by setting specific, measurable goals for each study session—whether it's mastering a chapter, solving 20 practice questions, or revising key concepts. Use the Eisenhower Matrix to prioritize tasks: focus on what's urgent and important first, and break larger goals into smaller, manageable steps.  
      👉 For example: If you're preparing for a biology exam, prioritize understanding core topics like cell structure over less-tested areas, and schedule daily targets to cover them systematically.
  
      2️⃣ Leverage Active Recall and Spaced Repetition  
      Passive reading won't stick—active recall will. Instead of re-reading your notes, close the book and quiz yourself on the material. This forces your brain to retrieve information, strengthening memory pathways. Pair this with spaced repetition, reviewing material at increasing intervals (e.g., 1 day, 3 days, 1 week), to ensure long-term retention.  
      👉 Try this: Use flashcards or apps like Anki to test yourself on key terms and concepts daily, gradually spacing out reviews as you master them.
  
      3️⃣ Master the Pomodoro Technique for Focus  
      Staying focused is a challenge in today's distraction-filled world. The Pomodoro Technique—working in focused 25-minute intervals followed by a 5-minute break—helps you maintain concentration and avoid burnout. After four cycles, take a longer 15–30-minute break to recharge.  
      👉 Pro tip: During your 25-minute sprints, eliminate distractions by silencing your phone and using website blockers to keep your attention on the task at hand.
  
      4️⃣ Create a Multisensory Learning Experience  
      Everyone learns differently, and engaging multiple senses can enhance understanding. Combine reading with visual aids (diagrams, mind maps), auditory input (explaining concepts aloud), and kinesthetic activities (writing summaries or teaching others). This approach caters to your unique learning style and reinforces knowledge.  
      👉 For instance: When studying history, draw a timeline, narrate events to a friend, and write a quick summary to solidify your grasp of the material.
  
      5️⃣ Take Care of Your Mind and Body  
      Academic success isn't just about mental effort—your physical and emotional well-being play a huge role. Get 7–8 hours of sleep to boost memory consolidation, eat brain-boosting foods like nuts and berries, and exercise regularly to improve focus and reduce stress. Don't forget to schedule downtime to recharge and avoid burnout.  
      👉 Quick hack: Try a 10-minute walk or meditation session between study blocks to refresh your mind and maintain peak performance.
  
      Overcoming Common Study Challenges  
      Even with the best techniques, obstacles can arise. Here's how to tackle them:  
      - Procrastination: Break tasks into tiny, actionable steps (e.g., "read one page") to build momentum.  
      - Lack of Motivation: Visualize your end goal—whether it's acing an exam or landing your dream career—to stay driven.  
      - Information Overload: Focus on understanding concepts rather than memorizing everything; use mnemonics or analogies to simplify complex ideas.  
  
      🌟 Putting It All Together: Your Study Success Blueprint  
      Imagine combining these tips into a daily routine: set your goals in the morning, use active recall during study sessions, stay focused with Pomodoro, engage all your senses, and end the day with a healthy wind-down. This holistic approach not only prepares you for exams but also builds lifelong learning skills.  
      📌 Consistency is key—start small, track your progress, and adjust as needed to find what works best for you.
  
      Conclusion: Your Journey to Academic Mastery  
      Effective study habits are the foundation of academic success. By setting clear goals, using active learning techniques, managing your time, engaging multiple senses, and prioritizing self-care, you can unlock your full potential and achieve your academic dreams. The journey may require effort, but with these proven strategies, you're equipped to study smarter and succeed.  
      📌 Ready to transform your study game? Start implementing these tips today and watch your academic performance soar! 🚀  
      #StudyTips #AcademicSuccess #SmartLearning #Education #StudentLife
    `,
  },
  {
    id: 4,
    title: "Mastering the GATE Exam: Tips and Strategies",
    excerpt:
      "Prepare effectively for the GATE exam with these essential tips and strategies to enhance your performance.",
    author: "Jane Smith",
    date: "Mar 15, 2025",
    readTime: "10 min read",
    category: "GATE",
    image: "https://images.unsplash.com/photo-1584697964167-1b0c1c1c1c1c?auto=format&fit=crop&w=600",
    fullContent: `
      Introduction: Your Gateway to GATE Success  
      The Graduate Aptitude Test in Engineering (GATE) is a highly competitive exam that opens doors to prestigious postgraduate programs, PSU jobs, and research opportunities. With lakhs of aspirants vying for top ranks each year, cracking GATE requires more than just hard work—it demands a smart, strategic approach. Whether you're aiming for a high score in Computer Science, Mechanical Engineering, or any other discipline, mastering the GATE exam is achievable with the right preparation plan. In this blog, we'll dive into essential tips and proven strategies to help you boost your performance and secure your dream outcome.
  
      Understanding the GATE Challenge  
      GATE tests your technical knowledge, problem-solving skills, and time management across a vast syllabus. Its unique format—featuring multiple-choice questions (MCQs), multiple-select questions (MSQs), and numerical answer type (NAT) questions—requires a blend of conceptual clarity and exam-day precision. The stakes are high, but so are the rewards. By focusing on structured preparation, consistent practice, and mental readiness, you can turn this challenge into an opportunity to shine.
  
      Key Strategies to Master the GATE Exam  
      Here are five actionable tips to elevate your GATE preparation and maximize your score:
  
      1️⃣ Build a Strong Foundation with Core Concepts  
      GATE is all about depth, not just breadth. Start by thoroughly understanding the fundamentals of your chosen discipline—be it engineering mathematics, algorithms, or thermodynamics. Use standard textbooks (e.g., "Higher Engineering Mathematics" by B.S. Grewal or "Introduction to Algorithms" by Cormen) to solidify your base.  
      👉 For instance: If you're a Civil Engineering aspirant, master topics like structural analysis and geotechnical engineering early, as they form the backbone of many questions.
  
      2️⃣ Create a Customized Study Plan  
      Time is your most valuable resource. Break the GATE syllabus into manageable chunks and allocate time based on your strengths and weaknesses. Dedicate 60% of your study hours to high-weightage topics (e.g., aptitude, core subjects) and 40% to revising weaker areas. Set weekly milestones—like completing 10 chapters or solving 50 problems—to stay on track.  
      👉 Pro tip: Schedule daily practice for General Aptitude and Engineering Mathematics, as these sections often decide your rank.
  
      3️⃣ Practice with Mock Tests and Previous Papers  
      Familiarity with the GATE format is crucial. Solve at least 10–15 previous years' question papers to identify patterns, recurring topics, and your performance gaps. Take full-length mock tests under timed conditions to simulate the real exam environment and improve your speed and accuracy.  
      👉 Try this: After each mock, analyze your mistakes—did you misinterpret a question, miscalculate, or run out of time?—and adjust your strategy accordingly.
  
      4️⃣ Sharpen Your Problem-Solving Skills  
      GATE rewards quick, accurate solutions. Focus on shortcut techniques, like approximation for numericals or elimination methods for MCQs, to save time. Practice a variety of problems—easy, moderate, and tough—to build versatility. For NAT questions, double-check calculations, as there's no room for guesswork.  
      👉 Quick hack: Memorize key formulas and constants (e.g., π ≈ 3.14, g = 9.81 m/s²) to speed up problem-solving on exam day.
  
      5️⃣ Stay Calm and Confident on Exam Day  
      Preparation is only half the battle—execution matters just as much. Get plenty of rest the night before, arrive early at the exam center, and read questions carefully to avoid silly mistakes. If you're stuck on a tough question, move on and return later—don't let it derail your momentum.  
      👉 For example: Allocate 1–1.5 minutes per aptitude question and 2–3 minutes per technical question, keeping a buffer for review.
  
      Overcoming GATE-Specific Hurdles  
      GATE preparation comes with its own set of challenges. Here's how to tackle them:  
      - Syllabus Overload: Focus on the 70:30 rule—master 70% of the syllabus deeply rather than skimming 100% superficially.  
      - Time Pressure: Practice with a timer to build speed without sacrificing accuracy.  
      - Exam Anxiety: Use visualization techniques—imagine yourself solving questions confidently—to boost morale.  
  
      🌟 Why These Strategies Work for GATE  
      GATE isn't just a test of knowledge; it's a test of discipline and adaptability. A strong conceptual base ensures you can handle tricky questions, a tailored study plan keeps you organized, mock tests build exam stamina, problem-solving skills save time, and a calm mindset seals the deal. Together, these tips create a foolproof recipe for success.  
      📌 Consistency and practice are your allies—start early, stay focused, and refine your approach as you go.
  
      Conclusion: Your Roadmap to GATE Mastery  
      Mastering the GATE exam is within your reach if you combine dedication with smart strategies. By building a solid foundation, planning effectively, practicing relentlessly, sharpening your skills, and staying composed, you'll not only ace the exam but also set the stage for a bright future in engineering or research. The journey may be tough, but with these tips, you're well-equipped to conquer it.  
      📌 Ready to crack GATE? Start applying these strategies today and take the first step toward your goal! 🚀  
      #GATE2025 #ExamPreparation #StudySmart #EngineeringSuccess #GATETips
    `,
  },
  {
    id: 5,
    title: "Mastering the JEE Exam: Tips and Strategies",
    excerpt:
      "Unlock your potential and ace the JEE exam with these expert tips and strategies designed for top performance.",
    author: "Ravi Patel",
    date: "Mar 20, 2025",
    readTime: "10 min read",
    category: "JEE",
    image: "https://images.unsplash.com/photo-1509228627916-6b07b3e8b0f5?auto=format&fit=crop&w=600",
    fullContent: `
      Introduction: Your Journey to JEE Success  
      The Joint Entrance Examination (JEE) is the gateway to India's premier engineering institutes like the IITs and NITs, making it one of the toughest and most sought-after exams for students. With millions competing for limited seats, cracking JEE Main and Advanced requires dedication, precision, and a well-thought-out strategy. Whether you're aiming for a top rank or just looking to secure admission into a reputed college, mastering the JEE exam is about working smart as much as working hard. In this blog, we'll share essential tips and proven strategies to help you optimize your preparation and achieve your JEE goals.
  
      Understanding the JEE Challenge  
      JEE tests your mastery of Physics, Chemistry, and Mathematics, with Main focusing on speed and accuracy and Advanced pushing your problem-solving depth. The exam's mix of multiple-choice questions (MCQs) and numerical-based problems, combined with negative marking, demands conceptual clarity, quick thinking, and exam-day composure. Success in JEE isn't just about knowing the material—it's about applying it effectively under pressure. With the right approach, you can turn this challenge into a stepping stone to your engineering dreams.
  
      Key Strategies to Master the JEE Exam  
      Here are five expert-backed tips to elevate your JEE preparation and boost your performance:
  
      1️⃣ Strengthen Your Basics with NCERT and Beyond  
      A rock-solid foundation is non-negotiable for JEE. Start with NCERT textbooks for Class 11 and 12 to grasp core concepts in Physics, Chemistry, and Math—these are the backbone of JEE Main. For Advanced, supplement with advanced resources like "Concepts of Physics" by H.C. Verma, "Organic Chemistry" by Morrison & Boyd, or "IIT Mathematics" by M.L. Khanna.  
      👉 For example: Master topics like Mechanics and Electrostatics in Physics early, as they frequently appear in both Main and Advanced with varying difficulty.
  
      2️⃣ Design a Balanced Study Schedule  
      Time management is critical with JEE's vast syllabus. Divide your day into focused blocks—e.g., 3 hours for Physics, 3 for Chemistry, and 3 for Math—ensuring equal attention to all subjects. Prioritize high-weightage topics like Calculus, Coordinate Geometry, and Organic Chemistry, while allocating extra time to weaker areas. Set daily goals, like solving 30 problems or revising one chapter.  
      👉 Pro tip: Dedicate weekends to full-length mock tests and revision to mimic exam conditions.
  
      3️⃣ Master Problem-Solving with Practice and Analysis  
      JEE is a problem-solving marathon. Solve at least 50–70 questions daily, progressing from basic to JEE Advanced-level problems. Use previous years' papers and mock tests to understand question patterns and refine your approach. After each test, analyze errors—did you misapply a formula, overlook units, or rush through?—to avoid repeating mistakes.  
      👉 Try this: Focus on multi-concept questions (e.g., combining Thermodynamics and Kinematics) to prepare for Advanced's complexity.
  
      4️⃣ Optimize Speed and Accuracy with Techniques  
      Time is your biggest constraint in JEE. Practice shortcut methods—like approximation in numericals or option elimination in MCQs—to solve faster. For Chemistry, memorize reaction mechanisms and periodic trends; for Math, master differentiation shortcuts; for Physics, rely on dimensional analysis when stuck. Aim for 90% accuracy to minimize negative marking.  
      👉 Quick hack: Time yourself per question (1–2 minutes for Main, 2–3 minutes for Advanced) during practice to build exam-day pace.
  
      5️⃣ Build Mental Resilience for Exam Day  
      JEE isn't just academic—it's a mental game. Stay calm during preparation by breaking study sessions with short walks or music. Before the exam, sleep well (7–8 hours), eat light, and reach the center early. During the test, tackle easy questions first to build confidence, then move to tougher ones. If panic sets in, take a deep breath and refocus.  
      👉 For instance: In JEE Main, aim to finish the first round in 2 hours, leaving 1 hour for review and tricky questions.
  
      Overcoming JEE-Specific Obstacles  
      JEE preparation can be daunting, but here's how to handle common hurdles:  
      - Syllabus Fatigue: Focus on 80% mastery of key topics rather than 100% of everything—depth beats breadth.  
      - Negative Marking Traps: Skip doubtful questions unless you can eliminate at least two options confidently.  
      - Burnout: Schedule one light day weekly to recharge without guilt—balance is key to long-term stamina.  
  
      🌟 Why These Strategies Work for JEE  
      JEE rewards preparation, practice, and poise. A strong foundation ensures you can tackle any question, a smart schedule keeps you disciplined, rigorous practice hones your skills, speed techniques save precious minutes, and mental resilience ties it all together. These tips align with the exam's demands, helping you perform at your peak on both Main and Advanced.  
      📌 Persistence pays off—start early, stay consistent, and adapt as you progress.
  
      Conclusion: Your Blueprint to JEE Mastery  
      Mastering the JEE exam is a journey of growth and grit. By strengthening your basics, planning strategically, practicing relentlessly, optimizing your approach, and staying mentally strong, you'll not only conquer JEE but also pave the way to a top engineering college. The road may be challenging, but with these strategies, you're ready to rise above the competition.  
      📌 Ready to ace JEE? Implement these tips now and start your path to success! 🚀  
      #JEE2025 #ExamPreparation #JEEStrategies #EngineeringDreams #StudySmart
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
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header Image */}
          <motion.div variants={imageVariants} className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <motion.h1
              variants={itemVariants}
              className="absolute bottom-6 left-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md"
            >
              {post.title}
            </motion.h1>
          </motion.div>

          {/* Blog Metadata */}
          <motion.div
            variants={itemVariants}
            className="px-6 py-4 sm:px-8 sm:py-6 bg-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-600"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
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

          {/* Blog Content */}
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

          {/* Footer Actions */}
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