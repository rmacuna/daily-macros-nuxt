<template>
  <div class="grid grid-cols-12 mt-6">
    <div class="flex flex-col col-span-8">
      <HorizontalCalendar />
      <Tabs class="mt-8">
        <TabsPanel title="Meal 1" class="py-4">
          Breakfast
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
    
    <MacrosCard class="col-span-4"  :daily-distribution="distribution" />
  </div>
</template>

<script setup>
import macroDistribution from '~~/__mock__/macro-distribution';
const distribution = ref(macroDistribution);
</script>