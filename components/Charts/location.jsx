"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A donut chart";
const chartData = [
  { browser: "Nigeria", visitors: 275, fill: "#1C1C1C" },
  { browser: "Ghana", visitors: 200, fill: "#B1E3FF" },
  { browser: "Kenya", visitors: 187, fill: "#A1E3CB" },
  { browser: "Benin Republic", visitors: 73, fill: "#A8C5DA" },
];
const chartConfig = {
  visitors: {
    label: "location",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};
const Location = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-xl">
      <div>
        <div className="font-semibold text-xs">Traffic by locations</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <di>
          <ChartContainer
            config={chartConfig}
            style={{ width: "100%", height: "300px" }}
            className="mx-auto aspect-square overflow-x-auto"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={40}
              />
            </PieChart>
          </ChartContainer>
        </di>
        <div className="space-y-4 pt-20">
          <div className="text-[12px] flex justify-between items-center">
            <div className="flex justify-start items-center space-x-1">
              <div className="w-[5px] h-[5px] bg-[#1C1C1C] rounded-full"></div>
              <div>Nigeria</div>
            </div>
            <div>38.6%</div>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <div className="flex justify-start items-center space-x-1">
              <div className="w-[5px] h-[5px] bg-[#A1E3CB] rounded-full"></div>
              <div>Ghana</div>
            </div>
            <div>22.5%</div>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <div className="flex justify-start items-center space-x-1">
              <div className="w-[5px] h-[5px] bg-[#B1E3FF] rounded-full"></div>
              <div>Kenya</div>
            </div>
            <div>38.6%</div>
          </div>
          <div className="text-[12px] flex justify-between items-center">
            <div className="flex justify-start items-center space-x-1">
              <div className="w-[5px] h-[5px] bg-[#A8C5DA] rounded-full"></div>
              <div>Benin Republic</div>
            </div>
            <div>8.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
