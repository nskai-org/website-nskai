import BlogList from "../components/blog-page/BlogList";
import EditorialGuidelines from "../components/blog-page/EditorialGuidelines";
import HeroSection from "../components/blog-page/HeroSection";
import Preloader from "../components/Preloader";

export default function BlogPage() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <BlogList />
      <EditorialGuidelines />
    </>
  );
}
