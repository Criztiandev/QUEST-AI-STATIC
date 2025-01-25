import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EasyAuthenticationCard = () => {
  return (
    <FeatureCard className="p-0 relative h-[350px]  ">
      <div className="w-full h-full relative">
        <img
          src="/images/background/feature-bg-1.svg"
          alt="feature-1"
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0">
          <div className="w-16 h-16 rounded-full mx-auto mb-12">
            <img
              src="/images/logo/x-logo.png"
              alt="x-logo"
              className="w-full h-full object-cover"
            />
          </div>
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

export default EasyAuthenticationCard;
