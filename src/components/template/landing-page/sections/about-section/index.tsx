import PrimaryButton from "@/components/atoms/button/primary-button";
import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutData, AboutDataProps } from "./data";
import FadeCard from "@/components/atoms/card/fade-card";
const AboutSection = () => {
  return (
    <Section>
      {/* grid-cols-[55%_auto] */}
      <div className="grid grid-cols-1 gap-16 ">
        <div className="flex flex-col gap-8 items-start">
          <Badge>QuestAI</Badge>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-6xl font-bold">QuestBot</h2>
            <p className="text-lg text-muted-foreground">
              A powerful Telegram bot designed to make running quizzes and
              giveaways in your community effortless. With just a few clicks,
              you can set up an automated giveaway, eliminating the need for
              manual management. The bot takes care of everything—from asking
              questions to selecting winners, all powered by AI.
            </p>
          </div>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {AboutData.map((items: AboutDataProps) => (
            <FadeCard key={items.id}>
              <CardHeader>
                {items.icon}
                <CardTitle className="text-2xl font-semibold ">
                  {items.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-lg">{items.description}</p>
              </CardContent>
            </FadeCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
