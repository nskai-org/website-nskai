import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // simulate API delay
    setTimeout(() => {
      console.log("Email submitted:", email);
      setStatus("success");
      setMessage("Successfully signed up! Thank you for joining the movement.");
      setEmail("");
    }, 1200);
  };

  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto bg-[#F3E1D7] pr-4">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Students working together on laptops"
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Form */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <h1 className="font-primary font-semibold leading-[65px] text-4xl lg:text-5xl text-[#101213] mb-4">
                Want to enjoy more <br />{" "}
                <span className="font-normal">news like this?</span>
              </h1>
              <p className="font-secondary text-[17px] lg:text-xl leading-[30px] text-gray-700 mb-8">
                Sign up for our newsletter and receive more updates like this.{" "}
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-3 w-full px-6 py-4 rounded-[40px] bg-[#FAFAFA66] border-2 border-transparent focus:border-orange-300 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-lg"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 w-full bg-white hover:border-gray-300 text-[#101213] font-secondary font-bold tracking-[1px] leading-[32px] py-4 px-8 rounded-[40px] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>

              {message && (
                <div
                  className={`p-4 mt-6 rounded-[40px] ${
                    status === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
