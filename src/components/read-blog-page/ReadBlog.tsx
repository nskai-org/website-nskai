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
import Subscribe from "../Subscribe";

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
    <article className="min-h-screen pt-50">
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
          <span className="font-secondary font-normal text-sm md:text-base text-[#101213] leading-[25px] tracking-[1px] text-balance">
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
      <Subscribe />
    </article>
  );
}
