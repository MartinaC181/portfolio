'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background-lighter border-t border-surface-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Texto principal */}
          <div>
            <p className="text-lg text-surface-50 font-semibold mb-2">
              Diseñado y desarrollado por
            </p>
            <h3 className="text-2xl font-bold text-primary">
              Martina Abigail Canteros
            </h3>
          </div>

          {/* Iconos sociales */}
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#E11D48' }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/martinacanteros"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#E11D48' }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:martina@example.com"
              whileHover={{ scale: 1.2, color: '#E11D48' }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Ubicación */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-surface-100"
          >
            Corrientes, Argentina 🇦🇷
          </motion.p>
        </motion.div>

        {/* Divisor */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-surface-200 my-8 origin-left"
        />

        {/* Texto de derechos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs text-surface-100"
        >
          © 2026 Martina Abigail Canteros. Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  )
}
