import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      // Delay to let animation finish smoothly
      setTimeout(() => setLoading(false), 1000);
    };

    // If the page is already loaded (like on fast refresh)
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] overflow-hidden">
      {/* Animated expanding square */}
      <div className="square w-12 h-12 bg-black animate-expand"></div>
    </div>
  );
}
