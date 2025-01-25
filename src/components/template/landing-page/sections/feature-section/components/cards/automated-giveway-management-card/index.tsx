import FeatureCard from "@/components/atoms/card/feature-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AutomatedGivewayManagementCard = () => {
  return (
    <FeatureCard className="p-0 relative h-[350px]  ">
      <div className="w-full h-full relative">
        <img
          src="/images/background/feauter-automated.png"
          alt="feature-1"
          height={500}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold px-6 py-2">
              Easy Authentication
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
