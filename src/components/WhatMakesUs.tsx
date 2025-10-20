import TerrilloWalls from "../assets/terrillo-walls.png";
import CommunityIcon from "../assets/UIs/icon-one.svg";
import PracticalIcon from "../assets/UIs/icon-two.svg";
import ScaleIcon from "../assets/UIs/icon-three.svg";
import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";

const data = [
  {
    title: "Community first",
    description: "learner-led activities, inclusive culture.",
    icon: CommunityIcon,
  },
  {
    title: "Practical learning",
    description: "demos, code, real projects.",
    icon: PracticalIcon,
  },
  {
    title: "Scale",
    description: "continent-wide programs and partnerships.",
    icon: ScaleIcon,
  },
];

export default function WhatMakesUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <h2 className="font-primary font-semibold text-2xl sm:text-4xl md:text-[55px] md:leading-[70px]">
            What makes <br /> us <span className="font-normal">different</span>
          </h2>

          <p className="text-[#606060] text-sm md:text-lg md:leading-[30px] font-secondary">
            We democratize AI learning across Africa. From paper‑reading clubs
            to hands‑on bootcamps and project demos, we help students and young
            professionals gain real skills, build portfolios, and access
            mentorship at scale.
          </p>

          {/* points */}
          <div className="grid grid-cols-1 gap-8">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <img src={item.icon} alt={item.title} />
                <div className="flex flex-col gap-2">
                  <span className="font-primary font-semibold text-sm md:text-xl md:leading-[32px] tracking-[1px]">
                    {item.title}
                  </span>
                  <span className="font-secondary font-normal text-[#606060] text-xs md:text-base md:leading-[25px] tracking-[1px]">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* button */}
          <div>
            <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center gap-4 py-2 px-4 md:py-4 md:px-8 cursor-pointer">
              Join the Community{" "}
              <img src={ArrowRight} alt="Arrow right" className="select-none" />
            </button>
          </div>
        </div>
        {/* right column - IMAGE */}
        <div>
          <img
            src={TerrilloWalls}
            alt="Image of a girl using her laptop to take a course on AI"
          />
        </div>
      </div>
    </section>
  );
}
