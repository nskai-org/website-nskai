import { useState, useRef, useEffect } from "react";
import HeroBg from "../assets/hero-bg.png";
import UpdateImg1 from "../assets/updates-image-for-hero-section/update-image-1.png";
import UpdateImg2 from "../assets/community-page/udara.png";
import UpdateImg3 from "../assets/rag-bootcamp/organizers.png";
import { Link } from "react-router-dom";

const DISCORD_URL = "https://discord.gg/nskai";

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
      "A weekly hands-on learning series held every Thursday, designed to help beginners and professionals understand and apply AI in real projects. Each session focuses on one practical topic—tools, coding, automation, productivity, or real-world problem-solving.",
    image: UpdateImg3,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
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
      {/* ── LEFT: Text ─────────────────────────────────────────────────────── */}
      <div className="lg:w-1/2 w-full flex flex-col gap-12 justify-center px-6 sm:px-10 lg:px-24 pt-54 pb-12 md:pt-40 bg-white">
        <div className="flex flex-col gap-8">
          {/* Badge + Discord nudge */}
          <div className="flex items-center gap-4">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#101213] px-3 py-1 select-none rounded-[100px] font-tertiary font-semibold text-white text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#ff4d4d]">
                New
              </button>
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-secondary font-normal text-sm text-[#101213] hover:underline"
            >
              Join our Discord Community
            </a>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h1 className="font-primary font-normal text-3xl sm:text-4xl md:text-5xl text-[#101213]">
              <strong className="font-semibold">Empowering</strong> Africa{" "}
              <strong className="font-semibold">through</strong> AI education{" "}
              <strong className="font-semibold">and</strong> community.
            </h1>
            <p className="font-secondary leading-9 tracking-tight font-normal text-sm md:text-lg text-[#606060]">
              NSK.ai is a registered non‑profit building an open, practical AI community across
              Africa, workshops, research talks, and real projects that change lives.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6 select-none">
          <Link to="/community">
            <button className="bg-[#161616] rounded-[45px] py-2 px-4 md:py-4 md:px-9 text-white font-secondary font-semibold text-xs md:text-base cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff4d4d]">
              Join the community
            </button>
          </Link>
          <Link to="/projects">
            <button className="bg-[#F7F7F8] rounded-[45px] py-2 px-4 md:py-4 md:px-9 text-[#121212] font-secondary font-semibold text-xs md:text-base cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff4d4d]">
              Explore Our Work
            </button>
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Image & Updates ──────────────────────────────────────────── */}
      <div
        className="lg:w-1/2 w-full min-h-[400px] lg:min-h-screen bg-cover bg-center flex flex-col justify-end px-6 sm:px-10 lg:px-24 pt-16"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="p-4 sm:p-6">
          {/* Horizontal scroll cards */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth"
          >
            {updates.map((update, index) => {
              const isExpanded = expanded[index];
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
                      {update.description}
                    </p>
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-xs select-none text-black/80 hover:text-black transition-colors duration-300 w-fit mt-1"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3 justify-center mt-2">
            {updates.map((_, index) => (
              <span
                key={index}
                className={`block rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white w-4 h-4" : "bg-white/40 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
