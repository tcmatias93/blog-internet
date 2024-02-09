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
    <div className="flex flex-col items-center justify-between p-10">
      <h1 className="text-3xl font-bold">
        Crear Blog
      </h1>
      <form onSubmit={handleSubmit} className=' flex flex-col p-10 w-4/5'>
        <div className='flex flex-col m-2 '>
          <label className=' text-center'>Titulo</label>
          <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='titulo' required className='border-b-4 text-center pt-1 focus:outline-none ' />
        </div>
        <div className='flex flex-col m-2'>
          <label className=' text-center'>Autor</label>
          <input type='text' onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='autor' required className='border-b-4 text-center pt-1 focus:outline-none ' />
        </div>
        <div className='flex flex-col m-2'>
          <label className=' text-center'>Contenido</label>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder='contenido' required rows={10} className=' border-2 leading-relaxed text-left p-2' />
        </div>
        <div className='flex justify-center'>

          <button type='submit' className='flex w-full max-w-64 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>Subir Blog</button>
        </div>

        <div><p>{error}</p></div>
      </form>
    </div>
  )
}
