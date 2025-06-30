import { prisma } from '@/lib/db'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const perPage = 10
  const skip = (page - 1) * perPage

  const [news, total] = await Promise.all([
    prisma.news.findMany({
      skip,
      take: perPage,
      orderBy: { published_at: 'desc' },
    }),
    prisma.news.count(),
  ])

  function safeJson(data) {
    return JSON.stringify(data, (_, value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
  }
  
  return new Response(safeJson({
    data: news,
    total,
    page,
    perPage,
    totalPages: Math.ceil(Number(total) / perPage),
  }))
}
