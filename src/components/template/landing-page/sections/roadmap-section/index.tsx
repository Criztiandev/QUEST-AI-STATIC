import HeroBadge from "@/components/atoms/badge/hero-badge";
import { Timeline } from "@/components/atoms/other/timeline";
import Section from "@/components/template/layout/section";
import { Card, CardContent } from "@/components/ui/card";

const RoadMapSection = () => {
  return (
    <Section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 ">
        <HeroBadge>Timeline</HeroBadge>
        <h3 className="text-5xl font-bold">QuestAI Roadmap</h3>
      </div>
      <Timeline
        data={[
          {
            id: "q1",
            title: "Q1",
            content: (
              <Card className="xl:xl:min-w-[500px]">
                <CardContent className="space-y-2 flex flex-col p-4">
                  <span>Bot Development started</span>
                  <span>Social media setup</span>
                  <span>Community building: giveaway’s and contests</span>
                  <span>Introducing QuestBot </span>
                  <span>Introducing QuestX</span>
                  <span>CG & CMC listing </span>
                  <span>Pilot bot integration for projects</span>
                  <span>QuestBot going live</span>
                  <span>First partnerships</span>
                  <span>1% club going live</span>
                  <span>QuestBot officially going live </span>
                  <span>First marketing push started </span>
                </CardContent>
              </Card>
            ),
          },

          {
            id: "q2",
            title: "Q2",
            content: (
              <Card className="xl:min-w-[500px]">
                <CardContent className="space-y-2 flex flex-col p-4">
                  <span>Bot Development v2 </span>
                  <span>QuestX Development started </span>
                  <span>Trending on multiple platforms</span>
                  <span>Expanding Quest’s algorithm </span>
                  <span>Expansion of partnerships</span>
                  <span>Revenue share for 1% club</span>
                  <span>CEX listing</span>
                  <span>Quests own ad campaign going live </span>
                  <span>
                    Introducing Quest AI's all -time Trophy haul NFT's
                  </span>
                </CardContent>
              </Card>
            ),
          },

          {
            id: "q3",
            title: "Q3",
            content: (
              <Card className="xl:min-w-[500px]">
                <CardContent className="space-y-2 flex flex-col p-4">
                  <span>New algorithms added </span>
                  <span>Launch of QuestX</span>
                  <span>Introducing Multilingual support launch</span>
                  <span>Expansion partnerships</span>
                  <span>Start of the Quest NFT collection</span>
                  <span>Start of QuestAI's NFT development </span>
                  <span>Introducing Quest AI's marketplace</span>
                  <span>Leaderboard integration going live</span>
                  <span>Quests puzzle development starting </span>
                  <span>More CEX listings </span>
                </CardContent>
              </Card>
            ),
          },

          {
            id: "q4",
            title: "Q5",
            content: (
              <Card className="xl:min-w-[500px]">
                <CardContent className="space-y-2 flex flex-col p-4">
                  <span>Bot Development v3 </span>
                  <span>Multilingual support launch</span>
                  <span>New algorithms added </span>
                  <span>Monthly leaderboard giveaways going live</span>
                  <span>Expansion partnerships</span>
                  <span>Mass campaign started</span>
                  <span>Quest AI's all-time Trophy haul NFT's going live!</span>
                  <span>Quest AI's marketplace going live!</span>
                  <span>Quest puzzle going live</span>
                </CardContent>
              </Card>
            ),
          },
        ]}
      />
    </Section>
  );
};

export default RoadMapSection;
