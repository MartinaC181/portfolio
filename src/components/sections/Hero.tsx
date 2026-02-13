'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import GlitchText from '@/components/ui/GlitchText'
import ProfileCard from '../ui/ProfileCard' // Ahora este import funcionará
import { containerVariants, itemVariants, buttonVariants } from '@/utils/animations' // Este también
import { socialLinks } from '@/data/profile' // Y este

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-background flex items-center justify-center overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #aaa1a2 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Grid */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN: Presentation */}
        <motion.div className="flex flex-col items-start text-left space-y-6">
          <motion.p variants={itemVariants} className="text-lg text-surface-100">
            Hola, soy
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold text-surface-50 leading-tight">
            Martina <br />
            Abigail Canteros
          </motion.h1>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <GlitchText text="Full-Stack Developer" />
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-surface-100 max-w-md leading-relaxed">
            Creo <span className="text-primary font-semibold">soluciones web y móviles</span> robustas, escalables y centradas en la experiencia de usuario.
          </motion.p>

          <motion.p variants={itemVariants} className="text-surface-100 flex items-center gap-2">
            📍 Corrientes, Argentina
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={buttonVariants}
              className="px-8 py-3 text-white hover:text-primary font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Ver Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -8, borderColor: '#E11D48' }}
              variants={buttonVariants}
              className="px-8 py-3 border-2 border-surface-200 text-surface-100 hover:text-primary hover:border-primary font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Contactar
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            {[
              { icon: Github, href: socialLinks.github },
              { icon: Linkedin, href: socialLinks.linkedin },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#E11D48' }}
                className="text-surface-100 hover:text-primary transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Profile Card */}
        <ProfileCard />

      </motion.div>

      {/* Scroll Indicator */}
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