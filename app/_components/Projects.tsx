'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { siteConfig } from '@/configs'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className={`text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-pink-500`}>
        {siteConfig.projects.sectionTitle}
      </h1>
      <div className="grid grid-cols-1 gap-12">
        {siteConfig.projects.list.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-background/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${siteConfig.colors.text.heading}`}>{project.title}</h2>
                  <p className={`mb-4 ${siteConfig.colors.text.primary}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 text-sm bg-gray-800 ${siteConfig.colors.text.primary} rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-gradient-to-r ${siteConfig.colors.gradient.primary} text-white rounded-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {siteConfig.projects.buttons.view}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {siteConfig.projects.buttons.github}
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
