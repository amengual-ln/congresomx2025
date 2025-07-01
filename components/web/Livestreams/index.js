export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/db'
import ImageWithFallback from '@/components/ImageWithFallback'
import { PlayIcon, CircleIcon } from 'lucide-react'

export const Livestreams = async () => {
  const livestreams = await prisma.transmissions.findMany()
  const transmissionImages = await prisma.transmission_images.findMany()
  const signals = await prisma.signals.findMany({ where: { name: { contains: 'Canal' } }, orderBy: { updated_at: 'asc' } })

  console.log(transmissionImages)

  const mainChannels = signals

  const filteredLivestreams = livestreams.filter((l) => !l.title.includes('Canal'))

  return (
    <section className='h-[calc(100vh-300px)] bg-[url("/fondo-menu-inicio.png")] bg-cover'>
      <div className='w-full max-w-[1400px] mx-auto flex gap-4 justify-center md:justify-end pt-8'>
        {mainChannels.map((channel, i) => (
          <a key={channel.id} href={channel.url} target='_blank' rel='noopener noreferrer' className={`p-2 px-4 text-center ${i === 0 ? 'bg-gray-500' : i === 1 ? 'bg-red-500' : 'bg-green-500'} rounded-full opacity-85 hover:opacity-100 transition cursor-pointer`}>
            <h3 className="max-w-[300px] mx-auto truncate text-lg font-bold">
              {channel.name}
            </h3>
          </a>
        ))}
      </div>

      <div className='grid place-content-center place-items-center gap-18 h-full w-full max-w-[1400px] mx-auto -mt-18'>
        <div className='flex items-center'>
          <div className='relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center'>
            <CircleIcon fill='#e7000b' className='text-red-600 text-6xl md:text-7xl absolute animate-ping opacity-50' />
            <CircleIcon fill='#e7000b' className='text-red-600 text-5xl md:text-6xl relative' />
          </div>
          <h2 className='text-4xl md:text-5xl font-bold -ml-2'>EN VIVO AHORA</h2>
        </div>

        <div className='grid md:grid-cols-4 gap-4'>
          {filteredLivestreams.slice(0, 4).map((l) => (
            <a key={l.id} href={l.url} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
              <div className='relative hover:scale-105 transition'>
                <ImageWithFallback src={l.transmission_image_id ? 'https://www.canaldelcongreso.gob.mx/storage/' + transmissionImages.find((t) => t.id === l.transmission_image_id).url : '/placeholder/square.png'} alt={l.title} className='w-64 h-64 object-cover aspect-square rounded-lg' />
                <PlayIcon fill='white' size={48} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' />
              </div>
              <h3 className="max-w-[300px] mx-auto truncate text-lg font-bold" title={l.subtitle || l.title}>
                {l.subtitle || l.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
