type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type KeyData = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type UserMainData = {
  id: number;
  userInfos: UserInfo;
  todayScore?: number; // Optional because it's not present in all objects (assuming a typo for 'score')
  score?: number; // Optional for the same reason
  keyData: KeyData;
};

export const USER_MAIN_DATA: UserMainData[] = [
  {
    id: 21, // ID changed
    userInfos: {
      firstName: "Alexa",
      lastName: "Smith",
      age: 29, // Age changed
    },
    todayScore: 0.2, // Score changed
    keyData: {
      calorieCount: 2100, // Values changed
      proteinCount: 120,
      carbohydrateCount: 310,
      lipidCount: 70,
    },
  },
  {
    id: 29, // ID changed
    userInfos: {
      firstName: "Jordan",
      lastName: "Belfort",
      age: 36, // Age changed
    },
    score: 0.4, // Score changed
    keyData: {
      calorieCount: 2600, // Values changed
      proteinCount: 100,
      carbohydrateCount: 180,
      lipidCount: 90,
    },
  },
];

type Session = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivity = {
  userId: number;
  sessions: Session[];
};

export const USER_ACTIVITY: UserActivity[] = [
  {
    userId: 21, // ID changed
    sessions: [
      {
        day: "2020-08-01", // Dates and values changed
        kilogram: 82,
        calories: 250,
      },
      // Other sessions with changed values
      {
        day: "2020-08-07",
        kilogram: 79,
        calories: 400,
      },
    ],
  },
  {
    userId: 29, // ID changed
    sessions: [
      {
        day: "2020-08-01", // Dates and values changed
        kilogram: 72,
        calories: 250,
      },
      // Other sessions with changed values
      {
        day: "2020-08-07",
        kilogram: 71,
        calories: 410,
      },
    ],
  },
];

type AverageSession = {
  day: number; // day seems to be represented as an integer (e.g., day of the week)
  sessionLength: number; // length of the session in minutes
};

export type UserAverageSessions = {
  userId: number;
  sessions: AverageSession[];
};

export const USER_AVERAGE_SESSIONS: UserAverageSessions[] = [
  {
    userId: 21, // ID changed
    sessions: [
      {
        day: 1,
        sessionLength: 35, // Values changed
      },
      // Other sessions with changed values
      {
        day: 7,
        sessionLength: 65,
      },
    ],
  },
  {
    userId: 29, // ID changed
    sessions: [
      {
        day: 1,
        sessionLength: 35, // Values changed
      },
      // Other sessions with changed values
      {
        day: 7,
        sessionLength: 55,
      },
    ],
  },
];

type PerformanceData = {
  value: number;
  kind: number; // References the key in the 'kind' object
};

// Define the structure for the kinds of performance metrics
type PerformanceKind = {
  [key: number]: string; // A mapping of numbers to performance metric names
};

// Define the structure for a user's performance
export type UserPerformance = {
  userId: number;
  kind: PerformanceKind;
  data: PerformanceData[];
};

export const USER_PERFORMANCE: UserPerformance[] = [
  {
    userId: 21, // ID changed
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 90, // Values changed
        kind: 1,
      },
      // Other data with changed values
      {
        value: 95,
        kind: 6,
      },
    ],
  },
  {
    userId: 29, // ID changed
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 210, // Values changed
        kind: 1,
      },
      // Other data with changed values
      {
        value: 115,
        kind: 6,
      },
    ],
  },
];
