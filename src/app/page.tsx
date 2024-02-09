import ListBlog from "@/components/ListBlog";


export default async function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1 className="text-3xl font-bold">Listado con los Blogs</h1>
      <ListBlog />
    </main>
  );
}
