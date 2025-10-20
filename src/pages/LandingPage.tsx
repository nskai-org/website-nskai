import Banner from "../components/Banner";
import CommunitySnapshots from "../components/CommunitySnapshots";
import Companies from "../components/Companies";
import FeaturedProject from "../components/FeaturedProject";
import HeroSection from "../components/HeroSection";
import Impact from "../components/Impact";
import MeetTheTeam from "../components/MeetTheTeam";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import WhatMakesUs from "../components/WhatMakesUs";

export default function LandingPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <HeroSection />
        <Companies />
        <Impact />
        <WhatMakesUs />
        <FeaturedProject />
        <CommunitySnapshots />
        <MeetTheTeam />
        <Testimonials />
      </main>
    </>
  );
}
