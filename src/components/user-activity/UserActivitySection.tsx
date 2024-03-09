import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

type UserActivitySectionProps = {
  data: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
};

export const UserActivitySection = ({ data }: UserActivitySectionProps) => {
  return (
    <section className="h-[200px] bg-[#FBFBFB] p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-normal text-secondary">Activité quotidienne</h2>
        <div className="flex gap-10">
          <p className="text-secondary">Poids (kg)</p>
          <p className="text-secondary">Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(tickItem) => tickItem.substring(8, 10)}
          />

          <YAxis yAxisId="left" orientation="left" display="none" />

          <YAxis yAxisId="right" orientation="right" allowDecimals={false} />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#020203"
            barSize={15}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#FF0101"
            barSize={15}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};
