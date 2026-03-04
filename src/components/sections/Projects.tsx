'use client'

import { motion } from 'framer-motion'
import { projectsData } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { containerVariants } from '@/utils/animations'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { language } = useLanguage()

  const t = {
    es: { title: "Proyectos Destacados" },
    en: { title: "Featured Projects" }
  }

  return (
    <section id="projects" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData[language].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}