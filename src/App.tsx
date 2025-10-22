import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ScrollToTopButton from "./utils/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import Banner from "./components/Banner";
import NotFound from "./pages/NotFound";
import RouteScrollToTop from "./utils/RouteScrollToTop";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <RouteScrollToTop />
      <Banner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* ------------ 404 PAGE -------------- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
