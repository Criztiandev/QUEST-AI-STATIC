import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FadeCard = ({ children, className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "border border-primary bg-gradient-to-b from-primary/100 to-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default FadeCard;
