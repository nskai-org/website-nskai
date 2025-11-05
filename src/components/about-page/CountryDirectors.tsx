import { FaLinkedin } from "react-icons/fa";
import Sumeya from "../../assets/about-page/country-directors/Sumeya.png";
import Hadil from "../../assets/about-page/country-directors/Hadil.png";
import Ziem from "../../assets/about-page/country-directors/Ziem.png";
import Maina from "../../assets/about-page/country-directors/Maina.png";

const directors = [
  {
    name: "Sumeya",
    jobTitle: "Country Director - Ethopia",
    statement:
      "Sumeya Hussein is a passionate engineer, entrepreneur, and educator dedicated to advancing technology-driven solutions in Africa. She holds a BSc in Electrical and Computer Engineering and an MSc in Computer Engineering.",
    image: Sumeya,
    linkedin: "https://www.linkedin.com/in/sumeya-hussein-927b2520b/",
  },
  {
    name: "Hadil",
    jobTitle: "Country Director - Tunisia",
    statement:
      "I am an engineering student at Université Sesame with a strong passion for Artificial Intelligence, Machine Learning, and innovative technology solutions.",
    image: Hadil,
    linkedin: "https://www.linkedin.com/in/hadil-elarbi-927b2520b/",
  },
  {
    name: "Ziem P Wellu",
    jobTitle: "Country Director - Ghana",
    statement:
      "Ziem P. Wellu is a Ph.D. Candidate in Computer Science at the University of Ghana, specializing in AI, machine learning, and computer vision.",
    image: Ziem,
    linkedin: "https://www.linkedin.com/in/ziem-p-wellu-927b2520b/",
  },
  {
    name: "Maina Munyambu",
    jobTitle: "Country Director - Kenya",
    statement:
      "AI Engineering leader delivering scalable, secure solutions that raise the competitiveness of African businesses and enable multinational partners to succeed locally.",
    image: Maina,
    linkedin: "https://www.linkedin.com/in/maina-munyambu-927b2520b/",
  },
];

export default function CountryDirectors() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="h-[300px] sticky top-[300px]">
            <div className="flex-2">
              <h2 className="font-primary font-semibold text-3xl md:text-[55px] leading-[100%] text-[#121213]">
                Our <span className="font-normal">Country</span> <br />
                <span className="font-normal">Directors</span>
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
                    {card.linkedin && (
                      <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-[-10px]"
                      >
                        <FaLinkedin className="text-white bg-[#101213] rounded-full p-2 w-10 h-10 shadow-md hover:scale-110 transition-transform duration-200" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="font-primary font-semibold text-xl md:text-[30px] leading-[100%] text-[#101213]">
                      {card.name}
                    </h3>
                    <span className="font-secondary font-light text-[#606060] text-xs md:text-xl leading-[150%] block mt-2">
                      {card.jobTitle}
                    </span>
                  </div>

                  <p className="max-w-xs text-justify font-secondary font-normal text-[#161616] text-sm md:text-xl leading-relaxed md:leading-[35px] tracking-[2%] mt-6">
                    {/* {card.statement} */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
