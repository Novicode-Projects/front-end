import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

interface ChartData {
  subject: string;
  A: number;
  fullMark: number;
}

interface RadarChartComponentProps {
  data: ChartData[];
}

export const RadarChartComponent: React.FC<RadarChartComponentProps> = ({
  data,
}) => {
  return (
    <section className=" w-[250px] h-[250px]">
      <div className="flex items-center justify-center w-full h-full p-4 bg-[#282d30] ">
        <RadarChart outerRadius={90} width={300} height={300} data={data}>
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" />

          <Radar
            name="Mike"
            dataKey="A"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </section>
  );
};
