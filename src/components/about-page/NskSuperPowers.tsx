interface SuperPower {
  id: string;
  title: string;
  content: string;
}

const superPowers: SuperPower[] = [
  {
    id: "01",
    title: "Learning Programs",
    content:
      "We design free and accessible learning programs, bootcamps, and workshops that introduce learners to AI fundamentals, machine learning, data science, and applied research — all contextualized for African realities.",
  },
  {
    id: "02",
    title: "Community Events",
    content:
      "We encourage members to build real projects — from data models to AI-driven social impact tools — providing hands-on experience and collaborative teamwork guided by mentors and industry professionals.",
  },
  {
    id: "03",
    title: "Project Incubation",
    content:
      "Our mentorship network connects learners with AI professionals, researchers, and community leaders who offer guidance, resources, and career pathways into the global AI ecosystem.",
  },
  {
    id: "04",
    title: "Partnerships",
    content:
      "NSK.ai is active across multiple African countries, engaging universities, developer groups, and local tech hubs to nurture a vibrant AI learning culture across the continent.",
  },
];

export default function NskSuperPowers() {
  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div>
          <h2 className="text-center font-medium text-3xl md:text-[60px] lg:text-[100px] text-[#101213] mb-16">
            Our Superpowers are.....
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {superPowers.map((power, index) => (
            <div
              key={power.id}
              className={`flex ${
                index % 2 === 0
                  ? "justify-start md:justify-start"
                  : "justify-end md:justify-end"
              }`}
            >
              <div className="p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-all w-full md:w-[45%]">
                <h3 className="font-primary font-normal text-base md:text-[30px] leading-[150%] mb-8 text-[#606060]">
                  #{power.id}
                </h3>
                <h4 className="font-primary font-semibold leading-[100%] text-xl md:text-[45px] mb-8 text-[#101213]">
                  {power.title}
                </h4>
                <p className="font-secondary font-normal text-sm md:text-lxl leading-relaxed md:leading-[35px] md:tracking-[2%]">
                  {power.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
