export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/db';
import NewsCarousel from '@/components/web/NewsCarousel';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default async function NoticiasPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const itemsPerPage = 9;

  const categories = await prisma.news_categories.findMany()

  const [featuredNews, news, total] = await Promise.all([
    prisma.news.findMany({
      take: 4,
      orderBy: { published_at: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        published_at: true,
        news_category_id: true,
      },
    }),
    prisma.news.findMany({
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
      orderBy: { published_at: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        published_at: true,
        news_category_id: true,
      },
    }),
    prisma.news.count(),
  ]);

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <NewsCarousel news={featuredNews} categories={categories} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.id} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64">
              <Link href={`/noticias/${item.slug}`} className="block h-full w-full">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/placeholder/square.png"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                {/* Contenido */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h2 className="text-xl font-bold leading-tight line-clamp-3">
                    {item.title}
                  </h2>
                  <time 
                    dateTime={item.published_at.toISOString()}
                    className="text-sm text-gray-200 mt-2"
                  >
                    {new Date(item.published_at).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              {page > 1 && (
                <Link
                  href={`/noticias?page=${page - 1}`}
                  className="px-2 py-1 border rounded-md hover:bg-gray-50"
                >
                  <ChevronLeft />
                </Link>
              )}
              <span className="px-4 py-2">
                Página {page} de {totalPages}
              </span>
              {page < totalPages && (
                <Link
                  href={`/noticias?page=${page + 1}`}
                  className="px-2 py-1 border rounded-md hover:bg-gray-50"
                >
                  <ChevronRight />
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
