import nvidiaLogo from "../../assets/companies/nvidia-logo-dark.svg";
import googleLogo from "../../assets/companies/google-logo-dark.svg";
import langchainLogo from "../../assets/companies/langchain-logo-dark.svg";
import arrowRight from "../../assets/UIs/solar_arrow-right-black.svg";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section
      className="py-24 mb-24 bg-[#FBE8DE] text-[#101213] rounded-3xl"
      id="get-involved"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* ------------ Left Section ------------ */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="font-primary font-semibold text-4xl md:text-5xl">
            Get Involved
          </h2>
          <p className="font-secondary text-lg leading-relaxed max-w-lg">
            Whether you’re a student, mentor, researcher, or sponsor, there’s a
            place for you in the NSK.ai project community.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link to={"/community#becomePart"}>
              <button className="bg-[#101213] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition duration-500 cursor-pointer">
                Enroll Your Institution
              </button>
            </Link>
            <Link to={"/community#becomePart"}>
              <button className="flex items-center gap-2 border border-[#101213] px-6 py-3 rounded-full font-medium hover:bg-[#101213] hover:text-white transition duration-500 cursor-pointer">
                Sponsor a Cohort{" "}
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="w-4 h-4 inline-block"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* ------------ Right Section (illustration placeholder) ------------ */}
        <div className="flex-1 flex justify-center relative">
          {/* White flower shape */}
          <div className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-[50%_50%_40%_60%/50%_60%_40%_50%] shadow-lg"></div>

          {/* Black cloud-like shape */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#101213] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] border-4 border-[#FBE8DE]"></div>

          {/* Arrow pointing to the shape */}
          <div className="absolute left-0 bottom-10 text-3xl md:text-4xl rotate-[-10deg] font-secondary">
            ↪
          </div>
        </div>
      </div>

      {/* ------------ Partner Logos ------------ */}
      <div className="flex items-center justify-center gap-6 md:gap-28 mt-10 px-4">
        <img
          src={nvidiaLogo}
          alt="NVIDIA"
          className="w-22 md:w-40 object-contain select-none"
        />
        <img
          src={googleLogo}
          alt="Google"
          className="w-22 md:w-40 object-contain select-none"
        />
        <img
          src={langchainLogo}
          alt="LangChain"
          className="w-22 md:w-40 object-contain select-none"
        />
      </div>
    </section>
  );
}
