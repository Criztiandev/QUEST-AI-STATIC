import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SponsorSection = () => {
  return (
    <section className="flex gap-4 items-center px-16 py-[50px]">
      <div className="w-[400px]">
        <h3 className="text-xl">Your trusted partner for community growth</h3>
      </div>
      <div className="flex flex-row gap-6 overflow-x-scroll scrollbar-hide">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Partner 1</CardTitle>
          </CardHeader>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Partner 1</CardTitle>
          </CardHeader>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Partner 1</CardTitle>
          </CardHeader>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Partner 1</CardTitle>
          </CardHeader>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Partner 1</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default SponsorSection;
