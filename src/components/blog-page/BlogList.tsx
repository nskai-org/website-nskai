// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanityClient";
import type { Image } from "sanity";

// --- TYPES ---
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: Image;
  author?: string;
  authorImage?: Image;
}

// --- STATIC CATEGORIES ---
const categories = [
  "View All",
  "Event Recaps",
  "Build Notes",
  "Community Voices",
  "Partner Spotlights",
  "Community Stories",
];

export default function BlogList() {
  const [activeFilter, setActiveFilter] = useState("View All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH BLOGS FROM SANITY ---
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          *[_type == "blog"] | order(date desc) {
            _id,
            title,
            description,
            category,
            date,
            readTime,
            author,
            "image": image.asset->url,
            "authorImage": authorImage.asset->url
          }
        `;
        const data = await client.fetch(query);
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredPosts =
    activeFilter === "View All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  if (loading) {
    return (
      <section className="py-24 bg-white flex justify-center items-center">
        <p className="font-secondary text-lg text-[#8E9BAE]">
          Loading blogs...
        </p>
      </section>
    );
  }

  return (
    <section id="blogList" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-[45px] font-secondary font-semibold text-sm md:text-base transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#101213] text-white"
                  : "bg-[#F9F9F9] text-[#101213] hover:bg-[#e9e9e9]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post._id} to={`/blog/${post._id}`}>
              <article className="flex flex-col bg-white rounded-[15px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-2 text-sm text-[#8E9BAE] font-secondary font-normal leading-[25px] tracking-[1px]">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-primary font-semibold text-xl md:text-2xl text-[#101213] leading-[30px] tracking-[6%}">
                    {post.title}
                  </h3>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8E9BAE] leading-[25px] tracking-[1px] line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
