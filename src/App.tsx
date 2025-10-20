import Preloader from "./components/Preloader";
import LandingPage from "./pages/LandingPage";
import ScrollToTopButton from "./utils/ScrollToTop";

export default function App() {
  return (
    <>
      <Preloader />
      <LandingPage />
      <ScrollToTopButton />
    </>
  );
}
