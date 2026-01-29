import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'
import Moments from '@/components/sections/Moments'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-surface-50">
      <div className="space-y-24 pb-24"> {/* Espaciado entre secciones */}
        <Hero />
        <Projects />
        <Skills />
        <Moments />
      </div>
      <Footer />
    </main>
  );
}