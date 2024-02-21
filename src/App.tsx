import { useEffect, useState } from "react";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  UserMainData,
  UserActivity,
  UserPerformance,
  UserAverageSessions,
} from "./assets/mock.ts";

import { Header } from "./components/Header";
// import { Sidebar } from "./components/Sidebar";

import { NutritionInfoSection } from "./components/nutrition-info/NutritionInfoSection.tsx";

import { UserActivitySection } from "./components/user-activity/UserActivitySection.tsx";
import { AverageSessionSection } from "./components/AverageSessionSection.tsx";
import { UserPerformanceSection } from "./components/UserPerformanceSection.tsx";
import { ProgressRingSection } from "./components/ProgressRingSection.tsx";
import RadarChartComponent from "./components/RadarChartComponent.tsx";

function App() {
  const [userIndex, setUserIndex] = useState(0);
  console.log(USER_PERFORMANCE);

  useEffect(() => {
    fetch("http://localhost:3000/user/0").then((response: Response) => {
      response.json().then((data: any) => {
        // console.log(data);
      });
    });
  }, []);

  const currentUser = USER_MAIN_DATA[userIndex] as UserMainData;

  const currentUserActivity: UserActivity = USER_ACTIVITY.find(
    (activity: UserActivity) => activity.userId === currentUser.id
  ) as UserActivity;

  const currentUserAverageSessions: UserAverageSessions =
    USER_AVERAGE_SESSIONS.find(
      (averageSession: UserAverageSessions) =>
        averageSession.userId === currentUser.id
    ) as UserAverageSessions;

  const currentUserPerformance: UserPerformance = USER_PERFORMANCE.find(
    (performance: UserPerformance) => performance.userId === currentUser.id
  ) as UserPerformance;

  const data = [
    {
      subject: "Intensité",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      fullMark: 150,
    },
  ];

  const transformedData = currentUserPerformance.data.map((dataPoint) => {
    return {
      subject: currentUserPerformance.kind[dataPoint.kind],
      A: dataPoint.value,
      fullMark: 100,
    };
  });

  console.log(transformedData);

  // data.ts

  const sessionData = [
    { day: "L", duration: 60 },
    { day: "M", duration: 45 },
    { day: "M", duration: 30 },
    { day: "J", duration: 50 },
    { day: "V", duration: 70 },
    { day: "S", duration: 90 },
    { day: "D", duration: 80 },
  ];

  const activityData = [
    { day: 1, weight: 68, calories: 400 },
    { day: 2, weight: 68, calories: 400 },
    { day: 3, weight: 68, calories: 400 },
    { day: 4, weight: 68, calories: 400 },
    { day: 5, weight: 68, calories: 400 },
    // ... Ajoutez les données pour chaque jour
  ];

  return (
    <>
      <Header />

      <div className="h-full">
        <main className="flex flex-col">
          <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-semibold text-secondary">
              Bonjour
              <span className="text-primary">
                {` ${currentUser.userInfos.firstName}`}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col">
              <UserActivitySection data={activityData} />
              <div className="flex justify-center w-full gap-10">
                <AverageSessionSection data={sessionData} />
                <RadarChartComponent data={transformedData} />
                <ProgressRingSection progress={80} />
              </div>
            </div>
            <NutritionInfoSection
              calorieCount={currentUser.keyData.calorieCount}
              proteinCount={currentUser.keyData.proteinCount}
              carbohydrateCount={currentUser.keyData.carbohydrateCount}
              lipidCount={currentUser.keyData.lipidCount}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

// <Sidebar />
// <UserPerformanceSection />
