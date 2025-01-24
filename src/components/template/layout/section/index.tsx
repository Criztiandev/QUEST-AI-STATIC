import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Section = ({ children, ...props }: Props) => {
  return (
    <section {...props} className={cn("px-16", props.className)}>
      {children}
    </section>
  );
};

export default Section;
