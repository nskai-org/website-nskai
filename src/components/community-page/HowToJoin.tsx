import Icon1 from "../../assets/community-page/how-to-join/join-by-email-icon.svg";
import Icon2 from "../../assets/community-page/how-to-join/join-by-whatsapp-icon.svg";
import Icon3 from "../../assets/community-page/how-to-join/calendar-icons.svg";

const howToJoin = [
  {
    id: "01",
    description: "Fill the onboarding form (name + email)",
    icon: Icon1,
  },
  {
    id: "02",
    description: "Join our Whatsapp/Discord community",
    icon: Icon2,
  },
  {
    id: "03",
    description: "Receive weekly schedule and links",
    icon: Icon3,
  },
];

export default function HowToJoin() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center gap-24">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] leading-[100%]">
            How to <span className="font-normal">join</span>
          </h2>

          {/* ------------ cards ------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 ">
            {howToJoin.map((item, index) => (
              <div key={index} className="flex flex-col justify-center gap-20">
                <span className="font-secondary font-normal text-xl md:text-[30px] leading-[45px]">
                  Step <span className="text-[#ff0000]">#{item.id}</span>
                </span>
                <div className="flex flex-col items-center justify-center gap-10">
                  <img
                    src={item.icon}
                    alt={item.description}
                    className="select-none w-20 md:w-40"
                  />
                  <span className="font-primary font-medium text-xl md:text-[30px] md:leading-[50px] text-[#161616] block max-w-[200px] md:max-w-[400px] text-center md:text-left">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
