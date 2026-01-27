'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-surface-50 mb-4">
            Mi Stack Tecnológico
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid de categorías */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: '#E11D48' }}
              className="p-8 bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 group hover:border-primary cursor-pointer"
            >
              {/* Encabezado de la categoría */}
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary-light transition-colors">
                {skillCategory.category}
              </h3>

              {/* Lista de skills */}
              <div className="flex flex-wrap gap-3">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-background rounded-full text-surface-50 text-sm font-medium border border-surface-200 group-hover:border-primary group-hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
