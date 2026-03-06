'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/data/profile'
// 👇 Importamos el contexto de idioma
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  // 👇 Diccionario de traducciones para el footer
  const t = {
    es: {
      title: "Martina Abigail Canteros",
      description: "Desarrolladora Full-Stack construyendo soluciones web y móviles escalables. Siempre abierta a nuevos desafíos y oportunidades para seguir creciendo.",
      rights: "Todos los derechos reservados.",
      built: "Diseñado y desarrollado con Next.js, Tailwind CSS y Framer Motion."
    },
    en: {
      title: "Martina Abigail Canteros",
      description: "Full-Stack Developer building scalable web and mobile solutions. Always open to new challenges and opportunities to keep growing.",
      rights: "All rights reserved.",
      built: "Designed and built with Next.js, Tailwind CSS & Framer Motion."
    }
  }

  return (
    <footer className="border-t border-surface-200 bg-background-lighter pt-16 flex flex-col items-center">
      
      {/* --- Contenido Principal Centrado --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6"
      >
        {/* Título */}
        <h2 className="text-3xl font-bold text-surface-50 tracking-wide">
          {t[language].title}
        </h2>
        
        {/* Bio corta */}
        <p className="text-surface-100 leading-relaxed text-sm md:text-base">
          {t[language].description}
        </p>

        {/* Íconos Sociales en círculos */}
        <div className="flex gap-4 mt-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-surface-200 flex items-center justify-center text-surface-100 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-surface-200 flex items-center justify-center text-surface-100 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-10 h-10 rounded-full border border-surface-200 flex items-center justify-center text-surface-100 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* --- Barra Inferior de Copyright --- */}
      <div className="w-full bg-background border-t border-white/5 mt-16 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-0">
          <p className="text-sm text-surface-100">
            Copyright © {currentYear} <span className="text-primary font-semibold">Martina Canteros</span>. {t[language].rights}
          </p>
          <p className="text-xs text-surface-100/50">
            {t[language].built}
          </p>
        </div>
      </div>
      
    </footer>
  )
}