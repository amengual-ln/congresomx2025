// components/cms/TinyMCEditor.js
'use client'

import { useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function TinyMCEditor({ content, onChange }) {
  const editorRef = useRef(null)
  
  // Configuración del editor
  const init = {
    height: 500,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
    content_style: 'body { font-family: Arial, sans-serif; font-size: 14px }'
  }

  return (
    <div className="rounded-md overflow-hidden">
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        init={init}
        onEditorChange={onChange}
      />
    </div>
  )
}