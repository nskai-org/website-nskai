// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// import blogPhoto1 from "../../assets/blog/blog-photo-1.png";
// import blogPhoto2 from "../../assets/blog/blog-photo-2.png";
// import blogPhoto3 from "../../assets/blog/blog-photo-3.png";
// import blogPhoto4 from "../../assets/blog/blog-photo-4.png";
// import blogPhoto5 from "../../assets/blog/blog-photo-5.png";
// import blogPhoto6 from "../../assets/blog/blog-photo-6.png";
// import blogPhoto7 from "../../assets/blog/blog-photo-7.png";
// import blogPhoto8 from "../../assets/blog/blog-photo-8.png";
// import blogPhoto9 from "../../assets/blog/blog-photo-9.png";

// import LinkedInIcon from "../../assets/UIs/linkedin.svg";
// import XIcon from "../../assets/UIs/x.svg";
// import YoutubeIcon from "../../assets/UIs/youtube.svg";
// import { getBlogs } from "../../api/getBlogs";
// import type { BlogPost } from "../../types/blog";
// import { PortableText } from "@portabletext/react";

// const socialIcons = [
//   {
//     name: "X(formerly Twitter)",
//     link: "https://x.com/NskAiCommunity",
//     icon: XIcon,
//   },
//   {
//     name: "Youtube",
//     link: "https://www.youtube.com/@Nskaicommunity",
//     icon: YoutubeIcon,
//   },
//   {
//     name: "LinkedIn",
//     link: "https://www.linkedin.com/company/ai-nsk/",
//     icon: LinkedInIcon,
//   },
// ];

// interface BlogPost {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   category: string;
//   image: string;
//   authorImage: string;
//   author: string;
//   content?: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "What we learned from training",
//     description:
//       "What we learned from training 1,370 learners in 6 weeks realized applications that solve local problems...",
//     date: "20th August, 2025",
//     readTime: "5 min read",
//     category: "Event Recaps",
//     image: blogPhoto1,
//     authorImage: blogPhoto2,
//     author: "NSK.AI",
//     content: `Our recent 6-week intensive training program brought together 1,370 eager learners from diverse backgrounds.
// Key achievements:
// • Successfully trained 1,370 participants across multiple time zones
// • Developed practical applications solving real local problems
// • Built a strong learning community
// • Achieved an 85% completion rate

// The program emphasized hands-on learning with real-world projects addressing local challenges. Participants demonstrated how AI can impact healthcare, education, and sustainability through meaningful solutions.`,
//   },
//   {
//     id: 2,
//     title: "Building production-ready",
//     description:
//       "Building production-ready RAG agents: field notes and applications that solve local problems...",
//     date: "15th August, 2025",
//     readTime: "7 min read",
//     category: "Build Notes",
//     image: blogPhoto2,
//     authorImage: blogPhoto3,
//     author: "NSK Campaign Group",
//     content: `Our team explored how to build production-ready RAG (Retrieval-Augmented Generation) agents for scalable deployment.
// Core takeaways:
// • Designing efficient retrieval pipelines
// • Optimizing latency in multi-agent systems
// • Integrating local datasets for contextual accuracy

