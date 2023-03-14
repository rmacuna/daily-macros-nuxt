<template>
  <div class="progress-bar bg-gray-200 rounded-md h-[2px] relative overflow-hidden">
    <div class="h-full rounded-bl-md rounded-br-md" :style="{
      background: `linear-gradient(to right, 
            rgba(50, 205, 50, 1) ${carbsPercentage}%, 
            rgba(50, 205, 50, 0) ${carbsPercentage}%, 
            rgba(66, 153, 225, 1) ${carbsPercentage}% ${carbsPercentage + proteinPercentage}%, 
        rgba(66, 153, 225, 0) ${carbsPercentage}% ${carbsPercentage + proteinPercentage}%, 
            #ffcf66 ${carbsPercentage + proteinPercentage}% ${carbsPercentage + proteinPercentage + fatPercentage}%
          )`
    }"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  carbs: number;
  protein: number;
  fat: number;
}
const { carbs, fat, protein } = defineProps<Props>();
const total = ref(carbs + protein + fat);

let carbsPercentage = computed(() => calculatePercentage(carbs, total.value))
let proteinPercentage = computed(() => calculatePercentage(protein, total.value))
let fatPercentage = computed(() => calculatePercentage(fat, total.value))


function calculatePercentage(value: number, total: number) {
  if (total === 0) return 0;
  return Math.round(((value / total) * 100))
}


watchEffect(() => {
  total.value = carbs + protein + fat;
  carbsPercentage = computed(() => calculatePercentage(carbs, total.value));
  proteinPercentage = computed(() => calculatePercentage(protein, total.value));
  fatPercentage = computed(() => calculatePercentage(fat, total.value));
})

</script>