'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { Globe } from 'lucide-react' // Usamos un icono de mundo

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      // fixed top-6 right-6 lo clava arriba a la derecha
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2 px-3 py-2 bg-surface-200/20 hover:bg-surface-200 border border-surface-200 hover:border-primary text-surface-50 text-sm font-bold rounded-full backdrop-blur-md transition-all duration-300 shadow-lg"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="uppercase">{language}</span>
    </motion.button>
  )
}