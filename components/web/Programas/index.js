import Link from 'next/link'

export const Programas = () => {
  return (
    <section className='flex flex-col gap-8 bg-[#FAFAFE] py-8'>
        <h2 className='text-3xl font-bold text-center text-gray-800 pt-16'>NUESTROS PROGRAMAS</h2>
        <div className='max-w-[1400px] w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2' style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visita%20Inco%CC%81moda-rS32wFlCr6KOnGUexk1T3doHmXFYmo.png' alt="Radio" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/En%20la%20Banqueta-E46ULeoN9cj0jIM3PNH382Fv3EFUfi.png' alt="Nuestra Programación" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20is%20art-zRYbSrULObwZ6kneiJUPeGtBcafOga.png' alt="Noticias" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La%20Primera%20Mujer-TIv70II6kiTWGig4vTAUIG7uCK0EdL.png' alt="Transparencia" />
            </Link>
            {/*  */}
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quo%CC%81rum-MV4Pq36zmoyGZgel6rVTelQSGjflmK.png' alt="Transparencia" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vivas%20libres%20y%20sin%20miedo-lQ3hrnX5krHmb60Ppgm1J6r8z9P9BZ.png' alt="Transparencia" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalidades-7GRk8wk75Ip80NmGIwpR2C0DAh5ZYN.png' alt="Transparencia" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition w-full' style={{ minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='w-full h-full object-contain' src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mujeres%20Imprescindibles-KDryCCpzPjizvbhnnxxbBVKX1RUgJ8.png' alt="Transparencia" />
            </Link>
        </div>
    </section>
  )
}

