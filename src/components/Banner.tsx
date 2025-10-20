import uisCalendar from "../assets/UIs/uis_calender.svg";
import icBaselineDiscord from "../assets/UIs/ic_baseline-discord.svg";
import solarArrowUpLinear from "../assets/UIs/solar_arrow-up-linear.svg";

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 w-full text-sm py-2 z-50 bg-[#101213] text-white flex flex-col items-start gap-2 md:flex-row md:justify-between md:items-center px-4">
      {/* left container */}
      <div className="flex items-center justify-center gap-4">
        <img
          src={uisCalendar}
          alt="Calendar icon"
          className="select-none pointer-events-none md:w-5 md:h-5"
        />
        <p className="font-secondary text-xs md:text-sm leading-6 font-semibold text-balance">
          Next Event: AI In Healthcare 16/05/2025 10am ET
        </p>
      </div>
      {/* right container */}
      <div className="flex items-center gap-4 cursor-pointer">
        <img
          src={icBaselineDiscord}
          alt="Discord icon"
          className="select-none pointer-events-none md:w-5 md:h-5"
        />

        <p className="flex items-center gap-4 font-secondary text-xs md:text-sm leading-6 font-semibold">
          Open in Discord{" "}
          <img
            src={solarArrowUpLinear}
            alt="Arrow up icon"
            className="select-none pointer-events-none md:w-5 md:h-5"
          />{" "}
        </p>
      </div>
    </div>
  );
}
