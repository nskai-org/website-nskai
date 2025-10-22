import Background from "../assets/bg-donation-section.png";
import DonationModal from "./donation/DonationModal";
import Logo from "/logo-white.svg";

export default function Donation() {
  return (
    <section
      id="get-involved"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-24 pb-12"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* black noise overlay */}
      <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none"></div>

      <div className="relative container mx-auto px-4 md:px-6 text-white">
        {/* Top content */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="font-primary font-semibold text-3xl md:text-[55px] md:leading-[75px] mb-6">
              Ready to make <br /> a{" "}
              <span className="font-normal">difference?</span>
            </h2>
            <p className="font-secondary font-normal leading-relaxed md:leading-[35px] text-base md:text-xl max-w-md">
              Your support funds free learning opportunities, mentorship, and
              student projects.
            </p>
          </div>

          {/* Donation Modal */}
          <div>
            <DonationModal />
          </div>
        </div>

        {/* -------------Scroll effect (hover to scroll) ---------------- */}
        <div className="relative overflow-hidden mt-20 group cursor-pointer">
          <div className="flex items-end gap-6 whitespace-nowrap transition-transform duration-[20s] ease-linear group-hover:translate-x-[-50%]">
            {/* Duplicate text and logo for smooth scroll */}
            {[...Array(1)].map((_, i) => (
              <div key={i} className="flex items-end gap-6 mr-6">
                <span className="font-primary font-semibold text-[100px] leading-[100%]">
                  Make a difference
                </span>
                <img src={Logo} alt="NSK.AI logo" className="w-150" />
                <span className="font-primary font-semibold text-[100px] leading-[100%]">
                  Make a difference
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
