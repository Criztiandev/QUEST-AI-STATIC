import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Section = ({ children, ...props }: Props) => {
  const isMobile = useIsMobile();
  return (
    <section {...props} className={cn("px-4", props.className)}>
      {children}
    </section>
  );
};

export default Section;
