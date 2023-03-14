interface Macros {
  carbs: number;
  protein: number;
  fat: number;
}

const getCaloriesFromMacros = ({ carbs, protein, fat }: Macros) => {
  const carbsCalories = carbs * 4; // 1 gram of carbs contains 4 calories
  const proteinCalories = protein * 4; // 1 gram of protein contains 4 calories
  const fatCalories = fat * 9; // 1 gram of fat contains 9 calories

  const totalCalories = carbsCalories + proteinCalories + fatCalories;

  return totalCalories;
};

export default getCaloriesFromMacros;
