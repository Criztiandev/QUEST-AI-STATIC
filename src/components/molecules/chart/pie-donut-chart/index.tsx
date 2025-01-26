import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Sector, Cell } from "recharts";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

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

const data: DataItem[] = [
  { name: "Chrome", value: 100, color: "#1e40af" },
  { name: "Safari", value: 500, color: "#0369a1" },
  { name: "Other", value: 150, color: "#059669" },
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload } =
    props;
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
      />
    </g>
  );
};

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

  // Point inside pie chart
  const sx = cx + (outerRadius - 20) * cos;
  const sy = cy + (outerRadius - 20) * sin;

  // Middle point for the curve
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;

  // End point near label
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";
  const fill = data[index]?.color || "#000";

  return (
    <g>
      {/* Circle at the start (inside pie) */}
      <circle
        cx={sx}
        cy={sy}
        r={4}
        fill={fill}
        stroke="white"
        strokeWidth={2}
      />

      {/* Curved arrow with increased thickness */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="white"
        strokeWidth={3}
        fill="none"
      />

      {/* Labels with customizable size */}
      <text
        x={ex + (cos >= 0 ? 10 : -10)}
        y={ey}
        textAnchor={textAnchor}
        className="text-base font-medium fill-gray-700" // Adjust size with text-sm, text-base, text-lg etc.
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-[800px] h-[450px] ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={84}
            outerRadius={160}
            dataKey="value"
            onMouseEnter={onPieEnter}
            labelLine={false}
            label={CustomLabel}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieDonutChart;
