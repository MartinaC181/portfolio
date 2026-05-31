# 🚀 Portfolio - Martina Abigail Canteros

Portfolio personal moderno y totalmente bilingüe (ES/EN) que muestra proyectos, habilidades y experiencia como Desarrolladora Full Stack. Diseñado con tecnologías modernas, animaciones fluidas y una experiencia de usuario optimizada.

**🔗 Demo en vivo:** https://martinacanteros.vercel.app/

---

## 🛠️ Tecnologías Principales

| Categoría | Tecnologías |
|-----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript 5 |
| **Estilos** | Tailwind CSS 4, PostCSS 4 |
| **Animaciones** | Framer Motion 12 |
| **UI Components** | shadcn/ui, Radix UI |
| **Carrusel** | Embla Carousel 8 |
| **Iconos** | Lucide React |
| **Backend** | Node.js, Nodemailer |
| **Control de versiones** | Git, ESLint 9 |

---

## ✨ Características Destacadas

### 🎯 Experiencia del Usuario
- **Bilingüe** Interfaz en Español e Inglés con toggle integrado
- **Modo Oscuro:** Diseño elegante con gradientes y efectos visuales modernos
- **Totalmente Responsivo:** Optimizado para mobile, tablet y desktop
- **Animaciones Suaves:** Transiciones fluidas con Framer Motion

### 🎨 Efectos Visuales
- **Glitch Text Effect:** Efecto de glitch en el título principal
- **Sakura Fall Animation:** Flores de cerezo cayendo en el fondo
- **Grain Texture:** Textura de grano en el fondo para más profundidad
- **Scroll to Top:** Botón flotante para volver al inicio con animación

### 📱 Componentes Interactivos
- **Carrusel Deslizable:** Visualización fluida de proyectos con Embla Carousel
- **Formulario de Contacto:** Integración con API backend y Nodemailer
- **Profile Card:** Presentación elegante del perfil
- **Project Cards:** Tarjetas informativas de proyectos con enlaces
- **Skill Cards:** Visualización categorizada de habilidades

### 🏗️ Arquitectura
- **Modular:** Componentes separados y reutilizables
- **Type-Safe:** TypeScript en todo el proyecto
- **Datos Centralizados:** Archivos de datos separados para fácil mantenimiento
- **App Router:** Enrutamiento moderno de Next.js

---

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global
│   ├── globals.css           # Estilos globales
│   └── api/
│       └── contact/
│           └── route.ts      # API para formulario de contacto
├── components/
│   ├── layout/
│   │   └── Footer.tsx
│   ├── sections/             # Secciones principales
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Moments.tsx
│   └── ui/                   # Componentes UI reutilizables
│       ├── GlitchText.tsx
│       ├── SakuraFall.tsx
│       ├── LanguageToggle.tsx
│       ├── ProfileCard.tsx
│       ├── ProjectCard.tsx
│       ├── SkillCard.tsx
│       ├── carousel.tsx
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── ScrollToTop.tsx
│       └── CatEasterEgg.tsx
├── context/
│   └── LanguageContext.tsx   # Contexto de idioma
├── data/
│   ├── profile.ts            # Datos personales y educación
│   ├── projects.ts           # Lista de proyectos
│   ├── skills.ts             # Habilidades técnicas
│   └── moments.ts
├── lib/
│   └── utils.ts
└── utils/
    └── animations.ts
```

---

## 🚀 Cómo Iniciar el Proyecto

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MartinaC181/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de entorno** (para formulario de contacto):
   ```bash
   # Crear archivo .env.local
   EMAIL_USER=tu_email@gmail.com
   EMAIL_PASS=tu_contraseña_app
   ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   Accede a `http://localhost:3000`

### Scripts Disponibles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Crea build para producción |
| `npm start` | Ejecuta la aplicación en producción |
| `npm run lint` | Ejecuta ESLint |

---

## 📊 Proyectos Destacados

### 1. **FleteStereo** 
Aplicación web para gestión de fletes/mudanzas con dashboard administrativo.
- **Tech:** Next.js, React, TypeScript, Tailwind, shadcn-ui, TanStack Query, Supabase
- [GitHub](https://github.com/MartinaC181/project-fletestereo) | [Demo](https://project-fletestereo.vercel.app/)

### 2. **IberApp**
App "traductor cultural" del Noreste Argentino con experiencias turísticas personalizadas con IA.
- **Tech:** React, TypeScript, Vite, Tailwind, Supabase, Google Gemini AI
- [GitHub](https://github.com/teorisso/iberapp)

### 3. **MiGymApp**
Aplicación móvil para gestión de entrenamientos con navegación fluida.
- **Tech:** React Native, Expo, TypeScript, NativeWind, i18n, Lottie
- [GitHub](https://github.com/MartinaC181/MiGymApp)

---

## 💻 Habilidades Técnicas

### Frontend & Mobile
React · Next.js · React Native · TypeScript · Tailwind CSS

### Backend & Servicios
Node.js · Express · .NET Core · Supabase · Firebase

### Data & IA
Python · Pandas · Jupyter · Google Gemini AI

### Herramientas
Git · GitHub · Docker · Postman

---

## 📚 Educación

- **Tecnicatura Universitaria en Programación** - UTN FRRe (2024-2025)
- **Node.js + React Bootcamp** (2024)
- **Diplomatura en Ciencia de Datos e IA** - UNSAM (2023)

---

## 🔗 Enlaces de Contacto

- **LinkedIn:** [Martina Abigail Canteros](https://www.linkedin.com/in/martina-abigail-canteros)
- **GitHub:** [MartinaC181](https://github.com/MartinaC181)
- **Email:** martiinacanteros@gmail.com
- **Portfolio:** [martinacanteros.vercel.app](https://martinacanteros.vercel.app/)

---

## 📄 Licencia

Este proyecto está disponible bajo licencia abierta. Siéntete libre de usarlo como referencia o inspiración.

---

## 🎯 Roadmap Futuro

- [ ] Agregar blog con artículos técnicos
- [ ] Implementar Dark/Light mode toggle completo
- [ ] Agregar sección de testimonios
- [ ] Optimizar Core Web Vitals
- [ ] Agregar más proyectos showcases

---

**Hecho con ❤️ usando Next.js, TypeScript y Tailwind CSS**