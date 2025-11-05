import { Link } from "react-router-dom";
import HeroImg from "../../assets/blog/blog-photo-1.png";
import Featured from "../../assets/blog/featured.svg";
import ArrowRight from "../../assets/UIs/solar_arrow-right-black.svg";

export default function HeroSection() {
  return (
    <section className="min-h-[110vh] bg-[#101213] text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-40 px-6">
        {/* --------- Left side with text ------------ */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <span className="font-secondary font-normal text-base text-[#606060] px-6 py-4 bg-[#1c1d1f] border-2 border-dashed border-[#606060] inline-block">
              Blog
            </span>
          </div>
          <h1 className="font-primary font-semibold text-3xl md:text-6xl max-w-lg">
            Why read the <span className="font-normal"> NSK.ai Blog?</span>
          </h1>
          <p className="font-secondary font-normal text-base md:text-xl leading-[35px] tracking-[1%] max-w-lg">
            At NSK.ai we believe great AI learning is communal, hands-on, and
            accessible. Our blog brings together clear explainers, project
            walk-throughs, research summaries, career guid...
          </p>

          <div>
            {/* For large screens and above */}
            <Link
              to={`/blog/d5474103-d4f1-439a-ae8e-aa3d5067df49`}
              className="hidden lg:inline-block"
            >
              <button className="bg-white px-6 py-5 text-[#101213] rounded-[45px] flex items-center justify-center gap-5 text-base font-secondary font-semibold leading-[146%] cursor-pointer">
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
        <div className="hidden lg:block lg:flex-1 lg:h-[550px] lg:relative">
          <img
            src={HeroImg}
            alt="Hero Image for Blog page"
            className="w-[100%] h-[100%] outline-[5px] outline-white rounded-[15px]"
          />
          {/* ------- featured svg --------------- */}
          <img
            src={Featured}
            alt="Featured svg"
            aria-hidden="true"
            className="absolute top-56 -left-20"
          />
        </div>
      </div>
    </section>
  );
}
