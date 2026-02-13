import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Moments from '@/components/sections/Moments'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-surface-50">
      <div className="space-y-24 pb-24">
        <Hero />
        <Projects />
        <Skills />
        
        {/* Moments + Contact Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Contact />
            <Moments />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}