// We documented how to move from prototypes to reliable production systems, ensuring robustness and adaptability for African-focused AI solutions.`,
//   },
//   {
//     id: 3,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "10th August, 2025",
//     readTime: "6 min read",
//     category: "Community Voices",
//     image: blogPhoto3,
//     authorImage: blogPhoto4,
//     author: "Community Contributors",
//     content: `In this edition of Voices from the Community, learners share their paths into AI — from curiosity to contribution.
// They discuss mentorship, local barriers, and strategies to stay consistent in a fast-evolving field.
// Each story highlights the resilience and creativity driving the next generation of African technologists.`,
//   },
//   {
//     id: 4,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "5th August, 2025",
//     readTime: "4 min read",
//     category: "Community Voices",
//     image: blogPhoto4,
//     authorImage: blogPhoto5,
//     author: "NSK.AI Editorial Team",
//     content: `More perspectives from learners shaping the AI space. Participants share how they overcame limited resources and found new ways to collaborate and learn.
// The stories underscore that with focus and community support, meaningful innovation can happen anywhere.`,
//   },
//   {
//     id: 5,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "1st August, 2025",
//     readTime: "5 min read",
//     category: "Community Voices",
//     image: blogPhoto5,
//     authorImage: blogPhoto6,
//     author: "Community Contributors",
//     content: `Community members recount how participating in the NSK.AI training opened doors for internships, research, and new ventures.
// Their insights reveal the growing strength of Africa’s developer network and the role of shared learning in sustaining progress.`,
//   },
//   {
//     id: 6,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "28th July, 2025",
//     readTime: "6 min read",
//     category: "Community Voices",
//     image: blogPhoto6,
//     authorImage: blogPhoto7,
//     author: "NSK.AI",
//     content: `Another look at how African AI learners are finding creative pathways.
// This post captures project highlights and reflections on teamwork, perseverance, and collaboration in resource-limited environments.`,
//   },
//   {
//     id: 7,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "25th July, 2025",
//     readTime: "5 min read",
//     category: "Community Voices",
//     image: blogPhoto7,
//     authorImage: blogPhoto8,
//     author: "NSK.AI Writers Group",
//     content: `Learners talk about their motivation to start AI projects that target local languages and communities.
// They describe building datasets, training custom models, and sharing open-source resources to empower others.`,
//   },
//   {
//     id: 8,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "20th July, 2025",
//     readTime: "4 min read",
//     category: "Community Voices",
//     image: blogPhoto8,
//     authorImage: blogPhoto9,
//     author: "NSK.AI",
//     content: `Participants highlight their collaborative spirit, lessons learned from peer-to-peer projects, and reflections on mentorship.
// The stories demonstrate that collective growth is key to building sustainable AI ecosystems in Africa.`,
//   },
//   {
//     id: 9,
//     title: "Voices from the community",
//     description:
//       "Voices from the community: navigating AI careers from Africa realized applications that solve local prob...",
//     date: "15th July, 2025",
//     readTime: "7 min read",
//     category: "Community Voices",
//     image: blogPhoto9,
//     authorImage: blogPhoto1,
//     author: "NSK.AI",
//     content: `Closing this series, we spotlight how alumni of our programs continue to build and share.
// Their ongoing work proves that learning is just the start — the impact comes from applying it to local realities.`,
//   },
// ];

// export default function ReadBlog() {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);

//   useEffect(() => {
//     getBlogs().then(setBlogs);
//   }, []);

//   const { id } = useParams();
//   const blogPost = blogPosts.find((post) => post.id === Number(id));

//   if (!blogPost) {
//     return (
//       <section className="min-h-screen flex flex-col items-center justify-center">
//         <div className="container mx-auto px-4">
//           <h1 className="font-primary font-bold text-6xl text-center">
//             Blog post not found
//           </h1>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <article className="min-h-screen py-50">
//       <div className="">
//         {/* Header */}
//         <div className="container mx-auto px-4 flex flex-col gap-8">
//           <div>
//             <span className="bg-[#F7F7F8] rounded-[50px] px-6 py-3 font-secondary font-semibold text-sm text-[#121212] leading-[146%]">
//               {blogPost.category}
//             </span>
//           </div>
//           <h1 className="font-primary font-semibold text-4xl md:text-5xl">
//             {blogPost.title}
//           </h1>

//           {/* Author & Social links */}
//           <div className="flex items-center justify-between">
//             {/* Author and Publish date */}
//             <div className="flex items-center justify-center gap-4">
//               <div className="w-24 h-24 rounded-full overflow-hidden border-3">
//                 <img
//                   src={blogPost.authorImage}
//                   alt={blogPost.author}
//                   className="object-cover w-full h-full select-none"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <span className="font-secondary font-semibold text-2xl leading-[110%] tracking-[3%]">
//                   {blogPost.author}
//                 </span>
//                 <span className="font-secondary font-semibold text-[#EF4C0D] text-base leading-[150%]">
//                   {blogPost.date}
//                 </span>
//               </div>
//             </div>
//             {/* Social links */}
//             <div className="flex flex-col justify-center gap-2 items-end">
//               <span className="font-secondary font-semibold text-xl text-[#8E9BAE] leading-[100%]">
//                 Socials
//               </span>
//               <div className="flex items-center gap-4">
//                 {socialIcons.map((icon, i) => (
//                   <a
//                     key={i}
//                     href={icon.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-[#8E9BAE]/30 rounded-full flex items-center justify-center p-4 transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
//                   >
//                     <img src={icon.icon} alt={icon.name} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="w-full h-full max-w-[100%] mx-auto mt-12 mb-20">
//           <img
//             src={blogPost.image}
//             alt={blogPost.title}
//             className="w-full h-[700px] object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-4">
//           <div className="prose prose-lg">
//             {blogPost.content?.split("\n").map((paragraph, index) => (
//               <p
//                 key={index}
//                 className="font-secondary text-lg leading-relaxed mb-6"
//               >
//                 {paragraph.trim()}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import type { Image } from "sanity";

