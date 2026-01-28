'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projectsData } from '@/data/projects'

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

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-surface-50 mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: '#E11D48' }}
              className="group p-8 bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 hover:border-primary overflow-hidden"
            >
              {/* Encabezado del proyecto */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-surface-50 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-surface-100 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-surface-200 text-surface-50 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className="flex gap-4 pt-6 border-t border-surface-200">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Código</span>
                </motion.a>
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm font-medium">Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
