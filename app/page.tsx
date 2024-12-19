'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Home from './_components/Home'
import Projects from './_components/Projects'
import About from './_components/About'
import Stacks from './_components/Stacks'
import Contact from './_components/Contact'
import { siteConfig } from '@/configs'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')
  const { scrollYProgress } = useScroll()

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
      className="min-h-screen bg-background dark:bg-[#34343a] text-foreground font-sans relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-2 sm:space-x-6">
          {siteConfig.navigation.sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`uppercase text-sm sm:text-lg transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                    : 'text-gray-800 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                }`}
              >
                {section.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-16 relative z-10">
        <div className="fixed left-8 top-1/2 -translate-y-1/2 h-[60vh] flex items-center">
          <div className="w-1 h-full bg-gray-800/20 rounded-full relative">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-[#2380c4] to-[#23c4a7] rounded-full origin-top"
              style={{ 
                scaleY: scrollYProgress,
                height: "100%" 
              }}
            />
            <motion.div
              className="absolute -right-[7px] w-4 h-4 rounded-full bg-gradient-to-r from-[#2380c4] to-[#23c4a7]"
              style={{
                top: scrollYProgress,
                y: "-50%"
              }}
            >
              <div className="absolute inset-[2px] rounded-full bg-background" />
            </motion.div>
          </div>
        </div>

        <motion.section 
          id="inicio" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.section>

        <motion.section 
          id="sobre" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="stacks" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stacks />
        </motion.section>

        <motion.section 
          id="projetos" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contato" 
          className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
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
