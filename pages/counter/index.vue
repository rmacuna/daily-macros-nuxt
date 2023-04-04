<template>
  <div class="grid grid-cols-12 mt-6 px-4">
    <div class="flex flex-col col-span-8">
      <HorizontalCalendar />
      <Tabs class="mt-8">
        <TabsPanel title="Meal 1" class="py-4">
          <MealsTable meal-name="Breakfast" />
        </TabsPanel>
        <TabsPanel title="Meal 2">
          Dinner
        </TabsPanel>
        <TabsPanel title="Meal 3">
          Meal 3
        </TabsPanel>
        <TabsPanel title="Meal 4">
          Meal 4
        </TabsPanel>
      </Tabs>
    </div>

    <div class="flex flex-col col-span-4 pl-8">
      <div class="h-56">
        <MacrosCard :daily-distribution="distribution">
          <template #subtitle>
            <span class="capitalize">{{ bodyProfileStore.bodyProfile.trainingGoals }}</span>
          </template>
        </MacrosCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import macroDistribution from '~~/__mock__/macro-distribution';
import { useBodyProfileStore } from '../../stores/useBodyProfileStore';

const distribution = ref(macroDistribution);
const bodyProfileStore = useBodyProfileStore();

</script>