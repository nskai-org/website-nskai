import Preloader from "../components/about-page/Preloader";
import GuestSpeakers from "../components/community-page/GuestSpeakers";
import GetInvolved from "../components/projects-page/GetInvolved";
import HeroSection from "../components/projects-page/HeroSection";
import ImageHighlights from "../components/projects-page/ImageHighlights";
import RagBootcamp from "../components/projects-page/RagBootcamp";
import UdaraProject from "../components/projects-page/UdaraProject";

export default function ProjectsPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <RagBootcamp />
      <ImageHighlights />
      <GuestSpeakers />
      <UdaraProject />
      <GetInvolved />
    </>
  );
}
