import HeroBadge from "@/components/atoms/badge/hero-badge";
import PieDonutChart from "@/components/molecules/chart/pie-donut-chart";
import Section from "@/components/template/layout/section";
import { Separator } from "@/components/ui/separator";

const TokenomicsSection = () => {
  return (
    <Section className="flex justify-center items-center flex-col">
      <HeroBadge className="mb-8">Tokenomics</HeroBadge>

      <div className="flex justify-center items-center flex-col gap-4 mb-12">
        <div className="space-x-2 flex items-center">
          <h3 className="text-5xl font-bold">Total Supply:</h3>
          <span className="text-5xl font-bold">10,000,000</span>
        </div>
        <p className="text-xl max-w-2xl text-center">
          QuestAI's tokenomics structure is strategically allocated to drive
          growth, stability, and long-term success.
        </p>
      </div>

      <PieDonutChart />

      <div className="flex gap-4 items-center mt-12">
        <span className="space-x-2">
          <span className="text-2xl font-semibold">4/4</span>
          <span className="text-2xl font-semibold">Tax</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <span className="text-2xl font-semibold">2%</span>
          <span className="text-2xl font-semibold">Marketing</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <span className="text-2xl font-semibold">1%</span>
          <span className="text-2xl font-semibold">Development</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <span className="text-2xl font-semibold">1%</span>
          <span className="text-2xl font-semibold">Team</span>
        </span>
      </div>
    </Section>
  );
};

export default TokenomicsSection;
