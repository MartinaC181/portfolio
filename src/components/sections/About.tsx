'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const softSkills = ['Proactividad', 'Resiliencia', 'Trabajo en Equipo', 'Inglés B2']

const education = [
  {
    title: 'Tecnicatura Universitaria en Programación',
    institution: 'UTN FRR',
    period: '2024 - 2025',
  },
  {
    title: 'Node.js + React Bootcamp',
    period: '2024',
  },
  {
    title: 'Diplomatura en Ciencia de Datos e IA',
    institution: 'UNSAM',
    period: '2023',
  },
]

export default function About() {
  return (
    <section className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-surface-50 mb-4">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid de dos columnas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Columna Izquierda - Texto */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-surface-50 mb-4">
                Más allá del código
              </h3>
              <p className="text-lg text-surface-100 leading-relaxed">
                Soy Técnica Universitaria en Programación egresada de la UTN y apasionada por la tecnología. Me enfoco en crear soluciones web y móviles robustas, escalables y centradas en la experiencia del usuario.
              </p>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-sm font-semibold text-surface-100 mb-4 uppercase tracking-wide">
                Habilidades Blandas
              </h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, borderColor: '#E11D48' }}
                    className="px-4 py-2 border border-primary rounded-full text-surface-50 text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha - Educación */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-surface-100 mb-6 uppercase tracking-wide">
                Formación
              </h4>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 pb-6 border-l-2 border-surface-200 hover:border-primary transition-colors duration-300"
                  >
                    {/* Punto en la timeline */}
                    <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background" />

                    <div>
                      <h5 className="text-base font-bold text-surface-50 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-sm text-primary mb-1">
                        {item.institution}
                      </p>
                      <p className="text-xs text-surface-100">
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
