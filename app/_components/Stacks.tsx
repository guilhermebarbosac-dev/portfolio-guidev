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
        <motion.div
          className="flex justify-center mb-3 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={siteConfig.images.titles.stacks}
            alt="Sobre"
            width={600}
            height={100}
            priority
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center px-6">
          {siteConfig.stacks.list.map((stack) => (
            <motion.div
              key={stack}
              className="flex flex-col items-center gap-2 backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl p-4">
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
