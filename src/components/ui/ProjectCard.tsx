'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { itemVariants } from '@/utils/animations' // Reutilizamos la animación

// Definimos qué forma tienen los datos (TypeScript)
interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  links: {
    github: string
    live: string
  }
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, borderColor: '#E11D48' }}
      className="group p-8 bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 hover:border-primary overflow-hidden flex flex-col h-full"
    >
      {/* Encabezado */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-surface-50 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Descripción (flex-grow para empujar botones abajo) */}
      <p className="text-surface-100 text-base leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-200 text-surface-50 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-4 pt-6 border-t border-surface-200 mt-auto">
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
        
        {project.links.live && project.links.live !== '#' && (
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
        )}
      </div>
    </motion.div>
  )
}