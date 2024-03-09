export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className=" bg-primary text-tertiary">
        <div className="p-2 py-4">
          <p className="label">{`${payload[0].value}kg`}</p>
        </div>
        <div className="p-2 py-4">
          <p className="intro">{`${payload[1].value}Kcal`}</p>
        </div>
      </div>
    );
  }

  return null;
};
