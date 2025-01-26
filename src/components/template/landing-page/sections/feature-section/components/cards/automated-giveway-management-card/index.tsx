import FeatureCard from "@/components/atoms/card/feature-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AutomatedGivewayManagementCard = () => {
  return (
    <FeatureCard className="p-0 relative  ">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <img
            src="/images/background/feature-automated-giveaway.svg"
            alt="feature-1"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold px-6 py-2">
              Automated Giveaway Management
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Sign in quickly with your X account via Oauth to get started in
            seconds.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default AutomatedGivewayManagementCard;
