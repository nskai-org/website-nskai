import bgImage from "../../assets/community-page/rag-bootcamp.png";
import button from "../../assets/community-page/Button.svg";
import completed from "../../assets/community-page/completed.svg";

const statistics = [
  {
    id: 1,
    title: "Participants",
    value: "1,370",
  },
  {
    id: 2,
    title: "Countries",
    value: "50",
  },
  {
    id: 3,
    title: "Executive Speakers",
    value: "15+",
  },
  {
    id: 4,
    title: "Duration",
    value: "6 weeks",
  },
];

const whatWeTaught = [
  {
    id: 1,
    title: " Foundations of RAG",
    description: "Retrieval quality, chunking strategies, evaluation",
  },
  {
    id: 2,
    title: "Agents",
    description: "Planning, tools, orchestration, guardrails",
  },
  {
    id: 3,
    title: "Shipping",
    description: "APIs, LangChain/LangGraph, deployment, observability",
  },
];

const ourFormat = [
  {
    id: 1,
    description: "Live sessions (keynotes + labs)",
  },
  {
    id: 2,
    description: "Mentor office hours",
  },
  {
    id: 3,
    description: "Weekly challenges & project demos",
  },
  {
    id: 4,
    description: "Certificates for completion",
  },
];

const outcomes = [
  {
    id: 1,
    description: "Portfolio‑ready demos",
  },
  {
    id: 2,
    description: "Open‑source repos",
  },
  {
    id: 3,
    description: "Alumni network and advanced study groups",
  },
];

export default function RagBootcamp() {
  return (
    <section id="bootcamp" className="py-24">
      <div className="flex flex-col gap-10">
        <h2 className="font-primary font-semibold text-xl md:text-3xl lg:text-[55px] leading-[100%} text-[#101213] flex items-center gap-4 px-4">
          <span>
            RAG AI Agents <span className="font-normal">Bootcamp</span>{" "}
          </span>
          <img
            src={button}
            alt="RAG AI Agents Bootcamp 2025"
            className="w-16 md:w-30 lg:w-40"
          />
        </h2>
        {/* -------------bg image----------- */}

        <div
          className="relative px-4 flex items-end pb-12"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "715px",
          }}
        >
          <img
            src={completed}
            alt="RAG AI Agents Bootcamp Completed"
            className="absolute -top-7 right-15 md:-top-12 md:right-20 lg:-top-20 lg:right-20 w-12 md:w-24 lg:w-40 object-cover"
          />

          <div>
            <h3 className="font-primary font-semibold text-2xl md:text-[45px] text-white/30 leading-[100%]">
              #01
            </h3>
            <span className="font-primary font-bold text-base md:text-[35px] text-white leading-[100%]">
              RAG AI Agents Bootcamp
            </span>
          </div>
        </div>

        {/* ----------- statistics ------------ */}
        <div className="container mx-auto px-4">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {statistics.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#f9f9f9] p-4 flex flex-col justify-center gap-16  transition-all duration-500 ease-in-out 
                hover:bg-[#101213] group hover:text-white 
                hover:shadow-[0_0_20px_#ff4d4d,0_0_40px_#ff4d4d]
                cursor-pointer"
              >
                <h3 className="font-secondary font-normal text-xl text-[#161616] group-hover:text-white leading-[30px] tracking-[2%]">
                  {stat.title}
                </h3>
                <span className="font-primary font-semibold text-6xl text-[#101213] group-hover:text-white leading-[100%] text-right">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* -------------- highlights ------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-4 items-start mt-12">
          {/* ----------- what we taught ---------- */}
          <div className="flex flex-col justify-center">
            <h3 className="font-primary font-semibold text-2xl md:text-[45px] leading-[100%}">
              What we <span className="font-normal">taught</span>
            </h3>
            {whatWeTaught.map((item) => (
              <ul key={item.id} className="my-4">
                <li className="font-secondary font-normal text-lg text-[#161616] leading-[30px]">
                  <strong className="font-semibold">• {item.title}:</strong>{" "}
                  {item.description}
                </li>
              </ul>
            ))}
          </div>

          {/* --------------- our format -------------- */}
          <div className="flex flex-col justify-center">
            <h3 className="font-primary font-semibold text-2xl md:text-[45px] leading-[100%}">
              Our <span className="font-normal">Format</span>
            </h3>
            {ourFormat.map((item) => (
              <ul key={item.id} className="my-4">
                <li className="font-secondary font-normal text-lg text-[#161616] leading-[30px]">
                  • {item.description}
                </li>
              </ul>
            ))}
          </div>

          {/* --------------- outcomes -------------- */}
          <div className="flex flex-col justify-center">
            <h3 className="font-primary font-semibold text-2xl md:text-[45px] leading-[100%}">
              The <span className="font-normal">Outcomes</span>
            </h3>
            {outcomes.map((item) => (
              <ul key={item.id} className="my-4">
                <li className="font-secondary font-normal text-lg text-[#161616] leading-[30px]">
                  • {item.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
