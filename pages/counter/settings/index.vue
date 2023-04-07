<template>
  <section class="mt-8">
    <div class="grid grid-cols-12">
      <form name="body-settings-form" class="flex flex-col mt-2 gap-y-4 col-span-12">

        <section>
          <h3 class="m-0 text-lg font-semibold">Basic body information</h3>
          <p class="text-sm text-gray-500 p-0 leading-snug">This information is used to calculate your daily calorie
            needs.</p>
        </section>


        <Input v-model.trim.number="weightInput" :max="300" type="text" id="weigh" name="weight"
          placeholder="Your weight in kg" />
        <Input v-model.trim.number="ageInput" :max="200" type="text" id="age" name="age" placeholder="Your age" />

        <Input v-model.trim.number="heightInput" :max="400" type="text" id="height" name="height"
          placeholder="Your height in cm" />
        <SimpleSelect v-model="sexInput" placeholder="Select you sex" id="sex" name="sex" :data="sexs" />
        <SimpleSelect v-model="trainingGoalsInput" placeholder="Select a training objective" name="training goals"
          id="trainingObjectives" :data="basicPrograms" />
        <SimpleSelect v-model="activityLevelsInput" placeholder="Select your activity levels" name="activity levels"
          id="activityLevels" :data="activityLevelsData" />

        <section>
          <h3 class="m-0 text-lg font-semibold">Measures</h3>
          <p class="text-sm text-gray-500 p-0 leading-snug">
            These measures are used to calculate your body fat percentage.
          </p>
        </section>

        <div class="flex flex-col gap-y-2">
          <Input v-model.trim.number="neckInput" name="Neck (cm)" />
          <Input v-model.trim.number="waistInput" name="Waist (cm)" />
          <Input v-model.trim.number="hipsInput" name="Hips (cm)" />
        </div>

        <div class="flex justify-end py-4">
          <Button @click="saveSettings()" class="px-8">Save</Button>
        </div>
      </form>

    </div>


  </section>
</template>

<script setup>
import sexs from '~~/constants/genders';
import basicPrograms from '~~/constants/basic-programs';
import activityLevelsData from '~~/constants/activity-levels';

// Bind all Input components to the same model
const weightInput = ref(0);
const ageInput = ref(0);
const heightInput = ref(0);
const sexInput = ref('');
const trainingGoalsInput = ref('');
const activityLevelsInput = ref('');




</script>