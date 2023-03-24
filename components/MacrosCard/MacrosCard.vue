<script setup lang="ts">
interface MacroGoal {
  macro: 'carbs' | 'protein' |'fat';
  qty: number;
  max: number;
}

interface Props {
  dailyDistribution: MacroGoal[];
}

const { dailyDistribution } = defineProps<Props>();

const calorieCount = ref(1200);
const targetCalories = ref(2000); // This will be a global state (Comming from the calculation of requirements)

</script>

<template>
  <div class="p-[21px] w-[300px] ring-1 ring-offset-4 ring-slate-200 bg-slate-50 rounded-lg">
    <div class="flex flex-col text-blue-500 mb-4">
      <h2 class="font-semibold font-heading text-2xl text-slate-900">Your goals</h2>
      <span class="text-slate-500 font-body text-sm p-0 m-0">Macros today</span>
    </div>
    <div class="flex gap-x-6 justify-between mb-14">
      <MacroItem v-for="{ macro, max, qty } of dailyDistribution" :macro="macro" :qty="qty" :max="max" />
    </div>

    <div class="flex justify-between  items-center">
      <span class="text-gray-500 text-sm font-heading">Total count today: </span>
      <h3 class="text-slate-900 text-2xl font-body font-semibold">{{ calorieCount  }}/<span class="text-sm">{{ targetCalories }}</span></h3>
    </div>
  </div>
</template>