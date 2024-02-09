import Link from "next/link"
import Search from "./Search"
export default function Navbar() {
  return (
    <nav className="bg-cyan-700 flex p-4 justify-between text-white">
      <Link href={'/'} className="hover:bg-cyan-950 p-3 rounded-lg">Home</Link>
      <Search />
      <Link href={'/registerBlog'} className="hover:bg-cyan-950 p-3 rounded-lg">Crear Blog</Link>
    </nav>
  )
}
