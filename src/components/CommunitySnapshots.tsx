import { motion } from "framer-motion";
import CommunitySnapshotImage from "../assets/community-snapshot.png";

const snapshots = [
  {
    id: "#01",
    title: "Paper Talks (Thursdays)",
    description: "We read, explain, and debate current AI papers.",
  },
  {
    id: "#02",
    title: "Project Demos",
    description: "Members showcase builds; mentors give feedback.",
  },
  {
    id: "#03",
    title: "OpenMind Fridays/Game Night",
    description: "Balance, wellbeing, and culture.",
  },
];

export default function CommunitySnapshots() {
  return (
    <section id="community" className="py-24 px-6 md:px-8">
      <div
        className="container mx-auto px-4 md:px-10 min-h-[90vh] text-white flex flex-col justify-between py-8 rounded-2xl"
        style={{
          backgroundImage: `url(${CommunitySnapshotImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading */}
        <div className="mb-16 md:mb-30">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px]">
            Community <br /> <span className="font-medium">Snapshots</span>
          </h2>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black px-4 md:px-6">
          {snapshots.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-[20px] border border-gray-600 shadow-lg"
              whileHover={{
                y: [0, -10, 0, 10, 0], // floating motion
                boxShadow: [
                  "0 0 0 rgba(255,0,0,0)",
                  "0 0 25px rgba(255,0,0,0.5)",
                  "0 0 15px rgba(255,0,0,0.4)",
                ],
                transition: {
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="font-primary font-semibold text-base md:text-2xl leading-[150%] text-[#101213]">
                {item.title}
              </h3>
              <span className="font-secondary font-normal text-[#101213] text-sm md:text-xl md:leading-[40px] tracking-[2%]">
                {item.description}
              </span>
              <span className="block mt-8 font-primary text-gray-400 text-3xl">
                {item.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
