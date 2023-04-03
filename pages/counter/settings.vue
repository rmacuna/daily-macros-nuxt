<template>
  <div class="w-full p-4">

    <section class="mt-8">
      <h1 class="font-heading text-2xl font-semibold">Body Profile</h1>
      <p class="text-gray-500 font-body">
        This is your body profile based on you body composition information you provided
      </p>

      <div class="my-8">
        <div class="grid grid-cols-4 gap-6 col-span-7">
          <Card v-for="n in bodyProfileStore.profileSummary" :title="n.name" :description="n.description">
            <h1 class="font-body font-semibold text-5xl">{{ n.value }}</h1>
          </Card>
        </div>

        <form name="body-settings-form" class="flex flex-col mt-8 gap-y-4 col-span-10">
          <Input v-model.trim.number="weightInput" :max="300" type="text" id="weigh" name="weight"
            placeholder="Your weight in kg" />
          <Input v-model.trim.number="ageInput" :max="200" type="text" id="age" name="age" placeholder="Your age" />

          <Input v-model.trim.number="heightInput" :max="400" type="text" id="height" name="height"
            placeholder="Your height in cm" />
          <SimpleSelect v-model="genderInput" placeholder="Select you gender" id="gender" name="gender" :data="genders" />
          <SimpleSelect v-model="trainingGoalsInput" placeholder="Select a training objective" name="training goals"
            id="trainingObjectives" :data="basicPrograms" />
          <SimpleSelect v-model="activityLevelsInput" placeholder="Select your activity levels" name="activity levels"
            id="activityLevels" :data="activityLevelsData" />
          <Input v-model.trim.number="neckInput" name="Neck (cm)" />
          <Input v-model.trim.number="waistInput" name="Waist (cm)" />
          <Input v-model.trim.number="hipsInput" name="Hips (cm)" />
          <div class="flex justify-end py-4">
            <Button @click="saveSettings()" class="px-8">Save</Button>
          </div>
        </form>

      </div>
    </section>

  </div>
</template>

<script setup>

import basicPrograms from '../../constants/basic-programs';
import activityLevelsData from '../../constants/activity-levels';
import { useBodyProfileStore } from '~~/stores/useBodyProfileStore';
import genders from '~~/components/constants/genders';

const bodyProfileStore = useBodyProfileStore();
const weightInput = ref(bodyProfileStore.bodyProfile.weight);
const ageInput = ref(bodyProfileStore.bodyProfile.age);
const heightInput = ref(bodyProfileStore.bodyProfile.height);
const trainingGoalsInput = ref(bodyProfileStore.bodyProfile.trainingGoals);
const activityLevelsInput = ref(bodyProfileStore.bodyProfile.activityLevels);
const genderInput = ref(bodyProfileStore.bodyProfile.gender);

const neckInput = ref(bodyProfileStore.bodyProfile.neckCm);
const waistInput = ref(bodyProfileStore.bodyProfile.waistCm);
const hipsInput = ref(bodyProfileStore.bodyProfile.hipCm);

const saveSettings = () => {
  bodyProfileStore.updateBodyProfile({
    weight: weightInput,
    age: ageInput,
    height: heightInput,
    trainingGoals: trainingGoalsInput,
    activityLevels: activityLevelsInput,
    hipCm: hipsInput,
    waistCm: waistInput,
    neckCm: neckInput
  })
}

</script>