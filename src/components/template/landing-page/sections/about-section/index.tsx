import PrimaryButton from "@/components/atoms/button/primary-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="p-16 pt-[100px]">
      <div className="grid grid-cols-[55%_auto] gap-16 ">
        <div className="flex flex-col gap-12 items-start">
          <Badge>QuestAI</Badge>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-5xl font-bold">QuestBot</h2>
            <p className="text-xl max-w-[800px]">
              A powerful Telegram bot designed to make running quizzes and
              giveaways in your community effortless. With just a few clicks,
              you can set up an automated giveaway, eliminating the need for
              manual management. The bot takes care of everything—from asking
              questions to selecting winners, all powered by AI.
            </p>
          </div>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="px-2">
            <CardHeader className="pt-[48px] pb-4">
              <Plane size={32} className="mb-4" />
              <CardTitle className="text-2xl font-semibold ">
                Telegram Bot API Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-lg">
                QuestAI uses the Telegram Bot API to interact with groups and
                channels.
              </p>
            </CardContent>
          </Card>

          <Card className="px-2">
            <CardHeader className="pt-[48px] pb-4">
              <Plane size={32} className="mb-4" />
              <CardTitle className="text-2xl font-semibold ">
                Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-lg">
                Customize question difficulty to suit different audiences and
                quiz formats. 
              </p>
            </CardContent>
          </Card>

          <Card className="px-2">
            <CardHeader className="pt-[48px] pb-4">
              <Plane size={32} className="mb-4" />
              <CardTitle className="text-2xl font-semibold ">
                Real-Time Answer Detection and Winner Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-lg">
                QuestAI’s bot is powered by chat parsing and answer matching
                algorithms. 
              </p>
            </CardContent>
          </Card>

          <Card className="px-2">
            <CardHeader className="pt-[48px] pb-4">
              <Plane size={32} className="mb-4" />
              <CardTitle className="text-2xl font-semibold ">
                Bot Interface and Command Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="text-lg">
                QuestAI features a simple and intuitive interface for easy
                interaction.   
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
