import TickerText from "./TickerText";
import NskLogo from "/scroll-logo-nskai.png";

export default function ScrollText() {
  return (
    <div className="pb-24">
      <TickerText
        text={`
          <div class="flex items-center justify-center gap-4" >
            <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal " >Who We Are</strong>
          <img src="${NskLogo}" alt="NSK AI" class="inline w-64 mx-4 align-middle" />
          <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal" >Our Core Values</strong>
            <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal " >Who We Are</strong>
          <img src="${NskLogo}" alt="NSK AI" class="inline w-64 mx-4 align-middle" />
          <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal" >Our Core Values</strong>
            <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal " >Who We Are</strong>
          <img src="${NskLogo}" alt="NSK AI" class="inline w-64 mx-4 align-middle" />
          <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal" >Our Core Values</strong>
            <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal " >Who We Are</strong>
          <img src="${NskLogo}" alt="NSK AI" class="inline w-64 mx-4 align-middle" />
          <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal" >Our Core Values</strong>
            <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal " >Who We Are</strong>
          <img src="${NskLogo}" alt="NSK AI" class="inline w-64 mx-4 align-middle" />
          <strong class="text-6xl md:text-[100px] text-[#D9D9D9] font-primary font-normal" >Our Core Values</strong>
          </div>
        `}
        speed={100}
      />
    </div>
  );
}
