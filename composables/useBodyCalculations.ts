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

export function useBodyCalculations() {
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

  const getBMR = (person: Omit<Person, "activityLevel">) => {
    const { gender, age, height, weight } = person;
    if (gender === "male") {
      return parseInt((10 * weight + 6.25 * height - 5 * age + 5).toFixed(0));
    }
    return parseInt((10 * weight + 6.25 * height - 5 * age - 161).toFixed(0));
  };

  const getBodyFatPercentage = (
    person: Omit<Person, "activityLevel" | "age" | "weight">
  ) => {
    let leanBodyMass;
    const { gender, height, hipCm = 0, neckCm = 0, waistCm = 0 } = person;

    // Calculate body fat percentage based on gender
    switch (gender) {
      case "male": {
        const factor1 = 4.15;
        const factor2 = 0.082;
        const factor3 = 94.42;
        leanBodyMass =
          height * 0.3937 -
          waistCm * 0.3937 * factor1 +
          neckCm * 0.3937 * factor2 -
          factor3;
        break;
      }
      case "female":
        {
          const factor1 = 4.15;
          const factor2 = 0.082;
          const factor3 = 72.56;
          const factor4 = 4.15;
          leanBodyMass =
            factor1 * height * 0.3937 -
            factor2 * waistCm * 0.3937 +
            factor4 * hipCm * 0.3937 -
            factor3;
        }
        break;
      default:
        throw new Error("Invalid gender specified");
    }
    const bodyFatPercentage =
      ((1.2 * (waistCm - neckCm) -
        0.23 * height +
        (gender === "female" ? 5.4 : 0)) /
        leanBodyMass) *
      100;
    return bodyFatPercentage.toFixed(2);
  };

  const getCalorieTarget = () => {}




  return {
    getBMR, 
    getBodyFatPercentage, 
    getMaintenanceCalories,
    getCalorieTarget
  }
}
