"use client";
import React from "react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with an active bar";

const chartData = [
  { browser: "Linux", visitors: 187, fill: "#95A4FC" },
  { browser: "Mac", visitors: 200, fill: "#BAEDBD" },
  { browser: "iOS", visitors: 275, fill: "#1C1C1C" },
  { browser: "Windows", visitors: 173, fill: "#B1E3FF" },
  { browser: "Android", visitors: 93, fill: "#B1E3FF" },
  { browser: "other", visitors: 60, fill: "#A8C5DA" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
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

// Simple function to safely get the label without TypeScript-specific syntax
const getLabel = (value) =>
  chartConfig[value] ? chartConfig[value].label : value;

const Reports = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-xl">
      <div>
        <div className="font-semibold text-xs">Reports Generated</div>
      </div>
      <div>
        <ChartContainer
          config={chartConfig}
          style={{ width: "100%", height: "300px" }}
        >
          <BarChart
            accessibilityLayer
            barCategoryGap="3%" // Controls space between groups
            barGap={1}
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={getLabel}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              fillOpacity={0.8}
              shape={({ fill, x, y, width, height, index }) => (
                <Rectangle
                  x={x}
                  y={y}
                  width={28}
                  height={height}
                  fill={fill}
                  fillOpacity={index === 2 ? 0.8 : 1}
                  stroke={index === 2 ? fill : "none"}
                  radius={[10, 10, 10, 10]}
                />
              )}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Reports;
