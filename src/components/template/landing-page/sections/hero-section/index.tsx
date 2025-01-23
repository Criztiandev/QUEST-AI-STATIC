import HeroBadge from "@/components/atoms/badge/hero-badge";
import PrimaryButton from "@/components/atoms/button/primary-button";

const HeroSection = () => {
  return (
    <section className=" min-h-[90vh] ">
      <div className="  flex justify-center items-center flex-col space-y-[100px] px-16 pt-[120px]">
        {/* Banner */}
        <div className="flex flex-col gap-[48px] items-center justify-between">
          <HeroBadge />

          <div className="flex flex-col gap-8 max-w-[824px] justify-center items-center">
            <h1 className="text-6xl font-bold text-center">
              Revolutionizing Giveaways for Your Community
            </h1>
            <p className="text-xl text-center max-w-[500px]">
              Effortlessly host, automate, manage, and monitor quiz-based
              giveaways in your community.
            </p>
          </div>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>

        {/* Video */}
        <div className="w-full h-[800px] rounded-lg p-4 flex">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/Uc-apOIYbFM?si=O3iMK8yXOtBPjYQk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
