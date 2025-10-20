import { useState, useEffect } from "react";
import preloaderImg from "/nsk-ai-logo.svg";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      // delay for fade effect
      setTimeout(() => setIsLoading(false), 2000);
    };

    // If page already loaded (e.g. from cache)
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-5000">
      <img
        src={preloaderImg}
        alt="Loading..."
        className="w-24 sm:w-32 md:w-40 animate-bounce"
      />
    </div>
  );
}
