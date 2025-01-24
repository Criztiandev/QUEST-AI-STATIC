import { Badge, BadgeProps } from "@/components/ui/badge";

interface Props extends BadgeProps {}

const HeroBadge = ({ children, ...props }: Props) => {
  return <Badge {...props}>{children}</Badge>;
};

export default HeroBadge;
