import HeroBadge from "@/components/atoms/badge/hero-badge";
import PrimaryButton from "@/components/atoms/button/primary-button";
import GradientText from "@/components/atoms/text/gradient-text";
import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Section className="pt-[100px]">
      {/* Banner */}
      <div className="flex flex-col gap-[48px] items-center justify-between">
        <HeroBadge className="text-primary space-x-4">
          <Badge className="bg-primary rounded-full font-bold text-xs px-4 h-8">
            <span className="text-black text-xl">New</span>
          </Badge>
          <span className="text-center text-lg">
            QuestX bot for your X community
          </span>
          <ArrowRight size={18} />
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

        <PrimaryButton className="text-xl">Get started</PrimaryButton>
      </div>
    </Section>
  );
};

export default HeroSection;
