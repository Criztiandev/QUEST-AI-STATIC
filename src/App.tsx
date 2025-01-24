import Navbar from "./components/template/layout/nav-bar";
import HeroSection from "./components/template/landing-page/sections/hero-section";
import AboutSection from "./components/template/landing-page/sections/about-section";
import SponsorSection from "./components/template/landing-page/sections/sponsor-section";
import FeatureSection from "./components/template/landing-page/sections/feature-section";
import VideoSection from "./components/template/landing-page/sections/video-section";
import TokenomicsSection from "./components/template/landing-page/sections/tokenomics-section";

const App = () => {
  return (
    <div className="min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="space-y-[120px]">
        <HeroSection />
        <AboutSection />
        <SponsorSection />
        <FeatureSection />
        <VideoSection />
        <TokenomicsSection />
      </main>
    </div>
  );
};

export default App;
