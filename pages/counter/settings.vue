<template>
  <div class="w-full p-4">

    <div class="border-b w-full border-b-gray-200 pb-4">
      <h1 class="text-2xl font-heading">Settings</h1>
    </div>


    <div class="w-full py-4 flex gap-x-4">
      <NuxtLink to="/counter/settings" :class="[
        $route.path === '/counter/settings'
        ? 'text-green-700  bg-green-100 ring-offset-2 ring-green-300 hover:ring-offset-4'
        : 'hover:text-slate-900 text-slate-600 hover:bg-slate-50'
        , 'cursor-pointer relative  font-heading transition-all py-2 px-3  text-sm rounded-lg' ]">Body settings</NuxtLink>

      <NuxtLink to="/counter/settings/meal-preferences" :class="[
          $route.path === '/counter/settings/meal-preferences'
        ? 'text-green-700 bg-green-100 ring-offset-2 ring-green-300 hover:ring-offset-4'
        : 'hover:text-slate-900 text-slate-600 hover:bg-slate-50'
        , 'cursor-pointer  font-heading relative transition-all py-2 px-3  text-sm rounded-lg' ]">Meal preferences</NuxtLink>

    </div>

    <div class="w-full">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>

import { useBodyProfileStore } from '~~/stores/useBodyProfileStore';


const bodyProfileStore = useBodyProfileStore();
// const weightInput = ref(bodyProfileStore.bodyProfile.weight);
// const ageInput = ref(bodyProfileStore.bodyProfile.age);
// const heightInput = ref(bodyProfileStore.bodyProfile.height);
// const trainingGoalsInput = ref(bodyProfileStore.bodyProfile.trainingGoals);
// const activityLevelsInput = ref(bodyProfileStore.bodyProfile.activityLevels);
// const genderInput = ref(bodyProfileStore.bodyProfile.gender);

// const neckInput = ref(bodyProfileStore.bodyProfile.neckCm);
// const waistInput = ref(bodyProfileStore.bodyProfile.waistCm);
// const hipsInput = ref(bodyProfileStore.bodyProfile.hipCm);

// const saveSettings = () => {
//   bodyProfileStore.updateBodyProfile({
//     weight: weightInput,
//     age: ageInput,
//     height: heightInput,
//     trainingGoals: trainingGoalsInput,
//     activityLevels: activityLevelsInput,
//     hipCm: hipsInput,
//     waistCm: waistInput,
//     neckCm: neckInput
//   })
// }

</script>