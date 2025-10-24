import Sumeya from "../../assets/about-page/country-directors/Sumeya.png";
import Hadil from "../../assets/about-page/country-directors/Hadil.png";
import Elarbi from "../../assets/about-page/country-directors/Elarbi.png";
import Ziem from "../../assets/about-page/country-directors/Ziem.png";
import Maina from "../../assets/about-page/country-directors/Maina.png";

const directors = [
  {
    name: "Sumeya",
    jobTitle: "Founder & AI Educator",
    statement:
      "Sumeya Hussein is a passionate engineer, entrepreneur, and educator dedicated to advancing technology-driven solutions in Africa. She holds a BSc in Electrical and Computer Engineering and an MSc in Computer Engineering.",
    image: Sumeya,
  },

  {
    name: "Hadil Elarbi",
    jobTitle: "Lead Speaker",
    statement:
      "I am an engineering student at Université Sesame with a strong passion for Artificial Intelligence, Machine Learning, and innovative technology solutions. I enjoy combining technical expertise with creative problem-solving to design intelligent systems that ma...",
    image: Hadil,
  },

  {
    name: "Elarbi Hadil",
    jobTitle: "Community Lead",
    statement:
      "I am an engineering student at Université Sesame with a strong passion for Artificial Intelligence, Machine Learning, and innovative technology solutions. I enjoy combining technical expertise with creative problem-solving to design intelligent systems that ma...",
    image: Elarbi,
  },

  {
    name: "Ziem P Wellu",
    jobTitle: "Community Lead",
    statement:
      "Ziem P. Wellu is a Ph.D. Candidate in Computer Science at the University of Ghana, specializing in AI, machine learning, and computer vision. He is a passionate researcher and technology leader, currently serving as Chief Operating Officer at ParoCyber and as a lead researcher at Youth in AI Ghana.",
    image: Ziem,
  },

  {
    name: "Maina Munyambu",
    jobTitle: "Community Lead",
    statement:
      "AI Engineering leader delivering scalable, secure solutions that raise the competitiveness of African businesses and enable multinational partners to succeed locally — from computer-vision systems for precision agriculture to agentic, analytics-first platforms that automate core business tasks and elevate operational efficiency.",
    image: Maina,
  },
];

export default function CountryDirectors() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-2">
            <h2 className="font-primary font-semibold text-3xl md:text-[55px] leading-[100%} text-[#121213]">
              Our <span className="font-normal">Country</span> <br />{" "}
              <span className="font-normal">Directors</span>
            </h2>
          </div>

          {/* --------- GRID CARD ---------- */}
          <div className="flex-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
              {directors.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  <div className="bg-[#f8f8f8] w-80 h-100 flex items-center justify-center rounded-xl overflow-hidden mb-4">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="object-contain w-3/4 h-3/4"
                    />
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
