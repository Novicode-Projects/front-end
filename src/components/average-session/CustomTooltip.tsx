export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="p-2 text-sm bg-white shadow-lg">
        <p>{payload[0]?.value} min</p>
      </div>
    );
  }

  return null;
};
