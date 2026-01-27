import { Link } from "react-router-dom";
import HeroImg from "../../assets/upcoming-event-page/nskudaraexchangeworkshop.png";
import Featured from "../../assets/blog/featured.svg";
import ArrowRight from "../../assets/UIs/solar_arrow-right-black.svg";

export default function UpcomingEventName() {
  return (
    <section className="min-h-[110vh] bg-[#101213] text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-40 px-6">
        {/* --------- Left side with text ------------ */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
           <span className="font-secondary font-normal text-base text-white px-6 py-4 bg-[#1c1d1f] border-2 border-dashed border-[#606060] inline-block">
              Upcoming Event
            </span>

          </div>
          <h1 className="font-primary font-semibold text-3xl md:text-6xl max-w-lg">
            Register <span className="font-normal"> for NSK.AI x Udara Exchange Workshop?</span>
          </h1>
          <p className="font-secondary font-normal text-base md:text-xl leading-[35px] tracking-[1%] max-w-lg">
            🚀 NSK.AI x The UdaraProject | Starting 2026 <br />

                We are kicking off the year with a powerful collaboration 
                and inviting you to a two day Virtual AI Conference 
                created with the African context at its core. ✨...
          </p>
  
          <div>
            {/* For large screens and above */}
           <Link to="/upcoming-event/details">
            <button className="bg-white px-6 py-5 text-[#101213] rounded-[45px] flex items-center gap-5 font-semibold">
              Read More <img src={ArrowRight} alt="Right arrow" />
            </button>
          </Link>


            {/* For small and medium screens */}
            <button
              onClick={() =>
                document
                  .getElementById("blogList")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white px-6 py-5 text-[#101213] rounded-[45px] flex items-center justify-center gap-5 text-base font-secondary font-semibold leading-[146%] cursor-pointer lg:hidden"
            >
              Read More <img src={ArrowRight} alt="Right arrow" />
            </button>
          </div>
        </div>

        {/* ------------- Right side with image ------------ */}
        <div className="hidden lg:block lg:flex-1 lg:h-[490px] lg:relative">
          <img
            src={HeroImg}
            alt="Hero Image for Upcoming Event page"
            className="w-[100%] h-[100%] outline-[5px] outline-white rounded-[15px]"
          />
           <a
              href="https://us06web.zoom.us/webinar/register/WN_VoQ4yE4SRD6z_jssg0sDmw"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-8 hidden lg:inline-block bg-black text-white px-6 py-3 rounded-[45px] font-secondary font-semibold hover:scale-100 transition-transform"
            >
              Register Now
            </a>
          {/* ------- featured svg --------------- */}
          <img
            src={Featured}
            alt="Featured svg"
            aria-hidden="true"
            className="absolute top-56 -left-35"
          />
        </div>
      </div>
    </section>
  );
}
