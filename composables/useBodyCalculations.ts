import { Person } from "../types";

enum ActivityFactors {
  Sedentary = 1.2,
  Light = 1.375,
  Moderate = 1.55,
  Active = 1.725,
  VeryActive = 1.9,
}

enum DietTypes {
  Keto = "keto",
  Standard = "standard",
  Balanced = "balanced",
  HighProtein = "high_protein",
  Custom = "custom",
}

export type MacroDistribution = {
  carbs: number;
  protein: number;
  fat: number;
}

export type Objectives =
  | "lose_weight"
  | "soft_weight_lose"
  | "maintenance"
  | "gain_weight"
  | "soft_weight_gain";


enum ObjectivesFactor {
  HardGain = 0.2,
  SoftGain = 0.1,
  Maintenance = 0,
  HardLost = -0.2,
  SoftLost = -0.1,
}

const goals = {
  lose_weight: ObjectivesFactor.HardLost,
  soft_weight_lose: ObjectivesFactor.SoftLost,
  maintenance: ObjectivesFactor.Maintenance,
  gain_weight: ObjectivesFactor.HardGain,
  soft_weight_gain: ObjectivesFactor.SoftGain,
};


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
    let BMR;
    const { gender, activityLevels } = person;
    const activityFactor = activityFactors[activityLevels];

    if (gender === "male") {
      BMR = getBMR(person);
      return parseInt((BMR * activityFactor).toFixed(0));
    }
    // Female
    BMR = getBMR(person);
    return parseInt((BMR * activityFactor).toFixed(0));
  };

  const getBMR = (person: Pick<Person, "gender" | "age" | "height" | "weight">) => {
    const { gender, age, height, weight } = person;
    if (gender === "male") {
      return parseInt((10 * weight + 6.25 * height - 5 * age + 5).toFixed(0));
    }
    return parseInt((10 * weight + 6.25 * height - 5 * age - 161).toFixed(0));
  };

  const getBodyFatPercentage = (
    person: Omit<Person, "activityLevels" | "age" | "weight" | "trainingGoals">
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

  const getCalorieTarget = (person: Person, customDelta?: number) => {
    const maintenanceCalories = getMaintenanceCalories(person);
    const target = goals[person.trainingGoals as Objectives];
    const calorieDelta = maintenanceCalories * target;

    if (customDelta) {
      return maintenanceCalories + customDelta;
    }

    return parseInt((maintenanceCalories + calorieDelta).toFixed(0));
  };

  /**
   * This function returns the macro distribution based on the diet type and calorie target
   * @param calorieTarget 
   * @param dietType 
   * @param customDistribution 
   */
  const getMacroDistribution = (calorieTarget: number, dietType: DietTypes, customDistribution = {} as MacroDistribution) => {
    const macroDistribution = {
      protein: 0,
      carbs: 0,
      fat: 0,
    };

    switch (dietType) {
      case DietTypes.Balanced:
        macroDistribution.protein = 0.25 * calorieTarget;
        macroDistribution.carbs = 0.5 * calorieTarget;
        macroDistribution.fat = 0.25 * calorieTarget;
        break;
      case DietTypes.HighProtein:
        macroDistribution.protein = 0.4 * calorieTarget;
        macroDistribution.carbs = 0.4 * calorieTarget;
        macroDistribution.fat = 0.2 * calorieTarget;
        break;
      case DietTypes.Keto:
        macroDistribution.protein = 0.2 * calorieTarget;
        macroDistribution.carbs = 0.05 * calorieTarget;
        macroDistribution.fat = 0.75 * calorieTarget;
        break;
      case DietTypes.Standard:
        macroDistribution.protein = 0.2 * calorieTarget;
        macroDistribution.carbs = 0.6 * calorieTarget;
        macroDistribution.fat = 0.2 * calorieTarget;
        break;
      case DietTypes.Custom:
        macroDistribution.protein = customDistribution.protein * calorieTarget;
        macroDistribution.carbs = customDistribution.carbs * calorieTarget;
        macroDistribution.fat = customDistribution.fat * calorieTarget;
        break;
      default:
        throw new Error("Invalid diet type specified");
    }

    return macroDistribution;
  };



  return {
    getBMR,
    getBodyFatPercentage,
    getMaintenanceCalories,
    getCalorieTarget,
    getMacroDistribution
  }
}
