'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function NewsCarousel({ news = [], categories = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const newsWithCategory = news.map((news) => {
    const category = categories.find((category) => category.id === news.news_category_id);
    return {
      ...news,
      category,
    };
  });

  news = newsWithCategory;

  // Función para ir a la siguiente noticia
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  }, [news.length]);

  // Función para ir a la noticia anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  }, [news.length]);

  // Función para ir a un slide específico
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Configuración del auto-avance
  useEffect(() => {
    if (!news || news.length <= 1 || isPaused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [news, isPaused, nextSlide]);

  // Pausar el carrusel cuando el mouse está sobre él
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // Reanudar el carrusel cuando el mouse sale
  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Si no hay noticias, no mostramos nada
  if (!news || news.length === 0) return null;

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
      <ImageWithFallback
        key={`carousel-${currentIndex}`} // Importante para forzar re-montaje
        src={news[currentIndex]?.image ? 'https://www.canaldelcongreso.gob.mx/storage/' + news[currentIndex]?.image : '/placeholder/square.png'}
        fallbackSrc="/placeholder/square.png"
        alt={news[currentIndex]?.title || 'Noticia destacada'}
        className="w-full h-full object-cover"
      />
      </div>

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
        <div className="max-w-3xl">
          <p className="font-semibold mb-2">{news[currentIndex]?.category?.name}</p>
          <Link 
            href={`/noticias/${news[currentIndex]?.slug}`}
            className="inline-flex items-center text-lg font-semibold hover:underline"
          >
            <h2 className="text-4xl font-bold mb-4 line-clamp-2">
              {news[currentIndex]?.title}
            </h2>
          </Link>
        </div>
      </div>

      {/* Controles de navegación */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-colors"
        aria-label="Noticia anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-colors"
        aria-label="Siguiente noticia"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicadores de paginación */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a la noticia ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );


}
