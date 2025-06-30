'use client';

import { useState, useEffect } from 'react';

export default function ImageWithFallback({ 
  src, 
  fallbackSrc, 
  alt, 
  className,
  key, // Asegúrate de pasar la key para forzar el re-montaje
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Resetear la imagen cuando cambia la fuente
  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
  }, [src]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      onLoad={() => setIsLoading(false)}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
    />
  );
}