'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')


  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    alert(search)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex items-center">
          <input type="text" placeholder="Buscar..." value={search}
            onChange={(e) => setSearch(e.target.value)} className="text-black" />
          <button className=" text-white font-bold text-xl ml-1" type="submit"><FaSearch /></button>
        </div>
        <div>
          <label className=" pr-2">Filtrar por:</label>
          <label className=" pr-2"><input type="checkbox" id="title" value="title" className=" pr-2" /> Titulo</label>
          <label className=" pr-2"><input type="checkbox" id="author" value="author" className=" pr-2" /> Autor</label>
          <label className=" pr-2"><input type="checkbox" id="description" value="description" className=" pr-2" /> Contenido</label>
        </div>
      </form>
    </div>
  )
}
