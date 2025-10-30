import { Link } from "react-router-dom";
import SkyBackground from "../assets/sky-bg.png";
import Terfaren from "../assets/teamMembers/terfaren.jpg";
import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";

export default function MeetTheTeam() {
  return (
    <section
      className="my-24"
      style={{
        backgroundImage: `url(${SkyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-10 min-h-[100vh] text-white pt-28 pb-12">
        <div>
          <h3 className="font-primary font-semibold text-2xl md:text-[55px] md:leading-[100%] mb-4">
            Meet the <br /> Nsk.ai <span className="font-normal">Team</span>
          </h3>
          <p className="font-secondary font-normal text-sm md:text-xl md:leading-[35px] max-w-sm">
            Behind Nsk.ai is a group of passionate individuals committed to
            making AI learning accessible across Africa.
          </p>
        </div>

        {/* team members */}
        <div className="flex flex-col gap-12 items-center justify-center mt-20 sm:mt-12 md:mt-52 lg:mt-20">
          <div className="w-60 h-60 overflow-hidden rounded-full hover:outline-4 hover:outline-white transition-outline duration-500 cursor-pointer">
            <img
              src={Terfaren}
              alt="Image of Lorenzo. Lead developer at NSK.AI"
              className="w-full h-full object-cover select-none"
            />
          </div>
          {/* button */}
          <Link to="/about#team">
            <div>
              <button className="rounded-[50px] bg-white font-secondary font-semibold leading-[146%] flex items-center justify-center text-[#101213] text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
                See NSK.AI Team{" "}
                <img
                  src={ArrowRight}
                  alt="Arrow right"
                  className="select-none"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
