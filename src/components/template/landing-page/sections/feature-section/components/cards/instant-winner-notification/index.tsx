import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InstantWinnerNotificationCard = () => {
  return (
    <FeatureCard className="p-0 relative h-[350px]  ">
      <div className="w-full h-full relative">
        <img
          src="/images/background/feature-bg-1.svg"
          alt="feature-1"
          height={500}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold px-6 py-2">
              Instant Winner Notification
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Notify your lucky winners in real-time through direct messages or
            tweets, keeping the excitement alive and ensuring no one misses out.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default InstantWinnerNotificationCard;
