const testimonialData = [
  { name: "Chidera Okafor", jobTitle: "AI Engineer, Nigeria", testimonial: "NSK.ai gave me my first real-world AI challenge. I built a model for local language sentiment analysis — now my startup uses it daily." },
  { name: "Wanjiru Kamau", jobTitle: "Community Organizer, Kenya", testimonial: "The mentorship program paired me with experts who helped me structure my data-driven social impact project." },
  { name: "Tadesse Mekonnen", jobTitle: "Machine Learning Fellow, Ethiopia", testimonial: "Before NSK.ai, I had never trained a model. The study circles walked me through every concept until I deployed my first NLP project." },
  { name: "Amaka Olamide", jobTitle: "Tech Entrepreneur, Nigeria", testimonial: "I met my co-founder during an NSK.ai bootcamp. Together we launched a platform automating agricultural record systems." },
  { name: "Brian Otieno", jobTitle: "Frontend Developer, Kenya", testimonial: "Working in a project squad gave me the confidence and code samples I needed to secure my first tech role." },
  { name: "Eleni Getachew", jobTitle: "Data Scientist, Ethiopia", testimonial: "I learned how to interpret research papers and replicate experiments — that skill completely changed my career direction." },
  { name: "Oluwaseun Adeyemi", jobTitle: "Software Engineer, Nigeria", testimonial: "The fellowship helped me turn an idea into a functional prototype that's now being used by local schools." },
  { name: "Muthoni Njoroge", jobTitle: "UX Researcher, Kenya", testimonial: "Through NSK.ai's documentation workshops, I learned how to communicate research clearly — now I train others to do the same." },
  { name: "Tesfaye Alemu", jobTitle: "Full Stack Developer, Ethiopia", testimonial: "The hands-on workshops were exactly what I needed to strengthen my backend and AI integration skills." },
  { name: "Zainab Bello", jobTitle: "Backend Engineer, Nigeria", testimonial: "The network here is supportive and vibrant — I've collaborated with peers across Africa on multiple open-source projects." },
  { name: "Kelvin Adebayo", jobTitle: "AI Research Intern, Nigeria", testimonial: "NSK.ai opened my eyes to responsible AI design. I now advocate for transparency and bias awareness in every system I build." },
  { name: "Achieng Mwangi", jobTitle: "Mentor & Product Manager, Kenya", testimonial: "Mentoring young innovators through NSK.ai has been fulfilling — the next generation of African AI talent is unstoppable." },
];

const AVATAR_COLORS = [
  "bg-blue-500", "bg-emerald-500", "bg-purple-500", "bg-orange-500",
  "bg-teal-500", "bg-rose-500", "bg-indigo-500", "bg-amber-500",
  "bg-cyan-500", "bg-lime-600", "bg-fuchsia-500", "bg-green-600",
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return parts[0][0].toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] text-center md:leading-[100%] text-[#101213]">
            What Folks Are <span className="font-normal">Saying</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] px-4 py-5 rounded-2xl flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
                  >
                    <span className="text-white text-sm font-semibold font-primary select-none">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-primary font-semibold text-sm leading-[100%] tracking-[1px] text-[#101213]">
                      {testimonial.name}
                    </span>
                    <span className="font-secondary font-normal text-[#8E9BAE] text-xs tracking-[1px] leading-snug">
                      {testimonial.jobTitle}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <figure>
                  <blockquote>
                    <p className="font-tertiary font-light text-xs md:text-sm md:leading-[25px] tracking-[1px] text-[#606060]">
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
