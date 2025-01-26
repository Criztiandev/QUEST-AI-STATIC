import PrimaryButton from "@/components/atoms/button/primary-button";
import Section from "@/components/template/layout/section";

const BannerSection = () => {
  return (
    <Section>
      <div className="flex justify-center items-center gap-10 flex-col bg-secondary rounded-xl pb-8">
        <div className="">
          <img
            src="/images/logo/quest-ai-plain-logo.svg"
            alt="banner"
            className="w-[300px] h-[300px] object-"
          />
        </div>

        <div className="space-y-8 flex justify-center items-center flex-col text-center">
          <h3 className="text-5xl font-bold flex flex-col gap-2">
            <span className="text-white">Your Giveaway,</span>
            <span className="text-white">Our Questions</span>
          </h3>
          <p className="text-xl">
            Try out QuestAI Telegram bot now for your community and experience
            the ease of hosting giveaways!
          </p>

          <PrimaryButton className="bg-white hover:bg-primary">
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
};

export default BannerSection;
