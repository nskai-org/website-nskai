export default function CodeOfConduct() {
  return (
    <section className="py-20 md:py-28 bg-white text-[#101213]">
      <div className="container mx-auto px-4">
        {/* -------- Header -------- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-primary font-bold text-3xl md:text-5xl mb-6">
            Code of Conduct
          </h1>
          <p className="font-secondary text-[#606060] text-base md:text-lg">
            We are committed to providing a friendly, safe, and welcoming
            environment for all, regardless of level of experience, gender
            identity, or background.
          </p>
          <p className="font-secondary text-sm text-[#606060] mt-2">
            Last Updated: December 8, 2025
          </p>
        </div>

        {/* -------- Content Sections -------- */}
        <div className="max-w-3xl mx-auto font-secondary leading-relaxed space-y-10 text-sm md:text-base">
          {/* Section 1: Pledge */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              1. Our Pledge
            </h2>
            <p className="text-[#606060]">
              We pledge to make participation in our community a harassment-free
              experience for everyone. We pledge to act and interact in ways
              that contribute to an open, welcoming, diverse, inclusive, and
              healthy community.
            </p>
          </div>

          {/* Section 2: Positive Behavior */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              2. Our Standards
            </h2>
            <p className="text-[#606060] mb-4">
              Examples of behavior that contributes to a positive environment
              include:
            </p>
            <ul className="list-disc pl-5 text-[#606060] space-y-2">
              <li>Demonstrating empathy and kindness toward others.</li>
              <li>
                Being respectful of differing opinions, viewpoints, and
                experiences.
              </li>
              <li>Giving and gracefully accepting constructive feedback.</li>
              <li>Focusing on what is best for the community.</li>
              <li>Using welcoming and inclusive language.</li>
            </ul>
          </div>

          {/* Section 3: Unacceptable Behavior */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              3. Unacceptable Behavior
            </h2>
            <p className="text-[#606060] mb-4">
              Examples of unacceptable behavior include:
            </p>
            <ul className="list-disc pl-5 text-[#606060] space-y-2">
              <li>
                The use of sexualized language or imagery, and sexual attention
                or advances of any kind.
              </li>
              <li>
                Trolling, insulting, or derogatory comments, and personal or
                political attacks.
              </li>
              <li>Public or private harassment.</li>
              <li>
                Publishing others' private information without their explicit
                permission.
              </li>
              <li>
                Other conduct which could reasonably be considered inappropriate
                in a professional setting.
              </li>
            </ul>
          </div>

          {/* Section 4: Enforcement */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              4. Enforcement Responsibilities
            </h2>
            <p className="text-[#606060]">
              Community leaders are responsible for clarifying and enforcing our
              standards of acceptable behavior and will take appropriate and
              fair corrective action in response to any behavior that they deem
              inappropriate, threatening, offensive, or harmful.
            </p>
            <p className="text-[#606060] mt-4">
              Community leaders have the right and responsibility to remove,
              edit, or reject comments, commits, code, wiki edits, issues, and
              other contributions that are not aligned to this Code of Conduct.
            </p>
          </div>

          {/* Section 5: Reporting */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              5. Reporting Issues
            </h2>
            <p className="text-[#606060]">
              If you witness or experience unacceptable behavior, or have any
              other concerns, please report it by contacting us immediately. All
              complaints will be reviewed and investigated promptly and fairly.
            </p>
            <a
              href="mailto:Contact@nskai.org"
              className="inline-block mt-2 font-medium underline hover:text-black transition-colors"
            >
              Contact@nskai.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
