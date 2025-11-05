import { client } from "../sanityClient";
import type { BlogPost } from "../types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(_createdAt desc){
    _id,
    title,
    description,
    date,
    readTime,
    category,
    "image": image.asset->_ref,
    "authorImage": authorImage.asset->_ref,
    author,
    content
  }`;
  return await client.fetch(query);
}
