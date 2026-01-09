'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { TreePine, Users, Globe, Award, Leaf, TrendingUp } from 'lucide-react'

const impactStats = [
  {
    icon: TreePine,
    value: 500000,
    suffix: '+',
    label: 'Trees Planted',
    description: 'Through our global reforestation initiatives',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'Active Learners',
    description: 'From 40+ countries worldwide',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    icon: Globe,
    value: 100,
    suffix: '+',
    label: 'Community Projects',
    description: 'Local initiatives making global impact',
    color: 'from-primary-400 to-primary-600',
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Completion Rate',
    description: 'Industry-leading course engagement',
    color: 'from-accent-400 to-accent-600',
  },
]

const milestones = [
  { year: '2020', event: 'Dolesa Eco Learning Founded', description: 'Started with a mission to make eco-education accessible globally' },
  { year: '2021', event: 'First 10,000 Learners', description: 'Reached our first major milestone of active community members' },
  { year: '2022', event: '100,000 Trees Planted', description: 'Launched our reforestation program in partnership with local communities' },
  { year: '2023', event: 'Global Expansion', description: 'Extended programs to 40+ countries with localized content' },
  { year: '2024', event: 'Carbon Neutral Certified', description: 'Achieved carbon neutrality in all our operations' },
  { year: '2025', event: '500K Trees Milestone', description: 'Half a million trees planted through community initiatives' },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value.toLocaleString()}{suffix}
    </motion.span>
  )
}

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="impact" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white dark:from-gray-900 dark:via-primary-950/30 dark:to-gray-900" />

      {/* Animated background shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-accent-200 to-earth-200 dark:from-accent-900 dark:to-earth-900 rounded-full blur-3xl opacity-30"
      />

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
            <TrendingUp className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Impact
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Making a{' '}
            <span className="text-gradient">Measurable</span>{' '}
            Difference
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 text-balance">
            Every course completed, every tree planted, every community engaged
            brings us closer to a sustainable future.
          </p>
        </motion.div>

        {/* Impact stats bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card rounded-3xl p-6 lg:p-8 hover:shadow-glass-lg transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Value */}
              <div className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Our Journey
            </h3>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-600 dark:to-primary-900" />

            {/* Timeline items */}
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  {/* Content card */}
                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'
                  }`}>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-glass transition-shadow duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
                        {milestone.year}
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-primary-50/80 to-accent-50/80 dark:from-primary-950/50 dark:to-accent-950/50 border border-primary-100 dark:border-primary-900">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Be Part of the Change
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Join our community of eco-learners and contribute to a more sustainable future.
              Every action counts.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex btn-primary"
            >
              <span>Join the Movement</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
