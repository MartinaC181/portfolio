'use client'

import { motion } from 'framer-motion'
import { education, softSkills, idioms } from '@/data/profile'
import { itemVariants } from '@/utils/animations'
// 👇 1. Importamos tu hook de idioma
import { useLanguage } from '@/context/LanguageContext'

export default function ProfileCard() {
  const { language } = useLanguage()

  const t = {
    es: {
      title: "Sobre Mí",
      subtitle: "Más allá del código",
      bio1_start: "Soy ",
      bio1_highlight: "Técnica Universitaria en Programación (UTN)",
      bio1_end: " e Instructora de Inglés. Me apasiona crear soluciones tecnológicas que no solo funcionen, sino que impacten.",
      bio2_start: "Cuando no estoy programando, disfruto explorando el mundo del ",
      bio2_highlight: "Data Science",
      bio2_end: ", escuchando música o compartiendo conocimientos con la comunidad tech.",
      educationTitle: "Formación",
      softSkillsTitle: "Habilidades Blandas",
      languagesTitle: "Idiomas"
    },
    en: {
      title: "About Me",
      subtitle: "Beyond the code",
      bio1_start: "I am a ",
      bio1_highlight: "University Technician in Programming (UTN)",
      bio1_end: " and an English Instructor. I am passionate about creating tech solutions that not only work but also make an impact.",
      bio2_start: "When I'm not coding, I enjoy exploring the world of ",
      bio2_highlight: "Data Science",
      bio2_end: ", listening to music, or sharing knowledge with the tech community.",
      educationTitle: "Education",
      softSkillsTitle: "Soft Skills",
      languagesTitle: "Languages"
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      className="p-8 bg-background-lighter border border-surface-200 rounded-2xl h-fit"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-surface-50">{t[language].title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        
        {/* --- FILA 1, IZQUIERDA: Bio --- */}
        <div>
          <h4 className="text-2xl font-bold text-surface-50 mb-6">{t[language].subtitle}</h4>
          <div className="text-surface-100 leading-relaxed text-sm space-y-4">
            <p>
              {t[language].bio1_start}
              <span className="text-primary font-semibold">{t[language].bio1_highlight}</span>
              {t[language].bio1_end}
            </p>
            <p>
              {t[language].bio2_start}
              <span className="text-surface-50 font-medium">{t[language].bio2_highlight}</span>
              {t[language].bio2_end}
            </p>
          </div>
        </div>

        {/* --- FILA 1, DERECHA: Formación --- */}
        <div>
          <h5 className="text-xs font-semibold text-surface-100 mb-6 uppercase tracking-widest">
            {t[language].educationTitle}
          </h5>
          <div className="space-y-8 relative pl-6 border-l-2 border-surface-200 ml-2"> 
            {education[language].map((item, index) => (
              <div key={index} className="relative">
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
            {t[language].softSkillsTitle}
          </h5>
          <div className="flex flex-wrap gap-3">
            {softSkills[language].map((skill, index) => (
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
            {t[language].languagesTitle}
          </h5>
          <div className="flex flex-wrap gap-3">
            {idioms[language].map((idiom, index) => (
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