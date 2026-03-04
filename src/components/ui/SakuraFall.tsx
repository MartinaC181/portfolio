/* eslint-disable react-hooks/purity */
'use client'

import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'

interface Petal {
  id: number
  startX: number
  delay: number
  duration: number
  width: number
  height: number
  borderRadius: string
  color: string
  opacity: number
  windPath: number[]
  rotateXEnd: number
  rotateYEnd: number
  rotateZEnd: number
  screenHeight: number
}

export default function SakuraFall() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const petals = useMemo(() => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 768

    const count = 40
    return Array.from({ length: count }, (_, i) => {
      const createBorderRadius = () => {
        const t1 = 30 + Math.random() * 40
        const t2 = 30 + Math.random() * 40
        const t3 = 30 + Math.random() * 40
        const t4 = 30 + Math.random() * 40
        const b1 = 30 + Math.random() * 40
        const b2 = 30 + Math.random() * 40
        const b3 = 30 + Math.random() * 40
        const b4 = 30 + Math.random() * 40
        return `${t1}% ${t2}% ${t3}% ${t4}% / ${b1}% ${b2}% ${b3}% ${b4}%`
      }

      const colors = [
        'rgba(225, 29, 72, 0.6)',
        'rgba(236, 72, 153, 0.6)',
        'rgba(244, 114, 182, 0.5)',
        'rgba(225, 29, 72, 0.4)',
      ]

      const startX = Math.random() * screenWidth
      const windPath = [
        startX,
        startX + (Math.random() - 0.5) * 300,
        startX - (Math.random() - 0.5) * 300,
        startX + (Math.random() - 0.5) * 250,
        startX - (Math.random() - 0.5) * 200,
        startX + (Math.random() - 0.5) * 150,
      ]

      return {
        id: i,
        startX,
        delay: Math.random() * 1,
        duration: Math.random() * 6 + 6,
        width: Math.random() * 10 + 10,
        height: Math.random() * 10 + 10,
        borderRadius: createBorderRadius(),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.4,
        windPath,
        rotateXEnd: Math.random() * 720 - 360,
        rotateYEnd: Math.random() * 720 - 360,
        rotateZEnd: Math.random() * 720 - 360,
        screenHeight,
      }
    })
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="fixed pointer-events-none"
          style={{
            left: 0,
            top: 0,
            width: `${petal.width}px`,
            height: `${petal.height}px`,
            borderRadius: petal.borderRadius,
            background: petal.color,
            opacity: petal.opacity,
          }}
          initial={{
            x: petal.startX,
            y: -100,
            rotateX: Math.random() * 360,
            rotateY: Math.random() * 360,
            rotateZ: Math.random() * 360,
          }}
          animate={{
            x: petal.windPath,
            y: petal.screenHeight + 100,
            rotateX: [0, 180, 360, 540, petal.rotateXEnd],
            rotateY: [0, -180, 360, -180, petal.rotateYEnd],
            rotateZ: [0, 180, -180, 180, petal.rotateZEnd],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: 'easeIn',
            rotateX: { duration: petal.duration, ease: 'linear', repeat: Infinity },
            rotateY: { duration: petal.duration, ease: 'linear', repeat: Infinity },
            rotateZ: { duration: petal.duration, ease: 'linear', repeat: Infinity },
          }}
        />
      ))}
    </div>
  )
}

