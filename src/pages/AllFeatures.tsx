import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { allFeatures, Feature } from '../components/home/Features';

const categories = [
  { id: "all", name: "All Features" },
  { id: "AI Core", name: "AI Core" },
  { id: "Analytics", name: "Analytics" },
  { id: "Learning", name: "Learning" },
  { id: "Management", name: "Management" },
  { id: "Communication", name: "Communication" },
  { id: "Assessment", name: "Assessment" },
  { id: "Content", name: "Content" }
];

const FeaturesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFeatures = allFeatures.filter((feature: Feature) => {
    const matchesCategory = selectedCategory === "all" || feature.category === selectedCategory;
    const matchesSearch = feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white py-16 md:py-24">
      <div className="container-custom px-4 md:px-8 mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore Our Features
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
              All Features
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered features designed to transform your educational institution
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 
                         focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-300
                         bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${selectedCategory === category.id
                              ? 'bg-gradient-to-r from-[#8000FF] to-[#9747FF] text-white shadow-lg'
                              : 'bg-white/80 backdrop-blur-sm text-purple-600 hover:bg-purple-50'
                            }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredFeatures.map((feature: Feature, index: number) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg 
                           transition-all duration-300 group-hover:shadow-2xl 
                           border border-transparent group-hover:border-purple-100
                           transform-gpu group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3
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
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full
                                 ${feature.category === "AI Core" 
                                   ? 'text-purple-600 bg-purple-100'
                                   : 'text-gray-600 bg-gray-100'}`}>
                      {feature.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
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
        </motion.div>

        {/* No Results Message */}
        {filteredFeatures.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              No features found matching your criteria. Try adjusting your search or filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FeaturesPage; 