import Section from "@/components/template/layout/section";
import { SponsorData } from "./data";
import InfiniteMovingCards from "@/components/atoms/other/infinite-scroll-card";

const SponsorSection = () => {
  return (
    <Section className="flex justify-center items-center flex-col gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        <h3 className="text-xl text-muted-foreground text-center">
          Your trusted partner for community growth
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center overflow-hidden">
        <InfiniteMovingCards items={SponsorData} />
      </div>
    </Section>
  );
};

export default SponsorSection;
