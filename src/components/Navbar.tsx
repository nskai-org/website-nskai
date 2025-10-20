// import NskLogo from "/nsk-ai-logo.svg";
// import Hamburger from "../assets/tabler_menu.svg";
// import { Link } from "react-router-dom";

// const navItemsList = [
//   {
//     title: "About",
//     link: "/about",
//   },
//   {
//     title: "Contact",
//     link: "#contact",
//   },
// ];

// export default function Navbar() {
//   return (
//     <nav className="fixed top-[32px] left-0 w-full z-50 py-18 md:py-10 bg-transparent">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* NSK.AI logo */}
//         <Link to={"/"}>
//           <img
//             src={NskLogo}
//             alt="NSK.AI logo"
//             loading="lazy"
//             className="w-16 md:w-34 select-none cursor-pointer"
//           />
//         </Link>

//         {/* navigation items and hamburger */}
//         <div className="flex items-center justify-center gap-6 md:gap-12">
//           {/* nav items */}
//           <ul className="flex gap-6">
//             {navItemsList.map((item) => (
//               <li key={item.link}>
//                 <Link
//                   to={item.link}
//                   className="font-secondary text-white font-semibold text-sm md:text-lg"
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           {/* hamburger */}
//           <button className="bg-white py-[10px] px-5 flex items-center justify-center rounded-[50px] cursor-pointer">
//             <img
//               src={Hamburger}
//               alt="Hamburger menu for more navigation items"
//               className="select-none pointer-events-none"
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NskLogo from "/nsk-ai-logo.svg";
import Hamburger from "../assets/tabler_menu.svg";

const navItemsList = [
  { title: "About", link: "/about" },
  { title: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[32px] left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* NSK.AI logo */}
        <Link to={"/"}>
          <img
            src={NskLogo}
            alt="NSK.AI logo"
            loading="lazy"
            className="w-14 md:w-20 select-none cursor-pointer"
          />
        </Link>

        {/* Navigation items & hamburger */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Nav items (hidden on small screens) */}
          <ul className="hidden md:flex gap-6">
            {navItemsList.map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className="font-secondary text-white font-semibold text-sm md:text-lg hover:text-gray-300 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger menu (always visible) */}
          <button className="bg-white py-[10px] px-5 flex items-center justify-center rounded-[50px] cursor-pointer">
            <img
              src={Hamburger}
              alt="Hamburger menu for more navigation items"
              className="select-none pointer-events-none"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
