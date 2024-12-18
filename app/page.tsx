'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Home from './_components/Home'
import Projects from './_components/Projects'
import About from './_components/About'
import { siteConfig } from '@/configs'
import Stacks from './_components/Stacks'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')
  const { scrollYProgress } = useScroll()

  // Transformações suaves de cores baseadas no scroll
  const purpleHue = useTransform(scrollYProgress, [0, 0.5, 1], [280, 230, 180])
  const blueHue = useTransform(scrollYProgress, [0, 0.5, 1], [220, 270, 320])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.25, 0.3])

  const purpleColor = useTransform(purpleHue, (hue) => `hsla(${hue}, 70%, 50%, ${opacity.get()})`)
  const blueColor = useTransform(blueHue, (hue) => `hsla(${hue}, 70%, 50%, ${opacity.get()})`)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = siteConfig.navigation.height
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navigation.sections
      const navHeight = siteConfig.navigation.height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= navHeight && rect.bottom > navHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 z-0">
        <motion.div 
          className="absolute top-10 left-10 w-[60rem] h-[60rem] rounded-full blur-3xl"
          style={{ backgroundColor: purpleColor }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[65rem] h-[65rem] rounded-full blur-3xl"
          style={{ backgroundColor: blueColor }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-6">
          {siteConfig.navigation.sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`uppercase text-lg transition-colors duration-300 ${
                  activeSection === section 
                    ? `text-transparent bg-clip-text bg-gradient-to-r ${siteConfig.colors.gradient.primary}`
                    : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#2380c4] hover:to-pink-500'
                }`}
              >
                {section.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-16 relative z-10">
        <motion.section 
          id="inicio" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.section>

        <motion.div
          initial={{ width: "0%" }}
          exit={{ width: 0 }}
          viewport={{ once: false }}
          className="mx-auto h-px bg-gradient-to-r from-[#2380c4] to-pink-500 my-8"
          style={{
            width: useTransform(
              scrollYProgress,
              [0.1, 0.25, 0.5, 0.75, 1],
              ["0%", "20%", "40%", "60%", "80%"]
            )
          }}
        />

        <motion.section 
          id="projetos" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.div
          initial={{ width: "0%" }}
          exit={{ width: 0 }}
          viewport={{ once: false }}
          className="mx-auto h-px bg-gradient-to-r from-[#2380c4] to-pink-500 my-8"
          style={{
            width: useTransform(
              scrollYProgress,
              [0.1, 0.25, 0.5, 0.75, 1],
              ["0%", "20%", "40%", "60%", "80%"]
            )
          }}
        />

        <motion.section 
          id="stacks" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stacks />
        </motion.section>

        <motion.div
          initial={{ width: "0%" }}
          exit={{ width: 0 }}
          viewport={{ once: false }}
          className="mx-auto h-px bg-gradient-to-r from-[#2380c4] to-pink-500 my-8"
          style={{
            width: useTransform(
              scrollYProgress,
              [0.1, 0.25, 0.5, 0.75, 1],
              ["0%", "20%", "40%", "60%", "80%"]
            )
          }}
        />

        <motion.section 
          id="sobre" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.section>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground relative z-10">
        <p>{siteConfig.footer.copyright(new Date().getFullYear())}</p>
      </footer>

      <motion.div
        className="fixed bottom-4 right-4 bg-foreground text-background p-2 rounded-full cursor-pointer z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="transform rotate-180" />
      </motion.div>
    </motion.div>
  )
}
