'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import GlitchText from '../ui/GlitchText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
}

const softSkills = ['Proactividad', 'Resiliencia', 'Inglés B2']
const education = [
  { title: 'Tecnicatura Universitaria en Programación', institution: 'UTN FRR', year: '2024 - 2025' },
  { title: 'Node.js + React Bootcamp', institution: 'Bootcamp', year: '2024' },
  { title: 'Diplomatura en Ciencia de Datos e IA', institution: 'UNSAM', year: '2023' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-background flex items-center justify-center overflow-hidden py-20">
      {/* Gradiente radial de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      {/* Patrón de puntos sutil */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #aaa1a2 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Grid de 2 columnas */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* COLUMNA IZQUIERDA - Presentación */}
        <motion.div className="flex flex-col items-start text-left space-y-6">
          {/* Saludo */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-surface-100"
          >
            Hola, soy
          </motion.p>

          {/* Nombre */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-surface-50 leading-tight"
          >
            Martina <br />
            <span className="text-primary">
              Abigail Canteros
            </span>
          </motion.h1>

          {/* Rol */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
           <GlitchText text="Full-Stack Developer" />
          </motion.p>

          {/* Propuesta de valor */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-surface-100 max-w-md leading-relaxed"
          >
            Creo{' '}
            <span className="text-primary font-semibold">
              soluciones web y móviles
            </span>{' '}
            robustas, escalables y centradas en la experiencia de usuario.
          </motion.p>

          {/* Ubicación */}
          <motion.p
            variants={itemVariants}
            className="text-surface-100 flex items-center gap-2"
          >
            📍 Corrientes, Argentina
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Botón Primary */}
            <motion.button
              whileHover={{ y: -8, color: '#E11D48' }}
              variants={buttonVariants}
              className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Ver Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Botón Secondary */}
            <motion.a
              href="https://www.linkedin.com/in/martina-abigail-canteros"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, borderColor: '#E11D48' }}
              variants={buttonVariants}
              className="px-8 py-3 border-2 border-surface-200 text-surface-100 hover:text-primary hover:border-primary font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Contactar
            </motion.a>
          </motion.div>

          {/* Iconos sociales */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 pt-4"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/MartinaC181"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/martina-abigail-canteros"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:martiinacanteros@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-surface-100 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA - Información Personal */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-background-lighter border border-surface-200 rounded-2xl space-y-8 h-fit"
        >
          {/* Encabezado centrado */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-surface-50">
              Sobre Mí
            </h3>
          </div>

          {/* Grid 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* COLUMNA IZQUIERDA - Biografía + Habilidades */}
            <div className="space-y-6">
              {/* Título "Más allá del código" */}
              <div>
                <h4 className="text-2xl font-bold text-surface-50 mb-4">
                  Más allá del código
                </h4>
                <p className="text-surface-100 leading-relaxed text-sm">
                  Soy Técnica Universitaria en Programación egresada de la UTN y apasionada por la tecnología. Me enfoco en crear soluciones web y móviles robustas, escalables y centradas en la experiencia del usuario.
                </p>
              </div>

              {/* Soft Skills */}
              <div>
                <h5 className="text-xs font-semibold text-surface-100 mb-4 uppercase tracking-widest">
                  Habilidades Blandas
                </h5>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -8, borderColor: '#E11D48' }}
                      className="px-4 py-2 border border-primary text-surface-50 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA - Educación Timeline */}
            <div>
              <h5 className="text-xs font-semibold text-surface-100 mb-6 uppercase tracking-widest">
                Formación
              </h5>
              <div className="space-y-6 relative pl-6 border-l-2 border-surface-200">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Punto en la timeline */}
                    <div className="absolute -left-8 top-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                    
                    <div>
                      <p className="text-sm text-surface-50 font-semibold mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-primary mb-1">
                        {item.institution}
                      </p>
                      {item.year && (
                        <p className="text-xs text-surface-100">
                          {item.year}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator sutil */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-surface-100 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
