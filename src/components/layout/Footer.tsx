'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-lighter border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        {/* Contenido - Flexbox responsivo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0"
        >
          {/* Sección Izquierda: Copyright + Hecho con */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-sm text-surface-100">
              © {currentYear} Martina Abigail Canteros. Todos los derechos reservados.
            </p>
            <p className="text-xs text-surface-100/70">
              Diseñado y desarrollado con Next.js, Tailwind CSS y Framer Motion.
            </p>
          </div>

          {/* Sección Centro: Redes Sociales */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* GitHub */}
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#E11D48' }}
              className="text-surface-100 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#E11D48' }}
              className="text-surface-100 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
