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
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Blogs: React.FC = () => {
  const [filter, setFilter] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    filter === ""
      ? true
      : post.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              SmartPath Blog
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your go-to resource for insights, tips, and strategies to succeed in your academic journey.
            </motion.p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {["All Posts", "NEET", "Study Tips"].map((category) => (
              <motion.button
                key={category}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
                  ${
                    filter === (category === "All Posts" ? "" : category)
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-100"
                  }`}
                onClick={() => setFilter(category === "All Posts" ? "" : category)}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1 text-indigo-500" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1 text-indigo-500" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 font-medium">
                      {post.author}
                    </span>
                    <Link to={`/blogs/${post.id}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-sm transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;