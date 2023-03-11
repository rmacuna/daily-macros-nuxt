<template>
  <div class="max-w-7xl mx-auto">

    <!-- Macros Card -->
    <div class="py-4">
      <button @click="showMacrosCard = !showMacrosCard" class="text-sm underline   text-pink-500">Macro Card
        v.0.1</button>
      <MacrosCard v-show="showMacrosCard" :daily-distribution="dailyDistribution" />
    </div>

    <!-- BodyProfileList -->
    <div class="py-4">
      <button @click="showProfileList = !showProfileList" class="text-sm underline  text-pink-500">Body profile list
        v.0.1</button>
      <BodyProfileList v-show="showProfileList" :body-profile-list="bodyProfileList" />
    </div>

    <!-- Program selection -->
    <div class="py-4">
      <button @click="showProgramSelection = !showProgramSelection" class="text-sm underline text-pink-500">Program
        selection v.0.1 </button>
      <ProgramSelection v-show="showProgramSelection" name="Roberto" />
    </div>

    <!-- Calorie counter -->
    <div class="py-4">
      <button @click="showCalorieCounter = !showCalorieCounter" class="text-sm underline text-pink-500">Calorie counter
        v.0.1</button>
      <CalorieCounter v-show="showCalorieCounter" :total="1280" :target-calories="2000" />
    </div>

    <!-- Progress  -->
    <div class="py-4">
      <button @click="showProgress = !showProgress" class="text-sm underline mb-6 text-pink-500">Progress
        v.0.1</button>
      <Progress v-show="showProgress" :current="80" :max="100" show-percentage />

    </div>
  </div>
</template>

<script setup lang="ts">
import macroDistributionMock from '~~/components/__mock__/macro-distribution';
import bodyProfileList from '~~/components/__mock__/body-profile-list';


interface MacroGoal {
  macro: 'carbs' | 'protein' | 'fat';
  qty: number;
  max: number;
}
const dailyDistribution = ref(macroDistributionMock as MacroGoal[]);
const showMacrosCard = ref(true);
const showProfileList = ref(true);
const showProgramSelection = ref(true);
const showCalorieCounter = ref(true);
const showProgress = ref(true);



</script>
