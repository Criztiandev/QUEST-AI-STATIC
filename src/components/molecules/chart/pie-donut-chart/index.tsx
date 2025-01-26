import { useIsMobile } from "@/hooks/use-mobile";
import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Sector, Cell } from "recharts";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { name: "Liquidity Pool", value: 500, color: "#9AFBFC" },
  { name: "Marketing Wallet", value: 100, color: "#03F6F8" },
  { name: "Private Sale", value: 100, color: "#02C5C6" },
];

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  payload: DataItem;
  percent: number;
  isMobile: boolean;
}

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    percent,
    isMobile,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.color}
        className="drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      />
      {isMobile && (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          <tspan
            x={cx}
            y={cy - 10}
            className="fill-foreground text-lg font-semibold"
          >
            {payload.name}
          </tspan>
          <tspan x={cx} y={cy + 10} className="fill-muted-foreground text-sm">
            {`${payload.value} (${(percent * 100).toFixed(1)}%)`}
          </tspan>
        </text>
      )}
    </g>
  );
};

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  index: number;
  name: string;
  value: number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
  name,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + (outerRadius - 20) * cos;
  const sy = cy + (outerRadius - 20) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";
  const fill = data[index]?.color || "#000";

  return (
    <g>
      <circle
        cx={sx}
        cy={sy}
        r={4}
        fill={fill}
        stroke="white"
        strokeWidth={2}
        className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="white"
        strokeWidth={3}
        fill="none"
        className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      />
      <text
        x={ex + (cos >= 0 ? 10 : -10)}
        y={ey}
        textAnchor={textAnchor}
        className="text-base font-medium fill-gray-700"
      >
        <tspan x={ex + (cos >= 0 ? 10 : -10)} dy="0" className="font-semibold">
          {name}
        </tspan>
        <tspan
          x={ex + (cos >= 0 ? 10 : -10)}
          dy="20"
          className="text-sm fill-gray-500"
        >
          {`${value} (${(percent * 100).toFixed(1)}%)`}
        </tspan>
      </text>
    </g>
  );
};

const PieDonutChart: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to index 0 (Liquidity Pool)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(0); // Return to Liquidity Pool when mouse leaves
  };

  return (
    <div className="w-[800px] h-[450px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={(props: any) =>
              renderActiveShape({
                ...props,
                isMobile,
              } as RenderActiveShapeProps)
            }
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={84}
            outerRadius={160}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            labelLine={false}
            label={!isMobile && CustomLabel}
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.color}
                className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieDonutChart;
