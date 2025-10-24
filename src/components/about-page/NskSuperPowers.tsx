import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
        <div className="h-[300px] sticky top-[300px]">
          <h2 className="text-center font-medium text-3xl md:text-[60px] lg:text-[100px] text-[#101213] mb-16">
            Our Superpowers are.....
          </h2>
        </div>

        <div className="flex flex-col gap-10 relative z-20">
          {superPowers.map((power, index) => (
            <AnimatedCard
              key={power.id}
              power={power}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({
  power,
  alignRight,
}: {
  power: SuperPower;
  alignRight: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex ${
        alignRight
          ? "justify-end md:justify-end"
          : "justify-start md:justify-start"
      }`}
    >
      <motion.div
        animate={
          isInView
            ? {
                backgroundColor: "#101213",
                boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)",
                color: "#ffffff",
              }
            : {
                backgroundColor: "#f9fafb",
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                color: "#101213",
              }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="p-6 md:p-8 border border-gray-200 rounded-2xl transition-all w-full md:w-[45%]"
      >
        <h3
          className={`font-primary font-normal text-base md:text-[30px] leading-[150%] mb-8 ${
            isInView ? "text-white" : "text-[#606060]"
          }`}
        >
          #{power.id}
        </h3>
        <h4
          className={`font-primary font-semibold leading-[100%] text-xl md:text-[45px] mb-8 ${
            isInView ? "text-white" : "text-[#101213]"
          }`}
        >
          {power.title}
        </h4>
        <p
          className={`font-secondary font-normal text-sm md:text-lxl leading-relaxed md:leading-[35px] md:tracking-[2%] ${
            isInView ? "text-gray-300" : "text-[#101213]"
          }`}
        >
          {power.content}
        </p>
      </motion.div>
    </motion.div>
  );
}
