'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projectsData } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { language } = useLanguage()
  const [currentPage, setCurrentPage] = useState(0)

  const t = {
    es: { 
      title: "Proyectos Destacados",
      prev: "Anterior",
      next: "Siguiente"
    },
    en: { 
      title: "Featured Projects",
      prev: "Previous",
      next: "Next"
    }
  }

  const [projectsPerPage, setProjectsPerPage] = useState(2)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setProjectsPerPage(mq.matches ? 2 : 1)
    const handler = (e: MediaQueryListEvent) => setProjectsPerPage(e.matches ? 2 : 1)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const projects = projectsData[language]
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1))
  }, [totalPages])

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  return (
    <section id="projects" className="relative py-20 px-6 md:px-8">
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

        {/* Projects Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.15,
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-200 text-surface-50 hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">{t[language].prev}</span>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'bg-primary w-8'
                    : 'bg-surface-300 hover:bg-surface-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-200 text-surface-50 hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">{t[language].next}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Counter */}
        <div className="text-center mt-4 text-surface-100 text-sm">
          {language === 'es' 
            ? `Página ${currentPage + 1} de ${totalPages}`
            : `Page ${currentPage + 1} of ${totalPages}`
          }
        </div>
      </div>
    </section>
  )
}