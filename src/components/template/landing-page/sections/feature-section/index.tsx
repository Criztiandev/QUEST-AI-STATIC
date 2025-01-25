import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import EasyAuthenticationCard from "./components/cards/easy-authentication-card";
import CustomizableWinnerSelectionCard from "./components/cards/customizable-winner-selection-card";
import AutomatedGivewayManagementCard from "./components/cards/automated-giveway-management-card";
import InstantWinnerNotificationCard from "./components/cards/instant-winner-notification";
import TrackParticipationCard from "./components/cards/track-participation-card";

const FeatureSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-4 justify-center items-center space-y-4 mb-8 md:mb-16">
        <Badge className="px-4 py-2 rounded-full" variant="outline">
          <span className="text-sm">Introducing</span>
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Logo</h2>
        <span className="text-lg md:text-xl text-center">
          The first-ever giveaway bot designed specifically for X.
        </span>
      </div>

      {/* grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_2fr_auto] gap-4 */}
      <div className="">
        {/* Left Section */}
        <div className="flex flex-col gap-4 justify-between items-center">
          <EasyAuthenticationCard />
          <CustomizableWinnerSelectionCard />
        </div>

        <div className="flex flex-col gap-4  xl:w-[800px]">
          <AutomatedGivewayManagementCard />
          <InstantWinnerNotificationCard />
        </div>

        <div className="flex flex-col gap-4">
          <TrackParticipationCard />
        </div>
      </div>
    </Section>
  );
};

export default FeatureSection;
