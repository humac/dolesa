'use client'

import { motion } from 'framer-motion'
import {
  Leaf,
  BookOpen,
  Globe,
  Recycle,
  Sun,
  Droplets,
  TreePine,
  Heart
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Courses',
    description: 'Engaging multimedia content designed to make sustainability concepts accessible to all ages and backgrounds.',
    color: 'from-primary-400 to-primary-600',
    delay: 0,
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with eco-learners worldwide, share experiences, and collaborate on environmental projects.',
    color: 'from-blue-400 to-blue-600',
    delay: 0.1,
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Learn practical skills for reducing waste, upcycling, and participating in the circular economy.',
    color: 'from-earth-400 to-earth-600',
    delay: 0.2,
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Understand solar, wind, and other renewable technologies and how to implement them locally.',
    color: 'from-accent-400 to-accent-600',
    delay: 0.3,
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Master techniques for water preservation, rainwater harvesting, and sustainable water management.',
    color: 'from-cyan-400 to-cyan-600',
    delay: 0.4,
  },
  {
    icon: TreePine,
    title: 'Reforestation',
    description: 'Participate in tree-planting initiatives and learn about ecosystem restoration techniques.',
    color: 'from-green-500 to-green-700',
    delay: 0.5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function Features() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="glow-orb w-72 h-72 top-0 left-1/4 bg-primary-300 opacity-20" />
      <div className="glow-orb w-96 h-96 bottom-0 right-0 bg-accent-300 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Leaf className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Education that{' '}
            <span className="text-gradient">Matters</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 text-balance">
            Our comprehensive programs combine cutting-edge technology with hands-on
            experience to create impactful learning journeys.
          </p>
        </motion.div>

        {/* Features bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-br ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-12 lg:mt-16"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-primary-50/80 to-accent-50/80 dark:from-primary-950/50 dark:to-accent-950/50 border border-primary-100 dark:border-primary-900">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  Our Mission
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Building a Sustainable Tomorrow, Today
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We believe that education is the most powerful tool for environmental change.
                  By making eco-learning accessible, engaging, and actionable, we empower individuals
                  and communities to become stewards of our planet.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '95%', label: 'Course Completion' },
                  { value: '40+', label: 'Countries Reached' },
                  { value: '500K+', label: 'Trees Planted' },
                  { value: '4.9', label: 'Average Rating' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm"
                  >
                    <p className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
