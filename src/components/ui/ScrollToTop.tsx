'use client'

import { motion } from 'framer-motion'
import { Mouse } from 'lucide-react'

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 p-3 rounded-lg border-2 border-surface-200 text-surface-100 hover:text-primary hover:border-primary transition-all duration-300 z-50"
      aria-label="Volver arriba"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Mouse className="w-5 h-5" />
    </motion.button>
  )
}
