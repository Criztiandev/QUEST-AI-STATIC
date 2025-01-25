import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <Button
      {...props}
      size="lg"
      className={cn("rounded-full px-6 py-6", props.className)}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
