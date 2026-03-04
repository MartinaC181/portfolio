export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillsData = {
  es: [
    {
      category: 'Frontend & Mobile',
      skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend & Servicios',
      skills: ['Node.js', 'Express', '.NET Core', 'Supabase', 'Firebase'],
    },
    {
      category: 'Data & IA',
      skills: ['Python', 'Pandas', 'Jupyter', 'Gemini AI'],
    },
    {
      category: 'Herramientas',
      skills: ['Git', 'GitHub', 'Docker', 'Postman'],
    },
  ],
  en: [
    {
      category: 'Frontend & Mobile',
      skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend & Services',
      skills: ['Node.js', 'Express', '.NET Core', 'Supabase', 'Firebase'],
    },
    {
      category: 'Data & AI',
      skills: ['Python', 'Pandas', 'Jupyter', 'Gemini AI'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Postman'],
    },
  ]
}