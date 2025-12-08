import { useEffect, useState, type FormEvent } from "react";

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-green-500"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

export default function BecomePart() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setResult("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_PUBLIC_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        formElement.reset();
      } else {
        setResult("Error");
      }
    } catch (error) {
      console.log(error);
      setResult("Error");
    } finally {
      setIsLoading(false);
    }
  };

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
        <form
          onSubmit={onSubmit}
          className="max-w-4xl mx-auto bg-[#f8f8f8] rounded-3xl p-8 md:p-10 shadow-sm"
        >
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                required
                disabled={isLoading}
                placeholder="John"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary disabled:opacity-50"
              />
            </div>

            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                required
                disabled={isLoading}
                placeholder="Doe"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary disabled:opacity-50"
              />
            </div>
          </div>

          {/* Email + Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={isLoading}
                placeholder="example@yourmail.com"
                className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary disabled:opacity-50"
              />
            </div>

            {/* Role */}
            <div>
              <label className="font-secondary text-[#101213] text-sm font-medium">
                Role <span className="text-red-500">*</span>
              </label>

              <div className="flex flex-wrap gap-4 mt-3 font-secondary">
                {[
                  "Speaker(Keynote/Talks)",
                  "Mentor (1-on-1 guidance)",
                  "Workshop Host",
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={option}
                      required
                      disabled={isLoading}
                      className="w-5 h-5 rounded-full border-gray-400 focus:ring-[#101213] disabled:opacity-50"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-6">
            <label className="font-secondary text-[#101213] text-sm font-medium">
              What Is Your Availability Like?{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="flex flex-wrap gap-4 mt-3 font-secondary">
              {[
                "Weekly (Recurring)",
                "Monthly (Recurring)",
                "One-time Event/Workshop",
                "Flexible / Ad-hoc",
              ].map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="availability"
                    value={option}
                    required
                    disabled={isLoading}
                    className="w-5 h-5 rounded-full border-gray-400 focus:ring-[#101213] disabled:opacity-50"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <label className="font-secondary text-[#101213] text-sm font-medium">
              Bio <span className="text-red-500">*</span>
            </label>
            <textarea
              name="bio"
              required
              disabled={isLoading}
              rows={6}
              placeholder="Hello there, we would like you to tell us more about yourself"
              className="w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] font-secondary resize-none disabled:opacity-50"
            ></textarea>
          </div>

          {/* Submit Button & Messages */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#101213] text-white font-secondary text-base md:text-lg px-8 py-3 rounded-full hover:opacity-90 transition-all ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>

            {/* Success Message */}
            {result === "Success" && (
              <div className="flex items-center gap-2 animate-fade-in">
                <SuccessIcon />
                <p className="text-green-600 font-secondary font-medium">
                  Application sent successfully!
                </p>
              </div>
            )}

            {/* Error Message */}
            {result === "Error" && (
              <p className="text-red-500 font-secondary font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
