import Link from "next/link"
import Search from "./Search"
export default function Navbar() {
  return (
    <nav>
      <Link href={'/'} >Home</Link>
      <Search />
      <Link href={'/registerBlog'}>Crear Blog</Link>
    </nav>
  )
}
