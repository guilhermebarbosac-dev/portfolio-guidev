'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/configs'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/50 text-center"
      >
        <h1 className={`text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r ${siteConfig.colors.gradient.primary}`}>
          {siteConfig.about.sectionTitle}
        </h1>
        {siteConfig.about.paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className={`${siteConfig.colors.text.primary} ${
              index !== siteConfig.about.paragraphs.length - 1 ? 'mb-4' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
