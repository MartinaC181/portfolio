/* eslint-disable @next/next/no-img-element */
'use client'

import { moments } from '@/data/moments'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle
} from '@/components/ui/dialog'
import Autoplay from 'embla-carousel-autoplay'
import { Image as ImageIcon } from 'lucide-react'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Moments() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  
  const { language } = useLanguage()

  const t = {
    es: {
      title: "Galería de Momentos",
      subtitle: "Explora mis mejores momentos académicos y profesionales",
      viewingImage: "Viendo imagen:"
    },
    en: {
      title: "Moments Gallery",
      subtitle: "Explore my best academic and professional moments",
      viewingImage: "Viewing image:"
    }
  }

  return (
    <section className="bg-background">
      <div className="w-full px-6 md:px-8 py-20 flex flex-col">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-surface-50 flex items-center justify-center gap-3 mb-4">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            {t[language].title}
          </h3>
          <p className="text-base md:text-lg text-surface-100">
            {t[language].subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full mx-auto max-w-5xl mt-32">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {moments[language].map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-2/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-video rounded-2xl overflow-hidden border border-surface-200 shadow-lg cursor-pointer">

                        {/* Imagen */}
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                          }}
                        />

                        {/* Icono de error (Backup) */}
                        <div className="fallback-icon hidden absolute inset-0 flex items-center justify-center bg-surface-100">
                          <ImageIcon className="w-12 h-12 text-surface-200" />
                        </div>

                        {/* Overlay de Texto */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                            {item.category}
                          </span>
                          <h4 className="text-white text-lg md:text-2xl font-bold leading-tight drop-shadow-md">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </DialogTrigger>

                    {/* Lightbox Modal */}
                    <DialogContent className="max-w-2xl w-full bg-background border border-surface-200 shadow-xl p-0 rounded-2xl">
                      <DialogTitle className="sr-only">
                        {t[language].viewingImage} {item.title}
                      </DialogTitle>
                      <div className="relative w-full max-h-[70vh] overflow-hidden rounded-2xl">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto object-contain rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 md:p-8 rounded-b-2xl">
                          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                            {item.category}
                          </span>
                          <h4 className="text-white text-lg md:text-2xl font-bold leading-tight drop-shadow-md">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles */}
            <div className="flex justify-between items-center mt-6">
              <CarouselPrevious className="relative static w-10 h-10 rounded-full border border-surface-200 hover:border-primary hover:bg-surface-100 text-surface-50 transition-all" />
              <CarouselNext className="relative static w-10 h-10 rounded-full border border-surface-200 hover:border-primary hover:bg-surface-100 text-surface-50 transition-all" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  )
}