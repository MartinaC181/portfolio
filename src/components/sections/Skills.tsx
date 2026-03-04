'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'
import SkillCard from '../ui/SkillCard'
import { containerVariants } from '@/utils/animations' 
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { language } = useLanguage()

  // Diccionario para el título
  const t = {
    es: { title: "Mi Stack Tecnológico" },
    en: { title: "My Tech Stack" }
  }

  return (
    <section className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-surface-50 mb-4">
            {t[language].title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid de Skills */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData[language].map((category, index) => (
            // Delegamos el diseño a la tarjeta individual
            <SkillCard key={index} data={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}