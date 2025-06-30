import { prisma } from "@/lib/db"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default async function Noticias({ searchParams }) {
    const page = parseInt(searchParams.page || '1', 10);
    const itemsPerPage = 9;
    const skip = (page - 1) * itemsPerPage;
    const noticias = await prisma.news.findMany({
        skip,
        take: itemsPerPage,
        orderBy: {
            published_at: 'desc'
        }
    })
    const total = await prisma.news.count()
    const totalPages = Math.ceil(total / itemsPerPage)
    return (
        <section className="text-gray-800 mx-auto">
            <div className="bg-purple-200">
                <div className="flex items-center text-purple-800 gap-2 w-full max-w-[1400px] mx-auto py-1 px-8">
                    <Link href="/cms" className="hover:text-purple-600 transition">Gestión de Contenido</Link>
                    <span className="cursor-default">/</span>
                    <span className="cursor-default">Noticias</span>
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto p-8">

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Noticias</h1>
                <Link href="/cms/noticias/nueva" className="rounded-lg p-4 bg-purple-200 text-purple-800 hover:bg-purple-300 transition">Nueva Noticia</Link>
            </div>
            <div className="mt-8 grid grid-cols-[4fr_1fr] gap-4 bg-[#f9f9f9] font-bold px-4 py-2 text-sm shadow">
                <span>Título</span>
                <span className="justify-self-end">Fecha</span>
            </div>
            <div className="grid mb-8 divide-y divide-gray-200 shadow">
                {noticias.map((noticia) => (
                    <Link href={`/cms/noticias/${noticia.slug}`} key={noticia.id} className="p-4 grid grid-cols-[4fr_1fr] gap-4 bg-white">
                        <span>{noticia.title}</span>
                        <span className="justify-self-end">{noticia.published_at.toLocaleDateString()}</span>
                    </Link>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        {page > 1 && (
                            <Link
                                href={`/cms/noticias?page=${page - 1}`}
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
                                href={`/cms/noticias?page=${page + 1}`}
                                className="px-2 py-1 border rounded-md hover:bg-gray-50"
                            >
                                <ChevronRight />
                            </Link>
                        )}
                    </nav>
                </div>
            )}
            </div>
        </section>
    )
}
    