'use client'

import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'
import { containerVariants, itemVariants } from '@/utils/animations'

interface FormData {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage(data.message || 'Mensaje enviado exitosamente. ¡Te responderé pronto!')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setStatusMessage(data.message || 'Hubo un error al enviar el mensaje. Intenta nuevamente.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Error de conexión. Por favor intenta más tarde.')
      console.error('Error:', error)
    }
  }

  return (
    <section id="contact" className="relative bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-lighter pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #aaa1a2 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-surface-50 mb-4">
            Contactame
          </h2>
          <p className="text-base md:text-lg text-surface-100">
            Estoy siempre abierta a nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="bg-surface-200/20 border border-surface-200 rounded-lg p-8 backdrop-blur-sm"
        >
          {/* Name Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="name" className="block text-surface-50 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="w-full px-4 py-3 bg-surface-100/10 border border-surface-200 rounded-lg text-surface-50 placeholder-surface-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="email" className="block text-surface-50 font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              className="w-full px-4 py-3 bg-surface-100/10 border border-surface-200 rounded-lg text-surface-50 placeholder-surface-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="message" className="block text-surface-50 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tu mensaje aquí..."
              rows={5}
              className="w-full px-4 py-3 bg-surface-100/10 border border-surface-200 rounded-lg text-surface-50 placeholder-surface-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 bg-primary hover:bg-primary-hover disabled:bg-surface-100/20 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-green-100">{statusMessage}</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-100">{statusMessage}</p>
            </motion.div>
          )}
        </motion.form>

        </motion.div>
    </section>
  )
}
