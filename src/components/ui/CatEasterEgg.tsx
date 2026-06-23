'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Evitamos problemas de renderizado del lado del servidor (SSR) en Next.js
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface CatEasterEggProps {
  className?: string
}

export default function CatEasterEgg({ className = '' }: CatEasterEggProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animationData, setAnimationData] = useState<any>(null)

  // Cargamos el archivo JSON del gatito cuando el componente se monta
  useEffect(() => {
    fetch('/lottie/cat-animation.json') // Asegurate de que el archivo en la carpeta public se llame así
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error cargando el lottie del gatito:", err))
  }, [])

  return (
    <motion.div
      className={`relative inline-flex items-baseline translate-y-[0.1em] -translate-x-[0.04em] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Contenedor Principal */}
      <motion.div
        // 👇 NOTA: Le puse w-12 h-12 como tamaño por defecto, ajustalo como quieras
        className="relative cursor-pointer inline-flex items-center justify-center w-12 h-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { y: '-10%' } : { y: '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        
        {/* Aquí va la animación de Lottie */}
        {animationData ? (
          <Lottie 
            animationData={animationData} 
            loop={true} 
            autoplay={true} 
            className="w-full h-full drop-shadow-lg"
          />
        ) : (
          <div className="w-full h-full" /> // Espacio vacío mientras carga
        )}
        
      </motion.div>
    </motion.div>
  )
}