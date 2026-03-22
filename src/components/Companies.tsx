import NvidiaLogo from "../assets/companies/nvidia-logo.svg";
import GoogleLogo from "../assets/companies/google-logo.svg";
import LangchainLogo from "../assets/companies/langchain-logo.svg";

const companies = [
  { logo: NvidiaLogo, name: "NVIDIA", url: "https://www.nvidia.com" },
  { logo: GoogleLogo, name: "Google", url: "https://www.google.com" },
  { logo: LangchainLogo, name: "LangChain", url: "https://www.langchain.com" },
];

export default function Companies() {
  return (
    <>
      <section className="bg-[#101213] pb-10 pt-10 md:pt-12 lg:pt-12">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center gap-6 md:gap-10 lg:gap-24">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-18 md:w-40 select-none"
              />
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-5xl w-full mx-auto mt-20 px-4 py-24">
        <p className="font-primary font-medium text-center text-base md:text-4xl -tracking-[3%] md:leading-[70px] text-[#101213]">
          We democratize AI learning across Africa. From paper‑reading clubs to hands‑on bootcamps
          and project demos, we help students and young professionals gain real skills, build
          portfolios, and access mentorship at scale.
        </p>
      </div>
    </>
  );
}
