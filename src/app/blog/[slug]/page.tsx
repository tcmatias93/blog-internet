import { blogs } from "@/lib/data"

export default function Blog({ params }: { params: { slug: string } }) {

  const blog = blogs.find((blog) => blog.title == params.slug)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">Blog de {blog?.author}
      <p>{blog?.date}</p>
      <p>{blog?.description}</p>
    </div>
  )
}
