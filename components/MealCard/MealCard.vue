<template>
  <div class="w-full px-4 bg-gray-50 relative rounded-lg flex flex-col sm:flex-row justify-between">

    <div class="flex flex-col py-4">
      <h1 class="font-semibold text-slate-900 font-heading">{{ mealName }}</h1>
      <div class="flex text-sm text-slate-600 font-body">
        <span>({{ amount }}g)</span>
        <span>|</span>
        <span>{{ brand }}</span>
      </div>
    </div>


    <div class="sm:self-center h-full flex font-heading">
      <div class="flex flex-col w-auto mr-4">
        <h1 class="font-semibold text-slate-600 text-sm capitalize">kcal</h1>
        <div class="font-semibold mb-1">
          <span class="text-sm sm:text-lg">{{ mealCalories }}</span>
        </div>
      </div>
      <div class="flex gap-x-5 border-l pl-4 font-body">
        <MacroItem macro="carbs" :qty="macros.carbs" />
        <MacroItem macro="protein" :qty="macros.protein" />
        <MacroItem macro="fat" :qty="macros.fat" />
      </div>
    </div>




    <div class="absolute bottom-0 left-0 right-0">
      <MealCardProgress :carbs="macros.carbs" :protein="macros.protein" :fat="macros.fat" />
    </div>
  </div>
</template>

<script setup lang="ts">
import getCaloriesFromMacros from './helpers';

interface Props {
  mealName: string;
  amount: number;
  brand?: string;
  kcal?: number;
  macros: {
    carbs: number;
    fat: number;
    protein: number;
  }
}

const { kcal, macros } = defineProps<Props>();
const computedCalories = computed(() => getCaloriesFromMacros(macros))
const mealCalories = ref(kcal || computedCalories);


</script>