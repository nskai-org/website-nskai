export default function PrivacyPolicy() {
  return (
    <section className="py-20 md:py-28 bg-white text-[#101213]">
      <div className="container mx-auto px-4">
        {/* -------- Header -------- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-primary font-bold text-3xl md:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="font-secondary text-[#606060] text-base md:text-lg">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information.
          </p>
          <p className="font-secondary text-sm text-[#606060] mt-2">
            Last Updated: December 8, 2025
          </p>
        </div>

        {/* -------- Content Sections -------- */}
        <div className="max-w-3xl mx-auto font-secondary leading-relaxed space-y-10 text-sm md:text-base">
          {/* Section 1 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              1. Information We Collect
            </h2>
            <p className="text-[#606060] mb-4">
              We collect information that you voluntarily provide to us when you
              sign up for our newsletter, apply to become a mentor/speaker, or
              contact us. This includes:
            </p>
            <ul className="list-disc pl-5 text-[#606060] space-y-2">
              <li>Personal identification (Name, Email address)</li>
              <li>Professional details (Bio, Role, Availability)</li>
              <li>Any other information you choose to provide in our forms</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-[#606060]">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 text-[#606060] space-y-2 mt-4">
              <li>Send you newsletters and updates about our community.</li>
              <li>
                Review and process your applications for mentorship or speaking
                roles.
              </li>
              <li>
                Improve our website and community offerings based on your
                feedback.
              </li>
              <li>Communicate with you regarding inquiries or support.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              3. Data Protection
            </h2>
            <p className="text-[#606060]">
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized
              access, alteration, disclosure, or destruction. We do not sell,
              trade, or rent your personal identification information to others.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-[#606060]">
              We may use third-party services (such as email providers or form
              handling services like Web3Forms) to facilitate our operations.
              These parties have access to your Personal Data only to perform
              these tasks on our behalf and are obligated not to disclose or use
              it for any other purpose.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              5. Contact Us
            </h2>
            <p className="text-[#606060]">
              If you have any questions about this Privacy Policy, please
              contact us at:
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
