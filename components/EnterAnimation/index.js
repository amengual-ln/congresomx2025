'use client'

import { useInView } from 'react-intersection-observer';

export function EnterAnimation({children, className, delay = 0}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, display: 'contents' }}
    >
      {children}
    </div>
  )
}