import { NutritionInfoCard } from "./NutritionInfoCard";

import pathIcon from "../../assets/icons/nutrition-info/path.png";
import chickenIcon from "../../assets/icons/nutrition-info/chicken.png";
import appleIcon from "../../assets/icons/nutrition-info/apple.png";
import cheeseburgerIcon from "../../assets/icons/nutrition-info/cheeseburger.png";

type NutritionInfoSectionProps = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export const NutritionInfoSection = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}: NutritionInfoSectionProps) => {
  return (
    <section className="flex flex-col gap-12">
      <NutritionInfoCard
        title="Calories"
        value={`${calorieCount}kCal`}
        iconUrl={pathIcon}
        iconBackgroundColor="#fbe9ea"
      />

      <NutritionInfoCard
        title="Proteines"
        value={`${proteinCount}g`}
        iconUrl={chickenIcon}
        iconBackgroundColor=" #4AB8FF1A"
      />

      <NutritionInfoCard
        title="Glucides"
        value={`${carbohydrateCount}g`}
        iconUrl={appleIcon}
        iconBackgroundColor="#fbf6e5"
      />

      <NutritionInfoCard
        title="Lipides"
        value={`${lipidCount}g`}
        iconUrl={cheeseburgerIcon}
        iconBackgroundColor="#FD51811A"
      />
    </section>
  );
};
