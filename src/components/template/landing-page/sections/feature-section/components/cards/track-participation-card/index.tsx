import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackParticipationCard = () => {
  return (
    <FeatureCard className="p-0 relative ">
      <div className="w-full h-full relative">
        <img
          src="/images/background/feature-track-participation.svg"
          alt="feature-1"
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold px-6 py-2">
              Track Participation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Track all interactions easily by monitoring likes, retweets,
            follows, and specific hashtags, ensuring you capture the full scope
            of your giveaway's engagement.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default TrackParticipationCard;
