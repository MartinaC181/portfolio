'use client'
import { motion } from 'framer-motion'
import { education, softSkills } from '@/data/profile' // Importamos los datos
import { itemVariants } from '@/utils/animations' // Importamos animación

export default function ProfileCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="p-8 bg-background-lighter border border-surface-200 rounded-2xl space-y-8 h-fit"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-surface-50">Sobre Mí</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna Bio + Skills */}
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold text-surface-50 mb-4">Más allá del código</h4>
            <p className="text-surface-100 leading-relaxed text-sm">
              Soy Técnica Universitaria en Programación egresada de la UTN y apasionada por la tecnología...
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-surface-100 mb-4 uppercase tracking-widest">
              Habilidades Blandas
            </h5>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ y: -8, borderColor: '#E11D48' }}
                  className="px-4 py-2 border border-primary text-surface-50 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Timeline Educación */}
        <div>
          <h5 className="text-xs font-semibold text-surface-100 mb-6 uppercase tracking-widest">
            Formación
          </h5>
          <div className="space-y-6 relative pl-6 border-l-2 border-surface-200">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                <div>
                  <p className="text-sm text-surface-50 font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-primary mb-1">{item.institution}</p>
                  <p className="text-xs text-surface-100">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}