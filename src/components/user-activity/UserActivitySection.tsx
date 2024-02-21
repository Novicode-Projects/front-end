import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Day ${label} : ${payload[0].value} kg`}</p>
        <p className="intro">{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};

type UserActivitySectionProps = {};

export const UserActivitySection = ({ data }: UserActivitySectionProps) => {
  return (
    <section>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="weight" fill="#020203" />
          <Bar yAxisId="right" dataKey="calories" fill="#FF0101" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

/*
          <Bar yAxisId="left" dataKey="Poids (kg)" fill="#020203" />
          <Bar
            yAxisId="right"
            dataKey="Calories brûlées (kCal)"
            fill="#FF0101"
          />*/
