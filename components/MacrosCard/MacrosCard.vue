<script setup lang="ts">
interface MacroGoal {
  macro: 'carbs' | 'protein' | 'fat';
  qty: number;
  max: number;
}

interface Props {
  dailyDistribution: MacroGoal[];
}

defineProps<Props>();

</script>

<template>
  <div class="py-3 px-4 border border-slate-300 md:w-[356px] rounded-md">
    <div class="flex justify-between text-blue-500 items-center mb-6">
      <h2 class="font-semibold">Macro distribution</h2>
      <button class="text-sm hover:underline">Edit</button>
    </div>

    <!-- Macros items section -->
    <div class="flex gap-x-8 justify-between">
      <MacroItem v-for="{ macro, max, qty } of dailyDistribution" :macro="macro" :qty="qty" :max="max" />
    </div>
  </div>
</template>