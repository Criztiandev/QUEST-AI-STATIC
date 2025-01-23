import { Badge, BadgeProps } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Props extends BadgeProps {}

const HeroBadge = ({ ...props }: Props) => {
  return (
    <Badge {...props}>
      New QuestX bot for your X community <ArrowRight />
    </Badge>
  );
};

export default HeroBadge;
