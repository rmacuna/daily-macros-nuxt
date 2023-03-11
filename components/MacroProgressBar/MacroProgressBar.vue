<script setup lang="ts">

interface Props {
  maxAmount: number;
  currentAmount: number;
  macro: "carbs" | "protein" | "fat";
}

const { currentAmount, maxAmount, macro } = defineProps<Props>();

const progress = computed(() => (currentAmount / maxAmount) * 100);

const barColor = computed(() => ({
  "h-full bg-green-500": macro === 'carbs',
  "h-full bg-blue-500": macro === 'protein',
  "h-full bg-yellow-500": macro === 'fat'
}));

</script>

<template>
  <div class="h-2 bg-slate-200 rounded-full">
    <div :class="[barColor, 'rounded-full']" :style="{ width: progress + '%' }"></div>
  </div>
</template>