"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 114, mobile: 260 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const Users = () => {
  return (
    <div className="py-6 pr-6 bg-[#F7F9FB] rounded-xl">
      <div className="flex justify-start space-x-4 items-center px-6 pb-6">
        <div className="flex justify-between space-x-4 items-center">
          <div className="font-semibold text-xs">Total Users</div>
          <div className="text-[#1C1C1C66] text-xs">Total projects</div>
          <div className="text-[#1C1C1C66] text-xs">Operating Status</div>
        </div>
        <div>|</div>
        <div className="flex justify-start space-x-8">
          <div className="flex justify-start items-center space-x-1">
            <img src="/dot-black.svg" />
            <div className="text-xs">This Year</div>
          </div>
          <div className="flex justify-start items-center space-x-1">
            <img src="/dot-blue.svg" />
            <div className="text-xs">Last Year</div>
          </div>
        </div>
      </div>
      <section>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}k`} // Example formatter for currency
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0}
              stroke="#A8C5DA"
              strokeDasharray="3 3"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#F3F3F3"
              fillOpacity={0.4}
              stroke="#1C1C1C"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </section>
    </div>
  );
};

export default Users;
