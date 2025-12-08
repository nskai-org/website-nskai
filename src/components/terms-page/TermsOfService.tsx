export default function TermsOfService() {
  return (
    <section className="py-20 md:py-28 bg-white text-[#101213]">
      <div className="container mx-auto px-4">
        {/* -------- Header -------- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-primary font-bold text-3xl md:text-5xl mb-6">
            Terms of Service
          </h1>
          <p className="font-secondary text-[#606060] text-base md:text-lg">
            Please read these terms carefully before using our platform. By
            accessing our community, you agree to be bound by these terms.
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
              1. Acceptance of Terms
            </h2>
            <p className="text-[#606060]">
              By accessing and using this website, subscribing to our
              newsletter, or applying as a mentor/speaker, you accept and agree
              to be bound by the terms and provision of this agreement. In
              addition, when using these particular services, you shall be
              subject to any posted guidelines or rules applicable to such
              services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              2. Community Conduct
            </h2>
            <p className="text-[#606060] mb-4">
              Our community is designed for learning and collaboration. You
              agree not to:
            </p>
            <ul className="list-disc pl-5 text-[#606060] space-y-2">
              <li>Harass, abuse, or threaten other members or staff.</li>
              <li>Post content that is hateful, obscene, or fraudulent.</li>
              <li>Use the platform for any illegal or unauthorized purpose.</li>
              <li>
                Spam or solicit other members for commercial purposes without
                permission.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-[#606060]">
              All content provided on this website, including but not limited to
              text, graphics, logos, and course materials, is the property of
              the organization or its content creators and is protected by
              copyright laws. You may not reproduce, distribute, or create
              derivative works without express written permission.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              4. Educational Disclaimer
            </h2>
            <p className="text-[#606060]">
              The materials on this website are provided for educational
              purposes only. While we strive for accuracy, we make no warranties
              regarding the completeness, reliability, or accuracy of this
              information. Any action you take upon the information on this
              website is strictly at your own risk.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-[#606060]">
              In no event shall we be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the
              materials on this website.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-[#606060]">
              We reserve the right to modify these terms at any time. We will do
              so by posting and drawing attention to the updated terms on this
              site. Your continued use of the site after any such changes
              constitutes your acceptance of the new Terms.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="font-primary font-semibold text-xl md:text-2xl mb-4">
              7. Contact Us
            </h2>
            <p className="text-[#606060]">
              If you have any questions about these Terms, please contact us at:
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
