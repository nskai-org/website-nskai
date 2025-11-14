import HeroSection from "../components/get-involved-page/HeroSection";
import InvolvementOptions from "../components/get-involved-page/InvolvementOptions";
import Preloader from "../components/Preloader";
import GetInvolved from "../components/projects-page/GetInvolved";

export default function GetInvolvedPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <InvolvementOptions />
      <GetInvolved />
    </>
  );
}
