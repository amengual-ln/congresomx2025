import { prisma } from '@/lib/db'
import Link from 'next/link'

export const Noticias = async () => {
  const news = await prisma.news.findMany({
    take: 5,
    orderBy: { published_at: 'desc' }
  })

  return (
    <section className='flex gap-4 bg-[#FAFAFE] py-8'>
      <div className='w-full max-w-[1400px] mx-auto'>
      <h2 className='text-3xl font-bold text-center text-gray-800 pt-16'>NOTICIAS</h2>
      <div className='w-full max-w-[1400px] mt-12 text-white text-shadow h-[calc(100vh-400px)] px-4' style={{
        display: 'grid',
        gridTemplateAreas: `
          "main main side1 side2"
          "main main side3 side4"
        `,
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '1rem',
        width: '100%'
      }}>
        {news.slice(0, 1).map((n, index) => (
          <div key={n.id} style={{ gridArea: 'main' }}>
            <Link href={`/noticias/${n.slug}`} className='block h-full'>
              <div className='relative h-full bg-[url("/placeholder/square.png")] bg-cover bg-center group' style={{
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: '0.5rem',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                height: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                <h3 className='relative text-white text-xl font-bold line-clamp-2 z-10'>{n.title}</h3>
              </div>
            </Link>
          </div>
        ))}
        {news.slice(1, 5).map((n, index) => (
          <div key={n.id} style={{ gridArea: `side${index + 1}` }}>
            <Link href={`/noticias/${n.slug}`} className='block h-full'>
              <div className='relative h-full bg-[url("/placeholder/square.png")] bg-cover bg-center group' style={{
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: '0.5rem',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                height: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300' />
                <h3 className='relative text-white font-semibold line-clamp-2 z-10'>{n.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
        </div>
    </section>
  )
}
