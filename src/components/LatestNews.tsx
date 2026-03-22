import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";
import { client } from "../sanityClient";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  author?: string;
  authorImage?: string;
}

export default function LatestNews() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          *[_type == "blog"] | order(date desc)[0...3] {
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

  if (loading) {
    return (
      <section className="py-24 bg-white flex justify-center items-center">
        <p className="font-secondary text-lg text-[#8E9BAE]">Loading blogs...</p>
      </section>
    );
  }

  return (
    <section id="blog" className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start mb-12">
          <div className="flex-4">
            <h2 className="font-primary font-semibold text-2xl md:text-[55px] md:leading-[100%] mb-8 lg:mb-0 text-[#101213]">
              Latest <span className="font-normal">Posts</span>
            </h2>
          </div>
          <div className="flex-2 flex flex-col items-center lg:items-start">
            <p className="font-secondary font-normal text-center lg:text-left text-sm md:text-xl md:leading-[40px] mb-4 text-[#606060]">
              Join our community and stay informed about the latest events, success stories, and AI
              innovations.
            </p>
            <Link to="/blog">
              <button className="border border-[#D9D9D9] text-[#101213] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
                Read More Blogs{" "}
                <img src={ArrowRight} alt="Arrow right" className="select-none" />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post._id} to={`/blog/${post._id}`}>
              <article className="flex flex-col bg-white rounded-[15px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
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

                  <h3 className="font-primary font-semibold text-xl md:text-2xl text-[#101213] leading-[30px]">
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
