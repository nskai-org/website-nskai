import { useState, useRef, useEffect } from "react";
import HeroBg from "../assets/hero-bg.png";

import UpdateImg1 from "../assets/updates-image-for-hero-section/update-image-1.png";
import UpdateImg2 from "../assets/updates-image-for-hero-section/update-image-1.png";
import UpdateImg3 from "../assets/updates-image-for-hero-section/update-image-1.png";
import { Link } from "react-router-dom";

const updates = [
  {
    title: "NSK.AI x The Udara Exchange Workshop (January 2026)",
    description:
      "A focused gathering designed to explore how artificial intelligence can solve real problems across the African continent. The conference brings together developers, founders, educators, policy thinkers, and creatives to discuss practical applications of AI in areas like education, healthcare, fintech, agriculture, and entrepreneurship.",
    image: UpdateImg1,
  },
  {
    title: "The Udara Project (April 2026)",
    description:
      "Awakening Africa, building the Foundations of the Future. Join us in empowering 300,000 young Africans across 9 nations with the tools to build contextually grounded, language-aware AI solutions that transform industries and create unprecedented economic opportunities.",
    image: UpdateImg2,
  },
  {
    title: "NSKAI Thursday AI Workshops",
    description:
      "A weekly hands-on learning series held every Thursday, designed to help beginners and professionals understand and apply AI in real projects. Each session focuses on one practical topic—tools, coding, automation, productivity, or real-world problem-solving. Participants learn by doing, follow simple guided exercises, and leave with skills they can immediately use in school, work, or their personal projects.",
    image: UpdateImg3,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track active slide
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleReadMore = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative z-0 flex flex-col lg:flex-row">
      {/* LEFT: Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col gap-12 justify-center px-6 sm:px-10 lg:px-24 pt-54 pb-12 md:pt-40 bg-white">
        <div className="flex flex-col gap-8">
          {/* one */}
          <div className="flex items-center gap-4">
            <button className="bg-[#101213] px-3 py-1 select-none rounded-[100px] font-tertiary font-semibold text-white text-sm">
              New
            </button>
            <span className="font-secondary font-normal text-sm">
              Join our Discord Community
            </span>
          </div>
          {/* two */}
          <div className="flex flex-col gap-4">
            <h1 className="font-primary font-normal text-3xl sm:text-4xl md:text-5xl">
              <strong className="font-semibold">Empowering</strong> Africa{" "}
              <strong className="font-semibold">through</strong> AI education{" "}
              <strong className="font-semibold">and</strong> community.
            </h1>
            <p className="font-secondary leading-9 tracking-tight font-normal text-sm md:text-lg">
              NSK.ai is a registered non‑profit building an open, practical AI
              community across Africa, workshops, research talks, and real
              projects that change lives.
            </p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-6 select-none">
          <Link to={"/community"}>
            <button className="bg-[#161616] rounded-[45px] py-2 px-4 md:py-4 md:px-9 text-white font-secondary font-semibold text-xs md:text-base cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
              Join the community
            </button>
          </Link>
          <Link to={"/projects"}>
            <button className="bg-[#F7F7F8] rounded-[45px] py-2 px-4 md:py-4 md:px-9 text-[#121212] font-secondary font-semibold text-xs md:text-base cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
              Explore Our Work
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT: Image & Updates */}
      <div
        className="lg:w-1/2 w-full min-h-[400px] lg:min-h-screen bg-cover bg-center flex flex-col justify-end px-6 sm:px-10 lg:px-24 pt-16"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="p-4 sm:p-6">
          {/* UPDATES (Horizontal scroll) */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth"
          >
            {updates.map((update, index) => {
              const isExpanded = expanded[index];
              const isLong = update.description.length > 50;
              const displayText = isExpanded
                ? update.description
                : update.description.slice(0, 50) + (isLong ? "..." : "");

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-6 snap-center flex-shrink-0 w-full bg-white/15 backdrop-blur-md rounded-3xl p-4"
                >
                  <img
                    src={update.image}
                    alt={`Image for ${update.title}`}
                    className="select-none flex-shrink-0 w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-lg"
                  />

                  <div className="flex flex-col gap-2 text-gray-900 flex-1 min-w-0">
                    <span className="text-sm opacity-80">Updates</span>
                    <h3 className="font-primary font-semibold text-base sm:text-lg md:text-xl leading-snug">
                      {update.title}
                    </h3>

                    <p
                      className="font-secondary font-normal tracking-wider text-xs sm:text-sm overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: isExpanded ? "unset" : "3",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {displayText}
                    </p>

                    {isLong && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-xs select-none text-black/80 hover:text-black transition-colors duration-300 w-fit mt-1"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* STATUS DOTS */}
          <div className="flex items-center gap-3 justify-center mt-2">
            {updates.map((_, index) => (
              <span
                key={index}
                className={`block rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white w-4 h-4"
                    : "bg-white/40 w-3 h-3"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
