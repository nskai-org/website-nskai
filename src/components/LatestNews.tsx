import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";
import BlogPhoto1 from "../assets/blog/blog-photo-1.png";
import BlogPhoto2 from "../assets/blog/blog-photo-2.png";
import BlogPhoto3 from "../assets/blog/blog-photo-3.png";

const blogData = [
  {
    title: "What we learned from Training",
    content:
      "What we learned from training 1,370 learners in 6 weeks realized applications that solve local prob...",
    dateUploaded: "20th August, 2025",
    readingTime: "5",
    image: BlogPhoto1,
  },
  {
    title: "Building Production-ready",
    content:
      "Building production-ready RAG agents: field notes d applications that solve local prob...",
    dateUploaded: "21st August, 2025",
    readingTime: "15",
    image: BlogPhoto2,
  },
  {
    title: "Voices from the Community",
    content:
      "Voices from the community: navigating AI careers from Africanized applications that solve local prob...",
    dateUploaded: "22nd August, 2025",
    readingTime: "25",
    image: BlogPhoto3,
  },
];

export default function LatestNews() {
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
              success stories, and Ai innovations.
            </p>
            <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-[#101213] text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer select-none">
              Read More Blogs{" "}
              <img src={ArrowRight} alt="Arrow right" className="select-none" />
            </button>
          </div>
        </div>

        {/* blog data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index}>
              <img src={blog.image} alt={blog.title} className="mb-4" />
              <div className="flex items-center gap-4">
                <span className="text-[#8E9BAE] text-xs md:text-base font-secondary font-normal tracking-[1px] md:leading-[100%]">
                  {blog.dateUploaded}
                </span>
                <span className="block bg-gray-600 rounded-full w-2 h-2"></span>
                <span className="text-[#8E9BAE] text-xs md:text-base font-secondary font-normal tracking-[1px] md:leading-[100%]">
                  {blog.readingTime} mins read
                </span>
              </div>
              {/* title and content */}
              <div className="mt-8 flex flex-col gap-2">
                <h3 className="font-primary font-semibold text-base md:text-xl text-[#121212] md:leading-[30px]">
                  {blog.title}
                </h3>
                <p className="text-[#8E9BAE] font-secondary font-normal text-xs md:text-base tracking-[1px] md:leading-[25px]">
                  {blog.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
