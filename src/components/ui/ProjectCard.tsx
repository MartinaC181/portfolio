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
  DialogDescription,
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
      frontendBtn: "GitHub (Frontend)",
      backendBtn: "GitHub (Backend)",
      codeBtn: "Código", 
      liveBtn: "Live" 
    },
    en: { 
      frontendBtn: "GitHub (Frontend)",
      backendBtn: "GitHub (Backend)",
      codeBtn: "Code", 
      liveBtn: "Live" 
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, borderColor: '#E11D48' }}
          className="group cursor-pointer bg-background-lighter border border-surface-200 rounded-lg transition-all duration-300 hover:border-primary overflow-hidden flex flex-col min-h-[500px]"
        >
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
                className="w-full h-full object-cover"
                priority={false}
              />
            </motion.div>
          </div>

          {/* Content Container */}
          <div className="p-8 flex flex-col flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-surface-50 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-surface-100 text-base leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-surface-200 text-surface-50 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border-zinc-800 text-white">
        <DialogHeader className="text-left mb-6">
          <DialogTitle className="text-3xl font-bold text-surface-50 mb-2">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-surface-100 text-base leading-relaxed">
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>

        {/* Media Container */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-900 mb-8">
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

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-surface-100 mb-3 uppercase tracking-wide">
            {language === 'es' ? 'Tecnologías' : 'Technologies'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-surface-200 text-surface-50 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-800 mt-auto">
          {project.links.githubBackend ? (
            <>
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">{t[language].frontendBtn}</span>
              </motion.a>
              <motion.a
                href={project.links.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">{t[language].backendBtn}</span>
              </motion.a>
            </>
          ) : (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">{t[language].codeBtn}</span>
            </motion.a>
          )}

          {project.links.live && project.links.live !== '#' && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-surface-100 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">{t[language].liveBtn}</span>
            </motion.a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}