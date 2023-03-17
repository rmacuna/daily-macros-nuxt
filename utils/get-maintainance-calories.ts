import { Person } from "../types";

enum ActivityFactors {
  Sedentary = 1.2,
  Light = 1.375,
  Moderate = 1.55,
  Active = 1.725,
  VeryActive = 1.9,
}

const activityFactors: { [key: string]: number } = {
  sedentary: ActivityFactors.Sedentary,
  light: ActivityFactors.Light,
  moderate: ActivityFactors.Moderate,
  active: ActivityFactors.Active,
  veryActive: ActivityFactors.VeryActive,
};

export type ActivityLevels =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very active";

export const getBMR = (person: Omit<Person, "activityLevel">) => {
  const { gender, age, height, weight } = person;
  if (gender === "male") {
    return parseInt((10 * weight + 6.25 * height - 5 * age + 5).toFixed(0));
  }
  return parseInt((10 * weight + 6.25 * height - 5 * age - 161).toFixed(0));
};

const getMaintenanceCalories = (person: Person) => {
  let BMR: number;
  const { gender, activityLevel } = person;
  const activityFactor = activityFactors[activityLevel];

  if (gender === "male") {
    BMR = getBMR(person);
    return parseInt((BMR * activityFactor).toFixed(0));
  }
  // Female
  BMR = getBMR(person);
  return parseInt((BMR * activityFactor).toFixed(0));
};

export default getMaintenanceCalories;