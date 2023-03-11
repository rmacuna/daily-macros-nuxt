
<script setup lang="ts">
import macroDistributionMock from '~~/components/__mock__/macro-distribution';

interface MacroGoal {
  macro: 'carbs' | 'protein' | 'fat';
  qty: number;
  max: number;
}
const dailyDistribution = ref(macroDistributionMock as MacroGoal[]);

</script>

<template>
  <div class="max-w-7xl mx-auto">

    <!-- Macros Card -->
    <div class="py-4">
      <h1 class="text-sm font-bold text-slate-500">Macro Card</h1>
      <MacrosCard :daily-distribution="dailyDistribution" />
    </div>
  </div>
</template>