import { FaMouse } from "react-icons/fa";
import HeroImg from "../../assets/contact-page/contact-hero-image.png";
import Svg from "../../assets/contact-page/contact.svg";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#101213] pt-32 md:py-0">
      <div className="flex w-full h-full">
        {/* ------- Left side -------- */}
        <div className="w-full md:w-1/2 bg-[#101213] text-white flex flex-col justify-center px-4 md:px-20 py-16">
          <button className="border border-dashed bg-[#1C1D1F] border-[#606060] text-xs leading-[16px] px-4 py-3 rounded-md mb-6 w-fit">
            Contact Us
          </button>

          <h1 className="text-6xl font-primary font-bold leading-[100%] mb-2">
            Let’s Build
          </h1>
          <h2 className="text-6xl font-primary font-normal leading-[100%] mb-6">
            Together
          </h2>

          <p className="font-secondary font-normal text-xl leading-[35px] tracking-[1%] text-[#D9D9D9] max-w-md mb-8">
            We need you. We need your criticism, your ideas and your help.
          </p>

          <div>
            <p className="font-primary font-semibold text-3xl leading-[100%] mb-4">
              Email <span className="font-normal">Address</span>
            </p>
            <a
              href="mailto:admin@nskai.org"
              className="text-white text-xl font-primary font-extrabold leading-[35px] tracking-[2%]"
            >
              admin@nskai.org
            </a>
            <div
              onClick={() => {
                const target = document.getElementById("get-in-touch");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-20 rounded-full p-4 flex items-center justify-center shadow-sm"
            >
              <FaMouse className="animate-bounce text-[#afafaf]" size={24} />
            </div>
          </div>
        </div>

        {/* ------- Right side -------- */}
        <div
          className="hidden md:w-1/2 md:block md:relative md:bg-cover md:bg-center"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <img
            src={Svg}
            alt="Contact Us Now"
            className="absolute right-172 top-72 w-40 animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
}
