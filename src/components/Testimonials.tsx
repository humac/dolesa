'use client'

import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Environmental Scientist',
    location: 'San Francisco, USA',
    image: 'SC',
    color: 'from-primary-400 to-primary-600',
    content: 'Dolesa Eco Learning transformed how I approach sustainability education. The interactive modules and real-world projects made complex concepts accessible and actionable. I\'ve already implemented several initiatives in my community!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Okonkwo',
    role: 'Community Organizer',
    location: 'Lagos, Nigeria',
    image: 'MO',
    color: 'from-accent-400 to-accent-600',
    content: 'The global community aspect is incredible. I\'ve connected with like-minded individuals from over 20 countries, sharing ideas and collaborating on reforestation projects. This platform is truly making a difference.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Lindqvist',
    role: 'Sustainability Consultant',
    location: 'Stockholm, Sweden',
    image: 'EL',
    color: 'from-blue-400 to-blue-600',
    content: 'The certification programs are industry-recognized and have significantly boosted my career. The curriculum is constantly updated with the latest research and best practices in environmental science.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Raj Patel',
    role: 'School Teacher',
    location: 'Mumbai, India',
    image: 'RP',
    color: 'from-earth-400 to-earth-600',
    content: 'I use Dolesa\'s resources in my classroom daily. The student-friendly content and hands-on activities have sparked a genuine interest in environmental conservation among my students.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Maria Santos',
    role: 'Urban Farmer',
    location: 'Sao Paulo, Brazil',
    image: 'MS',
    color: 'from-green-400 to-green-600',
    content: 'The permaculture course changed my life. I now run a successful urban farm that feeds 50 families in my neighborhood. The practical skills I learned here were invaluable.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="community" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-gray-900 to-earth-900" />
      <div className="absolute inset-0 mesh-bg opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-white/80">
              Community Voices
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Stories of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
              Transformation
            </span>
          </h2>

          <p className="text-lg text-white/70 text-balance">
            Hear from our global community of eco-learners who are making a real difference.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Main testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-12">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 lg:left-12">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-4">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                  &quot;{testimonials[activeIndex].content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonials[activeIndex].image}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom testimonial cards (mobile hidden, desktop visible) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white/15 border-primary-400/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/50">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-sm text-white/70 line-clamp-2">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
