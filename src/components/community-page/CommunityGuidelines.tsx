const communityGuidelines = [
  {
    id: 1,
    description: "Respect, inclusion, and anti-harassment",
  },
  {
    id: 2,
    description: "No spam or unsolicited DMs",
  },
  {
    id: 3,
    description: "Credit collaborators and cite sources",
  },
];

export default function CommunityGuidelines() {
  const colors = ["bg-purple-300", "bg-blue-300", "bg-rose-300"];

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="h-[150px] sticky top-[150px]">
            <h2 className="font-primary font-semibold text-2xl md:text-[55px] text-center text-[#101213] leading-[100%]">
              Community <span className="font-normal">Guidelines</span>
            </h2>
          </div>

          {/* --------------- guidelines ----------- */}
          <div className="flex flex-wrap justify-center gap-x-50 gap-y-10">
            {communityGuidelines.map((guide, index) => (
              <div
                key={guide.id}
                className={`font-secondary font-semibold md:font-normal md:text-[30px] leading-[36px] p-6 rounded-2xl shadow-sm text-center text-gray-800 h-[300px] w-[300px] flex items-center justify-center relative z-20 ${
                  colors[index % colors.length]
                }`}
              >
                {guide.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
