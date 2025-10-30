import { FaMouse } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-44 lg:pt-0">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="font-secondary font-normal text-base text-[#101213] px-6 py-4 bg-[#f8f8f8] border-2 border-dashed border-[#a1a1a1] inline-block">
            Projects
          </span>
          <h1 className="font-primary font-semibold text-3xl md:text-6xl leading-[100%] max-w-3xl text-center">
            Building Africa’s AI Future, One{" "}
            <span className="font-normal">Project</span> at a
            <span className="font-normal"> Time</span>
          </h1>
        </div>
        <p className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[1px] max-w-4xl text-center">
          We run large, open programs designed for real skill‑building,
          collaboration, and measurable impact.
        </p>

        {/* ---------------- mouse -------------- */}
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[1px]">
            Scroll down
          </span>

          <div
            onClick={() => {
              const target = document.getElementById("bootcamp");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#f7f7f8] rounded-full p-4 flex items-center justify-center shadow-sm"
          >
            <FaMouse className="animate-bounce text-[#1a1a1a]" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
