import Link from 'next/link'

export const Organos = () => {
  return (
    <section className='flex flex-col gap-4 bg-[#FAFAFE] py-8'>
        <h2 className='text-3xl font-bold text-center text-gray-800 pt-16'>ORGANOS</h2>
        <div className='max-w-[1400px] mx-auto flex gap-4'>
            <Link href='#' className='opacity-75 hover:opacity-100 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/organos/comision-bicamaral.png" alt="Comision bicamaral" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/organos/consejo-consultivo.png" alt="Consejo consultivo" />
            </Link>
            <Link href='#' className='opacity-75 hover:opacity-100 transition'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/organos/defensoria-audiencia.png" alt="Defensoría de audiencia" />
            </Link>
        </div>
    </section>
  )
}
