import ArrowRight from "../assets/UIs/solar_arrow-right-black.svg";
import image10 from "../assets/rag-bootcamp/outreach.png";
import image5 from "../assets/rag-bootcamp/holding-hands.png";
import image8 from "../assets/rag-bootcamp/picnic-bw.png";
import image2 from "../assets/rag-bootcamp/ai.png";
import image7 from "../assets/rag-bootcamp/jesse-zhang.png";
import image9 from "../assets/rag-bootcamp/rag-paper-talk.png";
import image6 from "../assets/rag-bootcamp/organizers.png";
import image3 from "../assets/rag-bootcamp/chip.png";
import image1 from "../assets/rag-bootcamp/1370.png";
import bgFeatured from "../assets/bg-featured-project.png";
import CheckIcon from "../assets/UIs/check-icon.svg";

const imageCollection = [
  image10,
  image5,
  image8,
  image2,
  image7,
  image9,
  image6,
  image3,
  image1,
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24">
      {/* ---------- top container ---------- */}
      <div className="container mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] leading-[100%]">
            Featured <span className="font-normal">Project</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/community#becomePart")}
              className="bg-[#161616] rounded-[50px] py-2 px-4 md:py-4 md:px-9 text-white font-secondary font-semibold text-xs md:text-base cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
            >
              Become a Partner
            </button>
            <button className="border border-[#D9D9D9] rounded-[50px] font-secondary font-semibold leading-[146%] flex items-center justify-center text-xs md:text-base gap-4 py-2 px-4 md:py-4 md:px-9 cursor-pointer transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
              Enroll Your Institution{" "}
              <img src={ArrowRight} alt="Arrow right" className="select-none" />
            </button>
          </div>
        </div>

        {/* ---------- bottom container (full-width scrollable with peek) ---------- */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw]">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 sm:gap-10 md:gap-16 pl-4 sm:pl-6 md:pl-12 snap-x snap-mandatory">
            {/* Project 1 */}
            <div className="w-[95vw] sm:w-[85vw] md:w-[90vw] bg-black text-white py-6 sm:py-8 md:py-10 flex flex-col gap-6 sm:gap-8 md:gap-10 flex-shrink-0 snap-start rounded-2xl">
              <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6">
                {imageCollection.map((item, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={item}
                      alt="Collection of different images for NSK.AI last bootcamp"
                      className="w-52 sm:w-64 md:w-72 h-64 sm:h-80 md:h-96 object-cover rounded-[4px]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 md:flex-col lg:flex-row items-center justify-between px-4 sm:px-6">
                <div className="w-full flex flex-col">
                  <span className="font-primary font-semibold text-xl sm:text-2xl md:text-5xl text-white/20">
                    #01
                  </span>
                  <span className="font-primary font-bold text-sm md:text-4xl">
                    RAG AI Agents Bootcamp (2025)
                  </span>
                </div>

                <div className="w-full mt-2 md:mt-0">
                  <p className="text-left text-white/80 md:text-left lg:text-right font-secondary font-normal leading-relaxed text-xs sm:text-sm md:text-xl">
                    Our largest program to date. 1,370 participants across 50
                    countries, 20+ speakers, and 6 weeks of practical training
                    in Retrieval-Augmented Generation (RAG), agent workflows,
                    and production deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 THE Udara Project 2026 */}
            <div
              className="w-[90vw] sm:w-[85vw] md:w-[90vw] text-white py-6 sm:py-8 md:py-10 flex flex-col justify-between flex-shrink-0 snap-start rounded-2xl mr-[-8vw] sm:mr-[-10vw]"
              style={{
                backgroundImage: `url(${bgFeatured})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 px-4 sm:px-6">
                <div className="max-w-[320px] flex flex-col gap-4">
                  <div>
                    <img src={CheckIcon} alt="Check Icon" />
                  </div>
                  <h3 className="font-primary font-bold text-sm md:text-2xl md:leading-[28px]">
                    For Partners
                  </h3>
                  <span className="font-secondary font-normal text-xs md:text-base md:leading-[18px]">
                    brand reach, talent pipeline, measurable impact.{" "}
                  </span>
                </div>
                <div className="max-w-[320px] flex flex-col gap-4">
                  <div>
                    <img src={CheckIcon} alt="Check Icon" />
                  </div>
                  <h3 className="font-primary font-bold text-sm md:text-2xl md:leading-[28px]">
                    For Universities
                  </h3>
                  <span className="font-secondary font-normal text-xs md:text-base md:leading-[18px]">
                    simple onboarding, ready‑to‑run resources, certificates.
                  </span>
                </div>
                <div className="max-w-[320px] flex flex-col gap-4">
                  <div>
                    <img src={CheckIcon} alt="Check Icon" />
                  </div>
                  <h3 className="font-primary font-bold text-sm md:text-2xl md:leading-[28px]">
                    Target Countries
                  </h3>
                  <span className="font-secondary font-normal text-xs md:text-base md:leading-[18px]">
                    Nigeria, Kenya, Uganda, South Africa, Rwanda, Tunisia,
                    Morocco, Egypt, The Gambia, Ghana.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 md:flex-col lg:flex-row items-center justify-between px-4 sm:px-6">
                <div className="w-full flex flex-col">
                  <span className="font-primary font-semibold text-xl sm:text-2xl md:text-5xl text-white/20">
                    #02
                  </span>
                  <span className="font-primary font-bold text-sm md:text-4xl">
                    Udara Project (2026)
                  </span>
                </div>

                <div className="w-full mt-2 md:mt-0">
                  <p className="text-left md:text-left lg:text-right font-secondary font-normal leading-relaxed text-xs sm:text-sm md:text-xl text-balance">
                    One week. 300,000 students. 300 institutions. 10 countries.
                    An ambitious continent‑wide virtual AI class to deliver
                    foundational AI literacy at massive scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
