import PrimaryCard from "@/components/atoms/card/primary-card";
import Section from "@/components/template/layout/section";
import { SponsorData } from "./data";

const SponsorSection = () => {
  return (
    <Section className="flex justify-center items-center flex-col gap-4">
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        <h3 className="text-xl text-muted-foreground text-center">
          Your trusted partner for community growth
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {SponsorData.map((sponsor) => (
          <PrimaryCard key={sponsor.id} className="w-full">
            <img
              src={sponsor.image}
              alt="sponsor"
              className="w-full h-full object-cover"
            />
          </PrimaryCard>
        ))}
      </div>
    </Section>
  );
};

export default SponsorSection;
