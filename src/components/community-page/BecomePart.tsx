import { useEffect } from "react";

export default function BecomePart() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="becomePart" className="pb-24 pt-10 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        {/* -------- Heading -------- */}
        <div className="text-center mb-10">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] text-[#101213]">
            Become a <span className="font-normal">Mentor/Speaker</span>
          </h2>
          <p className="font-secondary text-[#606060] text-base md:text-lg mt-4">
            Become a speaker/mentor and let’s take you to the next level.
          </p>
        </div>

        {/* -------- Form -------- */}
        <form className="max-w-4xl mx-auto bg-[#f8f8f8] rounded-3xl p-8 md:p-10 shadow-sm">
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary"
              />
            </div>

            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary"
              />
            </div>
          </div>

          {/* Email + Topic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary"
              />
            </div>

            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Topic Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your topic title"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary"
              />
            </div>
          </div>

          {/* Availability */}
          <div className="mt-6">
            <label className="font-secondary text-[#101213] text-sm font-medium">
              What Is Your Availability Like?
            </label>

            <div className="flex flex-wrap gap-4 mt-3 font-secondary">
              {["SI / Consultant", "Reseller", "Technology Partner"].map(
                (option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-400 focus:ring-[#101213]"
                    />
                    <span>{option}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <label className="font-secondary text-[#101213] text-sm font-medium">
              Bio <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Hello there, we would like you to tell us more about yourself"
              className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#101213] text-white font-secondary text-base md:text-lg px-8 py-3 rounded-full hover:opacity-90 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
