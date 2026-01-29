'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { moments } from '@/data/moments'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

export default function Moments() {
  // Configuración del Carrusel:
  // loop: true -> infinito (puedes dar vueltas sin parar)
  // align: 'center' -> la foto activa siempre queda al medio
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 bg-background border-t border-surface-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-surface-50 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              Galería de Momentos
            </h3>
            <p className="text-surface-200 mt-2 text-sm">
              Arrastra o usa las flechas para explorar
            </p>
          </div>

          {/* Botones de Navegación (Solo visibles en Desktop) */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-surface-200 hover:border-primary hover:bg-surface-100 text-surface-50 transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-surface-200 hover:border-primary hover:bg-surface-100 text-surface-50 transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- AREA DEL CARRUSEL --- */}
        {/* Borde sutil y esquinas redondeadas para el contenedor */}
        <div className="relative p-4 border border-surface-200/50 rounded-3xl bg-surface-100/30 backdrop-blur-sm">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y"> {/* touch-pan-y permite scrollear la página verticalmente sin trabarse */}
              
              {moments.map((item, index) => (
                // TAMAÑO DE LAS DIAPOSITIVAS:
                // flex-[0_0_85%] -> En Celular ocupa el 85% del ancho (se ve grande)
                // md:flex-[0_0_45%] -> En PC ocupa el 45% (se ven 2 a la vez)
                <div 
                  key={index} 
                  className="flex-[0_0_85%] md:flex-[0_0_45%] min-w-0 pl-4 relative"
                >
                  <div className="group relative h-[400px] rounded-2xl overflow-hidden border border-surface-200 shadow-lg cursor-grab active:cursor-grabbing">
                    
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                        {item.category}
                      </span>
                      <h4 className="text-white text-2xl font-bold leading-tight drop-shadow-md">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        {/* --- FIN CARRUSEL --- */}

      </div>
    </section>
  )
}