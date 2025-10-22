import Banner from "../components/Banner";
import CommunitySnapshots from "../components/CommunitySnapshots";
import Companies from "../components/Companies";
import Donation from "../components/Donation";
import FeaturedProject from "../components/FeaturedProject";
import HeroSection from "../components/HeroSection";
import Impact from "../components/Impact";
import LatestNews from "../components/LatestNews";
import MeetTheTeam from "../components/MeetTheTeam";
import Preloader from "../components/Preloader";
import StayUpdated from "../components/StayUpdated";
import Testimonials from "../components/Testimonials";
import WhatMakesUs from "../components/WhatMakesUs";

export default function LandingPage() {
  return (
    <>
      <Preloader />
      <Banner />
      <main>
        <HeroSection />
        <Companies />
        <Impact />
        <WhatMakesUs />
        <FeaturedProject />
        <CommunitySnapshots />
        <MeetTheTeam />
        <Testimonials />
        <LatestNews />
        <StayUpdated />
        <Donation />
      </main>
    </>
  );
}
