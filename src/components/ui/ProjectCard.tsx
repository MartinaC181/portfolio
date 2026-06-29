'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { itemVariants } from '@/utils/animations'
import { useLanguage } from '@/context/LanguageContext'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ProjectProps {
  title: string
  description: string
  longDescription: string
  image: string
  videoId: string
  technologies: string[]
  links: {
    github: string
    githubBackend?: string
    live: string
  }
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const t = {
    es: { 
      frontendBtn: "Código (Frontend)",
      backendBtn: "Código (Backend)",
      codeBtn: "Código", 
      liveBtn: "Live" 
    },
    en: { 
      frontendBtn: "Code (Frontend)",
      backendBtn: "Code (Backend)",
      codeBtn: "Code", 
      liveBtn: "Live" 
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, borderColor: '#E11D48' }}
        className="group bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 hover:border-primary overflow-hidden flex flex-col min-h-[350px] sm:min-h-[420px] h-full"
      >
        <DialogTrigger asChild>
          <div className="cursor-pointer flex-1">
          {/* Image Container */}
          <div className="relative w-full aspect-video overflow-hidden rounded-t-lg bg-surface-900">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                priority={false}
              />
            </motion.div>
          </div>

          {/* Content Container */}
          <div className="p-6 flex flex-col flex-1">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-surface-50 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-surface-100 text-base leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
          </div>
          </div>
        </DialogTrigger>

        <div className="px-6 pb-6 pt-4 flex flex-wrap gap-3">
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-md border border-surface-200 px-4 py-2 text-sm font-medium text-surface-50 hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{project.links.githubBackend ? t[language].frontendBtn : t[language].codeBtn}</span>
          </motion.a>

          {project.links.githubBackend && (
            <motion.a
              href={project.links.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-md border border-surface-200 px-4 py-2 text-sm font-medium text-surface-50 hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t[language].backendBtn}</span>
            </motion.a>
          )}

          {project.links.live && project.links.live !== '#' && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-md border border-surface-200 px-4 py-2 text-sm font-medium text-surface-50 hover:border-primary hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t[language].liveBtn}</span>
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Modal Content */}
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border-zinc-800 text-white">
        <DialogHeader className="text-left mb-6">
          <DialogTitle className="text-3xl font-bold text-surface-50 mb-2">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Media Container */}
        <div className="relative w-full h-[60vh] max-h-[360px] rounded-lg overflow-hidden bg-zinc-900 mb-8">
          {project.videoId ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="mb-8">
          <p className="text-surface-100 text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-surface-100 mb-3 uppercase tracking-wide">
            {language === 'es' ? 'Tecnologías' : 'Technologies'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-background text-surface-50 text-xs font-medium rounded-full border border-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </DialogContent>
    </Dialog>
  )
}