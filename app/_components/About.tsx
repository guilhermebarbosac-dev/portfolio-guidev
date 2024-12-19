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
        className="bg-background/50"
      >
        <h1 className={`text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r ${siteConfig.colors.gradient.primary}`}>
          {siteConfig.about.sectionTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-[#23c4a7]">
                Experiência
              </h2>
              <p className={`text-lg leading-relaxed ${siteConfig.colors.text.primary}`}>
                {siteConfig.about.paragraphs[0]}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-[#23c4a7]">
                Objetivos
              </h2>
              <p className={`text-lg leading-relaxed ${siteConfig.colors.text.primary}`}>
                {siteConfig.about.paragraphs[1]}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 px-6"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-[#23c4a7]">
              Formação
            </h2>
            <p className={`text-lg leading-relaxed text-center ${siteConfig.colors.text.primary}`}>
              {siteConfig.about.paragraphs[2]}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
