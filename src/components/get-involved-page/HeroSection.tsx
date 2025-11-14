import { useEffect } from "react";
import heroImg1 from "../../assets/community-page/hero-section/community-hero-img-1.png";
import heroImg2 from "../../assets/community-page/hero-section/community-hero-img-2.png";
import heroImg3 from "../../assets/community-page/hero-section/community-hero-img-3.png";
import heroImg4 from "../../assets/community-page/hero-section/community-hero-img-4.png";
import heroImg5 from "../../assets/community-page/hero-section/community-hero-img-5.png";
import heroImg6 from "../../assets/community-page/hero-section/community-hero-img-6.png";
import heroImg7 from "../../assets/community-page/hero-section/community-hero-img-7.png";

export default function HeroSection() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const heroImages = [
    heroImg1,
    heroImg2,
    heroImg3,
    heroImg4,
    heroImg5,
    heroImg6,
    heroImg7,
  ];

  return (
    <section className="pt-50 pb-24 overflow-hidden">
      {/* hero text */}
      <div className="mx-auto flex flex-col items-center justify-center gap-8">
        <span className="font-secondary font-normal text-base text-[#101213] px-6 py-4 bg-[#f8f8f8] border-2 border-dashed border-[#a1a1a1] inline-block">
          Community
        </span>
        <h1 className="font-primary font-semibold text-3xl md:text-6xl leading-[100%] text-center">
          Many Ways to <span className="font-normal">Help</span>
        </h1>
        <p className="font-secondary font-normal text-xl text-[#606060] leading-[35px] tracking-[1%] text-center">
          Pick the path that fits you best. Each card routes to a dedicated
          form.
        </p>
      </div>

      {/* ----- Image scroll ------- */}
      <div className="relative mt-32 w-full overflow-x-auto">
        <div className="flex gap-4 animate-scroll">
          {[...heroImages, ...heroImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`hero-img-${i}`}
              className="w-80 h-80 object-cover rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
