<template>
  <div class="flex flex-col">
    <h1 class="text-4xl text-slate-900 font-semibold">{{ total }}<span class="text-sm">/{{ targetCalories }}</span></h1>

    <span class="text-slate-600 text-xs pt-1">Total count today</span>
  </div>
</template>

<script setup lang="ts">

interface Props {
  total: number;
  targetCalories: number;
}

defineProps<Props>();

</script>