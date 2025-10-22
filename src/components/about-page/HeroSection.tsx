import HeroImg1 from "../../assets/about-page/hero-images/hero-img-1.png";
import HeroImg2 from "../../assets/about-page/hero-images/hero-img-2.png";
import HeroImg3 from "../../assets/about-page/hero-images/hero-img-3.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#101213] pb-6 min-h-[50vh] md:min-h-screen lg:min-h-[120vh] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-34 md:pt-50">
        {/* images */}
        <div className="absolute z-0 top-30 right-0 md:right-16 md:top-30 lg:right-24 lg:top-30">
          <img src={HeroImg1} alt="Hero Image 1" className="" />
        </div>

        <div className="absolute z-0 md:-left-8 md:top-140 lg:left-10 lg:top-90 hidden md:block">
          <img src={HeroImg2} alt="Hero Image 2" />
        </div>

        <div className="absolute z-0 md:-right-24 md:top-200 lg:right-110 lg:top-150 hidden md:block">
          <img src={HeroImg3} alt="Hero Image 3" />
        </div>

        {/* content */}
        <div className="relative z-5">
          <div className="flex flex-col items-start justify-center mb-12 md:mb-40 lg:mb-0">
            <button className="flex items-center justify-center rounded-sm px-4 py-4 bg-[#1C1D1F] border-2 border-dashed border-[#606060] text-[#D9D9D9] text-sm font-secondary leading-4">
              About NSK.AI
            </button>
            <h1 className="font-primary font-semibold text-3xl md:text-[100px] leading-[100%]">
              Empowering <br />
              Africa's Next
            </h1>
          </div>
          <div className="w-full flex items-end justify-end">
            <h1 className="font-primary font-semibold text-3xl md:text-[100px] leading-[100%]">
              Generation of <br />
              AI Innovators
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
