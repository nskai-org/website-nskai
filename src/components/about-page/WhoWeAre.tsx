export default function WhoWeAre() {
  return (
    <section className="pt-18 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1">
            <h2 className="font-secondary font-normal text-base text-[#101213] px-6 py-4 bg-[#f8f8f8] border-2 border-dashed border-[#a1a1a1] inline-block mb-6">
              Who We Are
            </h2>
          </div>
          <div className="col-span-2">
            <p className="font-primary font-semibold text-xl md:text-[40px] md:leading-[70px] tracking-[-3%] text-[#A1A1A1]">
              <span className="text-black">
                NSK.ai is a non-profit community dedicated to AI education,
                research literacy, and practical skills development across A
              </span>
              frica. We create pathways for students and young professionals to
              learn together, build real projects, and access
              mentorship—regardless of background or location.{" "}
            </p>
            <p className="font-primary font-semibold text-xl md:text-[40px] md:leading-[70px] tracking-[-3%] text-[#A1A1A1] mt-10">
              Founded in 2021, NSK.ai has grown into an active network spanning
              multiple African countries, with a strong presence across
              universities and developer communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
