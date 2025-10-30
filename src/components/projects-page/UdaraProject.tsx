import bgImage from "../../assets/community-page/udara-project.png";
import completed from "../../assets/community-page/udara-2026.svg";
import button from "../../assets/community-page/button-udara.svg";

const statistics = [
  {
    id: 1,
    title: "Students",
    value: "300,000",
  },
  {
    id: 2,
    title: "Institutions",
    value: "300",
  },
  {
    id: 3,
    title: "Countries",
    value: "10",
  },
];

const goal = [
  {
    id: 1,
    description:
      "Deliver foundational AI literacy at massive scale through a coordinated virtual program  run simultaneously across universities.",
  },
];

const whoItsFor = [
  {
    id: 1,
    title: "Universities and Colleges",
    description: "on-campus viewing hubs",
  },
  {
    id: 2,
    title: "Students",
    description: "from beginners to intermediate",
  },
  {
    id: 3,
    title: "Corporate Partners",
    description: "CSR, brand reach, and talent pipeline",
  },
  {
    id: 4,
    title: "Mentors and Speakers",
    description: "amplify learning impact",
  },
];

const targetCountries = [
  "Nigeria",
  "Kenya",
  "South Africa",
  "Egypt",
  "Ghana",
  "Morocco",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "Tunisia",
  "The Gambia",
];

const kpis = [
  {
    id: 1,
    description: "300,000 participants onboarded",
  },
  {
    id: 2,
    description: "300 institutions verified",
  },
  {
    id: 3,
    description: "Engagement(attendance/time-on sessions)",
  },
  {
    id: 4,
    description: "Post program project submissions",
  },
];

const riskAndReadiness = [
  {
    id: 1,
    description: "Bandwidth variance → downloadable packs, low‑latency mirrors",
  },
  {
    id: 2,
    description: "Scheduling → time-zone-aware replays",
  },
  {
    id: 3,
    description: "Local capacity → training coordinators, checklists",
  },
];

const partnerBenefits = [
  {
    id: 1,
    description: "Brand visibility across campuses",
  },
  {
    id: 2,
    description: "Access to talents/community insights (opt-in)",
  },
  {
    id: 3,
    description: "Impact reporting (country/institution breakdown)",
  },
  {
    id: 4,
    description: "Co-branded materials and opening/closing remarks",
  },
];

export default function UdaraProject() {
  return (
    <section id="udara" className="py-24">
      <div className="flex flex-col gap-10">
        <h2 className="font-primary font-semibold text-xl md:text-3xl lg:text-[55px] leading-[100%} text-[#101213] flex items-center gap-4 px-4">
          <span>
            The Udara <span className="font-normal">Project</span>{" "}
          </span>
          <img
            src={button}
            alt="The Udara Project for 2026"
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
              #02
            </h3>
            <span className="font-primary font-bold text-base md:text-[35px] text-white leading-[100%]">
              Udara Project
            </span>
          </div>
        </div>

        {/* ----------- statistics ------------ */}
        <div className="container mx-auto px-4">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

        {/* ----------------- highlights ------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-20 container mx-auto px-4 items-start mt-16 md:mt-28">
          {/*  ------------- goals --------------- */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              The <span className="font-normal">Goal</span>
            </h3>
            {goal.map((item) => (
              <div key={item.id} className="max-w-[470px]">
                <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* ------------- who it's for ------------ */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              Who it's <span className="font-normal">For</span>
            </h3>
            {whoItsFor.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center justify-start gap-2"
              >
                <span className="font-secondary font-semibold text-[#101213] text-base md:text-xl leading-[35px]">
                  • {item.title}:{" "}
                </span>
                <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[2%]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* ---------- target countries ------------ */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              Target <span className="font-normal">Countries</span>
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {targetCountries.map((country, index) => (
                <li
                  key={index}
                  className="text-lg md:text-xl text-[#606060] font-secondary leading-[35px] tracking-[2%]"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>

          {/* -------------our KPIs ------------ */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              Our <span className="font-normal">KPIs</span>
            </h3>
            {kpis.map((item) => (
              <div key={item.id} className="max-w-[470px]">
                <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[2%]">
                  • {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* ------------ risk and readiness ------- */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              Risk and <span className="font-normal">Readiness</span>
            </h3>
            {riskAndReadiness.map((item) => (
              <div key={item.id} className="max-w-[470px]">
                <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[2%]">
                  • {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* ----------- partner benefits ---------- */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-primary font-semibold text-[#101213] text-2xl md:text-[45px] leading-[100%]">
              Partner <span className="font-normal">Benefits</span>
            </h3>
            {partnerBenefits.map((item) => (
              <div key={item.id} className="max-w-[470px]">
                <span className="font-secondary font-normal text-[#606060] text-base md:text-xl leading-[35px] tracking-[2%]">
                  • {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
