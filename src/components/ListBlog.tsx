import Link from "next/link"

import { blogs } from "@/lib/data"

export default function ListBlog() {

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <Link href={`/blog/${blog.title}`}><h2>{blog.title}</h2> </Link>
            <span>{blog.author}</span>
            <span>{blog.date}</span>
            <p>{blog.description.slice(0, 70)}</p>
          </div>
        )
      })}
    </div>
  )
}
