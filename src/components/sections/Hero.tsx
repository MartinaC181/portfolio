'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

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

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Gradiente radial de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      {/* Patrón de puntos sutil */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #A1A1AA 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título principal */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-surface-50 leading-tight">
            Hola, soy{' '}
            <span className="text-primary">
              Martina Abigail Canteros
            </span>
            .
          </h1>
          <p className="text-2xl md:text-3xl text-surface-100 mt-4 font-light">
            Full-Stack Developer
          </p>
        </motion.div>

        {/* Propuesta de valor */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-surface-100 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Creo{' '}
          <span className="text-primary font-semibold">
            soluciones web y móviles
          </span>{' '}
          robustas, escalables y centradas en la experiencia de usuario,
          integrando la potencia de los datos.
        </motion.p>

        {/* Ubicación */}
        <motion.p
          variants={itemVariants}
          className="text-surface-100 mb-10 flex items-center justify-center gap-2"
        >
          📍 Corrientes, Argentina
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Botón Primary */}
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            Ver Proyectos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Botón Secondary */}
          <motion.a
            href="https://linkedin.com/in/martinacanteros"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            variants={buttonVariants}
            className="px-8 py-3 border-2 border-surface-200 text-surface-100 hover:text-primary hover:border-primary font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            Contactar
          </motion.a>
        </motion.div>

        {/* Iconos sociales */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-surface-100 hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/martinacanteros"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-surface-100 hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:martina@example.com"
            whileHover={{ scale: 1.2 }}
            className="text-surface-100 hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
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
