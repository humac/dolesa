'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, ArrowUp } from 'lucide-react'

const footerLinks = {
  Programs: [
    { name: 'Sustainable Living', href: '#' },
    { name: 'Urban Gardening', href: '#' },
    { name: 'Climate Leadership', href: '#' },
    { name: 'Zero Waste', href: '#' },
    { name: 'Renewable Energy', href: '#' },
  ],
  Community: [
    { name: 'Forum', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Mentorship', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Podcast', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy', href: '#' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-16 text-white dark:text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <motion.a
                href="#home"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-white">
                    Dolesa
                  </span>
                  <span className="block text-xs text-gray-400 font-medium tracking-wide">
                    ECO LEARNING
                  </span>
                </div>
              </motion.a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Empowering communities worldwide through sustainable education
                and environmental awareness.
              </p>
              <p className="flex items-center gap-1 text-sm text-gray-400">
                Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for our planet
              </p>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Dolesa Eco Learning. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Carbon Neutral Platform
                </span>

                {/* Back to top button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
