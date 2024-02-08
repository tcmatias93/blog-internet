'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function RegisterBlog() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!title || !author || !description) {
      setError('Alguno de los datos esta incompleto')
    }

    try {
      const res = await fetch('http://localhost:3000/api/blog', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, author, description })
      })
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">RegisterBlog
      <form onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='titulo' required />
        <label>Autor</label>
        <input type='text' onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='autor' required />
        <label>Contenido</label>
        <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder='contenido' required />
        <button type='submit'>Subir Blog</button>

        <div><p>{error}</p></div>
      </form>
    </div>
  )
}
