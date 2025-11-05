import Guide1 from "../../assets/blog/guidelines/guide-1.png";
import Guide2 from "../../assets/blog/guidelines/guide-2.png";
import Guide3 from "../../assets/blog/guidelines/guide-3.png";
import ArrowRight from "../../assets/UIs/solar_arrow-right-black.svg";

export default function EditorialGuidelines() {
  return (
    <section className="py-24 bg-[#101213] text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="font-primary font-semibold text-4xl md:text-[90px] leading-[100%] mb-12">
          Editorial <span className="font-normal">Guidelines</span>
        </h2>

        {/* Card cluster with images */}
        <div className="relative h-[360px] md:h-[420px] mb-16 flex items-center justify-center">
          {/* Left: Content Rule (guide-1) */}
          <img
            src={Guide1}
            alt="Content Rule guideline"
            className="absolute top-6 left-2 md:top-2 md:left-8 w-[290px] md:w-[440px] h-auto object-contain z-10 select-none"
            loading="lazy"
            decoding="async"
          />

          {/* Middle: Originality (guide-2) */}
          <img
            src={Guide2}
            alt="Originality guideline"
            className="absolute top-24 left-40 md:top-52 md:left-100 w-[290px] md:w-[440px] h-auto object-contain z-20 select-none"
            loading="lazy"
            decoding="async"
          />

          {/* Right: Respect Privacy (guide-3) */}
          <img
            src={Guide3}
            alt="Respect Privacy guideline"
            className="absolute top-2 right-2 md:top-0 md:right-100 w-[290px] md:w-[440px] h-auto object-contain z-30 select-none"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* CTA Row */}
        <div className="flex flex-col items-end justify-between gap-6">
          <p className="font-secondary font-bold text-base md:text-xl text-white leading-[35px] tracking-[1px]">
            Want to Submit a Story?
          </p>
          <button className="flex items-center gap-3 bg-white text-[#101213] px-6 py-3 rounded-full font-secondary font-semibold hover:bg-[#f0f0f0] transition-colors duration-300">
            Submit Blog <img src={ArrowRight} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
}
