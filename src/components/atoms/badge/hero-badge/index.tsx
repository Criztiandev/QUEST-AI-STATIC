import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props extends BadgeProps {}

const HeroBadge = ({ children, ...props }: Props) => {
  return (
    <Badge
      {...props}
      variant="outline"
      className={cn("px-4 py-2 rounded-full", props.className)}
    >
      {children}
    </Badge>
  );
};

export default HeroBadge;
