import GetInTouch from "../components/contact-page/GetInTouch";
import HeroSection from "../components/contact-page/HeroSection";
import Preloader from "../components/Preloader";

export default function ContactPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <GetInTouch />
    </>
  );
}
