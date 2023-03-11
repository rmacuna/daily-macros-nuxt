<template>
  <select :name="name" :id="id">
    <option v-for="option in data" :key="option.value" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script setup lang="ts">

interface Props {
  name: string;
  id: string;
  data: Record<string, string | number>[];
}

defineProps<Props>();
</script>