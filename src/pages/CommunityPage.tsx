import Activities from "../components/community-page/Activities";
import BecomePart from "../components/community-page/BecomePart";
import CommunityGuidelines from "../components/community-page/CommunityGuidelines";
import GuestSpeakers from "../components/community-page/GuestSpeakers";
import HeroSection from "../components/community-page/HeroSection";
import HowToJoin from "../components/community-page/HowToJoin";
import Preloader from "../components/Preloader";

export default function CommunityPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <Activities />
      <HowToJoin />
      <CommunityGuidelines />
      <GuestSpeakers />
      <BecomePart />
    </>
  );
}
