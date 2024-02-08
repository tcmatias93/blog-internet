import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"



async function getBlog() {
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
    <div>
      {blogs.map((blog: { id: Key; title: string; author: string; description: string | any[]; createdAt: string }) => {
        const fecha = new Date(blog.createdAt);
        const formattedDate = `${fecha.getUTCFullYear()}-${String(fecha.getUTCMonth() + 1).padStart(2, '0')}-${String(fecha.getUTCDate()).padStart(2, '0')}`;

        return (
          <div key={blog.id}>
            <Link href={`/blog/${blog.title}`}><h2>{blog.title}</h2> </Link>
            <span>{blog.author}</span>
            <span>{formattedDate}</span>
            <p>{blog.description.slice(0, 70)}</p>
          </div>
        )
      })}
    </div>
  )
}
