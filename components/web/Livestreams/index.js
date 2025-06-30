import { prisma } from '@/lib/db'

export const Livestreams = async () => {
  const livestreams = await prisma.transmissions.findMany()
  const signals = await prisma.signals.findMany({ where: { name: { contains: 'Canal' } }, orderBy: { updated_at: 'asc' } })

  const mainChannels = signals

  const filteredLivestreams = livestreams.filter((l) => !l.title.includes('Canal'))

  return (
    <section className='h-[calc(100vh-300px)] bg-[url("/fondo-menu-inicio.png")] bg-cover'>
      <div className='w-full max-w-[1400px] mx-auto flex gap-4 justify-end pt-8'>
        {mainChannels.map((channel, i) => (
          <a key={channel.id} href={channel.url} target='_blank' rel='noopener noreferrer' className={`p-2 px-4 text-center ${i === 0 ? 'bg-gray-500' : i === 1 ? 'bg-red-500' : 'bg-green-500'} rounded-full opacity-85 hover:opacity-100 transition cursor-pointer`}>
            <h3 className="max-w-[300px] mx-auto truncate text-lg font-bold">
              {channel.name}
            </h3>
          </a>
        ))}
      </div>

      <div className='grid place-content-center place-items-center gap-18 h-full w-full max-w-[1400px] mx-auto -mt-18'>
        <h2 className='text-5xl font-bold'>
          <span className='text-red-600'>·</span> EN VIVO AHORA
        </h2>

        <div className='flex gap-4'>
          {filteredLivestreams.slice(0, 4).map((l) => (
            <div key={l.id} className='flex flex-col gap-2 text-center cursor-pointer'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/livestream-placeholder.png' alt={l.title} className='w-full h-full object-cover rounded-lg' />
              <h3 className="max-w-[300px] mx-auto truncate text-lg font-bold" title={l.subtitle || l.title}>
                {l.subtitle || l.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
