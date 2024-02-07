import mongoose, { Schema } from "mongoose";

const blogs = new Schema(
  {
    title: String,
    author: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogs);

export default Blog;
