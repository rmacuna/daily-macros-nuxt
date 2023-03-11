<template>
  <li :class="['w-full flex items-center py-2', separatorsClass]">
    <Box>
      icon
    </Box>

    <div class="pl-3 flex flex-col">
      <h1 class="text-sm font-semibold text-slate-900">{{ title }}</h1>
      <span>{{ description }}</span>
    </div>
  </li>
</template>


<script setup lang="ts">

interface Props {
  title: string;
  description: string;
  separators?: boolean;
}

const { separators } = defineProps<Props>();

const separatorsClass = computed(() => separators && 'border-b border-b-slate-200');

</script>