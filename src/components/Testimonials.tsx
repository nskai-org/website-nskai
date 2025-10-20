import placeholder1 from "../assets/placeholder/placeholder1.png";
import placeholder2 from "../assets/placeholder/placeholder2.png";
import placeholder3 from "../assets/placeholder/placeholder3.png";
import placeholder4 from "../assets/placeholder/placeholder4.png";
import placeholder5 from "../assets/placeholder/placeholder5.png";
import placeholder6 from "../assets/placeholder/placeholder6.png";
import placeholder7 from "../assets/placeholder/placeholder7.png";
import placeholder8 from "../assets/placeholder/placeholder8.png";
import placeholder9 from "../assets/placeholder/placeholder9.png";
import placeholder10 from "../assets/placeholder/placeholder10.png";
import placeholder11 from "../assets/placeholder/placeholder11.png";
import placeholder12 from "../assets/placeholder/placeholder12.png";

const testimonialData = [
  {
    name: "Herod Jephson",
    jobTitle: "Stacknet, USA",
    testimonial:
      "NSK.ai gave me my first real AI project — and the confidence to present it at an international demo day.",
    image: placeholder1,
  },
  {
    name: "Jane Doe",
    jobTitle: "NonProfit Organizer",
    testimonial:
      "The mentorship program connected me to seniors who reviewed my code and guided my research.",
    image: placeholder2,
  },
  {
    name: "John Smith",
    jobTitle: "Campaign Creator, Poland",
    testimonial:
      "I had no prior coding experience. The study circles and patient mentors brought me from zero to a deployable model.",
    image: placeholder3,
  },
  {
    name: "Sarah Laura",
    jobTitle: "Donor, Nigeria",
    testimonial:
      "I met my co-founder at an NSK.ai hackathon. We're now building a startup that automates school administrative tasks.",
    image: placeholder4,
  },
  {
    name: "Mark Temi",
    jobTitle: "Campaign Organizer, Nigeria",
    testimonial:
      "Joining a project squad helped me build a portfolio that landed me a frontend job",
    image: placeholder5,
  },
  {
    name: "David Yemi",
    jobTitle: "NonProfit Organizer",
    testimonial:
      "I learned how to read research papers and actually reproduce experiments; that changed how I approach problems",
    image: placeholder6,
  },
  {
    name: "Jane Smith",
    jobTitle: "Campaign Creator, UK",
    testimonial:
      "The fellowship gave me the time and resources to finish a small but meaningful project for my city",
    image: placeholder7,
  },
  {
    name: "Michael Floss",
    jobTitle: "Product Designer, Kenya",
    testimonial:
      "The community taught me to document and share research reproducibly — that skill landed me a research assistant role",
    image: placeholder8,
  },
  {
    name: "Abraham Jerome",
    jobTitle: "FullStack Developer, Nigeria",
    testimonial:
      "NSK.ai's workshops are practical — no fluff. I applied what I learned to a local health project.",
    image: placeholder9,
  },
  {
    name: "Annabel Meene",
    jobTitle: "Backend Engineer, Apple",
    testimonial:
      "The community is warm and persistent; people help each other across time zones.",
    image: placeholder10,
  },
  {
    name: "Lorenzo",
    jobTitle: "Frontend Engineer, Netflix",
    testimonial:
      "NSK.ai helped me understand ethics in AI — now I design with privacy and fairness in mind.",
    image: placeholder11,
  },
  {
    name: "Enzo Rose",
    jobTitle: "Frontend Engineer, Uber",
    testimonial:
      "Volunteering as a mentor has been the most rewarding teaching experience I’ve had — we are growing leaders.",
    image: placeholder12,
  },
];

export default function Testimonials() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        {/* testimonials */}
        <div className="flex flex-col gap-16">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] text-center md:leading-[100%]">
            What Folks Are <span className="font-normal">Saying</span>
          </h2>
          {/* grid of testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] px-4 py-4 rounded-2xl flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="select-none"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-primary font-semibold text-base leading-[100%] tracking-[1px]">
                      {testimonial.name}
                    </span>
                    <span className="font-secondary font-normal text-[#8E9BAE] text-xs tracking-[1px] leading-[100%}">
                      {testimonial.jobTitle}
                    </span>
                  </div>
                </div>
                {/* testimonial */}
                <figure>
                  <blockquote>
                    <p className="font-tertiary font-light text-xs md:text-sm md:leading-[25px] tracking-[1px]">
                      "{testimonial.testimonial}"
                    </p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
