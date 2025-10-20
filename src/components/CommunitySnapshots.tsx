import CommunitySnapshotImage from "../assets/community-snapshot.png";

export default function CommunitySnapshots() {
  return (
    <section className="py-24 px-6 md:px-8">
      <div
        className="container mx-auto px-4 md:px-10 min-h-[90vh] text-white flex flex-col justify-between py-8 rounded-2xl"
        style={{
          backgroundImage: `url(${CommunitySnapshotImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading at the top */}
        <div className="mb-16 md:mb-30">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px]">
            Community <br /> <span className="font-medium">Snapshots</span>
          </h2>
        </div>

        {/* Cards pushed to the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black px-4 md:px-6">
          <div className="bg-white bg-opacity-50 p-6 rounded-[20px]">
            <h3 className="font-primary font-semibold text-base md:text-2xl leading-[150%]">
              Paper Talks (Thursdays)
            </h3>
            <span className="font-secondary font-normal text-[#606060] text-sm md:text-xl md:leading-[40px] tracking-[2%]">
              We read, explain, and debate current AI papers.
            </span>
            <span className="block mt-8 font-primary text-[#606060] text-3xl">
              #01
            </span>
          </div>
          <div className="bg-white bg-opacity-50 p-6 rounded-[20px]">
            <h3 className="font-primary font-semibold text-base md:text-2xl leading-[150%]">
              Project Demos
            </h3>
            <span className="font-secondary font-normal text-[#606060] text-sm md:text-xl md:leading-[40px] tracking-[2%]">
              Members showcase builds; mentors give feedback.
            </span>
            <span className="block mt-8 font-primary text-[#606060] text-3xl">
              #02
            </span>
          </div>
          <div className="bg-white bg-opacity-50 p-6 rounded-[20px] md:col-span-2 lg:col-span-1">
            <h3 className="font-primary font-semibold text-base md:text-2xl leading-[150%]">
              OpenMind Fridays/Game Night
            </h3>
            <span className="font-secondary font-normal text-[#606060] text-sm md:text-xl md:leading-[40px] tracking-[2%]">
              Balance, wellbeing, and culture.
            </span>
            <span className="block mt-8 font-primary text-[#606060] text-3xl">
              #03
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
