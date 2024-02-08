import Blog from "@/models/model";
import ConnectMongo from "@/utils/mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await ConnectMongo();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

export async function POST(req: NextRequest) {
  const { title, author, description } = await req.json();
  await ConnectMongo();
  await Blog.create({ title, author, description });
  return NextResponse.json({ message: "Creando blog" }, { status: 201 });
}
