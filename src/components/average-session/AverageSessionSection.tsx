import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { formatXAxis } from "../../service";
import { CustomTooltip } from "./CustomTooltip";

export const AverageSessionSection = ({ sessions }: any) => {
  return (
    <section className="w-[250px] h-[250px]">
      <div className="flex flex-col justify-between w-full h-full p-4 bg-red-500">
        <h2 className="text-white opacity-50 ">
          Durée moyenne des <br />
          sessions
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sessions}
            margin={{ top: 30, right: 20, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickFormatter={formatXAxis}
              stroke="#FFF"
              padding={{ left: 20, right: 20 }}
            />

            {/* @ts-ignore */}
            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
              strokeWidth={2}
              dot={{ stroke: "#FFFFFF", strokeWidth: 2 }}
              activeDot={{ r: 8, fill: "#FFFFFF", stroke: "none" }}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
