// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck

// import { useEffect, useState } from "react";
// import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";
// import BlogPhoto1 from "../assets/blog/blog-photo-1.png";
// import BlogPhoto2 from "../assets/blog/blog-photo-2.png";
// import BlogPhoto3 from "../assets/blog/blog-photo-3.png";
// import { Link } from "react-router-dom";

// import type { Image } from "sanity";

// // --- TYPES ---
// interface BlogPost {
//   _id: string;
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   category: string;
//   image?: Image;
//   author?: string;
//   authorImage?: Image;
// }

// const blogData = [
//   {
//     title: "What we learned from Training",
//     content:
//       "What we learned from training 1,370 learners in 6 weeks realized applications that solve local prob...",
//     dateUploaded: "20th August, 2025",
//     readingTime: "5",
//     image: BlogPhoto1,
//   },
//   {
//     title: "Building Production-ready",
//     content:
//       "Building production-ready RAG agents: field notes d applications that solve local prob...",
//     dateUploaded: "21st August, 2025",
//     readingTime: "15",
//     image: BlogPhoto2,
//   },
//   {
//     title: "Voices from the Community",
//     content:
//       "Voices from the community: navigating AI careers from Africanized applications that solve local prob...",
//     dateUploaded: "22nd August, 2025",
//     readingTime: "25",
//     image: BlogPhoto3,
//   },
// ];

// export default function LatestNews() {
//   const [activeFilter, setActiveFilter] = useState("View All");
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   // --- FETCH BLOGS FROM SANITY ---
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const query = `
//             *[_type == "blog"] | order(date desc) {
//               _id,
//               title,
//               description,
//               category,
//               date,
//               readTime,
//               author,
//               "image": image.asset->url,
//               "authorImage": authorImage.asset->url
//             }
//           `;
//         const data = await client.fetch(query);
//         setBlogPosts(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const filteredPosts =
//     activeFilter === "View All"
//       ? blogPosts
//       : blogPosts.filter((post) => post.category === activeFilter);

//   if (loading) {
//     return (
//       <section className="py-24 bg-white flex justify-center items-center">
//         <p className="font-secondary text-lg text-[#8E9BAE]">
//           Loading blogs...
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section id="blog" className="pb-24">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start mb-12">
//           <div className="flex-4">
//             <h2 className="font-primary font-semibold text-2xl md:text-[55px] md:leading-[100%] mb-8 lg:mb-0">
//               Latest <span className="font-normal">Posts</span>
//             </h2>
//           </div>
//           <div className="flex-2 flex flex-col items-center lg:items-start">
//             <p className="font-secondary font-normal text-center lg:text-left text-sm md:text-xl md:leading-[40px] mb-4">
//               Join our community and stay informed about the latest events,
//               success stories, and Ai innovations.
//             </p>
//             <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-[#101213] text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
//               Read More Blogs{" "}
//               <img src={ArrowRight} alt="Arrow right" className="select-none" />
//             </button>
//           </div>
//         </div>

//         {/* blog data */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogData.map((blog, index) => (
//             <div key={index}>
//               <img src={blog.image} alt={blog.title} className="mb-4" />
//               <div className="flex items-center gap-4">
//                 <span className="text-[#8E9BAE] text-xs md:text-base font-secondary font-normal tracking-[1px] md:leading-[100%]">
//                   {blog.dateUploaded}
//                 </span>
//                 <span className="block bg-gray-600 rounded-full w-2 h-2"></span>
//                 <span className="text-[#8E9BAE] text-xs md:text-base font-secondary font-normal tracking-[1px] md:leading-[100%]">
//                   {blog.readingTime} mins read
//                 </span>
//               </div>
//               {/* title and content */}
//               <div className="mt-8 flex flex-col gap-2">
//                 <h3 className="font-primary font-semibold text-base md:text-xl text-[#121212] md:leading-[30px]">
//                   {blog.title}
//                 </h3>
//                 <p className="text-[#8E9BAE] font-secondary font-normal text-xs md:text-base tracking-[1px] md:leading-[25px]">
//                   {blog.content}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredPosts.map((post) => (
//             <Link key={post._id} to={`/blog/${post._id}`}>
//               <article className="flex flex-col bg-white rounded-[15px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
//                 {/* Image */}
//                 <div className="w-full h-64 overflow-hidden">
//                   {post.image ? (
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       loading="lazy"
//                       decoding="async"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
//                       No image
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-col gap-4 p-6">
//                   <div className="flex items-center gap-2 text-sm text-[#8E9BAE] font-secondary font-normal leading-[25px] tracking-[1px]">
//                     <span>
//                       {new Date(post.date).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </span>
//                     <span>•</span>
//                     <span>{post.readTime}</span>
//                   </div>

//                   <h3 className="font-primary font-semibold text-xl md:text-2xl text-[#101213] leading-[30px] tracking-[6%}">
//                     {post.title}
//                   </h3>

//                   <p className="font-secondary font-normal text-sm md:text-base text-[#8E9BAE] leading-[25px] tracking-[1px] line-clamp-3">
//                     {post.description}
//                   </p>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";
import type { Image } from "sanity";
import { client } from "../sanityClient"; // make sure this import path matches yours

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
        <p className="font-secondary text-lg text-[#8E9BAE]">
          Loading blogs...
        </p>
      </section>
    );
  }

  return (
    <section id="blog" className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start mb-12">
          <div className="flex-4">
            <h2 className="font-primary font-semibold text-2xl md:text-[55px] md:leading-[100%] mb-8 lg:mb-0">
              Latest <span className="font-normal">Posts</span>
            </h2>
          </div>
          <div className="flex-2 flex flex-col items-center lg:items-start">
            <p className="font-secondary font-normal text-center lg:text-left text-sm md:text-xl md:leading-[40px] mb-4">
              Join our community and stay informed about the latest events,
              success stories, and AI innovations.
            </p>
            <Link to="/blog">
              <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-[#101213] text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
                Read More Blogs{" "}
                <img
                  src={ArrowRight}
                  alt="Arrow right"
                  className="select-none"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Display only 3 blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post._id} to={`/blog/${post._id}`}>
              <article className="flex flex-col bg-white rounded-[15px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
                <div className="w-full h-64 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image as unknown as string}
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

                  <h3 className="font-primary font-semibold text-xl md:text-2xl text-[#101213] leading-[30px] tracking-[6%]">
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
