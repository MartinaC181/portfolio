'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education, softSkills, idioms } from '@/data/profile'
import { itemVariants } from '@/utils/animations'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronLeft, ChevronRight, RefreshCcw } from 'lucide-react'

export default function ProfileCard() {
  const { language } = useLanguage()
  const [isFlipped, setIsFlipped] = useState(false)
  const [mobileStep, setMobileStep] = useState(0)

  const t = {
    es: {
      title: "Sobre Mí",
      subtitle: "Más allá del código",
      bio1_start: "Soy ",
      bio1_highlight: "Técnica Universitaria en Programación",
      bio1_end: " y me apasiona crear soluciones tecnológicas que no solo funcionen, sino que impacten.",
      bio2_start: "Cuando no estoy programando, disfruto explorando el mundo del ",
      bio2_highlight: "Data Science",
      bio2_end: ", escuchando música o compartiendo conocimientos con la comunidad tech.",
      educationTitle: "Formación",
      softSkillsTitle: "Habilidades Blandas",
      languagesTitle: "Idiomas",
      flipHint: "Haz clic para girar"
    },
    en: {
      title: "About Me",
      subtitle: "Beyond the code",
      bio1_start: "I am a ",
      bio1_highlight: "University Technician in Programming",
      bio1_end: " and I'm passionate about creating tech solutions that not only work but also make an impact.",
      bio2_start: "When I'm not coding, I enjoy exploring the world of ",
      bio2_highlight: "Data Science",
      bio2_end: ", listening to music, or sharing knowledge with the tech community.",
      educationTitle: "Education",
      softSkillsTitle: "Soft Skills",
      languagesTitle: "Languages",
      flipHint: "Click to flip"
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      // 👇 AQUÍ ESTÁ EL CAMBIO PRINCIPAL: Ancho máximo de 460px y centrado automático
      className="w-full max-w-[460px] mx-auto cursor-pointer group [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full duration-500 [transform-style:preserve-3d]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        
        {/* 🔴 FRENTE DE LA TARJETA 🔴 */}
        {/* Padding reducido a p-6 */}
        <div className="w-full h-full p-8 md:p-6 bg-background/80 backdrop-blur-sm border border-surface-200 rounded-2xl [backface-visibility:hidden] flex flex-col justify-center">
          
          <div className="absolute top-5 right-5 flex items-center gap-1.5 text-surface-100 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-wider">{t[language].flipHint}</span>
            <RefreshCcw className="w-3.5 h-3.5" />
          </div>

          <div className="text-center mb-8 mt-4 md:mb-6 md:mt-2">
            <h3 className="text-2xl font-bold text-surface-50">{t[language].title}</h3>
          </div>

          {/* Mobile: step navigation */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              {/* Paso 1: Bio / "Más allá del código" */}
              {mobileStep === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h4 className="text-xl font-bold text-surface-50 mb-4 text-center">{t[language].subtitle}</h4>
                  <div className="text-surface-100 leading-relaxed text-sm space-y-3">
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
                </motion.div>
              )}

              {/* Paso 2: Formación */}
              {mobileStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h5 className="text-[10px] font-semibold text-surface-100 mb-4 uppercase tracking-widest">
                    {t[language].educationTitle}
                  </h5>
                  <div className="space-y-6 relative pl-5 border-l-2 border-surface-200 ml-2"> 
                    {education[language].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[27px] top-1 w-3 h-3 bg-primary rounded-full border-[3px] border-background" />
                        <div>
                          <p className="text-sm text-surface-50 font-bold mb-0.5 leading-tight">{item.title}</p>
                          <p className="text-xs text-primary font-medium mb-0.5">{item.institution}</p>
                          <p className="text-[10px] text-surface-100 opacity-80">{item.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Paso 3: Habilidades + Idiomas */}
              {mobileStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h5 className="text-[10px] font-semibold text-surface-100 mb-3 uppercase tracking-widest">
                      {t[language].softSkillsTitle}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {softSkills[language].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 border border-primary/50 text-surface-50 text-[11px] font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-semibold text-surface-100 mb-3 uppercase tracking-widest">
                      {t[language].languagesTitle}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {idioms[language].map((idiom, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 border border-primary/50 text-surface-50 text-[11px] font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {idiom}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Flechas + dots */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={(e) => { e.stopPropagation(); setMobileStep((s) => s - 1); }}
                disabled={mobileStep === 0}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-surface-200 text-surface-100 hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === mobileStep ? 'w-6 bg-primary' : 'w-2 bg-surface-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setMobileStep((s) => s + 1); }}
                disabled={mobileStep === 2}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-surface-200 text-surface-100 hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop: grid completo */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Bio */}
            <div>
              <h4 className="text-xl font-bold text-surface-50 mb-4">{t[language].subtitle}</h4>
              <div className="text-surface-100 leading-relaxed text-sm space-y-3">
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

            {/* Education */}
            <div>
              <h5 className="text-[10px] font-semibold text-surface-100 mb-4 uppercase tracking-widest">
                {t[language].educationTitle}
              </h5>
              <div className="space-y-6 relative pl-5 border-l-2 border-surface-200 ml-2"> 
                {education[language].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 bg-primary rounded-full border-[3px] border-background" />
                    <div>
                      <p className="text-sm text-surface-50 font-bold mb-0.5 leading-tight">{item.title}</p>
                      <p className="text-xs text-primary font-medium mb-0.5">{item.institution}</p>
                      <p className="text-[10px] text-surface-100 opacity-80">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-2">
              <h5 className="text-[10px] font-semibold text-surface-100 mb-3 uppercase tracking-widest">
                {t[language].softSkillsTitle}
              </h5>
              <div className="flex flex-wrap gap-2">
                {softSkills[language].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 border border-primary/50 text-surface-50 text-[11px] font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-2">
              <h5 className="text-[10px] font-semibold text-surface-100 mb-3 uppercase tracking-widest">
                {t[language].languagesTitle}
              </h5>
              <div className="flex flex-wrap gap-2">
                {idioms[language].map((idiom, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 border border-primary/50 text-surface-50 text-[11px] font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {idiom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 📸 DORSO DE LA TARJETA (Tu Foto) 📸 */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-surface-200 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <img 
            src="/me.jpg" 
            alt="Martina Abigail Canteros" 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
             <p className="text-surface-100 text-xs">{t[language].flipHint}</p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}