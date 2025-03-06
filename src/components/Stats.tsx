import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, GraduationCap, MapPin, School } from 'lucide-react';

const stats = [
  { icon: Users, number: 8000, label: 'Users Registered' },
  { icon: GraduationCap, number: 2000, label: 'Monthly Active Users' },
  { icon: Users, number: 300, label: 'Dedicated Academic Team' },
  { icon: School, number: 100, label: 'Schools Activated' },
  { icon: MapPin, number: 10, label: 'Cities Served' },
];

interface StatItemProps {
  stat: { icon: React.ElementType; number: number; label: string; };
  count: number;
}

const StatItem = memo(({ stat, count }: StatItemProps) => {
  const Icon = stat.icon;
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#00BFB3] transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#00BFB3] hover:text-[#2A1A5E] transition-colors duration-300" />
      </motion.div>
      <motion.div
        className="text-3xl sm:text-4xl font-bold text-[#2A1A5E] mb-2"
      >
        {count.toLocaleString()}+
      </motion.div>
      <div className="text-[#00BFB3] text-sm sm:text-base font-semibold hover:text-[#2A1A5E] transition-colors duration-300">
        {stat.label}
      </div>
    </motion.div>
  );
});

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState(Array(stats.length).fill(0));

  useEffect(() => {
    if (inView) {
      const newCounts = stats.map(stat => stat.number);
      const increment = Math.ceil(newCounts[0] / 50);
      const interval = setInterval(() => {
        setCounts(prevCounts => {
          return prevCounts.map((count, index) => {
            if (count < newCounts[index]) {
              return Math.min(count + increment, newCounts[index]);
            }
            return count;
          });
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1A5E] tracking-tight">
            Your Digital Classroom,{' '}
            <motion.span
              className="text-[#00BFB3]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Anytime, Anywhere
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium"
          >
            Empowering education with real impact across the globe
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} count={counts[index]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;