'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { siteConfig } from '@/configs'

type StackIconsType = {
  [key: string]: string;
}

export default function Stacks() {
  const stackIcons = siteConfig.stacks.icons as StackIconsType

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/50"
      >
        <h1 className={`text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r ${siteConfig.colors.gradient.primary}`}>
          {siteConfig.stacks.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg">
          {siteConfig.stacks.list.map((stack) => (
            <motion.div
              key={stack}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-background/50 rounded-xl p-4">
                <Image
                  src={stackIcons[stack]}
                  alt={`${stack} icon`}
                  width={48}
                  height={48}
                  className="object-contain"
                  style={{
                    filter: stack === 'Next.js' || stack === 'GitHub' ? 'invert(1)' : 'none'
                  }}
                />
              </div>
              <span className={`text-sm ${siteConfig.colors.text.primary}`}>
                {stack}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
