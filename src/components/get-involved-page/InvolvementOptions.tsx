import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Option = {
  title: string;
  subtitle: string;
  details: { label: string; text: string }[];
  buttonText: string;
  buttonLink: string;
};

const involvementOptions: Option[] = [
  {
    title: "Want To",
    subtitle: "Volunteer",
    details: [
      {
        label: "What you'll do",
        text: "Logistics, communications, research ops, facilitation.",
      },
      { label: "Time", text: "2–4 hrs/week on average." },
    ],
    buttonText: "Volunteer Now",
    buttonLink: "/get-involved",
  },
  {
    title: "Become a",
    subtitle: "Speaker",
    details: [
      { label: "Who we seek", text: "Practitioners from industry/academia." },
      {
        label: "Topics",
        text: "AI education, RAG, MLE/MLOps, ethics, data work.",
      },
    ],
    buttonText: "Submit Now",
    buttonLink: "/community#becomePart",
  },
  {
    title: "Become a",
    subtitle: "Mentor",
    details: [
      {
        label: "What you'll do",
        text: "Weekly office hours, code reviews, project feedback.",
      },
    ],
    buttonText: "Apply Now",
    buttonLink: "/community#becomePart",
  },
  {
    title: "Partner",
    subtitle: "With Us",
    details: [
      { label: "For", text: "Companies, NGOs, foundations, universities." },
      {
        label: "Options",
        text: "Sponsor a cohort, provide credits, equipment, or expertise.",
      },
    ],
    buttonText: "Join Us Now",
    buttonLink: "/partner",
  },
];

export default function InvolvementOptions() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 space-y-16">
        {involvementOptions.map((option, index) => (
          <div
            key={index}
            className="border-t border-gray-300 pt-10 flex flex-col md:flex-row md:items-start md:justify-center"
          >
            {/* Left side — title & subtitle */}
            <div className="flex-3">
              <h2 className="text-5xl md:text-[100px] font-secondary font-bold leading-[100%]">
                {option.title}{" "}
                <span className="block font-normal text-gray-700">
                  {option.subtitle}
                </span>
              </h2>
            </div>

            {/* Right side — details + button */}
            <div className="flex-1 mt-6 md:mt-0 flex flex-col justify-between">
              <ul className="space-y-6 text-gray-600">
                {option.details.map((item, i) => (
                  <li key={i} className="list-disc ml-6">
                    <span className="font-semibold">{item.label}:</span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex">
                <Link to={option.buttonLink}>
                  <button className="rounded-full border border-gray-400 bg-transparent hover:bg-gray-100 text-gray-800 flex items-center px-4 py-3 gap-2">
                    {option.buttonText} <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
