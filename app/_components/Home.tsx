'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { siteConfig } from '@/configs'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.h1 
            className={`text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-pink-500 text-center`}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% auto"
            }}
          >
            {siteConfig.home.title}
          </motion.h1>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <motion.div 
              className={`h-[1px] w-16 md:w-32 bg-gradient-to-r from-[#2380c4] to-pink-500`}
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
            <p className={`text-xl md:text-2xl from-[#2380c4] to-pink-500 font-light whitespace-nowrap`}>
              {siteConfig.home.role}
            </p>
            <motion.div 
              className={`h-[1px] w-16 md:w-32 bg-gradient-to-r to-[#2380c4] from-pink-500`}
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
          <p className={`text-lg md:text-xl from-[#2380c4] to-pink-500 max-w-xl text-center px-4`}>
            {siteConfig.home.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="relative w-72 h-72 md:w-96 md:h-96 mb-8 md:mb-0"
        >
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-r from-[#2380c4] to-pink-500 rounded-2xl rotate-6`}
            whileHover={{
              background: siteConfig.colors.gradient.hover
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-background rounded-2xl">
            <Image
              src={siteConfig.images.profile}
              alt={siteConfig.home.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
