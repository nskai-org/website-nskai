import EventImage from "../assets/upcoming-event-page/nsk.aiWorkshopimg1.jpg";

export default function UpcomingEventDetailsPage() {
  return (
    <section className="bg-[#101213] text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">

        {/* Image */}
        <img
          src={EventImage}
          alt="NSK.ai Workshop"
          className="rounded-2xl w-full object-cover mt-10"
        />

        {/* Content */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed font-secondary">

          <h1 className="text-3xl md:text-5xl font-primary font-semibold mt-6">
            Designed for Africa, by Africa 👑
          </h1>

          <div>
            <h2 className="text-xl font-semibold mb-2">🧠 Why attend</h2>
            <p>
              This is a practical exchange workshop designed to help you understand AI clearly,
              apply AI tools with confidence, and stay ahead in a fast evolving digital world.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🛡 What we will explore</h2>
            <p>
              Across two focused days, we will dive into agentic AI systems and the future
              of autonomy, data privacy, and AI governance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🎓 Certification</h2>
            <p>
              All participants will receive an official Certificate of Participation
              to strengthen their professional profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <p>📅 <strong>Date:</strong> January 29th – January 30th</p>
            <p>💻 <strong>Venue:</strong> Zoom (Virtual)</p>
            
          </div>

        </div>
      </div>
    </section>
  );
}
