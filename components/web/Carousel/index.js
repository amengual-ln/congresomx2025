'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = ({ children, className = '' }) => {
  const autoplay = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: true,
    skipSnaps: false,
  }, []); // No pasar plugins aquí, los manejaremos manualmente
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Configuración inicial
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    
    // Event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Detección de móvil y configuración de autoplay
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 640; // sm breakpoint
      
      if (isMobileView !== isMobile) {
        setIsMobile(isMobileView);
        
        // Solo configurar autoplay en móviles
        if (isMobileView) {
          // Destruir instancia previa si existe
          if (autoplay.current) {
            autoplay.current.destroy();
          }
          
          // Crear nueva instancia de autoplay
          const autoplayInstance = Autoplay(
            { delay: 6000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
          );
          
          // Inicializar autoplay con la API de Embla
          emblaApi.reInit({}, [autoplayInstance]);
          autoplayInstance.play();
          
          // Guardar referencia
          autoplay.current = autoplayInstance;
        } else if (autoplay.current) {
          // En escritorio, destruir autoplay si existe
          autoplay.current.destroy();
          autoplay.current = null;
          emblaApi.reInit();
        }
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Limpieza
    return () => {
      if (autoplay.current) {
        autoplay.current.destroy();
      }
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [emblaApi, onSelect, isMobile]);
  
  return (
    <div className={`relative max-w-screen md:max-w-[1400px] mx-auto overflow-hidden py-2 ${className}`}>
      {/* Carousel Container */}
      <div className="w-full overflow-visible" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full md:w-1/4 px-2"
              style={isMobile ? { width: 'calc(100% - 2rem)' } : {}}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {isMobile && (
        <>
          <button 
            onClick={() => {
              scrollPrev();
              if (autoplay.current) autoplay.current.reset();
            }}
            onMouseEnter={() => autoplay.current?.stop?.()}
            onMouseLeave={() => autoplay.current?.reset?.()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-colors -mr-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button 
            onClick={() => {
              scrollNext();
              if (autoplay.current) autoplay.current.reset();
            }}
            onMouseEnter={() => autoplay.current?.stop?.()}
            onMouseLeave={() => autoplay.current?.reset?.()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-colors -ml-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}
      
      {/* Pagination Dots - Only show on mobile */}
      {isMobile && children.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex 
                  ? 'w-6 bg-gray-800' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={index === selectedIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};