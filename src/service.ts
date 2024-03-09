const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

export const formatXAxis = (tickItem: unknown) => {
  return daysOfWeek[tickItem - 1];
};

export function translateSubjects(arr) {
  const translations = {
    cardio: "cardio",
    energy: "énergie",
    endurance: "endurance",
    strength: "force",
    speed: "vitesse",
    intensity: "intensité",
  };

  return arr.map((item) => ({
    subject: translations[item.subject],
    A: item.A,
    fullMark: item.fullMark,
  }));
}

export const transformedDataForCurrentUserPerformance = (
  currentUserPerformance: any
) => {
  return (
    currentUserPerformance?.data?.map((dataPoint) => ({
      subject: currentUserPerformance.kind[dataPoint.kind],
      A: dataPoint.value,
      fullMark: 100,
    })) || []
  );
};

export const dataWithIndexForCurrentUserActivity = (currentUserActivity) => {
  return currentUserActivity?.sessions.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
};

export const fetchData = async (userId: any) => {
  const userData = await fetch(`http://localhost:3000/user/${userId}`).then(
    (data: any) => data.json()
  );

  const activityData = await fetch(
    `http://localhost:3000/user/${userId}/activity`
  ).then((data: any) => data.json());

  const averageSessionsData = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  ).then((data: any) => data.json());

  const performanceData = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  ).then((data: any) => data.json());

  return [userData, activityData, averageSessionsData, performanceData];
};
