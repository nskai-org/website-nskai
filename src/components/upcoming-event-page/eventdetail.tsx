import Image1 from "../../assets/upcoming-event-page/nsk.ai workshop.jpg";
import Image2 from "../../assets/upcoming-event-page/day1.jpg";
import Image3 from "../../assets/upcoming-event-page/nskaiday2.jpg";

export default function EventDetail() {
  const columns = 
    [Image1, Image2, Image3];


  return (
    <section className="bg-[#101213] text-white py-20 px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-primary font-semibold text-center mb-16">
        Event Detail
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {columns.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Event image ${index + 1}`}
      className="rounded-xl object-cover"
    />
  ))}
</div>

    </section>
  );
}
