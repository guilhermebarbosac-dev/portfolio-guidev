'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Mail, Instagram, Loader2, Phone } from 'lucide-react'
import { siteConfig } from '@/configs'
import { submitContactForm } from '../actions/submit'
import { toast } from 'sonner'

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
        toast.success('Mensagem enviada com sucesso!')
      } else {
        toast.error(response.message || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5534998833438', '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 flex-col">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#2380c4] to-pink-500">
        {siteConfig.contact.title}
      </h1>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className={`text-3xl font-bold ${siteConfig.colors.text.heading}`}>
              {siteConfig.contact.subtitle}
            </h2>
            <p className="mt-4 text-gray-400">
              Conecte-se e vamos criar juntos soluções incríveis. Preencha o formulário ao lado ou utilize um dos canais abaixo.
            </p>
          </div>

          <div className="space-y-4">
            <motion.a
              href="mailto:guilhermebarbosacdev@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 4 }}
            >
              <Mail className="w-5 h-5" />
              <span>guilhermebarbosacdev@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/guilhermebarbosac"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 4 }}
            >
              <Instagram className="w-5 h-5" />
              <span>@guilhermebarbosac</span>
            </motion.a>
            <motion.button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 4 }}
            >
              <Phone className="w-5 h-5" />
              <span>+55 (34) 99883-3438</span>
            </motion.button>
          </div>
        </div>

        <div className="bg-transparent">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Nome"
                className="w-full pb-2 bg-transparent border-b border-gray-600 focus:border-white outline-none transition-colors"
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
                className="w-full pb-2 bg-transparent border-b border-gray-600 focus:border-white outline-none transition-colors"
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
                className="w-full pb-2 bg-transparent border-b border-gray-600 focus:border-white outline-none transition-colors resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              type="submit"
              className="px-6 py-2 rounded-lg bg-transparent border border-gray-600 hover:border-white text-gray-400 hover:text-white transition-colors w-full"
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
    </div>
  )
}