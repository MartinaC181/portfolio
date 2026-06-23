import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Moments from '@/components/sections/Moments'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-30 pt-0">
      <div className="space-y-24 pb-24">
        <Hero />
        <Projects />
        <Skills />
      </div>
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}