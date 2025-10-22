import valueCard1 from "../../assets/about-page/cards/value-card-1.png";
import valueCard2 from "../../assets/about-page/cards/value-card-2.png";
import valueCard3 from "../../assets/about-page/cards/value-card-3.png";
import valueCard4 from "../../assets/about-page/cards/value-card-4.png";

interface ImageCard {
  src: string;
  alt: string;
}

const cards: ImageCard[] = [
  { src: valueCard1, alt: "First value Card about NSK.AI" },
  { src: valueCard2, alt: "Second value card about NSK.AI" },
  { src: valueCard3, alt: "Third value card about NSK.AI" },
  { src: valueCard4, alt: "Fourth value card about NSK.AI" },
];

export default function MissionAndValues() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* <!--- Mission and Vision ----!> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission */}
          <div className="bg-[#F9F9F9] flex flex-col justify-center gap-6 px-4 py-6 rounded-[15px]">
            <h2 className="font-primary font-semibold text-[#101213] text-xl md:text-[45px]">
              Mission
            </h2>
            <p className="font-secondary font-normal text-sm md:text-xl tracking-[2%] leading-relaxed md:leading-[30px] text-[#161616]">
              To democratize access to AI knowledge and practice across Africa
              by running high‑impact programs, open learning communities, and
              collaborative projects.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-[#F9F9F9] flex flex-col justify-center gap-6 px-4 py-6 rounded-[15px]">
            <h2 className="font-primary font-semibold text-[#101213] text-xl md:text-[45px]">
              Vision
            </h2>
            <p className="font-secondary font-normal text-sm md:text-xl tracking-[2%] leading-relaxed md:leading-[30px] text-[#161616]">
              A future where African talent drives world‑class AI
              innovation—inclusive, ethical, and locally relevant.
            </p>
          </div>
        </div>

        {/* ------------------ Core Values --------------- */}
        <div className="flex flex-col gap-28 mt-32">
          <h2 className="font-primary font-semibold text-3xl md:text-[55px] leading-[100%]">
            Our Core <span className="font-normal">Value</span>
          </h2>

          {/* ------------ Value Cards --------------- */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 lg:gap-0 lg:flex lg:flex-row lg:items-center lg:justify-center select-none">
              {cards.map((card, index) => (
                <img
                  key={index}
                  src={card.src}
                  alt={card.alt}
                  className={`relative w-80 transition-all duration-300 ease-in-out transform ${
                    index === 1
                      ? "lg:-ml-8 lg:-mt-4"
                      : index === 2
                      ? "lg:-ml-12 lg:-mb-12"
                      : index === 3
                      ? "lg:-ml-16 lg:-mb-4"
                      : ""
                  } hover:scale-110 hover:z-40`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
