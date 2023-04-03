<template>
  <div
    aria-label="card showing the day in the calendar"
    :class="[
      'flex flex-col border-none outline-none ring-offset-2 ring-1',
      'py-2 px-4 rounded-lg cursor-pointer hover:ring-offset-4 transition-all',
      selected
        ? 'bg-green-500 text-white ring-green-300'
        : 'bg-slate-50 ring-slate-300 hover:bg-slate-100 ',
    ]"
  >
    <h1
      :class="{
        'font-heading text-lg font-semibold': true,
        'text-white': selected,
      }"
    >
      {{ weekday }}
    </h1>
    <span
      :class="{
        'text-slate-400 font-body text-sm': true,
        'text-white': selected,
      }"
      >{{ date }}</span
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  weekday: string;
  date: string;
  selected: boolean;
}

defineProps<Props>();
</script>
