import HeroBadge from "@/components/atoms/badge/hero-badge";
import PrimaryButton from "@/components/atoms/button/primary-button";
import GradientText from "@/components/atoms/text/gradient-text";
import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Section className="min-h-[90vh] pt-[100px] ">
      {/* Banner */}
      <div className="flex flex-col gap-[48px] items-center justify-between mb-10">
        <HeroBadge className="text-primary bg-primary-foreground space-x-4">
          <Badge className="rounded-full font-bold text-lg">New</Badge>
          <span className="text-center text-base">
            New QuestX bot for your X community
          </span>
          <ArrowRight size={32} />
        </HeroBadge>

        <div className="flex flex-col gap-8  justify-center items-center">
          <h1 className="text-6xl font-bold text-center break-words w-[355px]">
            Revolutionizing
            <div>
              <GradientText className="text-6xl" text="Giveaways" />
            </div>
            <div>for Your Community</div>
          </h1>
          <p className="text-xl text-center ">
            Effortlessly host, automate, manage, and monitor quiz-based
            giveaways in your community.
          </p>
        </div>

        <PrimaryButton className="text-xl">Get Started</PrimaryButton>
      </div>

      <div className="w-full h-[600px] rounded-lg p-4 flex">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/Uc-apOIYbFM?si=O3iMK8yXOtBPjYQk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default HeroSection;
