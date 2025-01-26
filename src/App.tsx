import HeroSection from "./components/template/landing-page/sections/hero-section";
import AboutSection from "./components/template/landing-page/sections/about-section";
import SponsorSection from "./components/template/landing-page/sections/sponsor-section";
import FeatureSection from "./components/template/landing-page/sections/feature-section";
import VideoSection from "./components/template/landing-page/sections/video-section";
import TokenomicsSection from "./components/template/landing-page/sections/tokenomics-section";
import RoadMapSection from "./components/template/landing-page/sections/roadmap-section";
import FaqSection from "./components/template/landing-page/sections/faq-section";
import BannerSection from "./components/template/landing-page/sections/banner-section";
import Footer from "./components/template/layout/footer";
import Header from "./components/template/layout/header";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-[100px]">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <SponsorSection />
        <FeatureSection />
        <VideoSection />
        <TokenomicsSection />
        <RoadMapSection />
        <FaqSection />
        <BannerSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
