import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomizableWinnerSelectionCard = () => {
  return (
    <FeatureCard className="p-0 relative">
      <div className="w-full relative h-[350px]">
        <div>
          <img
            src="/images/background/feature-customization.png"
            alt="feature-1"
            height={700}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="w-16 h-16 rounded-full mx-auto mb-12"></div>
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold px-6 py-2">
              Customizable Winner Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Choose winners based on your preferred criteria whether it's random
            selection, top engagement, or custom rules you've set up.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default CustomizableWinnerSelectionCard;
