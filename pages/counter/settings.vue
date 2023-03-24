<template>
  <div class="w-full p-4">
    <h1 class="font-heading text-2xl font-semibold">Body Settings</h1>
    <span class="text-gray-500 font-body">Configure your body preferences</span>

    <div class="pt-8 flex flex-col gap-y-4">
      <Input v-model="weight" type="text" id="weigh" name="weight" placeholder="Your weight in kg" />
      <Input v-model="age" type="text" id="age" name="age" placeholder="Your age" />
      <Input v-model="height" type="text" id="height" name="height" placeholder="Your height in cm" />
      <SimpleSelect v-model="trainingGoals" placeholder="Select a training objective" name="training goals"
        id="trainingObjectives" :data="basicPrograms" />
      <SimpleSelect v-model="activityLevels" placeholder="Select your activity levels" name="activity levels"
        id="activityLevels" :data="activityLevelsData" />
    </div>

    <section class="mt-8">
      <h1 class="font-heading text-2xl font-semibold">Body Profile</h1>
      <p class="text-gray-500 font-body">
        This is your body profile based on you body composition information you provided
      </p>
    </section>
  </div>
</template>

<script setup>


import basicPrograms from '../../components/constants/basic-programs';
import activityLevelsData from '../../components/constants/activity-levels';


// This information should be moved to a global state management solution
const weight = ref("");
const age = ref("");
const height = ref("");
const trainingGoals = ref("");
const activityLevels = ref("");



</script>