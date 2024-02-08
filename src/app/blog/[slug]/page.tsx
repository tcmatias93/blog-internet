import { getBlog } from "@/components/ListBlog"

export default async function Blog({ params }: { params: { slug: string } }) {

  const { blogs } = await getBlog()
  const blog = blogs.find((blog) => blog.title == decodeURIComponent(params.slug))

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">Blog de {blog?.author}
      <p>{blog?.date}</p>
      <p>{blog?.description}</p>
    </div>
  )
}
