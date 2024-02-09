import { getBlog } from "@/components/ListBlog"

export default async function Blog({ params }: { params: { slug: string } }) {

  const { blogs } = await getBlog()
  const blog = blogs.find((blog) => blog.title == decodeURIComponent(params.slug))
  const fecha = new Date(blog.createdAt);
  const formattedDate = `${fecha.getUTCFullYear()}-${String(fecha.getUTCMonth() + 1).padStart(2, '0')}-${String(fecha.getUTCDate()).padStart(2, '0')}`;


  return (
    <div className="flex flex-col items-center justify-between p-10">
      <h1 className="text-3xl font-bold italic font-medium">{blog?.title}</h1>
      <div className="p-6 w-full">
        <p className="pb-3">Autor: {blog?.author}</p>
        <p className="">Fecha de publicación: {formattedDate}</p>
      </div>
      <p className="px-6 text-wrap text-base italic font-medium leading-loose text-justify">{blog?.description}</p>
    </div>
  )
}
