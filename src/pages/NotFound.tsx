import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";

export default function NotFound() {
  return (
    <>
      <Preloader />
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0C] text-white px-6 text-center">
        <h1 className="text-[120px] font-bold font-primary leading-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-secondary font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mb-8">
          The page you’re looking for might have been moved, deleted, or never
          existed. But hey — let’s get you back on track.
        </p>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
