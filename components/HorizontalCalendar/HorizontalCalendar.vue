<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-center w-full mb-4">
      <h2 class="text-sm font-semibold font-heading">{{ currentMonth }}</h2>
    </div>
    <div class="flex w-full gap-x-5 justify-center items-center">
      <button
        class="w-8 h-8 border-none relative flex items-center justify-center outline-none rounded-full ring-1 ring-offset-4 active:bg-slate-300 hover:bg-slate-200 ring-slate-300 bg-slate-50"
        @click="decrementRange"
      >
        <ChevronLeftIcon class="text-slate-900 w-5 h-5" />
      </button>
      <HorizontalCalendarDay
        v-for="(day, index) in days"
        :key="index"
        :weekday="day.weekday"
        :date="day.date"
        :selected="selectedDate === day.date || day.date === currentDay"
        @click="selectedDate = day.date"
      />
      <button
        class="w-8 h-8 border-none relative flex items-center justify-center outline-none rounded-full ring-1 ring-offset-4 active:bg-slate-300 hover:bg-slate-200 ring-slate-300 bg-slate-50"
        @click="incrementRange"
      >
        <ChevronRightIcon class="text-slate-900 w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { format, addDays, startOfWeek } from "date-fns";
import { range } from "lodash-es";

const currentDate = ref(new Date());
const numDays = ref(7);
const currentDay = ref(format(currentDate.value, "dd"));
const selectedDate = ref(currentDay);

const currentMonth = computed(() => format(currentDate.value, "MMMM yyyy"));
const days = computed(() => {
  const startDay = startOfWeek(currentDate.value, { weekStartsOn: 1 });
  return range(numDays.value).map((index) => {
    const date = addDays(startDay, index);
    return {
      date: format(date, "dd"),
      weekday: format(date, "EEEEEE"),
    };
  });
});

const incrementRange = () => {
  currentDate.value = addDays(currentDate.value, numDays.value);
};

const decrementRange = () => {
  currentDate.value = addDays(currentDate.value, -numDays.value);
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
