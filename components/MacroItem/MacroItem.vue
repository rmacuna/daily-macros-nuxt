<script setup lang="ts">
interface Props {
  macro: 'carbs' | 'protein' | 'fat';
  qty: number;
  showProgress?: boolean;
  max?: number;
}
withDefaults(defineProps<Props>(), {
  showProgress: false
});

</script>

<template>
  <div class="flex flex-col w-auto">
    <h1 class="font-semibold text-slate-500 text-sm capitalize">{{ macro }}</h1>

    <div class="font-semibold mb-1">
      <div v-if="max"><span class="text-xl">{{ qty }}</span><span class="text-sm">/{{ max }}g</span></div>
      <div v-else><span>{{ qty }}</span></div>
    </div>

    <MacroProgressBar v-if="max" :macro="macro" :max-amount="max" :current-amount="qty" />
  </div>
</template>