import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, Users, Calendar, Bell, MessageSquare, 
  FileText, PieChart, Settings, Shield, Video,
  Database, Cloud
} from 'lucide-react';

const features = [
  { 
    icon: BookOpen, 
    title: 'Digital Learning', 
    description: 'Interactive online classes and comprehensive learning resources' 
  },
  { 
    icon: Users, 
    title: 'Student Management', 
    description: 'Complete student data and performance tracking system' 
  },
  { 
    icon: Calendar, 
    title: 'Attendance System', 
    description: 'Automated attendance tracking with real-time notifications' 
  },
  { 
    icon: MessageSquare, 
    title: 'Communication', 
    description: 'Seamless interaction between teachers, students and parents' 
  },
  { 
    icon: FileText, 
    title: 'Assessment Tools', 
    description: 'Comprehensive online testing and evaluation system' 
  },
  { 
    icon: PieChart, 
    title: 'Analytics', 
    description: 'Detailed insights and performance reports' 
  },
  { 
    icon: Video, 
    title: 'Virtual Classroom', 
    description: 'Interactive online teaching and learning environment' 
  },
  { 
    icon: Shield, 
    title: 'Security', 
    description: 'Advanced data protection and privacy measures' 
  },
  { 
    icon: Database, 
    title: 'Resource Library', 
    description: 'Extensive collection of educational materials' 
  },
  { 
    icon: Cloud, 
    title: 'Cloud Storage', 
    description: 'Secure cloud-based data storage and access' 
  },
  { 
    icon: Bell, 
    title: 'Notifications', 
    description: 'Real-time alerts and updates for all stakeholders' 
  },
  { 
    icon: Settings, 
    title: 'Customization', 
    description: 'Flexible system configuration options' 
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2A1A5E] mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the comprehensive suite of tools designed to transform your educational institution
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-[#00BFB3] mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A1A5E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;