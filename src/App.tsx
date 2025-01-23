import Navbar from "./components/template/layout/nav-bar";
import HeroSection from "./components/template/landing-page/sections/hero-section";
import AboutSection from "./components/template/landing-page/sections/about-section";
import SponsorSection from "./components/template/landing-page/sections/sponsor-section";
import FeatureSection from "./components/template/landing-page/sections/feature-section";
import VideoSection from "./components/template/landing-page/sections/video-section";

const App = () => {
  return (
    <div className="min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="">
        <HeroSection />
        <AboutSection />
        <SponsorSection />
        <FeatureSection />
        <VideoSection />
      </main>
    </div>
  );
};

export default App;
