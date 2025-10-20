import NvidiaLogo from "../assets/companies/nvidia-logo.svg";
import GoogleLogo from "../assets/companies/google-logo.svg";
import LangchainLogo from "../assets/companies/langchain-logo.svg";

const companyLogo = [NvidiaLogo, GoogleLogo, LangchainLogo];

export default function Companies() {
  return (
    <>
      <section className="bg-[#101213] pb-10 pt-70 md:pt-48 lg:pt-12">
        <div className="container mx-auto px-10 md:px-6 flex flex-wrap items-center justify-center gap-10">
          {companyLogo.map((company, index) => (
            <img
              key={index}
              src={company}
              alt={company}
              className="w-18 md:w-40 select-none"
            />
          ))}
        </div>
      </section>

      <div className="max-w-5xl w-full mx-auto mt-20 px-4 py-12">
        <p className="font-primary font-medium text-center text-base md:text-4xl -tracking-[3%] md:leading-[70px]">
          We democratize AI learning across Africa. Fro
          <span className="text-[#D9D9D9]">
            m paper‑reading clubs to hands‑on bootcamps and project demos, we
            help students and young professionals gain real skills, build
            portfolios, and access mentorship at scale.
          </span>
        </p>
      </div>
    </>
  );
}
