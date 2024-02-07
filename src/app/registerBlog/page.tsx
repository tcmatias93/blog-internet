import React from 'react'

export default function RegisterBlog() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">RegisterBlog
      <form>
        <label>Titulo</label>
        <input type='text' placeholder='titulo' required />
        <label>Autor</label>
        <input type='text' placeholder='autor' required />
        <label>Contenido</label>
        <input type='text' placeholder='contenido' required />
        <button type='submit'>Subir Blog</button>
      </form>
    </div>
  )
}
