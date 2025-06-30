export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/db'
import { NewsBody } from '@/components/web/NewsBody'
import Link from 'next/link'

export default async function Noticia({ params }) {
    const { slug } = await params
    const news = await prisma.news.findUnique({ where: { slug } })
    if (!news) {
        return <div>Noticia no encontrada</div>
    }

    const category = await prisma.news_categories.findUnique({ where: { id: news.news_category_id } })
    const relatedNews = await prisma.news.findMany({ where: { news_category_id: news.news_category_id, slug: { not: slug } }, take: 3 })
        
    return (
        <section>
            <div className='w-full max-w-[1400px] mx-auto grid md:grid-cols-[3fr_1fr] gap-4 p-4 text-gray-800'>
                <article className='flex flex-col gap-4 bg-white shadow rounded-lg'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/placeholder/square.png' alt={news.title} className='w-full aspect-video object-cover rounded-t-lg' />
                    <div className='px-4 pb-4'>
                        <div className='flex justify-between items-center gap-2 mb-3'>
                            <span className='bg-purple-200 px-3 py-1 rounded-full text-sm text-purple-800'>{category?.name}</span>
                            <time dateTime={news.published_at.toISOString()}>
                                {new Date(news.published_at).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                        <h1 className='text-3xl font-bold'>{news.title}</h1>
                        <NewsBody html={news.body} />
                    </div>
                </article>
                <aside className='flex flex-col gap-4 bg-white shadow rounded-lg'>
                    <h2 className='text-lg font-bold -mb-4 p-4'>Noticias Relacionadas</h2>
                    <div className='grid gap-4'>
                        {relatedNews.map((related) => (
                            <Link href={`/noticias/${related.slug}`} key={related.id}>
                            <article key={related.id} className='flex flex-col gap-4'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src='/placeholder/square.png' alt={related.title} className='w-full aspect-video object-cover' />
                                <div className='px-4 pb-4'>
                                    <div className='flex flex-col justify-between items-start gap-2 mb-3'>
                                        <span className='bg-purple-200 px-3 py-1 rounded-full text-sm text-purple-800'>{category?.name}</span>
                                        <time dateTime={related.published_at.toISOString()}>
                                            {new Date(related.published_at).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </time>
                                    </div>
                                    <h1 className='text-xl font-bold'>{related.title}</h1>
                                </div>
                            </article>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    )
}