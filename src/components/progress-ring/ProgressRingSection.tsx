// ProgressRing.tsx

import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

interface ProgressRingProps {
  progress: number | undefined;
}

export const ProgressRingSection: React.FC<ProgressRingProps> = ({
  progress,
}) => {
  const data = [{ value: progress }];

  return (
    <section className="relative flex flex-col  w-[250px] h-[250px] bg-[#FBFBFB]">
      <h2 className=" text-[#282D30] absolute left-5 top-5">Score</h2>
      <div className="flex items-center justify-center p-4">
        <RadialBarChart
          width={200}
          height={200}
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill="#ff6361"
          />
        </RadialBarChart>
        <p className="flex flex-col items-center absolute text-[#74798C]">
          <span className=" font-bold text-[#282D30] text-xl">{progress}%</span>
          de votre
          <br />
          objectif
        </p>
      </div>
    </section>
  );
};
