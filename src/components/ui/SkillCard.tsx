'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/utils/animations' // Reutilizamos animación

interface SkillCardProps {
  category: string
  skills: string[]
}

export default function SkillCard({ data }: { data: SkillCardProps }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, borderColor: '#E11D48' }}
      className="p-8 bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 group hover:border-primary cursor-pointer h-full"
    >
      {/* Encabezado */}
      <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary-light transition-colors">
        {data.category}
      </h3>

      {/* Lista de Badges */}
      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-background rounded-full text-surface-50 text-sm font-medium border border-surface-200 group-hover:border-primary group-hover:text-primary transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}