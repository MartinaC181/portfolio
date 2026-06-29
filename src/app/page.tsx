import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Footer from '@/components/sections/Footer'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-30 pt-0">
      <div className="space-y-16 lg:space-y-24 pb-24">
        <Hero />
        <Projects />
        <Skills />
      </div>
      <div className="w-full lg:flex lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <Contact />
        </div>
        <div className="lg:w-1/2">
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}