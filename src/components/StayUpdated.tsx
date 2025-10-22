import ArrowRight from "../assets/UIs/solar_arrow-right.svg";

export default function StayUpdated() {
  return (
    <section className="pb-24 bg-white text-center">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-primary font-semibold text-2xl md:text-5xl text-[#101213]">
            Stay <span className="font-normal">Updated</span>
          </h2>
          <p className="font-secondary text-[#606060] text-sm md:text-xl max-w-2xl mt-6 mx-auto leading-relaxed md:leading-[35px] tracking-[1px]">
            Join our community and stay informed about the latest Monthly AI
            learning prompts, new labs, and community showcases.
          </p>
        </div>

        {/* Email Input + Button */}
        <form
          className="w-full max-w-xl flex items-center bg-[#000000]/4 rounded-[50px] overflow-hidden p-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="What’s your email?"
            className="flex-1 bg-transparent outline-none px-4 md:px-6 py-4 text-sm md:text-base text-[#101213] font-secondary"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#101213] text-white rounded-[50px] px-4 md:px-8 py-3 md:py-4 font-secondary font-semibold text-xs md:text-base whitespace-nowrap"
          >
            Become a Partner
            <img
              src={ArrowRight}
              alt="Arrow right"
              className="w-4 h-4 md:w-5 md:h-5 select-none"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
