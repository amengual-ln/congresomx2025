import { prisma } from "@/lib/db"
import Link from "next/link"
import NoticiaForm from "@/components/cms/NoticiaForm"

export default async function EditarNoticia({ params }) {
    const { slug } = params
    const noticia = await prisma.news.findUnique({
        where: { slug }
    })

    if (!noticia) {
        return <div>Noticia no encontrada</div>
    }

    return (
        <section className="w-full min-h-screen bg-gray-100 text-gray-800">
            <div className="bg-purple-200">
                <div className="flex items-center text-purple-800 gap-2 w-full max-w-[1400px] mx-auto py-1 px-8">
                    <Link href="/cms" className="hover:text-purple-600 transition">Gestión de Contenido</Link>
                    <span className="cursor-default">/</span>
                    <Link href="/cms/noticias" className="hover:text-purple-600 transition">Noticias</Link>
                    <span className="cursor-default">/</span>
                    <span className="cursor-default">Editar Noticia</span>
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto p-8">
                <h1 className="text-2xl font-bold mb-3">Editar Noticia</h1>
                <NoticiaForm noticia={noticia} />
            </div>
        </section>
    )
}