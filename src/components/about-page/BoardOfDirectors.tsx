import { FaLinkedin } from "react-icons/fa";
import Ifeanyi from "../../assets/about-page/board-of-directors/Ifeanyi=-Okala.jpg";
import Chukwuebuka from "../../assets/about-page/board-of-directors/Chukwuebuka-Chukwudi.jpg";
import Sai from "../../assets/about-page/board-of-directors/Sai-Prabhakar.jpg";

const directors = [
  {
    name: "Ifeanyi Okala",
    jobTitle: "Founder & AI Educator",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Ifeanyi,
    linkedin: "https://www.linkedin.com/in/ifeanyi-okala",
  },
  {
    name: "Sai Prabhakar",
    jobTitle: "Lead Speaker",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Sai,
    linkedin: "https://www.linkedin.com/in/sai-prabhakar",
  },
  {
    name: "Chukwuebuka Chukwudi",
    jobTitle: "Community Lead",
    statement:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
    image: Chukwuebuka,
    linkedin: "https://www.linkedin.com/in/chukwuebuka-chukwudi",
  },
];

export default function BoardOfDirectors() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Left Title */}
          <div className="h-[300px] sticky top-[300px]">
            <div className="flex-2">
              <h2 className="font-primary font-semibold text-3xl md:text-[55px] leading-[100%} text-[#121213]">
                Our Board <br /> of{" "}
                <span className="font-normal">Directors</span>
              </h2>
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
              {directors.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left group"
                >
                  {/* ---------- Image Box ---------- */}
                  <div className="relative bg-[#f8f8f8] w-80 h-100 flex items-center justify-center rounded-xl overflow-hidden mb-4">
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
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <FaLinkedin className="text-white bg-[#101213] rounded-full p-2 w-12 h-12 shadow-md hover:scale-110 transition-transform duration-200" />
                    </a>
                  </div>

                  {/* ---------- Text Content ---------- */}
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
