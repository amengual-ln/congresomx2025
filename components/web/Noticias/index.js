export const dynamic = 'force-dynamic';

import ImageWithFallback from '@/components/ImageWithFallback';
import { prisma } from '@/lib/db'
import Link from 'next/link'

export const Noticias = async () => {
  const news = await prisma.news.findMany({
    take: 5,
    orderBy: { published_at: 'desc' }
  })

  return (
    <section className='flex gap-4 bg-[#FAFAFE] py-8 px-4 md:px-0'>
      <div className='w-full max-w-[1400px] mx-auto'>
      <h2 className='text-3xl font-bold text-center text-gray-800 pt-16'>NOTICIAS</h2>
      <div className='w-full max-w-[1400px] mt-12 text-white text-shadow min-h-[calc(100vh-400px)] px-4'>
        <div className='md:hidden grid grid-cols-1 gap-4'>
          <div className='h-96'>
            {news[0] && (
              <Link href={`/noticias/${news[0].slug}`} className='block h-full'>
                <div className='relative h-full bg-cover bg-center group rounded-lg overflow-hidden'>
                  <ImageWithFallback 
                    src={news[0].image ? 'https://www.canaldelcongreso.gob.mx/storage/' + news[0].image : '/placeholder/square.png'} 
                    alt={news[0].title} 
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                  <h3 className='absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-bold line-clamp-2'>{news[0].title}</h3>
                </div>
              </Link>
            )}
          </div>
          
          {/* Grid 2x2 para las otras noticias */}
          <div className='grid grid-cols-2 gap-4 mt-4'>
            {news.slice(1, 5).map((n, index) => (
              <div key={n.id} className='h-48'>
                <Link href={`/noticias/${n.slug}`} className='block h-full'>
                  <div className='relative h-full bg-cover bg-center group rounded-lg overflow-hidden'>
                    <ImageWithFallback 
                      src={n.image ? 'https://www.canaldelcongreso.gob.mx/storage/' + n.image : '/placeholder/square.png'} 
                      alt={n.title} 
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                    <div className='absolute bottom-0 left-0 right-0 p-2'>
                      <h3 className='text-white text-sm font-bold line-clamp-2 break-words'>{n.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid para escritorio */}
        <div className='hidden md:grid gap-4 h-[calc(100vh-400px)]' style={{
          gridTemplateAreas: `
            "main main side1 side2"
            "main main side3 side4"
          `,
          gridTemplateRows: '1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          width: '100%'
        }}>
        
        {news.slice(0, 1).map((n) => (
          <div key={n.id} style={{ gridArea: 'main' }}>
            <Link href={`/noticias/${n.slug}`} className='block h-full'>
              <div className='relative h-full group rounded-lg overflow-hidden'>
                <ImageWithFallback 
                  src={n.image ? 'https://www.canaldelcongreso.gob.mx/storage/' + n.image : '/placeholder/square.png'} 
                  alt={n.title} 
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-white text-2xl font-bold line-clamp-2 break-words'>{n.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {news.slice(1, 5).map((n) => (
          <div key={n.id} style={{ gridArea: `side${news.indexOf(n)}` }} className='h-full'>
            <Link href={`/noticias/${n.slug}`} className='block h-full'>
              <div className='relative h-full group rounded-lg overflow-hidden'>
                <ImageWithFallback 
                  src={n.image ? 'https://www.canaldelcongreso.gob.mx/storage/' + n.image : '/placeholder/square.png'} 
                  alt={n.title} 
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-bold line-clamp-2 break-words'>{n.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
        </div>
    </div>
  </section>
  )
}
