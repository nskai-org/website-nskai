import { useState, type FormEvent } from "react";
import ArrowRight from "../assets/UIs/solar_arrow-right.svg";

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

export default function StayUpdated() {
  const [result, setResult] = useState("");
  // sending data
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Start loading and clear previous messages
    setIsLoading(true);
    setResult("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.append("access_key", "f7451474-16a0-40ec-82b5-72bb160103e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        // 2. Clear the input field on success
        formElement.reset();
      } else {
        setResult("Error");
      }
    } catch (error) {
      console.log(error);
      setResult("Error");
    } finally {
      // 3. Stop loading whether it worked or failed
      setIsLoading(false);
    }
  };

  return (
    <section className="pb-24 bg-white text-center">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-primary font-semibold text-2xl md:text-5xl text-[#101213]">
            Stay <span className="font-normal">Updated</span>
          </h2>
          <p className="font-secondary text-[#606060] text-sm md:text-xl max-w-2xl mt-6 mx-auto leading-relaxed md:leading-[35px] tracking-[1px]">
            Join our community and stay informed about the latest Monthly AI
            learning prompts, new labs, and community showcases.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full max-w-xl flex items-center bg-[#000000]/4 rounded-[50px] overflow-hidden p-1"
        >
          <input
            type="email"
            name="email"
            placeholder="What’s your email?"
            className="flex-1 bg-transparent outline-none px-4 md:px-6 py-4 text-sm md:text-base text-[#101213] font-secondary disabled:opacity-50"
            required
            disabled={isLoading} // Disable input while loading
          />
          <button
            type="submit"
            disabled={isLoading} // Disable button while loading
            className={`flex items-center justify-center gap-2 bg-[#101213] text-white rounded-[50px] px-4 md:px-8 py-3 md:py-4 font-secondary font-semibold text-xs md:text-base whitespace-nowrap cursor-pointer transition-opacity ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {/* Change text based on loading state */}
            {isLoading ? "Joining..." : "Become a Partner"}

            {/* Only show the arrow if NOT loading */}
            {!isLoading && (
              <img
                src={ArrowRight}
                alt="Arrow right"
                className="w-4 h-4 md:w-5 md:h-5 select-none"
              />
            )}
          </button>
        </form>

        {/* 4. Result Message Area */}
        {result === "Success" && (
          <div className="mt-4 flex items-center gap-2 animate-fade-in">
            <SuccessIcon />
            <p className="text-sm md:text-base font-secondary text-[#101213]">
              Success! You've been added to the list.
            </p>
          </div>
        )}

        {result === "Error" && (
          <p className="mt-4 text-sm font-secondary text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
