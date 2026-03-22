import { useEffect, useState, type FormEvent } from "react";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORM_PUBLIC_KEY as string | undefined) ??
  "f7451474-16a0-40ec-82b5-72bb160103e5";

const CATEGORIES = ["General", "Partnership", "Media", "Volunteer"] as const;

const SuccessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

export default function GetInTouch() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<"" | "Success" | "Error">("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", ACCESS_KEY);

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
    } catch {
      setResult("Error");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full mt-2 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#101213] bg-white text-[#101213] font-secondary disabled:opacity-50 transition-colors duration-200";
  const labelClass = "font-secondary text-[#101213] text-sm font-medium";

  return (
    <section id="get-in-touch" className="pb-24 pt-10 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-primary font-semibold text-2xl md:text-[55px] text-[#101213]">
            Get In <span className="font-normal">Touch</span>
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="John"
                required
                disabled={isLoading}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                required
                disabled={isLoading}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email + Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className={labelClass}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@yourmail.com"
                required
                disabled={isLoading}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization's name"
                required
                disabled={isLoading}
                className={inputClass}
              />
            </div>
          </div>

          {/* Category — radio inputs (single selection) */}
          <div className="mt-6">
            <label className={labelClass}>Category</label>
            <div className="flex flex-wrap gap-4 mt-3 font-secondary">
              {CATEGORIES.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={option}
                    disabled={isLoading}
                    className="w-5 h-5 rounded-full border-gray-400 focus:ring-[#101213] disabled:opacity-50 accent-[#101213]"
                  />
                  <span className="text-[#101213]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className={labelClass}>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={6}
              required
              disabled={isLoading}
              placeholder="Hello there, we would like you to tell us more about yourself"
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#101213] text-white font-secondary text-base md:text-lg px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_#ff4d4d] ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>

            {result === "Success" && (
              <div className="flex items-center gap-2 animate-fadeIn">
                <SuccessIcon />
                <p className="text-green-600 font-secondary font-medium">
                  Message sent successfully!
                </p>
              </div>
            )}
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
