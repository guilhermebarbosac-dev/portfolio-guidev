'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Mail, Instagram, Loader2, Phone } from 'lucide-react'
import { siteConfig } from '@/configs'
import { submitContactForm } from '../actions/submit'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await submitContactForm(formData)
      if (response.success) {
        setFormData({ name: '', email: '', message: '' })
        toast('Mensagem enviada com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          type: "success"
        })
      } else {
        toast(response.message || 'Erro ao enviar mensagem', {
          position: "bottom-right", 
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          type: "error"
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast('Erro ao enviar mensagem. Tente novamente mais tarde.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5534998833438', '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/50 text-center"
      >
        <ToastContainer position="top-right" autoClose={3000} />
        <motion.div
          className="flex justify-center mb-3 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={siteConfig.images.titles.contact}
            alt="Contato"
            width={600}
            height={100}
            priority
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg space-y-8">
            <div>
              <p className={`mt-4 ${siteConfig.colors.text.primary}`}>
                Conecte-se e vamos criar juntos soluções incríveis. Preencha o formulário ao lado ou utilize um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:guilhermebarbosacdev@gmail.com"
                className="backdrop-blur-sm bg-transparent rounded-xl p-4 shadow-lg block"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center align-middle justify-center gap-3">
                  <Mail className="min-w-[20px]" />
                  <span className={`${siteConfig.colors.text.primary} hover:text-white transition-colors text-left hidden md:block`}>
                    guilhermebarbosacdev@gmail.com
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/guilhermebarbosac"
                target="_blank"
                rel="noopener noreferrer" 
                className="backdrop-blur-sm bg-transparent rounded-xl p-4 shadow-lg block"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center align-middle justify-center gap-3">
                  <Instagram className="min-w-[20px]" />
                  <span className={`${siteConfig.colors.text.primary} hover:text-white transition-colors text-left hidden md:block`}>
                    @guilhermebarbosac
                  </span>
                </div>
              </motion.a>

              <motion.button
                onClick={handleWhatsApp}
                className="backdrop-blur-sm bg-transparent rounded-xl p-4 shadow-lg block w-full"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center align-middle justify-center gap-3">
                  <Phone className="min-w-[20px]" />
                  <span className={`${siteConfig.colors.text.primary} hover:text-white transition-colors text-left hidden md:block`}>
                    +55 (34) 99883-3438
                  </span>
                </div>
              </motion.button>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Nome"
                  className="w-full pb-2 bg-transparent border-b border-gray-600 dark:border-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors placeholder:text-gray-600 dark:placeholder:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email"
                  className="w-full pb-2 bg-transparent border-b border-gray-600 dark:border-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors placeholder:text-gray-600 dark:placeholder:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full pb-2 bg-transparent border-b border-gray-600 dark:border-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors placeholder:text-gray-600 dark:placeholder:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                className="group relative px-6 py-2 rounded-lg bg-gradient-to-r from-[#2380c4] to-[#23c4a7] overflow-hidden transition-all duration-1000 hover:before:opacity-100 before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#23c4a7,#2380c4)] before:opacity-0 before:transition-opacity before:-z-10 w-full"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  'Enviar'
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 