import ArrowRight from "../../assets/UIs/solar_arrow-right-black.svg";

import HeroImg1 from "../../assets/community-page/hero-section/community-hero-img-1.png";
import HeroImg2 from "../../assets/community-page/hero-section/community-hero-img-2.png";
import HeroImg3 from "../../assets/community-page/hero-section/community-hero-img-3.png";
import HeroImg4 from "../../assets/community-page/hero-section/community-hero-img-4.png";
import HeroImg5 from "../../assets/community-page/hero-section/community-hero-img-5.png";
import HeroImg6 from "../../assets/community-page/hero-section/community-hero-img-6.png";
import HeroImg7 from "../../assets/community-page/hero-section/community-hero-img-7.png";
import HeroImg8 from "../../assets/community-page/hero-section/community-hero-img-8.png";
import { useEffect } from "react";

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

  return (
    <section className="relative min-h-[110vh] md:min-h-[130vh] flex items-center justify-center overflow-hidden">
      {/* ------------- hero text ------------------ */}
      <div className="flex flex-col gap-8 items-center justify-center px-4">
        <span className="font-secondary font-normal text-base text-[#101213] px-6 py-4 bg-[#f8f8f8] border-2 border-dashed border-[#a1a1a1] inline-block">
          Community
        </span>
        <h1 className="font-primary font-semibold text-3xl md:text-[60px] leading-[100%] text-center max-w-xl">
          A Living Community of <span className="font-normal">Learners</span>
        </h1>
        <div className="select-none">
          <button
            onClick={() => {
              const section = document.getElementById("becomePart");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
          >
            Enroll Your Institution <img src={ArrowRight} alt="Arrow right" />
          </button>
        </div>
      </div>

      {/* ------------------- images ----------------- */}
      <img
        src={HeroImg1}
        alt="Hero Image 1 for community hero section"
        className="absolute top-60 left-2 md:top-20 md:left-10 lg:top-20 lg:left-15 select-none w-20 md:w-40 lg:w-80"
      />

      <img
        src={HeroImg2}
        alt="Hero image 2 for community hero section"
        className="hidden md:block md:absolute md:top-110 md:-left-8 lg:block lg:absolute lg:top-110 lg:-left-8 select-none w-30 md:w-60 lg:w-60"
      />

      <img
        src={HeroImg3}
        alt="Hero image 3 for community hero section"
        className="hidden lg:block lg:absolute lg:top-180 lg:left-80  select-none lg:w-70"
      />

      <img
        src={HeroImg4}
        alt="Hero image 4 for community hero section"
        className="hidden lg:block lg:absolute lg:top-180 lg:left-1/2 select-none lg:w-80"
      />

      <img
        src={HeroImg5}
        alt="Hero image 5 for community hero section"
        className="absolute top-152 md:right-70 md:top-140 lg:top-150 lg:right-50 select-none w-30 md:w-40 lg:w-40"
      />

      <img
        src={HeroImg6}
        alt="Hero image 6 for community hero section"
        className="hidden md:block md:absolute md:top-100 md:-right-10 lg:block lg:absolute lg:top-100 lg:-right-10 select-none w-30 md:w-50 lg:w-50"
      />

      <img
        src={HeroImg7}
        alt="Hero image 7 for community hero section"
        className="absolute top-50 right-8 md:top-30 md:right-20 lg:top-50 lg:right-50 select-none w-20 md:w-25 lg:w-50"
      />

      <img
        src={HeroImg8}
        alt="Hero image 8 for community hero section"
        className="absolute top-30 md:top-12 md:right-80 lg:top-15 lg:right-170 select-none w-20 md:w-24 lg:w-40"
      />
    </section>
  );
}
