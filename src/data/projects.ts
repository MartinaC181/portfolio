export interface Project {
  title: string
  description: string
  technologies: string[]
  links: {
    github: string
    live: string
  }
}

export const projectsData = {
  es: [
    {
      title: 'FleteStereo',
      description: 'Aplicación web para gestión de fletes/mudanzas con dashboard administrativo con UI modular y tipada. Componentes accesibles y estilado consistente.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Aplicación web que actúa como "traductor cultural" del Noreste Argentino y genera experiencias turísticas personalizadas usando IA.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'Aplicación móvil para gestión de entrenamientos con navegación fluida y componentes modernos.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'i18n', 'Lottie'],
      links: { github: 'https://github.com/MartinaC181/MiGymApp', live: '#' },
    },
    {
      title: 'Spa Sentirse Bien',
      description: 'Aplicación web que integra autenticación, formularios y gestión de estado del cliente.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind', 'NextAuth', 'MongoDB', 'Nodemailer', 'Firebase', 'React Query'],
      links: { github: 'https://github.com/MartinaC181/Spa-Sentirse-Bien-', live: '#' },
    },
    {
      title: 'Sistema de Gestión de Biblioteca',
      description: 'App académica para administrar libros, socios y préstamos con arquitectura en N-capas y validaciones.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'API App Recetas',
      description: 'API REST con autenticación que permite a usuarios registrados crear, editar y eliminar recetas.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT'],
      links: { github: 'https://github.com/MartinaC181/Api_AppRecetas', live: '#' },
    },
  ],
  en: [
    {
      title: 'FleteStereo',
      description: 'Web application for freight/moving management with an administrative dashboard, modular and typed UI. Accessible components and consistent styling.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Web application acting as a "cultural translator" for Northeast Argentina, generating personalized tourist experiences using AI.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'Mobile application for workout management with fluid navigation and modern components.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'i18n', 'Lottie'],
      links: { github: 'https://github.com/MartinaC181/MiGymApp', live: '#' },
    },
    {
      title: 'Spa Sentirse Bien',
      description: 'Web application integrating authentication, forms, and client state management.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind', 'NextAuth', 'MongoDB', 'Nodemailer', 'Firebase', 'React Query'],
      links: { github: 'https://github.com/MartinaC181/Spa-Sentirse-Bien-', live: '#' },
    },
    {
      title: 'Library Management System',
      description: 'Academic app to manage books, members, and loans with N-tier architecture and validations.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'Recipes App API',
      description: 'RESTful API with authentication allowing registered users to create, edit, and delete recipes.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT'],
      links: { github: 'https://github.com/MartinaC181/Api_AppRecetas', live: '#' },
    },
  ]
}