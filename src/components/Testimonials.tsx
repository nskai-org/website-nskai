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
    name: "Chidera Okafor",
    jobTitle: "AI Engineer, Nigeria",
    testimonial:
      "NSK.ai gave me my first real-world AI challenge. I built a model for local language sentiment analysis — now my startup uses it daily.",
    image: placeholder1,
  },
  {
    name: "Wanjiru Kamau",
    jobTitle: "Community Organizer, Kenya",
    testimonial:
      "The mentorship program paired me with experts who helped me structure my data-driven social impact project.",
    image: placeholder2,
  },
  {
    name: "Tadesse Mekonnen",
    jobTitle: "Machine Learning Fellow, Ethiopia",
    testimonial:
      "Before NSK.ai, I had never trained a model. The study circles walked me through every concept until I deployed my first NLP project.",
    image: placeholder3,
  },
  {
    name: "Amaka Olamide",
    jobTitle: "Tech Entrepreneur, Nigeria",
    testimonial:
      "I met my co-founder during an NSK.ai bootcamp. Together we launched a platform automating agricultural record systems.",
    image: placeholder4,
  },
  {
    name: "Brian Otieno",
    jobTitle: "Frontend Developer, Kenya",
    testimonial:
      "Working in a project squad gave me the confidence and code samples I needed to secure my first tech role.",
    image: placeholder5,
  },
  {
    name: "Eleni Getachew",
    jobTitle: "Data Scientist, Ethiopia",
    testimonial:
      "I learned how to interpret research papers and replicate experiments — that skill completely changed my career direction.",
    image: placeholder6,
  },
  {
    name: "Oluwaseun Adeyemi",
    jobTitle: "Software Engineer, Nigeria",
    testimonial:
      "The fellowship helped me turn an idea into a functional prototype that’s now being used by local schools.",
    image: placeholder7,
  },
  {
    name: "Muthoni Njoroge",
    jobTitle: "UX Researcher, Kenya",
    testimonial:
      "Through NSK.ai’s documentation workshops, I learned how to communicate research clearly — now I train others to do the same.",
    image: placeholder8,
  },
  {
    name: "Tesfaye Alemu",
    jobTitle: "Full Stack Developer, Ethiopia",
    testimonial:
      "The hands-on workshops were exactly what I needed to strengthen my backend and AI integration skills.",
    image: placeholder9,
  },
  {
    name: "Zainab Bello",
    jobTitle: "Backend Engineer, Nigeria",
    testimonial:
      "The network here is supportive and vibrant — I’ve collaborated with peers across Africa on multiple open-source projects.",
    image: placeholder10,
  },
  {
    name: "Kelvin Adebayo",
    jobTitle: "AI Research Intern, Nigeria",
    testimonial:
      "NSK.ai opened my eyes to responsible AI design. I now advocate for transparency and bias awareness in every system I build.",
    image: placeholder11,
  },
  {
    name: "Achieng Mwangi",
    jobTitle: "Mentor & Product Manager, Kenya",
    testimonial:
      "Mentoring young innovators through NSK.ai has been fulfilling — the next generation of African AI talent is unstoppable.",
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

          {/* ----------------- Testimonial video ------------------ */}
          {/* <div className="flex items-center justify-center">
            <video
              src={TestimonialVideo}
              autoPlay
              controls
              muted
              loop
              playsInline
              className="h-140"
              preload="metadata"
            />
          </div> */}

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

          {/* -------------------------------------- */}
        </div>
      </div>
    </section>
  );
}
