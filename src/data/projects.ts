import Project from '../utils/interfaces'

export const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      title: 'MburuPorã',
      description: 'Aplicación web que ofrece una guía turística interactiva para explorar Mburucuyá con información local y rutas claras.',
      longDescription: 'MburuPorã es una plataforma digital en desarrollo que impulsa el turismo local en Mburucuyá. Su arquitectura separa la presentación de la lógica de negocio y ofrece un flujo de usuario orientado a visitantes, con secciones de puntos de interés, rutas recomendadas y contenidos dinámicos basados en la ubicación y los intereses.',
      image: '/projects/MburuPora.png',
      videoId: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind'],
      links: { github: 'https://github.com/MartinaC181/MburuApp.git', live: '#' },
    },
    {
      title: 'FleteStereo',
      description: 'Aplicación que centraliza la gestión de mudanzas y envíos para manejar operaciones, rutas y documentación desde un mismo lugar.',
      longDescription: 'FleteStereo es una solución empresarial para logística y mudanzas con un dashboard administrativo que organiza solicitudes, rutas, conductores y documentos. Su diseño modular divide los procesos en equipos, activos y servicios, y su capa de seguridad controla accesos mientras la gestión de estado mantiene sincronizados los datos entre usuarios y vistas.',
      image: '/projects/Fletestereo.png',
      videoId: 'YJtgraRjins',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Aplicación web innovadora que utiliza Inteligencia Artificial para traducir expresiones culturales del Noreste de Argentina y generar experiencias turísticas personalizadas',
      longDescription: 'IberApp es una plataforma diseñada como un traductor cultural para el turismo del Noreste argentino. Combina contenidos culturales con un motor de recomendaciones para generar rutas y experiencias personalizadas basadas en preferencias del usuario, integrando perfiles, selecciones y resultados en una experiencia de navegación fluida.',
      image: '/projects/IberApp.png',
      videoId: 'WcktiVoFzEo',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'App móvil que registra rutinas, series y descansos para hacer el seguimiento de entrenamientos más fácil y organizado.',
      longDescription: 'MiGymApp es una aplicación móvil nativa pensada para gestionar entrenamientos con precisión. Su estructura incluye pantallas de planificación, control de series/descansos y métricas de progreso, además de ofrecer una navegación adaptada a usuarios en movimiento y soporte multilingüe en la experiencia.',
      image: '/projects/MiGymApp.png',
      videoId: '/-uh08tH2WrE?feature=share',
      technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'i18n', 'Lottie'],
      links: { 
        github: 'https://github.com/MartinaC181/MiGymApp', 
        githubBackend: 'https://github.com/ginagrosso/MyGymBackend.git',
        live: '#' 
      },
    },
    {
      title: 'Spa "Sentirse Bien"',
      description: 'App que optimiza reservas y la gestión de servicios para que clientes y administradores controlen turnos y pedidos con facilidad.',
      longDescription: 'Spa Sentirse Bien es una plataforma de reservas y gestión de servicios que unifica calendarios, disponibilidad de servicios y notificaciones. Su arquitectura separa la experiencia del cliente de la administración interna, con formularios de reserva, paneles de estado y seguimiento de confirmaciones para mantener la operación ordenada y transparente.',
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
      title: 'Gestión de Biblioteca',
      description: 'Sistema que automatiza préstamos, devoluciones y el control de inventario para una biblioteca académica más eficiente.',
      longDescription: 'Sistema de Gestión de Biblioteca es una aplicación académica basada en una arquitectura en capas. Incluye módulos de catálogo, socios y préstamos, con validaciones en cada paso del flujo, controles de autorización y generación de reportes para facilitar la operación diaria de la biblioteca.',
      image: '/projects/LibraryMS.png',
      videoId: '',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'App Recetas',
      description: 'API REST que ofrece un espacio seguro para que usuarios registrados creen, editen y compartan recetas en línea.',
      longDescription: 'App Recetas es un backend RESTful diseñado para administrar recetas con seguridad y control de acceso. Cuenta con endpoints para crear, consultar, modificar y eliminar contenido, manejo de roles para permisos y documentación clara para facilitar su consumo por clientes y servicios externos.',
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
      description: 'App that offers an interactive tourism guide to explore Mburucuyá with local insights and clear routes.',
      longDescription: 'MburuPorã (MburuApp) is a platform created to support local tourism in Mburucuyá, Corrientes. Its architecture separates content delivery from business logic, offering an intuitive visitor flow with sections for attractions, route planning and dynamic local recommendations based on user preferences.',
      image: '/projects/MburuPora.png',
      videoId: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind'],
      links: { github: 'https://github.com/MartinaC181/MburuApp.git', live: '#' },
    },
    {
      title: 'FleteStereo',
      description: 'App that centralizes freight and moving operations so requests, routes and logistics are managed from one dashboard.',
      longDescription: 'FleteStereo is a full logistics solution with an administrative dashboard that organizes freight requests, route planning, driver assignments and document handling. Its architecture segments operational workflows into reusable modules and maintains synchronized state across users and views for a smooth operational experience.',
      image: '/projects/Fletestereo.png',
      videoId: 'dQw4w9WgXcQ',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn-ui', 'Radix', 'TanStack Query', 'Supabase'],
      links: { github: 'https://github.com/MartinaC181/project-fletestereo', live: 'https://project-fletestereo.vercel.app/' },
    },
    {
      title: 'IberApp',
      description: 'Web app that uses AI to translate cultural expressions from Northeast Argentina and generate personalized tourism experiences.',
      longDescription: 'IberApp is designed as a cultural translation platform for Northeast Argentina tourism. It organizes cultural content, user preferences and experience suggestions in a cohesive flow, allowing visitors to explore tailored itineraries supported by a recommendation engine and profile-driven personalization.',
      image: '/projects/IberApp.png',
      videoId: 'WcktiVoFzEo',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Google Gemini AI'],
      links: { github: 'https://github.com/teorisso/iberapp', live: '#' },
    },
    {
      title: 'MiGymApp',
      description: 'App that tracks workouts with a planner for routines, reps and recovery.',
      longDescription: 'MiGymApp is a mobile application built around workout planning and progress tracking. It includes structured sessions, repetition counters, rest timing and progress summaries, with a navigation flow optimized for users training on the go and support for multiple languages.',
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
      title: 'Spa "Sentirse Bien"',
      description: 'App that simplifies spa booking and service workflows so customers and staff can manage appointments efficiently.',
      longDescription: 'Spa Sentirse Bien is a spa reservation and service management platform with a flow that covers booking, availability, client profiles and administrative oversight. It separates customer-facing reservation screens from the internal schedule manager to maintain clarity and consistency in service delivery.',
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
      title: 'Library Management',
      description: 'System that automates book loans, member records and inventory for academic library operations.',
      longDescription: 'Library Management System is an academic app built with an N-tier architecture. It includes catalog management, member registration and loan lifecycle handling, with validation at each stage and reporting tools to support library administration.',
      image: '/projects/LibraryMS.png',
      videoId: '',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      links: { github: 'https://github.com/MartinaC181/sistema-biblioteca', live: '#' },
    },
    {
      title: 'Recipes App API',
      description: 'App that provides a secure API for authenticated users to manage recipes and share culinary content.',
      longDescription: 'Recipes App API is a RESTful backend designed to manage recipes and user content securely. It structures endpoints for create/read/update/delete operations, enforces role-based access and validation rules, and provides comprehensive documentation for easy consumption by clients.',
      image: '/projects/RecipesAPI.png',
      videoId: '',
      technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT'],
      links: { github: 'https://github.com/MartinaC181/Api_AppRecetas', live: '#' },
    }
  ]
}