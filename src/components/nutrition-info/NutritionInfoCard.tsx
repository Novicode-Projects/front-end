type NutritionInfoCardProps = {
  title: string;
  value: string;
  iconUrl: string;
  iconBackgroundColor: string;
};

export const NutritionInfoCard = ({
  title,
  value,
  iconUrl,
  iconBackgroundColor,
}: NutritionInfoCardProps) => {
  return (
    <article className="flex gap-5 bg-[#FBFBFB] w-48 p-4 rounded-sm">
      <div
        style={{
          backgroundColor: iconBackgroundColor,
        }}
        className="flex items-center justify-center p-5 rounded-sm w-30 h-30"
      >
        <img src={iconUrl} alt={title} className="object-contain w-4 h-4 " />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{value}</p>
        <h3 className="text-sm">{title}</h3>
      </div>
    </article>
  );
};
