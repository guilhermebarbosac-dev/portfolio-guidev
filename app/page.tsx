'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { ChevronDown, Equal, X } from 'lucide-react'
import Home from './_components/Home'
import Projects from './_components/Projects'
import About from './_components/About'
import Stacks from './_components/Stacks'
import Contact from './_components/Contact'
import { siteConfig } from '@/configs'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      setIsMenuOpen(false)
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <motion.div 
      className="min-h-screen bg-background dark:bg-[#34343a] text-foreground font-sans relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image 
          src="/bg_page/waves.svg" 
          alt="Wave Pattern Top"
          className="absolute top-0 opacity-15 dark:opacity-40 rotate-180 w-[2200px] sm:w-[2200px]"
          width={2200}
          height={2200}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button and Horizontal Menu */}
        <div className="sm:hidden right-0 flex items-center justify-end">
          <button
            className="p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Equal size={24} />}
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-5 right-16 flex rounded-lg bg-background/95 backdrop-blur-sm"
              >
                {siteConfig.navigation.sections.map((section) => (
                  <li key={section} className='bg-background/95 backdrop-blur-sm rounded-lg p-1'>
                    <button
                      onClick={() => {
                        scrollToSection(section);
                        setIsMenuOpen(false);
                      }}
                      className={`uppercase text-sm transition-colors duration-300  ${
                        activeSection === section 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                          : 'text-gray-800 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex justify-center space-x-6">
          {siteConfig.navigation.sections.map((section, index) => (
            <motion.li 
              key={section}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <button
                onClick={() => scrollToSection(section)}
                className={`uppercase text-lg transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                    : 'text-gray-800 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#2380c4] to-[#23c4a7]'
                }`}
              >
                {section.toUpperCase()}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="pt-16 relative z-10">
        <div className="fixed left-8 top-1/2 -translate-y-1/2 h-[60vh] sm:items-center sm:block hidden">
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
          className="min-h-screen py-10 px-0 sm:px-6 lg:px-8 sm:ml-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.section>

        <motion.section 
          id="sobre" 
          className="min-h-screen py-10 px-0 sm:px-6 lg:px-8 sm:ml-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src="/bg_page/asset.svg" 
            alt="Background Pattern"
            className="absolute top-0 left-0 opacity-15 dark:opacity-10 transform -translate-y-1/4 -translate-x-[100px] rotate-90 w-[100px] sm:w-[200px] sm:-translate-y-1/4 sm:-translate-x-1/2"
            width={200}
            height={200}
          />
          <About />
          <Image 
            src="/bg_page/asset2.svg" 
            alt="Background Pattern"
            className="absolute bottom-0 right-0 opacity-15 dark:opacity-10 transform translate-y-1/4 translate-x-1/4 -rotate-90 w-[100px] sm:w-[200px]"
            width={200}
            height={200}
          />
        </motion.section>
        
        <motion.section 
          id="stacks" 
          className="min-h-screen py-10 px-0 sm:px-6 lg:px-8 sm:ml-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stacks />
          <Image 
            src="/bg_page/asset.svg" 
            alt="Background Pattern"
            className="absolute left-0 opacity-15 dark:opacity-10 transform -translate-y-1/4 -translate-x-[100px] rotate-90 w-[100px] sm:w-[200px] sm:-translate-y-1/4 sm:-translate-x-1/2"
            width={200}
            height={200}
          />
        </motion.section>

        <motion.section 
          id="projetos" 
          className="min-h-screen py-10 px-6 sm:px-6 lg:px-8 sm:ml-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contato" 
          className="min-h-screen py-10 px-0 sm:px-6 lg:px-8 sm:ml-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>
        <Image 
              src="/bg_page/waves.svg" 
              alt="Wave Pattern"
              className="absolute opacity-15 dark:opacity-40 w-[2200px] sm:w-[2200px] -bottom-[100px] sm:-bottom-[100px] z-0"
              width={2200}
              height={2200}
        />
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
