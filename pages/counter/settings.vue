<template>
  <div class="w-full p-4">

    <section class="mt-8">
      <h1 class="font-heading text-2xl font-semibold">Body Profile</h1>
      <p class="text-gray-500 font-body">
        This is your body profile based on you body composition information you provided
      </p>

      <div class="my-8">
        <div class="grid grid-cols-3 gap-6">
          <Card v-for="n in bodyProfileSummary" :title="n.name" :description="n.description">
            <h1 class="font-body font-semibold text-5xl">{{ n.value }}</h1>
          </Card>
        </div>
      </div>
    </section>

    <h1 class="font-heading text-2xl font-semibold">Body Settings</h1>
    <span class="text-gray-500 font-body">Configure your body preferences</span>

    <div class="pt-8 flex flex-col gap-y-4">
      <Input v-model.trim.number="weight" type="text" id="weigh" name="weight" placeholder="Your weight in kg" />
      <Input v-model.trim.number="age" type="text" id="age" name="age" placeholder="Your age" />
      <Input v-model.trim.number="height" type="text" id="height" name="height" placeholder="Your height in cm" />
      <SimpleSelect v-model="trainingGoals" placeholder="Select a training objective" name="training goals"
        id="trainingObjectives" :data="basicPrograms" />
      <SimpleSelect v-model="activityLevels" placeholder="Select your activity levels" name="activity levels"
        id="activityLevels" :data="activityLevelsData" />
    </div>
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
const calorieTarget = ref(2000);

const bodyProfileSummary = ref([
  {
    name: 'Basal metabolism',
    value: 1516,
    description: 'This is what your body requires without doing anything'
  },
  {
    name: 'Calorie target',
    value: calorieTarget,
    description: `10% increase`,
  },
  {
    name: 'BMI',
    value: 23.1,
    description: "This is you BMI Index"
  },
  {
    name: 'Body fat %',
    value: 10.1,
    description: "You are very lean!"
  },
  {
    name: 'Water requirements',
    value: 2000,
    description: "2000ml or 8 glass of water"
  },
  {
    name: 'height',
    value: height.value,
    description: 'In cm'
  },
  {
    name: 'weight',
    value: `${weight.value}`,
    description: 'In kg'
  },
]
)

watch(weight, (val) => {
  bodyProfileSummary.value = bodyProfileSummary.value.map((el) => {
    if (el.name === 'weight') {
      return {
        name: 'weight',
        value: val,
        description: 'In cm'
      }
    }
    return el;
  })
})

</script>