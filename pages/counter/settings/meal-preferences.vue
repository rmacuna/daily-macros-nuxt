<template>
  <div class="pt-4">
    <section class="pt-4">
      <h1 class="text-lg font-semibold">Macro distribution</h1>
      <p class="text-gray-500 font-body pb-3 leading-snug">Adjust the macro distribution according to your needs</p>

      <Input v-model="carbsInput" placeholder="Carbs %"/> 
      <Input placeholder="Protein %" />
      <Input placeholder="Fat % " />
    </section>

    <section class="pt-4">
      <h3>Meal frequency</h3>
      <p class="text-sm font-body text-gray-500 p-0 leading-snug">
        How many meals do you eat per day?</p>
      <Input placeholder="Meal frequency" v-model="mealFrequency" />
    </section>

    <section class="pt-4">
      <SimpleSelect name="Diet type" id="dietsInput" v-model="selectedDiet" placeholder="Select a diet" :data="diets" />
    </section>

  </div>
</template>

<script setup>
import diets from '~~/constants/diets.json';

const localStorage = useLocalStorage();


const selectedDiet = ref("");
const carbsInput = ref("50");
const mealFrequency = ref("3");

</script>