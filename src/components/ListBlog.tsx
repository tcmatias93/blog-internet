import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"



export async function getBlog() {
  try {
    const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' })

    if (!res.ok) {
      throw new Error('Fallo fetch')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function ListBlog() {

  const { blogs } = await getBlog()


  return (
    <div className="p-14">
      {blogs.map((blog: { id: Key; title: string; author: string; description: string | any[]; createdAt: string }) => {
        const fecha = new Date(blog.createdAt);
        const formattedDate = `${fecha.getUTCFullYear()}-${String(fecha.getUTCMonth() + 1).padStart(2, '0')}-${String(fecha.getUTCDate()).padStart(2, '0')}`;

        return (
          <Link href={`/blog/${blog.title}`} key={blog.id} >
            <div className="m-2 border-2 border-gray-600 p-6  hover:bg-cyan-600 rounded-3xl" >
              <h2 className="font-bold text-center text-xl">{blog.title}</h2>
              <div className="flex justify-between opacity-60">
                <span>Autor: {blog.author}</span>
                <span>Fecha: {formattedDate}</span>
              </div>
              <p className="pt-8 text-wrap">{blog.description.slice(0, 70)}...</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
