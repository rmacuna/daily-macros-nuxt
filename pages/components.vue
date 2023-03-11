<template>
  <div class="max-w-7xl mx-auto">

    <!-- Macros Card -->
    <div class="py-4">
      <h1 class="text-sm font-bold text-slate-500">Macro Card</h1>
      <MacrosCard :daily-distribution="dailyDistribution" />
    </div>

    <!-- BodyProfileList -->
    <div class="py-4">
      <h1 class="text-sm font-bold text-slate-500">Body profile list</h1>
      <BodyProfileList :body-profile-list="bodyProfileList" />
    </div>

    <!-- Program selection -->

    <div class="py-4">
      <h1 class="text-sm font-bold text-slate-500">Program selection</h1>
      <ProgramSelection name="Roberto" />
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

</script>
