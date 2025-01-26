import HeroBadge from "@/components/atoms/badge/hero-badge";
import RoadMapCard from "@/components/atoms/card/roadmap-card";
import { Timeline } from "@/components/atoms/other/timeline";
import Section from "@/components/template/layout/section";
import { CardContent } from "@/components/ui/card";
import { timelineData } from "./roadmap.data";

const RoadMapSection = () => {
  return (
    <Section className="pb-48">
      <div className="flex flex-col items-center justify-center space-y-8">
        <HeroBadge>Timeline</HeroBadge>
        <h3 className="text-5xl font-bold text-center">QuestAI Roadmap</h3>
      </div>
      <Timeline
        data={timelineData.map((quarter) => ({
          id: quarter.id,
          title: quarter.title,
          content: (
            <RoadMapCard className="xl:min-w-[500px]">
              <CardContent className="space-y-2 flex flex-col p-4">
                {quarter.items.map((item) => (
                  <span key={item.id} className="text-white font-medium">
                    {item.text}
                  </span>
                ))}
              </CardContent>
            </RoadMapCard>
          ),
        }))}
      />
    </Section>
  );
};

export default RoadMapSection;
