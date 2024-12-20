'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { siteConfig } from '@/configs'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-1 md:px-8 gap-8 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="mb-3 md:mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={siteConfig.images.titles.home}
              alt="Guilherme Barbosa"
              width={600}
              height={100}
              priority
            />
          </motion.div>
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
            <motion.div 
              className={`h-[1px] w-12 sm:w-16 md:w-32 bg-gradient-to-r ${siteConfig.colors.gradient.primary}`}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            />
            <p className={`text-lg sm:text-xl md:text-2xl ${siteConfig.colors.text.primary} font-light whitespace-nowrap`}>
              {siteConfig.home.role}
            </p>
            <motion.div 
              className={`h-[1px] w-12 sm:w-16 md:w-32 bg-gradient-to-r ${siteConfig.colors.gradient.primary}`}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            />
          </div>
          <p className={`text-base sm:text-lg md:text-xl ${siteConfig.colors.text.primary} max-w-xl text-center px-2 md:px-4`}>
            {siteConfig.home.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 mb-6 md:mb-0"
        >
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-r ${siteConfig.colors.gradient.primary} rounded-2xl rotate-6`}
            whileHover={{
              background: siteConfig.colors.gradient.hover
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-background rounded-2xl">
            <Image
              src={siteConfig.images.profile}
              alt="Guilherme Barbosa"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
