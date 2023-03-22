<template>
  <div class="flex flex-col w-auto ">
    <h1 class="font-medium font-heading text-gray-500 text-sm capitalize">{{ macro }}</h1>

    <div class="font-semibold mb-1">
      <div v-if="max">
        <span class="text-sm">{{ qty }}</span>
        <span class="text-sm">/{{ max }}g</span>
      </div>
      <div v-else><span class="text-md sm:text-lg">{{ qty }} g</span></div>
    </div>

    <MacroProgressBar v-if="max" :macro="macro" :max-amount="max" :current-amount="qty" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  macro: 'carbs' | 'protein' | 'fat';
  qty: number;
  showProgress?: boolean;
  max?: number;
}
withDefaults(defineProps<Props>(), {
  showProgress: false,
});

</script>
