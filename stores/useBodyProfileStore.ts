import { Gender } from "~~/types";


interface BodyProfileProps {
  age: number;
  weight: number;
  height: number,
  activityLevels: string,
  trainingGoals: string,
  gender: Gender;
  neckCm?: number;
  waistCm?: number;
  hipCm?: 127;
  customDelta?: number
}

export const useBodyProfileStore = defineStore("bodyProfile", () => {
  const { getBMR, getBodyFatPercentage, getCalorieTarget, getMacroDistribution } =
    useBodyCalculations();

  const bodyProfile = ref({
    age: 20,
    weight: 55,
    height: 165,
    activityLevels: "moderate",
    trainingGoals: "maintenance",
    gender: "female" as Gender,
    neckCm: 37,
    waistCm: 90,
    hipCm: 127,
    customDelta: 0
  });

  const dailyDistribution = ref({
    carbs: {
      consumed: 0,
      target: 0,
    },
    protein: {
      consumed: 0,
      target: 0,
    },
    fat: {
      consumed: 0,
      target: 0,
    },
  })

  const updateBodyProfile = (newValue: BodyProfileProps) => {
    bodyProfile.value = {
      ...bodyProfile.value,
      ...newValue
    };

    // Recalculate the daily distribution
    const { carbs, protein, fat } = getMacroDistribution(calorieTarget.value, "Standard");
    dailyDistribution.value['carbs'].target = carbs;
    dailyDistribution.value['protein'].target = protein;
    dailyDistribution.value['fat'].target = fat;
  };

  const bodyBMI = computed(() => {
    const { weight, height } = bodyProfile.value;
    const heightMt = height / 100;
    const bmi = weight / heightMt ** 2;
    return bmi.toFixed(2);
  });

  const calorieTarget = computed(() => {
    const calorieTarget = getCalorieTarget(bodyProfile.value, bodyProfile.value.customDelta)
    return calorieTarget;
  });

  const basalMetabolism = computed(() => {
    const { age, weight, height, gender } = bodyProfile.value;
    const bmr = getBMR({ age, gender, height, weight });
    return bmr;
  });

  // Gender in this case is important to calculate with more accuracy the body fat. 
  // Even that it's still an aproximation
  const bodyFat = computed(() => {
    const { gender, height, waistCm, neckCm, hipCm } = bodyProfile.value;
    const bodyFatPercentage = getBodyFatPercentage({
      gender,
      height,
      hipCm,
      neckCm,
      waistCm,
    });
    return bodyFatPercentage;
  });

  const profileSummary = computed(() => {
    return [
      {
        name: "Basal metabolism",
        value: basalMetabolism.value,
        description: "This is what your body requires without doing anything",
      },
      {
        name: "Calorie target",
        value: calorieTarget.value,
        description: `10% increase`,
      },
      {
        name: "BMI",
        value: bodyBMI.value,
        description: "This is you BMI Index",
      },
      {
        name: "Body fat %",
        value: bodyFat.value,
        description: "You are very lean!",
      },
      {
        name: "height",
        value: bodyProfile.value.height,
        description: "In cm",
      },
      {
        name: "weight",
        value: bodyProfile.value.weight,
        description: "In kg",
      },
      {
        name: "age",
        value: bodyProfile.value.age,
        description: "",
      },
    ];
  });

  return { updateBodyProfile, bodyProfile, calorieTarget, profileSummary, dailyDistribution };
});
