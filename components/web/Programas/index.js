'use client';

import Link from 'next/link';
import { Carousel } from '../Carousel';

const programas = [
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visita%20Inco%CC%81moda-rS32wFlCr6KOnGUexk1T3doHmXFYmo.png',
    alt: 'Visita Incómoda'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/En%20la%20Banqueta-E46ULeoN9cj0jIM3PNH382Fv3EFUfi.png',
    alt: 'En la Banqueta'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20is%20art-zRYbSrULObwZ6kneiJUPeGtBcafOga.png',
    alt: 'This is art'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La%20Primera%20Mujer-TIv70II6kiTWGig4vTAUIG7uCK0EdL.png',
    alt: 'La Primera Mujer'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quo%CC%81rum-MV4Pq36zmoyGZgel6rVTelQSGjflmK.png',
    alt: 'Quorum'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vivas%20libres%20y%20sin%20miedo-lQ3hrnX5krHmb60Ppgm1J6r8z9P9BZ.png',
    alt: 'Vivas libres y sin miedo'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalidades-7GRk8wk75Ip80NmGIwpR2C0DAh5ZYN.png',
    alt: 'Personalidades'
  },
  {
    href: '#',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mujeres%20Imprescindibles-KDryCCpzPjizvbhnnxxbBVKX1RUgJ8.png',
    alt: 'Mujeres Imprescindibles'
  }
];

const ProgramasItem = ({ href, src, alt }) => (
  <Link href={href} className="opacity-75 hover:opacity-100 hover:scale-105 transition block px-2 w-full">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} className="w-auto w-full max-w-96 mx-auto object-contain" />
  </Link>
);

export const Programas = () => {
  return (
    <section className='flex flex-col gap-8 bg-[#FAFAFE] py-8'>
      <h2 className='text-3xl font-bold text-center text-gray-800 pt-16'>NUESTROS PROGRAMAS</h2>
      
      {/* Versión móvil - Carrusel */}
      <div className="md:hidden w-full px-4">
        <Carousel>
          {programas.map((programa, index) => (
            <ProgramasItem key={index} {...programa} />
          ))}
        </Carousel>
      </div>
      
      {/* Versión escritorio - Grid */}
      <div className='hidden md:block w-full px-4'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
        {programas.map((programa, index) => (
          <Link 
            key={index} 
            href={programa.href} 
            className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={programa.src} 
              alt={programa.alt} 
              className='w-full h-full max-h-64 object-contain' 
            />
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

