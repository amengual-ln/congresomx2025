import Link from 'next/link'

export const Accesos = () => {
  return (
    <section className='flex gap-4 bg-[#FAFAFE] py-8'>
        <div className='max-w-[1400px] mx-auto flex gap-4'>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/accesos/radio-congreso.png" alt="Radio" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/accesos/nuestra-programacion.png" alt="Nuestra Programación" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/accesos/noticias-congreso.png" alt="Noticias" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/accesos/transparencia.png" alt="Transparencia" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 hover:scale-105 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/accesos/contacto.png" alt="Contacto" />
            </Link>
        </div>
    </section>
  )
}
