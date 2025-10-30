import image10 from "../../assets/rag-bootcamp/outreach.png";
import image5 from "../../assets/rag-bootcamp/holding-hands.png";
import image8 from "../../assets/rag-bootcamp/picnic-bw.png";
import image2 from "../../assets/rag-bootcamp/ai.png";
import image7 from "../../assets/rag-bootcamp/jesse-zhang.png";
import image9 from "../../assets/rag-bootcamp/rag-paper-talk.png";
import image6 from "../../assets/rag-bootcamp/organizers.png";
import image3 from "../../assets/rag-bootcamp/chip.png";
import image1 from "../../assets/rag-bootcamp/1370.png";

import arrowRight from "../../assets/community-page/solar_arrow-right-black.svg";

import videoPlayIcon from "../../assets/community-page/stash_play-solid.svg";

const imageCollection = [
  image10,
  image5,
  image8,
  image2,
  image7,
  image9,
  image6,
  image3,
  image1,
];

export default function ImageHighlights() {
  return (
    <>
      <section className="overflow-x-scroll">
        <div className="flex gap-4 py-8 w-max">
          {imageCollection.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={item}
                alt="Collection of different images for NSK.AI last bootcamp"
                className="w-52 sm:w-64 md:w-72 h-64 sm:h-80 md:h-96 object-cover rounded-[4px]"
              />
            </div>
          ))}
        </div>
      </section>

      {/*  ----------- CTA buttons ---------- */}
      <div className="pb-24 flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-[#101213] px-5 py-4 md:px-8 md:py-6 rounded-[50px] flex items-center justify-center gap-3 text-base text-white font-secondary font-semibold leading-[146%] cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
          <img src={videoPlayIcon} alt="Video play button" /> Watch Demo Reel
        </button>
        <button className="border border-[#d9d9d9] rounded-[50px] px-5 py-4 md:px-8 md:py-6 flex items-center justify-center gap-3 text-base text-[#101213] font-secondary font-semibold leading-[146%] cursor-pointer select-none transition-all duration-300 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]">
          Recap PDF <img src={arrowRight} alt="Arrow right" />
        </button>
      </div>
    </>
  );
}
