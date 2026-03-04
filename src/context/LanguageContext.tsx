'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  // Opcional: Recordar el idioma en el navegador
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedLang) setLanguage(savedLang)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('portfolio-lang', newLang)
      return newLang
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}