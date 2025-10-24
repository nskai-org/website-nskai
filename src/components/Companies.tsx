import NvidiaLogo from "../assets/companies/nvidia-logo.svg";
import GoogleLogo from "../assets/companies/google-logo.svg";
import LangchainLogo from "../assets/companies/langchain-logo.svg";

const companyLogo = [NvidiaLogo, GoogleLogo, LangchainLogo];

export default function Companies() {
  return (
    <>
      <section className="bg-[#101213] pb-10 pt-10 md:pt-12 lg:pt-12">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center gap-6 md:gap-10 lg:gap-24">
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

      <div className="max-w-5xl w-full mx-auto mt-20 px-4 py-24">
        <p className="font-primary font-medium text-center text-base md:text-4xl -tracking-[3%] md:leading-[70px]">
          We democratize AI learning across Africa. Fro
          <span className="">
            m paper‑reading clubs to hands‑on bootcamps and project demos, we
            help students and young professionals gain real skills, build
            portfolios, and access mentorship at scale.
          </span>
        </p>
      </div>
    </>
  );
}
