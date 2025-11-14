import illustration1 from "../../assets/community-page/illustrations/Illustration - messy.svg";
import illustration2 from "../../assets/community-page/illustrations/Illustration - reading.svg";
import illustration3 from "../../assets/community-page/illustrations/Illustration - rolling.svg";

export default function Activities() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-32 items-center justify-center">
          <h2 className="max-w-lg text-2xl md:text-[55px] font-primary font-semibold text-center leading-[100%] md:mt-32">
            Weekly & Recurring <span className="font-normal">Activities</span>
          </h2>

          {/* ------------ illustrations ------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* ---------col 1----------- */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-between gap-10 lg:gap-0 rounded-[15px] bg-[#101213] text-white py-8 pr-4">
              <div>
                <img
                  src={illustration1}
                  alt="illustration 1"
                  className="w-48 lg:w-90 select-none"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <div className="hidden lg:w-1/2"></div>
                <div className="w-full lg:w-1/2 flex flex-col gap-5 pl-4 lg:pl-0">
                  <h3 className="font-secondary font-bold text-xl md:text-[30px] leading-[100%]">
                    Paper Talks (Thursdays)
                  </h3>
                  <ul className=" flex flex-col gap-4 font-secondary font-normal text-sm md:text-xl leading-[100%] list-disc list-inside">
                    <li>
                      Members present and simplify current AI research papers{" "}
                    </li>
                    <li>
                      Formats: lightning talks, panel Q&A, live collabs
                      walk-throughs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* -------------col 2------------- */}
            <div className="bg-[#FE0000] rounded-[15px] flex flex-col items-center justify-center gap-10 px-4 lg:px-8 py-8">
              <img
                src={illustration2}
                alt="illustration 2"
                className="select-none"
              />
              <div className="flex flex-col gap-5 pl-4 lg:pl-0">
                <h3 className="font-secondary font-bold text-xl md:text-[30px] leading-[100%]">
                  Project Demos
                </h3>
                <ul className=" flex flex-col gap-4 font-secondary font-normal text-sm md:text-xl leading-[100%] list-disc list-inside">
                  <li>
                    Showcase real builds; receive code reviews and mentorship
                  </li>
                  <li>On‑ramp to internships and collaborations</li>
                </ul>
              </div>
            </div>

            {/* ------------col 3--------------- */}
            <div className="pt-10 md:pt-20">
              <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px]">
                NSK.ai is more than events—it’s a supportive learning culture
                where people grow together, get feedback, and build.
              </span>
            </div>

            {/* --------------------col 4------------------ */}
            <div className="bg-[#101213] rounded-[15px] py-8 pr-4 col-span-1 md:col-span-4 text-white">
              <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
                <img
                  src={illustration3}
                  alt="Illustration 3"
                  className="w-48 md:w-80 lg:w-150"
                />
                <div className="flex flex-col gap-5 pl-4 lg:pl-0">
                  <h3 className="font-secondary font-bold text-xl md:text-[30px] leading-[100%]">
                    OpenMind Fridays / Game Night
                  </h3>
                  <ul className=" flex flex-col gap-4 font-secondary font-normal text-sm md:text-xl leading-[100%] list-disc list-inside">
                    <li>Balance and wellbeing for sustained learning</li>
                    <li>Community hangouts, casual sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
