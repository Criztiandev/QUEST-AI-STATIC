import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureSection = () => {
  return (
    <section className="px-16 my-[100px]">
      <div className="flex flex-col gap-4 justify-center items-center space-y-[18px] mb-16">
        <Badge className="px-4 py-2 rounded-full " variant="outline">
          <span className="text-sm">Introducing</span>
        </Badge>
        <h2 className="text-5xl font-bold">Logo</h2>
        <span className="text-xl">
          The first-ever giveaway bot designed specifically for X.
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
        <div className="flex flex-col gap-4 ">
          <Card className="">
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-[250px] h-[250px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Easy Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              Sign in quickly with your X account via Oauth to get started in
              seconds.
            </CardContent>
          </Card>
          <Card className="h-full flex justify-center items-center flex-col">
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-[250px] h-[250px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Customizable Winner Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              Choose winners based on your preferred criteria whether it's
              random selection, top engagement, or custom rules you've set up.
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="">
            <CardHeader className="space-y-4">
              <div className="border w-full h-[355px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Automated Giveaway Management
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-[800px]">
              <p className="text-lg">
                Let QuestX automatically create, schedule, and manage giveaway
                tweets for you—saving you time and effort.
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="space-y-4">
              <div className="border w-full h-[220px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Instant Winner Notification
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-[800px]">
              <p className="text-lg">
                Notify your lucky winners in real-time through direct messages
                or tweets, keeping the excitement alive and ensuring no one
                misses out.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="h-full">
            <div className="w-full p-6 h-[85%]">
              <div className="w-full h-full bg-red-500 "></div>
            </div>
            <CardHeader className="">
              <CardTitle className="text-xl font-bold">
                Easy Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              Sign in quickly with your X account via Oauth to get started in
              seconds.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
