import FooterLogo from "/footer-logo.png";
import X from "../assets/UIs/x.svg";
import Youtube from "../assets/UIs/youtube.svg";
import Linkedin from "../assets/UIs/linkedin.svg";
import Email from "../assets/UIs/Letter.svg";
import Location from "../assets/UIs/location.svg";

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
    icon: Linkedin,
  },
];

const footerAboutItems = [
  {
    title: "Community",
    link: "",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Donate",
    link: "#get-involved",
  },
  {
    title: "Blog",
    link: "#blog",
  },
  {
    title: "Get Involved",
    link: "#get-involved",
  },
  {
    title: "Contact",
    link: "",
  },
];

const policiesItems = [
  {
    title: "Privacy",
    link: "#",
  },
  {
    title: "Terms",
    link: "#",
  },
  {
    title: "Safeguarding/Code of Conduct",
    link: "#",
  },
];

const contactItems = [
  {
    icon: Email,
    title: "Email Address",
    link: "mailto:admin@nskai.org",
    readLink: "admin@nskai.org",
  },
  {
    icon: Location,
    title: "Headquarters",
    link: "https://google.com/maps/lagos/nskai",
    readLink: "Lagos | Nsukka",
  },
];

export default function Footer() {
  return (
    <footer className="pb-6 pt-24 bg-[#161616] text-white relative z-5">
      <div className="container mx-auto md:px-8 px-4">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-y-10">
          {/* grid container 1 */}
          <div className="lg:col-span-2">
            <img
              src={FooterLogo}
              alt="Logo for NSK.AI"
              className="mb-4 select-none"
            />
            <span className="font-secondary font-normal text-xs md:text-base md:leading-[28px]">
              Build AI skills that matter — together.
            </span>
            <div className="flex items-center gap-4 mt-6">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.link}>
                  <div className="bg-[#2C2D2D] p-3 rounded-[12px]">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="select-none"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* grid container 2 */}
          <div>
            <h3 className="font-secondary font-semibold text-base leading-relaxed md:leading-[100%} mb-4">
              About
            </h3>
            <ul className="flex flex-col gap-4">
              {footerAboutItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="block text-white/70 text-base font-normal font-secondary"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* grid container 3 */}
          <div>
            <h3 className="font-secondary font-semibold text-base leading-relaxed md:leading-[100%} mb-4">
              Policies
            </h3>
            <ul className="flex flex-col gap-4">
              {policiesItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="block text-white/70 text-base font-normal font-secondary"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* grid container 4 */}
          <div>
            <h3 className="font-secondary font-semibold text-base leading-relaxed md:leading-[100%} mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {contactItems.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={contact.icon} alt={contact.title} />
                  <div className="flex flex-col gap-2">
                    <span className="text-white/70 text-sm font-semibold tracking-[1px] font-secondary">
                      {contact.title}
                    </span>
                    <a
                      className="text-white/70 text-xs tracking-[1px] font-normal font-secondary"
                      href={contact.link}
                    >
                      {contact.readLink}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-20 border-t border-white/30" /> {/* bottom */}
        <div className="flex flex-col gap-8 items-start lg:flex-row lg:justify-between lg:items-end">
          <span className="font-primary font-semibold text-white/20 text-6xl lg:text-9xl">
            NSK.AI
          </span>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-12">
            <p className="font-secondary font-normal text-xs md:text-base text-[#A1A1A1] leading-[199%]">
              &copy; {new Date().getFullYear()} NSK.AI. All rights reserved.
            </p>
            <p className="font-secondary font-normal text-xs md:text-base text-[#A1A1A1] leading-[199%]">
              ❤️ & Dev by <a href="#">Lexjo</a> +{" "}
              <a href="https://github.com/EL-ILUMINADO" target="_blank">
                EL-ILUMINADO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
