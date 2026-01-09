'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TreePine, Users, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Learners' },
  { icon: TreePine, value: '50,000', label: 'Trees Planted' },
  { icon: Award, value: '200+', label: 'Programs' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Floating orbs */}
      <div className="glow-orb w-96 h-96 -top-48 -right-48 bg-primary-400" />
      <div className="glow-orb w-64 h-64 top-1/2 -left-32 bg-accent-400 float-delay-1" />
      <div className="glow-orb w-48 h-48 bottom-20 right-1/4 bg-earth-400 float-delay-2" />

      {/* Decorative leaf shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-40 right-20 w-32 h-32 border-2 border-primary-400 rounded-full float"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent-400 rounded-full float-delay-1"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Transforming Education, Sustainably
              </span>
            </motion.div>

            {/* Headline with kinetic typography */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-reveal">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-block text-gray-900 dark:text-white"
                >
                  Learn to
                </motion.span>
              </span>
              <br />
              <span className="text-reveal">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="inline-block text-gradient"
                >
                  Nurture
                </motion.span>
              </span>
              <br />
              <span className="text-reveal">
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block text-gray-900 dark:text-white"
                >
                  Our Planet
                </motion.span>
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 text-balance"
            >
              Empowering communities through immersive eco-education experiences.
              Join thousands learning to create sustainable change for future generations.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary-600 ml-0.5" />
                </div>
                <span>Watch Story</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200 dark:border-gray-800"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual - Bento grid showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main image card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 glass-card rounded-3xl p-2 hover-lift"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <TreePine className="w-20 h-20 text-primary-500 mx-auto mb-4" />
                      <p className="text-primary-700 dark:text-primary-300 font-medium">
                        Interactive Learning Environment
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Live Session</p>
                      <p className="text-xs text-gray-500">12,400 watching</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Small cards */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="glass-card rounded-2xl p-5 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-4 shadow-glow-amber">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Certified</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Eco-Expert Programs</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="glass-card rounded-2xl p-5 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-earth-400 to-earth-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Community</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Global Network</p>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -right-4 top-1/4 glass-card rounded-2xl p-4 shadow-glass-lg float"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">+50</p>
                  <p className="text-xs text-gray-500">New Enrollments</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="scroll-indicator" />
        </motion.div>
      </div>
    </section>
  )
}
