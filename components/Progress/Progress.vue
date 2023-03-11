<template>
  <div class="w-full rounded-full h-2 bg-slate-100 relative">
    <span v-if="showPercentage" class="text-sm font-semibold absolute right-0 -top-7">{{ progress + '%' }}</span>
    <div class="bg-green-500 h-full rounded-full" :style="{ width: progress + '%' }"> </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  current: number;
  max: number;
  showPercentage?: boolean;
}

const { current, max } = defineProps<Props>();
const progress = computed(() => (current / max) * 100);


</script>
