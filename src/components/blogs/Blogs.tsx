import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
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
    image: "https://th.bing.com/th/id/OIP.Ah0qvy7-t-2nuHfEe4u9nQHaFS?rs=1&pid=ImgDetMain",
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
    image: "https://engineersplanet.com/wp-content/uploads/2023/02/Effective-Strategies-for-Cracking-GATE-Exam.jpg",
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
    image: "https://topperchoice.in/wp-content/uploads/2023/07/JEE-Exam-Day-Tips-1.webp",
  },
];

// Define animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Blogs: React.FC = () => {
  const [filter, setFilter] = useState("");

  // Filter blog posts based on the search input
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase()) ||
    post.category.toLowerCase().includes(filter.toLowerCase()) ||
    filter === "All Posts" // Show all posts if "All Posts" is selected
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold text-gray-900 mb-4 mt-8"
            whileHover={{ scale: 1.02 }}
          >
            SmartPath Blog
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Insights, tips, and strategies to excel in your academic journey
          </motion.p>
        </motion.div>

        {/* Featured Categories with Hover Effects */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {["All Posts", "NEET", "UPSC", "JEE", "GATE", "Study Tips"].map(
            (category) => (
              <motion.button
                key={category}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                className="px-6 py-2 rounded-full bg-white shadow-sm transition-all duration-300 text-gray-700"
                onClick={() => setFilter(category === "All Posts" ? "" : category)}
              >
                {category}
              </motion.button>
            )
          )}
        </motion.div>

        {/* Blog Posts Grid with Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <motion.div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </motion.div>
                <motion.h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </motion.h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    By {post.author}
                  </span>
                  <Link to={`/blogs/${post.id}`}>
                    <motion.button className="flex items-center text-black hover:text-blue-600 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;