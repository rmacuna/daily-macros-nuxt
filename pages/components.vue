<template>
  <div class="max-w-7xl mx-auto">
    <!-- Macros Card -->
    <div class="py-4 w-80">
      <button
        @click="showMacrosCard = !showMacrosCard"
        class="text-sm underline text-pink-500"
      >
        Macro Card v.0.1
      </button>
      <MacrosCard
        v-show="showMacrosCard"
        :daily-distribution="dailyDistribution"
      />
    </div>

    <!-- BodyProfileList -->
    <div class="py-4">
      <button
        @click="showProfileList = !showProfileList"
        class="text-sm underline text-pink-500"
      >
        Body profile list v.0.1
      </button>
      <BodyProfileList
        v-show="showProfileList"
        :body-profile-list="bodyProfileList"
      />
    </div>

    <!-- Program selection -->
    <div class="py-4">
      <button
        @click="showProgramSelection = !showProgramSelection"
        class="text-sm underline text-pink-500"
      >
        Program selection v.0.1
      </button>
      <ProgramSelection v-show="showProgramSelection" name="Roberto" />
    </div>

    <!-- Calorie counter -->
    <div class="py-4">
      <button
        @click="showCalorieCounter = !showCalorieCounter"
        class="text-sm underline text-pink-500"
      >
        Calorie counter v.0.1
      </button>
      <CalorieCounter
        v-show="showCalorieCounter"
        :total="1280"
        :target-calories="2000"
      />
    </div>

    <!-- Progress  -->
    <div class="py-4">
      <button
        @click="showProgress = !showProgress"
        class="text-sm underline mb-6 text-pink-500"
      >
        Progress v.0.1
      </button>
      <Progress
        v-show="showProgress"
        :current="80"
        :max="100"
        show-percentage
      />
    </div>

    <!-- Meal card -->
    <div class="py-4">
      <button
        @click="showMealCard = !showMealCard"
        class="text-sm underline mb-6 text-pink-500"
      >
        Meal card v.0.1
      </button>

      <MealCard
        v-show="showMealCard"
        size="md"
        :macros="{ carbs: 120, fat: 23, protein: 13 }"
        meal-name="Chicken bread"
        :amount="100"
        brand="Los pollos hermanos"
      />
    </div>

    <!-- Tabs card -->
    <div class="py-4">
      <button
        @click="showTabs = !showTabs"
        class="text-sm underline mb-6 text-pink-500"
      >
        Tabs v.0.1
      </button>
      <Tabs v-show="showTabs">
        <TabsTab title="Macros">Macros</TabsTab>
        <TabsTab title="Nutrients">Nutrients</TabsTab>
      </Tabs>
    </div>

    <div class="py-4">
      <button
        @click="showButtonModal = !showButtonModal"
        class="text-sm underline mb-6 text-pink-500"
      >
        Modal v.0.1
      </button>

      <div v-show="showButtonModal" class="flex flex-col">
        <Button @click="modalOpen = true">Open modal</Button>
        <Modal @modal-close="modalOpen = false" :open="modalOpen">
          <div class="p-4">
            <h1>Modal v.0.1</h1>
          </div>
        </Modal>
      </div>
    </div>

    <div class="py-4">
      <button
        @click="showSidebar = !showSidebar"
        class="text-sm underline mb-6 text-pink-500"
      >
        Sidebar v.0.1
      </button>
      <div v-show="showSidebar" class="w-72">
        <Sidebar />
      </div>
    </div>

    <div class="py-4">
      <button
        @click="showHorizontalCalendar = !showHorizontalCalendar"
        class="text-sm underline mb-6 text-pink-500"
      >
        Horizontal calendar v.0.1
      </button>
      <div v-show="showHorizontalCalendar" class="w-full">
        <HorizontalCalendar />
      </div>
    </div>

    <div class="py-4">
      <button
        @click="showTable = !showTable"
        class="text-sm underline mb-6 text-pink-500"
      >
        Table v0.1
      </button>
      <div v-show="showTable" class="w-full px-2 py-8">
        <MealsTable meal-name="Breakfast" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import macroDistributionMock from "../__mock__/macro-distribution";
import bodyProfileList from "../__mock__/body-profile-list";

interface MacroGoal {
  macro: "carbs" | "protein" | "fat";
  qty: number;
  max: number;
}
const dailyDistribution = ref(macroDistributionMock as MacroGoal[]);
const showMacrosCard = ref(false);
const showProfileList = ref(false);
const showProgramSelection = ref(false);
const showCalorieCounter = ref(false);
const showProgress = ref(false);
const showMealCard = ref(false);
const showTabs = ref(false);
const showButtonModal = ref(false);
const showSidebar = ref(false);
const modalOpen = ref(false);
const showHorizontalCalendar = ref(false);
const showTable = ref(false);
</script>
