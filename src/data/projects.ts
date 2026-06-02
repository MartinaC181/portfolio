import Project from '../utils/interfaces'

export const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      title: 'MburuPorã',
      description: 'Guía turística digital interactiva para Mburucuyá (Actualmente en desarrollo), desarrollada con Next.js y backend en FastAPI.',
      longDescription: 'MburuPorã (MburuApp) es una plataforma digital que actualmente se encuentra en pleno desarrollo, diseñada para impulsar el turismo local en Mburucuyá, Corrientes. Funciona como una guía interactiva y completa para visitantes, estructurada con un frontend moderno en Next.js y un backend de alto rendimiento utilizando Python y FastAPI para garantizar velocidad y escalabilidad.',
      image: '/projects/MburuPora.png',
      videoId: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind'],
      links: { github: 'https://github.com/MartinaC181/MburuApp.git', live: '#' },
    },
    {
      title: 'FleteStereo',
      description: 'Aplicación web para gestión de fletes/mudanzas con dashboard administrativo con UI modular y tipada. Componentes accesibles y estilado consistente.',
      longDescription: 'FleteStereo es una solución completa de software para empresas de logística y mudanzas. Construida con Next.js y TypeScript, ofrece un dashboard administrativo intuitivo para gestionar solicitudes de fletes, rutas, conductores y documentos. Implementa patrones modernos como server components, autenticación segura con Supabase y manejo de estado optimizado con TanStack Query. La interfaz utiliza shadcn-ui para componentes accesibles y Tailwind CSS para estilos consistentes.',
      image: '/projects/Fletestereo.png',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Aplicación web que actúa como "traductor cultural" del Noreste Argentino y genera experiencias turísticas personalizadas usando IA.',
      longDescription: 'IberApp es una plataforma innovadora que combina turismo con inteligencia artificial. Actúa como un "traductor cultural" que conecta a turistas con las tradiciones únicas del Noreste Argentino. Utiliza la API de Google Gemini AI para generar recomendaciones de experiencias personalizadas basadas en preferencias del usuario. Desarrollada con React, Vite y Supabase, ofrece una experiencia rápida y responsiva.',
      image: '/projects/IberApp.png',
      videoId: 'WcktiVoFzEo',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'Aplicación móvil para gestión de entrenamientos con navegación fluida y componentes modernos.',
      longDescription: 'MiGymApp es una aplicación móvil nativa diseñada para que usuarios puedan seguir sus entrenamientos de forma eficiente. Con una interfaz intuitiva y animations suaves usando Lottie, permite registrar series, repeticiones y descansos. Implementa i18n para soporte multiidioma y NativeWind para estilos consistentes. Construida con React Native y Expo, garantiza compatibilidad en iOS y Android.',
      image: '/projects/MiGymApp.png',
      videoId: '',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'i18n', 'Lottie'],
      links: { 
        github: 'https://github.com/MartinaC181/MiGymApp', 
        githubBackend: 'https://github.com/ginagrosso/MyGymBackend.git',
        live: '#' 
      },
    },
    {
      title: 'Spa Sentirse Bien',
      description: 'Aplicación web que integra autenticación, formularios y gestión de estado del cliente.',
      longDescription: 'Spa Sentirse Bien es una plataforma de reservas y gestión de servicios de spa. Integra autenticación segura con NextAuth, formularios robustos para reservas, y gestión centralizada del estado con React Query. Utiliza MongoDB para persistencia de datos y Nodemailer para notificaciones por correo. Firebase storage para medios. Construida con Next.js 15 y TypeScript, ofrece una experiencia segura y confiable para clientes y administradores.',
      image: '/projects/SpaSentirseBien.png',
      videoId: 'RUv0GEmd2qs',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind', 'NextAuth', 'MongoDB', 'Nodemailer', 'Firebase', 'React Query'],
      links: { 
        github: 'https://github.com/MartinaC181/Spa-Sentirse-Bien-', 
        githubBackend: 'https://github.com/MartinaC181/SPA-Back.git',
        live: '#' 
      },
    },
    {
      title: 'Sistema de Gestión de Biblioteca',
      description: 'App académica para administrar libros, socios y préstamos con arquitectura en N-capas y validaciones.',
      longDescription: 'Sistema de Gestión de Biblioteca es una aplicación académica que demuestra arquitectura en capas. Permite administrar catálogos de libros, registrar socios de la biblioteca y gestionar préstamos con devoluciones. Implementa validaciones robustas en múltiples capas, autenticación de usuarios y reportes de actividad. Utiliza React para la interfaz, Express/Node.js en el backend y PostgreSQL para la persistencia de datos.',
      image: '/projects/LibraryMS.png',
      videoId: '',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'App Recetas',
      description: 'API REST con autenticación que permite a usuarios registrados crear, editar y eliminar recetas.',
      longDescription: 'API App Recetas es un backend RESTful que demuestra mejores prácticas en desarrollo de APIs. Implementa autenticación segura con JWT, validación de datos exhaustiva y autorización basada en roles. Los usuarios pueden crear, editar, eliminar y compartir recetas. Utiliza MongoDB con Mongoose para modelos tipados, Express para routing y Node.js como runtime. Incluye documentación completa con Swagger.',
      image: '/projects/RecipesAPI.png',
      videoId: '',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT'],
      links: { github: 'https://github.com/MartinaC181/Frontend_AppRecetas',
        githubBackend: 'https://github.com/MartinaC181/Api_AppRecetas',
        live: '#' },
    }
  ],
  en: [
    {
      title: 'MburuPorã',
      description: 'Interactive digital tourism guide for Mburucuyá (Currently in development), built with Next.js and a FastAPI backend.',
      longDescription: 'MburuPorã (MburuApp) is a digital platform currently in active development, designed to boost local tourism in Mburucuyá, Corrientes. It acts as a comprehensive interactive guide for visitors, structured with a modern frontend in Next.js and a high-performance backend using Python and FastAPI to ensure speed and scalability.',
      image: '/projects/MburuPora.png',
      videoId: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind'],
      links: { github: 'https://github.com/MartinaC181/MburuApp.git', live: '#' },
    },
    {
      title: 'FleteStereo',
      description: 'Web application for freight/moving management with an administrative dashboard, modular and typed UI. Accessible components and consistent styling.',
      longDescription: 'FleteStereo is a comprehensive software solution for logistics and moving companies. Built with Next.js and TypeScript, it offers an intuitive administrative dashboard to manage freight requests, routes, drivers, and documents. It implements modern patterns like server components, secure authentication with Supabase, and optimized state management with TanStack Query. The interface uses shadcn-ui for accessible components and Tailwind CSS for consistent styling.',
      image: '/projects/Fletestereo.png',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Web application acting as a "cultural translator" for Northeast Argentina, generating personalized tourist experiences using AI.',
      longDescription: 'IberApp is an innovative platform that combines tourism with artificial intelligence. It acts as a "cultural translator" connecting tourists with the unique traditions of Northeast Argentina. It uses Google Gemini AI API to generate personalized experience recommendations based on user preferences. Developed with React, Vite, and Supabase, it provides a fast and responsive experience.',
      image: '/projects/IberApp.png',
      videoId: 'WcktiVoFzEo',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'Mobile application for workout management with fluid navigation and modern components.',
      longDescription: 'MiGymApp is a native mobile application designed for users to efficiently track their workouts. With an intuitive interface and smooth animations using Lottie, it allows users to record sets, reps, and rest periods. It implements i18n for multilingual support and NativeWind for consistent styling. Built with React Native and Expo, it ensures compatibility on iOS and Android.',
      image: '/projects/MiGymApp.png',
      videoId: '',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'i18n', 'Lottie'],
      links: { 
        github: 'https://github.com/MartinaC181/MiGymApp', 
        githubBackend: 'https://github.com/ginagrosso/MyGymBackend.git',
        live: '#' 
      },
    },
    {
      title: 'Spa Sentirse Bien',
      description: 'Web application integrating authentication, forms, and client state management.',
      longDescription: 'Spa Sentirse Bien is a spa booking and service management platform. It integrates secure authentication with NextAuth, robust forms for reservations, and centralized state management with React Query. Uses MongoDB for data persistence and Nodemailer for email notifications. Firebase storage for media files. Built with Next.js 15 and TypeScript, it provides a secure and reliable experience for both clients and administrators.',
      image: '/projects/SpaSentirseBien.png',
      videoId: 'RUv0GEmd2qs',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind', 'NextAuth', 'MongoDB', 'Nodemailer', 'Firebase', 'React Query'],
      links: { 
        github: 'https://github.com/MartinaC181/Spa-Sentirse-Bien-', 
        githubBackend: 'https://github.com/MartinaC181/SPA-Back.git',
        live: '#' 
      },
    },
    {
      title: 'Library Management System',
      description: 'Academic app to manage books, members, and loans with N-tier architecture and validations.',
      longDescription: 'Library Management System is an academic application demonstrating N-tier architecture. It allows managing book catalogs, registering library members, and managing loans with returns. It implements robust validations across multiple layers, user authentication, and activity reports. Uses React for the interface, Express/Node.js in the backend, and PostgreSQL for data persistence.',
      image: '/projects/LibraryMS.png',
      videoId: '',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'Recipes App API',
      description: 'RESTful API with authentication allowing registered users to create, edit, and delete recipes.',
      longDescription: 'Recipes App API is a RESTful backend demonstrating best practices in API development. It implements secure authentication with JWT, exhaustive data validation, and role-based authorization. Users can create, edit, delete, and share recipes. Uses MongoDB with Mongoose for typed models, Express for routing, and Node.js as runtime. Includes complete documentation with Swagger.',
      image: '/projects/RecipesAPI.png',
      videoId: '',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT'],
      links: { github: 'https://github.com/MartinaC181/Api_AppRecetas', live: '#' },
    }
  ]
}