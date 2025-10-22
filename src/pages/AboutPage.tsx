import BoardOfDirectors from "../components/about-page/BoardOfDirectors";
import CoreMembers from "../components/about-page/CoreMembers";
import CountryDirectors from "../components/about-page/CountryDirectors";
import HeroSection from "../components/about-page/HeroSection";
import MissionAndValues from "../components/about-page/MissionAndValues";
import NskSuperPowers from "../components/about-page/NskSuperPowers";
import Preloader from "../components/about-page/Preloader";
import ScrollText from "../components/about-page/ScrollText";
import WhoWeAre from "../components/about-page/WhoWeAre";
import Impact from "../components/Impact";

export default function AboutPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <WhoWeAre />
      <ScrollText />
      <MissionAndValues />
      <Impact />
      <NskSuperPowers />
      <BoardOfDirectors />
      <CountryDirectors />
      <CoreMembers />
    </>
  );
}
