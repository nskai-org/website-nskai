import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NskLogo from "/nsk-ai-logo.svg";
import Hamburger from "../assets/tabler_menu.svg";
import RagImage from "/rag-ai-2025.png";
import UdaraImage from "/udara-2026.png";
import X from "../assets/navbar-socials/design-x.svg";
import Youtube from "../assets/navbar-socials/design-youtube.png";
import LinkedIn from "../assets/navbar-socials/design-linkedin.png";

const navItemsList = [
  { title: "About", link: "/about" },
  { title: "Community", link: "/community" },
  { title: "Projects", link: "/projects" },
  { title: "Blog", link: "/blog" },
  { title: "Get Involved", link: "#get-involved" },
  { title: "Donate", link: "#get-involved" },
  { title: "Contact", link: "/contact" },
];

const socialIcons = [
  {
    name: "X(formerly Twitter)",
    link: "https://x.com/NskAiCommunity",
    icon: X,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@Nskaicommunity",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/ai-nsk/",
    icon: LinkedIn,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Check if route is active
  const isActive = (path: string) => {
    if (path.startsWith("#")) return false;
    return location.pathname === path;
  };

  //  Handle clicks for both routes and hash links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
      navigate(link);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-[48px] md:top-[32px] left-0 w-full z-[80] transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg top-[68px] md:top-[34px] bg-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/">
            <img
              src={NskLogo}
              alt="NSK.AI logo"
              loading="lazy"
              className="w-14 md:w-20 select-none cursor-pointer"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* Show About + Contact on lg and above, only when NOT scrolled */}
            {!scrolled && (
              <ul className="hidden lg:flex items-center gap-8 transition-opacity duration-300">
                {["/about", "/projects"].map((link) => {
                  const item = navItemsList.find((n) => n.link === link);
                  if (!item) return null;

                  const isProjectsPage = location.pathname === "/projects";
                  const isAboutPage = location.pathname === "/about";
                  const isBlogPage = location.pathname === "/blog";

                  return (
                    <li key={item.link} className="relative">
                      {/* Active dot */}
                      {isActive(item.link) && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                      <Link
                        to={item.link}
                        onClick={(e) => handleNavClick(e, item.link)}
                        className={`font-secondary font-semibold text-lg transition-colors ${
                          isProjectsPage
                            ? "text-black"
                            : isAboutPage
                            ? "text-white"
                            : isBlogPage
                            ? "text-white/50"
                            : "text-white"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`bg-white py-[10px] px-5 flex items-center justify-center rounded-full cursor-pointer shadow-sm transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              <img
                src={Hamburger}
                alt="Menu"
                className="w-6 h-6 select-none pointer-events-none"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Smooth Slide-in Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm transition-opacity duration-700 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-[48px] md:top-[32px] right-0 h-full w-full bg-white z-[100] shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 md:right-30 lg:right-6 bg-white p-3 rounded-full hover:bg-white/10 transition duration-300 z-[110] cursor-pointer"
        >
          <img
            src={Hamburger}
            alt="Close menu"
            className="w-6 h-6 rotate-90 pointer-events-none"
          />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Left side */}
          <div className="w-full md:w-1/2 flex flex-col justify-between py-12 px-10">
            <img src={NskLogo} alt="NSK.AI logo" className="w-20 mb-10" />

            {/* Nav links */}
            <ul className="space-y-6">
              {navItemsList.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className={`block text-3xl md:text-4xl font-light transition-all ${
                      isActive(item.link)
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Featured Projects (Mobile only) */}
            <div className="block md:hidden mt-12 space-y-6">
              <div
                className="bg-cover bg-center text-white rounded-2xl overflow-hidden flex flex-col justify-end p-6 min-h-[280px]"
                style={{ backgroundImage: `url(${RagImage})` }}
              >
                <div className="bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-1">
                    RAG AI Agents Bootcamp (2025)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Our largest program to date. 1,370 participants across 50
                    countries, 20+ speakers, and 6 weeks of practical training
                    in RAG, agent workflows, and production deployment.
                  </p>
                </div>
              </div>

              <div
                className="bg-cover bg-center text-white rounded-2xl overflow-hidden flex flex-col justify-end p-6 min-h-[280px]"
                style={{ backgroundImage: `url(${UdaraImage})` }}
              >
                <div className="bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-1">
                    Udara Project (2026)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    One week. 300,000 students. 300 institutions. 10 countries.
                    An ambitious continent-wide virtual AI class to deliver
                    foundational AI literacy at massive scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-10">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f8f8f8] rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
                >
                  <img src={icon.icon} alt={icon.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side (Desktop only) */}
          <div className="hidden md:flex w-1/2 h-full flex-col">
            <div
              className="flex-1 bg-cover bg-center text-white flex flex-col justify-center p-8"
              style={{ backgroundImage: `url(${RagImage})` }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                RAG AI Agents Bootcamp (2025)
              </h3>
              <p className="text-sm md:text-base max-w-md leading-relaxed">
                Our largest program to date. 1,370 participants across 50
                countries, 20+ speakers, and 6 weeks of practical training in
                RAG, agent workflows, and production deployment.
              </p>
            </div>

            <div
              className="flex-1 bg-cover bg-center text-white flex flex-col justify-center p-8"
              style={{ backgroundImage: `url(${UdaraImage})` }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Udara Project (2026)
              </h3>
              <p className="text-sm md:text-base max-w-md leading-relaxed">
                One week. 300,000 students. 300 institutions. 10 countries. An
                ambitious continent-wide virtual AI class to deliver
                foundational AI literacy at massive scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
