import ListBlog from "@/components/ListBlog";


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Listado Blog</h1>
      <ListBlog />
    </main>
  );
}
