'use client'

import { motion } from 'motion/react'
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
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-pink-500">
          {siteConfig.about.sectionTitle}
        </h1>
        {siteConfig.about.paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className={`${siteConfig.colors.text.primary} ${
              index !== siteConfig.about.paragraphs.length - 1 ? 'mb-3' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