import LinkedInIcon from "../../assets/UIs/linkedin.svg";
import XIcon from "../../assets/UIs/x.svg";
import YoutubeIcon from "../../assets/UIs/youtube.svg";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: Image;
  authorImage: Image;
  author: string;
  content?: PortableTextBlock[];
}

const socialIcons = [
  {
    name: "X (formerly Twitter)",
    link: "https://x.com/NskAiCommunity",
    icon: XIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@Nskaicommunity",
    icon: YoutubeIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/ai-nsk/",
    icon: LinkedInIcon,
  },
];

const components = {
  block: {
    h2: ({ children }: never) => (
      <h2 className="text-3xl font-primary font-semibold mt-10 mb-4">
        {children}
      </h2>
    ),
    normal: ({ children }: never) => (
      <p className="mb-6 text-lg leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: never) => (
      <ul className="list-disc ml-6 mb-6">{children}</ul>
    ),
  },
};

export default function ReadBlog() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const query = `
          *[_type == "blog" && _id == $id][0] {
            _id,
            title,
            description,
            category,
            date,
            readTime,
            author,
            "image": image.asset->url,
            "authorImage": authorImage.asset->url,
            content
          }
        `;
        const data = await client.fetch(query, { id });
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="font-secondary text-lg text-[#8E9BAE]">Loading blog...</p>
      </section>
    );
  }

  if (!blogPost) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="font-primary font-bold text-4xl">Blog not found</h1>
      </section>
    );
  }

  return (
    <article className="min-h-screen py-50">
      <div>
        {/* Header */}
        <div className="container mx-auto px-4 flex flex-col gap-8">
          <div>
            <span className="bg-[#F7F7F8] rounded-[50px] px-6 py-3 font-secondary font-semibold text-sm text-[#121212] leading-[146%]">
              {blogPost.category}
            </span>
          </div>
          <h1 className="font-primary font-semibold text-4xl md:text-5xl">
            {blogPost.title}
          </h1>

          {/* Author and Socials */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {blogPost.authorImage && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-3">
                  <img
                    src={urlFor(blogPost.authorImage).width(300).url()}
                    alt={blogPost.author}
                    className="object-cover w-full h-full select-none"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <span className="font-secondary font-semibold text-2xl">
                  {blogPost.author}
                </span>
                <span className="font-secondary font-semibold text-[#EF4C0D] text-base">
                  {new Date(blogPost.date).toDateString()}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 items-end">
              <span className="font-secondary font-semibold text-xl text-[#8E9BAE]">
                Socials
              </span>
              <div className="flex items-center gap-4">
                {socialIcons.map((icon, i) => (
                  <a
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8E9BAE]/30 rounded-full flex items-center justify-center p-4 transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
                  >
                    <img src={icon.icon} alt={icon.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 container mx-auto px-4">
          <span className="font-secondary font-normal text-sm md:text-base text-[#101213] leading-[25px] tracking-[1px] text-balance line-clamp-3">
            {blogPost.description}
          </span>
        </div>

        {/* Featured Image */}
        {blogPost.image && (
          <div className="w-full h-full max-w-[100%] mx-auto mt-12 mb-20">
            <img
              src={urlFor(blogPost.image).width(1200).url()}
              alt={blogPost.title}
              className="w-full h-[700px] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="prose prose-lg">
            <PortableText value={blogPost.content} components={components} />
          </div>
        </div>
      </div>
    </article>
  );
}
