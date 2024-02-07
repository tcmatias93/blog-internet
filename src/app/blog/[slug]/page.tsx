'use client'
import { useParams } from "next/navigation"

export default function Blog() {
  const params = useParams<{ tag: string; item: string; slug: string }>()
  console.log(params.slug)
  return (
    <div>Blog {params.slug}</div>
  )
}
