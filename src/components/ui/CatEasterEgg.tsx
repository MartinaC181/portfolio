'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CatEasterEggProps {
  className?: string
}

export default function CatEasterEgg({ className = 'absolute -top-2 right-7' }: CatEasterEggProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative inline-block align-middle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Contenedor del Gato */}
      <motion.div
        className="relative cursor-pointer inline-block -translate-y-2 translate-x-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { y: -8 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* SVG del Gatito */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[0.9em] w-auto drop-shadow-lg inline-block"
        >
          {/* Cabeza */}
          <motion.circle
            cx="24"
            cy="24"
            r="16"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-surface-100"
            animate={isHovered ? { r: 16.5 } : { r: 16 }}
          />

          {/* Orejas Izquierda */}
          <motion.path
            d="M 12 12 L 10 2 L 14 10 Z"
            fill="currentColor"
            className="text-surface-100"
            animate={isHovered ? { rotate: -15 } : { rotate: 0 }}
            style={{ transformOrigin: '12px 12px' }}
          />

          {/* Orejas Derecha */}
          <motion.path
            d="M 36 12 L 38 2 L 34 10 Z"
            fill="currentColor"
            className="text-surface-100"
            animate={isHovered ? { rotate: 15 } : { rotate: 0 }}
            style={{ transformOrigin: '36px 12px' }}
          />

          {/* Ojos - Izquierdo */}
          <motion.circle
            cx="18"
            cy="20"
            r="2"
            fill="currentColor"
            className="text-surface-100"
            animate={isHovered ? { r: 2.5, cy: 21 } : { r: 2 }}
          />

          {/* Ojos - Derecho */}
          <motion.circle
            cx="30"
            cy="20"
            r="2"
            fill="currentColor"
            className="text-surface-100"
            animate={isHovered ? { r: 2.5, cy: 21 } : { r: 2 }}
          />

          {/* Nariz */}
          <motion.path
            d="M 24 26 L 22 28 L 26 28 Z"
            fill="currentColor"
            className="text-primary"
            animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
            style={{ transformOrigin: '24px 26px' }}
          />

          {/* Boca */}
          <path
            d="M 24 28 Q 20 30 18 28"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-surface-100"
            strokeLinecap="round"
          />

          {/* Cola - Animada */}
          <motion.path
            d="M 8 30 Q 4 28 3 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-surface-100"
            strokeLinecap="round"
            animate={
              isHovered
                ? {
                    d: [
                      'M 8 30 Q 4 28 3 20',
                      'M 8 30 Q 2 25 0 15',
                      'M 8 30 Q 4 28 3 20',
                    ],
                  }
                : {
                    d: 'M 8 30 Q 4 28 3 20',
                  }
            }
            transition={
              isHovered
                ? { duration: 0.6, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
          />

          {/* Cuerpo */}
          <motion.ellipse
            cx="24"
            cy="34"
            rx="10"
            ry="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-surface-100"
            animate={isHovered ? { ry: 9 } : { ry: 8 }}
          />

          {/* Patas */}
          <line x1="16" y1="40" x2="16" y2="44" stroke="currentColor" strokeWidth="1.5" className="text-surface-100" />
          <line x1="24" y1="41" x2="24" y2="45" stroke="currentColor" strokeWidth="1.5" className="text-surface-100" />
          <line x1="32" y1="40" x2="32" y2="44" stroke="currentColor" strokeWidth="1.5" className="text-surface-100" />
        </svg>

        {/* Texto "Meow!" en Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHovered
              ? { opacity: 1, scale: 1, y: -6 }
              : { opacity: 0, scale: 0, y: 0 }
          }
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            ¡Meow! 🐾
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
