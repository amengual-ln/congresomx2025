'use client';

import Link from 'next/link';
import { Carousel } from '../Carousel';

const AccesosItem = ({ href, src, alt }) => (
  <Link href={href} className="opacity-75 hover:opacity-100 hover:scale-105 transition block px-2">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} className="w-auto mx-auto" />
  </Link>
);

export const Accesos = () => {
  const accesos = [
    { href: '#', src: '/accesos/radio-congreso.png', alt: 'Radio' },
    { href: '#', src: '/accesos/nuestra-programacion.png', alt: 'Nuestra Programación' },
    { href: '#', src: '/accesos/noticias-congreso.png', alt: 'Noticias' },
    { href: '#', src: '/accesos/transparencia.png', alt: 'Transparencia' },
    { href: '#', src: '/accesos/contacto.png', alt: 'Contacto' }
  ];

  return (
    <section className='bg-[#FAFAFE] py-8'>
      {/* Versión Móvil (con carrusel) */}
      <div className="md:hidden">
        <Carousel className="py-2">
          {accesos.map((item, index) => (
            <AccesosItem 
              key={`mobile-${index}`}
              href={item.href}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </Carousel>
      </div>
      
      {/* Versión Escritorio (sin carrusel) */}
      <div className="hidden md:block">
        <div className="max-w-[1400px] mx-auto flex justify-center gap-4 px-4">
          {accesos.map((item, index) => (
            <Link 
              key={`desktop-${index}`}
              href={item.href} 
              className="opacity-75 hover:opacity-100 hover:scale-105 transition"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
