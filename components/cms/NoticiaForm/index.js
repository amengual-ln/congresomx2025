'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'

const TinyMCEditor = dynamic(
  () => import('@/components/cms/RichTextEditor'),
  { ssr: false, loading: () => <p>Cargando editor...</p> }
)

export default function NoticiaForm({ noticia }) {
  const formRef = useRef(null)
  const bodyRef = useRef(noticia.body)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch(`/api/noticias/${noticia.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          body: bodyRef.current
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error al guardar los cambios')
      }

      // Opcional: Mostrar mensaje de éxito
      alert('Noticia actualizada correctamente')
    } catch (error) {
      console.error('Error al guardar:', error)
      alert('Ocurrió un error al guardar los cambios')
    }
  }

  const handleEditorChange = (content) => {
    bodyRef.current = content
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="title" className="font-medium">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={noticia.title}
          className="border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="excerpt" className="font-medium">Bajada</label>
        <input
          type="text"
          name="excerpt"
          id="excerpt"
          defaultValue={noticia.excerpt}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="published_at" className="font-medium">Fecha de publicación</label>
        <input
          type="datetime-local"
          name="published_at"
          id="published_at"
          defaultValue={new Date(noticia.published_at).toISOString().slice(0, 16)}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="image" className="font-medium">Imagen</label>
        <input
          type="file"
          name="image"
          id="image"
          className="border border-gray-300 rounded p-2"
        />
        {noticia.image && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Imagen actual:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={noticia.image} 
              alt="Imagen actual" 
              className="mt-1 max-h-40 rounded"
            />
          </div>
        )}
      </div>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="slug" className="font-medium">Slug</label>
        <input
          type="text"
          name="slug"
          id="slug"
          defaultValue={noticia.slug}
          className="border border-gray-300 rounded p-2 font-mono text-sm"
          required
          pattern="[a-z0-9-]+"
          title="Solo minúsculas, números y guiones"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="tag" className="font-medium">Etiqueta</label>
        <input
          type="text"
          name="tag"
          id="tag"
          defaultValue={noticia.tag || ''}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-6 flex flex-col gap-1">
        <label htmlFor="body" className="font-medium">Cuerpo</label>
        <TinyMCEditor 
          content={noticia.body} 
          onChange={handleEditorChange} 
        />
        <input 
          type="hidden" 
          name="body" 
          value={bodyRef.current} 
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  )
}