import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Fingerprint, 
  BarChart2, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  Bell,
  PieChart,
  Users,
  FileText,
  Brain,
  Bot,
  Sparkles,
  Target,
  Lightbulb,
  Zap
} from 'lucide-react';

// Define Feature type
export interface Feature {
  title: string;
  description: string;
  icon: any;
  color: string;
  highlight?: boolean;
  category: string;
}

export const allFeatures: Feature[] = [
  {
    title: "AI Attendance System",
    description: "Advanced facial recognition with anti-spoofing and real-time monitoring using deep learning",
    icon: Fingerprint,
    color: "from-[#8000FF] to-[#9747FF]",
    highlight: true,
    category: "AI Core"
  },
  {
    title: "Smart Analytics",
    description: "ML-powered predictive analytics for student performance and learning patterns",
    icon: BarChart2,
    color: "from-[#FF6B6B] to-[#FF8E8E]",
    highlight: true,
    category: "Analytics"
  },
  {
    title: "Intelligent Scheduling",
    description: "AI-optimized timetable generation with smart conflict resolution",
    icon: Calendar,
    color: "from-[#4CAF50] to-[#69F0AE]",
    category: "Management"
  },
  {
    title: "Smart Communication",
    description: "NLP-powered automated responses and multilingual parent communication",
    icon: MessageSquare,
    color: "from-[#FF9800] to-[#FFB74D]",
    category: "Communication"
  },
  {
    title: "Adaptive Learning",
    description: "Personalized learning paths using AI-driven content recommendations",
    icon: BookOpen,
    color: "from-[#00BCD4] to-[#80DEEA]",
    category: "Learning"
  },
  {
    title: "Intelligent Alerts",
    description: "Context-aware notifications using predictive AI algorithms",
    icon: Bell,
    color: "from-[#7C4DFF] to-[#B388FF]",
    category: "Management"
  },
  {
    title: "AI Assessment",
    description: "Automated evaluation system with ML-based performance analysis",
    icon: PieChart,
    color: "from-[#F50057] to-[#FF4081]",
    category: "Analytics"
  },
  {
    title: "Smart HR",
    description: "AI-powered staff performance tracking and workload optimization",
    icon: Users,
    color: "from-[#1E88E5] to-[#64B5F6]",
    category: "Management"
  },
  {
    title: "Auto Reporting",
    description: "AI-generated comprehensive reports with natural language insights",
    icon: FileText,
    color: "from-[#43A047] to-[#81C784]",
    category: "Management"
  },
  // Additional AI Features
  {
    title: "Neural Learning Paths",
    description: "Deep learning algorithms create personalized learning journeys based on student performance",
    icon: Brain,
    color: "from-[#9C27B0] to-[#E1BEE7]",
    category: "AI Core"
  },
  {
    title: "AI Tutoring Assistant",
    description: "24/7 AI-powered virtual tutor providing instant help and explanations",
    icon: Bot,
    color: "from-[#FF4081] to-[#F8BBD0]",
    category: "AI Core"
  },
  {
    title: "Smart Content Generation",
    description: "AI-powered creation of quizzes, assignments, and study materials",
    icon: Sparkles,
    color: "from-[#FFC107] to-[#FFE082]",
    category: "Content"
  },
  {
    title: "Behavioral Analytics",
    description: "ML algorithms analyzing student engagement and behavior patterns",
    icon: Target,
    color: "from-[#3F51B5] to-[#9FA8DA]",
    category: "Analytics"
  },
  {
    title: "Cognitive Skill Mapping",
    description: "AI assessment of cognitive skills and learning capabilities",
    icon: Lightbulb,
    color: "from-[#009688] to-[#80CBC4]",
    category: "Assessment"
  },
  {
    title: "Real-time Performance Prediction",
    description: "Predictive AI models for early intervention and performance forecasting",
    icon: Zap,
    color: "from-[#FF5722] to-[#FFAB91]",
    category: "AI Core"
  }
];

// Show only first 9 features on homepage
const features = allFeatures.slice(0, 9);

const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(128, 0, 255, 0.03) 2%, transparent 0%)',
        backgroundSize: '50px 50px'
      }} />

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
            <span className="text-[#4A4A4A]">AI-Powered</span>{' '}
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the tools that make Smart Path the leading choice for educational institutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg 
                              transition-all duration-300 group-hover:shadow-2xl 
                              border border-transparent group-hover:border-purple-100
                              transform-gpu group-hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3
                                  transform-gpu rotate-45 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full -rotate-45">
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} 
                                  opacity-20 blur-xl rounded-full scale-150 -z-10`} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      {feature.category === "AI Core" && (
                        <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                          AI Core
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}
                                  absolute top-4 right-4 transform-gpu scale-0 
                                  group-hover:scale-100 transition-transform duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => navigate('/features')}
            className="px-8 py-4 bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white rounded-full font-medium 
                     hover:from-[#6700D1] hover:to-[#8034FF] transition-all duration-300 shadow-lg 
                     hover:shadow-[#8000FF]/25 flex items-center gap-2 mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Features</span>
            <motion.span
              className="group-hover:translate-x-1 transition-transform duration-300"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;