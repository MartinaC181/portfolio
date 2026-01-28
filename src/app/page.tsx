import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-surface-50">
      <div className="space-y-24 pb-24"> {/* Espaciado entre secciones */}
        <Hero />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </main>
  );
}