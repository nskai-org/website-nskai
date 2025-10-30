import { Link } from "react-router-dom";
import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";

const gridItems = [
  {
    title: "Community members (as of Oct 2025)",
    numbers: "1,300+",
  },
  {
    title: "Bootcamp participants from 50 countries",
    numbers: "1,370",
  },
  {
    title: "Executive speakers engaged",
    numbers: "20+",
  },
];

const gridItems2 = [
  {
    title: "Workshops & talks hosted",
    numbers: "30+",
  },
  {
    title: "NGO registered in Nigeria",
    numbers: "CAC Reg",
  },
];

export default function Impact() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 flex flex-col gap-8">
        {/* top */}
        <h2 className="font-primary font-semibold text-3xl md:text-[55px]">
          Impact at a <span className="font-normal">glance</span>
        </h2>

        {/* grids */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-16 bg-[#F9F9F9] rounded-2xl p-6 md:p-8 
                transition-all duration-500 ease-in-out 
                hover:bg-[#101213] hover:text-white 
                hover:shadow-[0_0_20px_#ff4d4d,0_0_40px_#ff4d4d]
                cursor-pointer"
              >
                <p className="text-sm md:text-base font-secondary font-normal leading-[30px] transition-colors duration-500">
                  {item.title}
                </p>
                <p className="text-right text-4xl md:text-6xl font-semibold transition-colors duration-500">
                  {item.numbers}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridItems2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-16 bg-[#F9F9F9] rounded-2xl p-6 md:p-8 
                transition-all duration-500 ease-in-out 
                hover:bg-[#101213] hover:text-white 
                hover:shadow-[0_0_20px_#ff4d4d,0_0_40px_#ff4d4d]
                cursor-pointer"
              >
                <p className="text-sm md:text-base font-secondary font-normal leading-[30px] transition-colors duration-500">
                  {item.title}
                </p>
                <p className="text-right text-4xl md:text-6xl font-semibold transition-colors duration-500">
                  {item.numbers}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <div>
          <Link to={"/projects"}>
            <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center gap-4 py-2 px-4 md:py-4 md:px-8 cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
              See our work{" "}
              <img src={ArrowRight} alt="Arrow right" className="select-none" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
