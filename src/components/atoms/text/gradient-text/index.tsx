import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export function GradientText({ text, ...props }: Props) {
  const colors = ["rgb(131, 179, 32)", "rgb(249, 129, 47)"];
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={count}
      className="inline-block relative"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors[0]}, ${colors[1]}, ${colors[0]})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      <span
        className={cn("font-sans tracking-tight font-bold", props.className)}
      >
        {text}
      </span>
    </motion.div>
  );
}

export default GradientText;
