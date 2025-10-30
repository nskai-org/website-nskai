import Terfaren from "../../assets/about-page/core-members/Terfaren-Eunice-Community-manager.jpg";
import LIO from "../../assets/about-page/core-members/lorenzo.jpg";
import John from "../../assets/about-page/core-members/john-achimagu.png";
import Whitney from "../../assets/about-page/core-members/whitney.png";
import Emmanuel from "../../assets/about-page/core-members/EmmanuelObasi-graphics-designer.jpg";
import Ogbuefi from "../../assets/about-page/core-members/Ogbuefi-Ikemsinachi-graphic-designer.jpg";
import Precious from "../../assets/about-page/core-members/Ugwoeke-Precious-Graphics-designer.jpg";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

const directors = [
  {
    name: "Terfaren Eunice",
    jobTitle: "Community Manager & Marketing Lead",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Terfaren,
    linkedin: "https://www.linkedin.com/in/terfaren-eunice-5b4b59210/",
  },
  {
    name: "Lorenzo",
    jobTitle: "Lead Full Stack Developer",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: LIO,
    linkedin: "https://www.linkedin.com/in/lorenzo-ioannou-9273a41b2/",
  },
  {
    name: "John Achimagu",
    jobTitle: "Lead Product Designer",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: John,
    linkedin: "https://www.linkedin.com/in/john-achimagu-927b2520b/",
  },
  {
    name: "Nkemdilim Whitney",
    jobTitle: "Graphics Designer",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Whitney,
    linkedin: "https://www.linkedin.com/in/nkemdilim-whitney-2b4b59210/",
  },
  {
    name: "Emmanuel Obasi",
    jobTitle: "Graphics Designer",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Emmanuel,
    linkedin: "https://www.linkedin.com/in/emmanuel-obasi-927b2520b/",
  },
  {
    name: "Ogbuefi Ikemsinachi",
    jobTitle: "Community Manager & Marketing Lead",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Ogbuefi,
    linkedin: "https://www.linkedin.com/in/ikemsinachi-ogbuefi-927b2520b/",
  },
  {
    name: "Ugwoeke Precious",
    jobTitle: "Community Manager & Marketing Lead",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Precious,
    linkedin: "https://www.linkedin.com/in/ugwoeke-precious-927b2520b/",
  },
];

export default function CoreMembers() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="team" className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="h-[300px] sticky top-[300px]">
            <div className="flex-2">
              <h2 className="font-primary font-semibold text-3xl md:text-[55px] leading-[100%] text-[#121213]">
                Our Core <br />
                <span className="font-normal">Team Members</span>
              </h2>
            </div>
          </div>

          {/* --------- GRID CARD ---------- */}
          <div className="flex-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
              {directors.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  {/* ---------- Image Box ---------- */}
                  <div className="relative bg-[#f8f8f8] w-80 h-100 flex items-center justify-center rounded-xl overflow-hidden mb-4 group">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="object-contain w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* LinkedIn Icon */}
                    <a
                      href={card.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-[-10px]"
                    >
                      <FaLinkedin className="text-white bg-[#101213] rounded-full p-2 w-10 h-10 shadow-md hover:scale-110 transition-transform duration-200" />
                    </a>
                  </div>

                  <div>
                    <h3 className="font-primary font-semibold text-xl md:text-[30px] leading-[100%] text-[#101213]">
                      {card.name}
                    </h3>
                    <span className="font-secondary font-light text-[#606060] text-xs md:text-xl leading-[150%] block mt-2">
                      {card.jobTitle}
                    </span>
                  </div>
                  <p className="max-w-xs text-justify font-secondary font-normal text-[#161616] text-sm md:text-xl leading-relaxed md:leading-[35px] tracking-[2%] mt-6"></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
