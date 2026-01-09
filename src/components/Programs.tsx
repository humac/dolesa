'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight, BookOpen, Leaf, Sparkles } from 'lucide-react'

const programs = [
  {
    id: 1,
    title: 'Sustainable Living Fundamentals',
    category: 'Beginner',
    description: 'Master the basics of sustainable living, from reducing your carbon footprint to conscious consumption habits.',
    duration: '6 weeks',
    students: '2,400+',
    rating: 4.9,
    image: 'from-green-400 to-emerald-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Urban Gardening & Permaculture',
    category: 'Intermediate',
    description: 'Learn to grow your own food in urban spaces using permaculture principles and sustainable techniques.',
    duration: '8 weeks',
    students: '1,800+',
    rating: 4.8,
    image: 'from-lime-400 to-green-600',
    featured: false,
  },
  {
    id: 3,
    title: 'Climate Action Leadership',
    category: 'Advanced',
    description: 'Develop the skills to lead climate initiatives in your community, workplace, or organization.',
    duration: '12 weeks',
    students: '950+',
    rating: 4.9,
    image: 'from-blue-400 to-cyan-600',
    featured: false,
  },
  {
    id: 4,
    title: 'Zero Waste Lifestyle',
    category: 'Beginner',
    description: 'Transform your daily habits to minimize waste and embrace a circular economy mindset.',
    duration: '4 weeks',
    students: '3,200+',
    rating: 4.7,
    image: 'from-amber-400 to-orange-600',
    featured: false,
  },
  {
    id: 5,
    title: 'Renewable Energy Systems',
    category: 'Intermediate',
    description: 'Understand solar, wind, and other renewable technologies for home and community applications.',
    duration: '10 weeks',
    students: '1,200+',
    rating: 4.8,
    image: 'from-yellow-400 to-amber-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Ocean Conservation',
    category: 'Intermediate',
    description: 'Dive deep into marine ecosystems, plastic pollution solutions, and coastal protection strategies.',
    duration: '6 weeks',
    students: '890+',
    rating: 4.9,
    image: 'from-cyan-400 to-blue-600',
    featured: false,
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-950/20">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <BookOpen className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Programs
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Transform Your{' '}
            <span className="text-gradient">Knowledge</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 text-balance">
            Choose from our diverse range of eco-learning programs designed for
            every skill level and interest area.
          </p>
        </motion.div>

        {/* Programs Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group glass-card rounded-3xl overflow-hidden hover:shadow-glass-lg transition-all duration-500 ${
                program.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Card header with gradient */}
              <div className={`relative h-48 ${program.featured ? 'lg:h-64' : ''} bg-gradient-to-br ${program.image} p-6 flex flex-col justify-between`}>
                {/* Category badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                    {program.category}
                  </span>
                  {program.featured && (
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-400 text-white text-sm font-medium">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Decorative icon */}
                <div className="absolute bottom-4 right-4 opacity-20">
                  <Leaf className="w-24 h-24 text-white" />
                </div>

                {/* Floating elements on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {program.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      {program.students}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-accent-500 font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    {program.rating}
                  </span>
                </div>

                {/* CTA for featured */}
                {program.featured && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 btn-primary flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all programs CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-300"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
