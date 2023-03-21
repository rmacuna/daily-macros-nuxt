
<template>
  <div class="tabs">
    <ul class="flex gap-x-3 ">
      <li v-for="title in tabTitles" :key="title" :class="[
        selectedTitle === title && 'text-green-700 bg-green-100 ring-offset-2 ring-green-300 hover:ring-green-500 hover:text-green-700',
        'cursor-pointer relative hover:ring-1 transition-all hover:ring-slate-300 hover:ring-offset-2 hover:text-slate-900 py-2 px-3 text-slate-600 text-sm font-semibold rounded-lg'
      ]" @click="handleTabSelected(title)">{{ title }}

      </li>
    </ul>
    <div class="py-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots() as any;
const tabTitles = ref(slots.default().map((tab: any) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);

function handleTabSelected(title: string) {
  selectedTitle.value = title;
}

provide('selectedTitle', selectedTitle);
</script>
