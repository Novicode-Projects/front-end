// RadarChartComponent.tsx

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

interface ChartData {
  subject: string;
  A: number;
  fullMark: number;
}

interface RadarChartComponentProps {
  data: ChartData[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => {
  return (
    <section className="">
      <div className="flex items-center justify-center w-full h-full p-4 bg-gray-800">
        <RadarChart outerRadius={90} width={300} height={300} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />

          <Radar
            name="Mike"
            dataKey="A"
            stroke="#ff6361"
            fill="#ff6361"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </section>
  );
};

export default RadarChartComponent;
