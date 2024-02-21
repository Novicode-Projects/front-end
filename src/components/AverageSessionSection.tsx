// AverageSessionDurationChart.tsx

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SessionData = {
  day: string;
  duration: number;
};

type AverageSessionDurationChartProps = {
  data: SessionData[];
};

const CustomTick = ({ x, y, payload }: any) => {
  const isWeekend = payload.value === "S" || payload.value === "D";
  const textStyle = isWeekend ? "text-red-200" : "text-white";
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        className={`${textStyle}`}
      >
        {payload.value}
      </text>
    </g>
  );
};

export const AverageSessionSection = ({ data }) => {
  return (
    <div className="p-6 bg-red-500">
      <h2 className="mb-4 text-2xl text-white">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="duration"
            stroke="white"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
