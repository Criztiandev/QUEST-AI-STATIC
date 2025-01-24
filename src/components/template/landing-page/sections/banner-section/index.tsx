import Section from "@/components/template/layout/section";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <Section>
      <div className="w-full flex justify-around items-center border p-4 rounded-xl">
        <div className="w-[500px] h-[400px] border">LOGO</div>

        <div className="space-y-4 max-w-[600px]">
          <h3 className="text-5xl font-bold flex flex-col gap-2">
            <span className="text-primary">Your Giveaway,</span>{" "}
            <span className="text-primary">Our Questions</span>
          </h3>
          <p className="text-xl">
            Try out QuestAI Telegram bot now for your community and experience
            the ease of hosting giveaways!
          </p>
          <Button className="mt-4">Get Started</Button>
        </div>
      </div>
    </Section>
  );
};

export default BannerSection;
