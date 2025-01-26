import HeroBadge from "@/components/atoms/badge/hero-badge";
import PrimaryButton from "@/components/atoms/button/primary-button";
import GradientText from "@/components/atoms/text/gradient-text";
import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Section className="pt-[100px]">
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/background/hero-background.png"
          alt="hero-bg"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Banner */}
      <div className="flex flex-col gap-[48px] items-center justify-between max-w-[800px] mx-auto">
        <HeroBadge className="text-primary space-x-4">
          <Badge className="bg-primary rounded-full font-bold text-xs px-4 h-8">
            <span className="text-black text-base">New</span>
          </Badge>
          <span className="text-center text-lg">
            QuestX bot for your X community
          </span>
          <ArrowRight size={18} />
        </HeroBadge>

        <div className="flex flex-col gap-8 justify-center items-center w-full">
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold break-words flex gap-4 flex-wrap text-center justify-center">
            Revolutionizing
            <GradientText
              className="text-5xl md:text-4xl lg:text-6xl"
              text="Giveaways"
            />
            for Your Community
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center max-w-[600px]">
            Effortlessly host, automate, manage, and monitor quiz-based
            giveaways in your community.
          </p>
        </div>

        <PrimaryButton className="text-xl">Get started</PrimaryButton>
      </div>
    </Section>
  );
};

export default HeroSection;
