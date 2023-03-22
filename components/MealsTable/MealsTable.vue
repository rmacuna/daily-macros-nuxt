<template>
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-xl font-heading leading-6 text-gray-900">
        {{ mealName }}
      </h1>
      <p v-if="mealComments" class="mt-2 text-sm font-body text-gray-700">
        {{ mealComments }}
      </p>
      <span v-else class="mt-2 text-sm font-body text-gray-700">
        It seems that you have not added any new meals.
      </span>
    </div>

  </div>

  <div class="mt-8 flow-root">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full py-2 align-middle">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">Name
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Brand</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Carbs</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Protein</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fat</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Calories</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="meal in mealData" :key="meal.id">
              <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">{{ meal.name
              }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.brand }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.amount }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.carbs }} g</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.protein }} g</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.fat }} g</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ meal.kcal }}</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                <button @click="deleteRow(meal.id)" class="w-6 h-6">
                  <XMarkIcon class="w-full h-full text-slate-400 hover:text-slate-900 transition-colors" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="justify-center flex w-full cursor-pointer mt-4 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <span class="text-slate-800 text-sm font-body font-normal tracking-wide">
            <PlusIcon class="w-6 h-6 text-slate-900" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon, PlusIcon } from "@heroicons/vue/24/solid";

defineProps(["mealComments", "mealName"]);
const mealData = ref([
  {
    id: "1",
    name: "Chicken bread",
    brand: "",
    amount: "100g",
    carbs: 0,
    protein: 21,
    fat: 10,
    kcal: 123,
  },
  {
    id: "2",
    name: "Rice",
    brand: "Diana",
    amount: "100g",
    carbs: 80,
    protein: 11,
    fat: 8,
    kcal: 320,
  },
  {
    id: "3",
    name: "Protein powder",
    brand: "Optimus Nutrition",
    amount: "1 scoop",
    carbs: 1,
    protein: 24,
    fat: 1,
    kcal: 110,
  },
  // More people...
]);

const deleteRow = (rowId) => {
  mealData.value = mealData.value.filter((el) => el.id !== rowId);
}


</script>
