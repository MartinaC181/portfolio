'use client'
import { motion } from 'framer-motion'
import { education, softSkills, idioms } from '@/data/profile'
import { itemVariants } from '@/utils/animations'

export default function ProfileCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="p-8 bg-background-lighter border border-surface-200 rounded-2xl h-fit"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-surface-50">Sobre Mí</h3>
      </div>

      {/* GRID ESTRUCTURAL 
         Usamos gap-y-10 para separar bien las filas visualmente 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        
        {/* --- FILA 1, IZQUIERDA: Bio --- */}
        <div>
          <h4 className="text-2xl font-bold text-surface-50 mb-6">Más allá del código</h4>
          <div className="text-surface-100 leading-relaxed text-sm space-y-4">
            <p>
              Soy <span className="text-primary font-semibold">Técnica Universitaria en Programación (UTN)</span> e Instructora de Inglés. Me apasiona crear soluciones tecnológicas que no solo funcionen, sino que impacten.
            </p>
            <p>
              Cuando no estoy programando, disfruto explorando el mundo del <span className="text-surface-50 font-medium">Data Science</span>, escuchando música o compartiendo conocimientos con la comunidad tech.
            </p>
          </div>
        </div>

        {/* --- FILA 1, DERECHA: Formación --- */}
        <div>
          <h5 className="text-xs font-semibold text-surface-100 mb-6 uppercase tracking-widest">
            Formación
          </h5>
          <div className="space-y-8 relative pl-6 border-l-2 border-surface-200 ml-2"> 
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Punto de la línea de tiempo */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <div>
                  <p className="text-sm text-surface-50 font-bold mb-1">{item.title}</p>
                  <p className="text-xs text-primary font-medium mb-1">{item.institution}</p>
                  <p className="text-xs text-surface-100 opacity-80">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- FILA 2, IZQUIERDA: Habilidades Blandas --- */}
        <div>
          <h5 className="text-xs font-semibold text-surface-100 mb-4 uppercase tracking-widest">
            Habilidades Blandas
          </h5>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -4, borderColor: '#E11D48' }}
                className="px-4 py-2 border border-primary text-surface-50 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* --- FILA 2, DERECHA: Idiomas --- */}
        <div>
          <h5 className="text-xs font-semibold text-surface-100 mb-4 uppercase tracking-widest">
            Idiomas
          </h5>
          <div className="flex flex-wrap gap-3">
            {idioms.map((idiom, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -4, borderColor: '#E11D48' }}
                className="px-4 py-2 border border-primary text-surface-50 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {idiom}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}