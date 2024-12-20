'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { siteConfig } from '@/configs'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/50"
      >
        <motion.div
          className="flex justify-center mb-3 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={siteConfig.images.titles.projects}
            alt="Projetos"
            width={600}
            height={100}
            priority
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-12">
          {siteConfig.projects.list.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg"
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
                    <h2 className={`text-2xl font-semibold mb-4 text-gray-800 dark:${siteConfig.colors.text.heading}`}>{project.title}</h2>
                    <p className={`mb-4 text-gray-800 dark:text-gray-300`}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 text-sm bg-gray-800 dark:bg-gray-800 text-white dark:${siteConfig.colors.text.primary} rounded-full`}
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
      </motion.div>
    </div>
  )
}
