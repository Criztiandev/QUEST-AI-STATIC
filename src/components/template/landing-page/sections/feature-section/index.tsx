import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureSection = () => {
  return (
    <section className="px-16 my-[100px]">
      <div className="flex flex-col gap-4 justify-center items-center space-y-4 mb-8 md:mb-16">
        <Badge className="px-4 py-2 rounded-full" variant="outline">
          <span className="text-sm">Introducing</span>
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Logo</h2>
        <span className="text-lg md:text-xl text-center">
          The first-ever giveaway bot designed specifically for X.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_2fr_auto] gap-4">
        <div className="flex flex-col gap-4 justify-between items-center">
          <Card>
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-full h-[250px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Easy Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              Sign in quickly with your X account via Oauth to get started in
              seconds.
            </CardContent>
          </Card>
          <Card className="w-full  xl:h-[550px]">
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-full h-[250px] bg-red-500"></div>
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

        <div className="flex flex-col gap-4  xl:w-[800px]">
          <Card className="w-full h-full">
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-full h-[250px] bg-red-500"></div>
              <CardTitle className="text-xl font-bold">
                Easy Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              Sign in quickly with your X account via Oauth to get started in
              seconds.
            </CardContent>
          </Card>
          <Card className="w-full h-full">
            <CardHeader className="flex flex-col justify-center items-center space-y-4">
              <div className="w-full h-[250px] bg-red-500"></div>
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

        <div className="flex flex-col gap-4">
          <Card className="xl:h-full">
            <CardContent className="mt-4 flex flex-col justify-between items-center">
              <div className="w-full h-[250px] bg-red-500 mb-4"></div>
              <div>
                <CardTitle className="text-xl font-bold">
                  Easy Authentication
                </CardTitle>
                Sign in quickly with your X account via Oauth to get started in
                seconds.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
