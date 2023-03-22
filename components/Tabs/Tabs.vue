
<template>
  <div class="tabs">
    <ul class="flex gap-x-3 font-heading">
      <li v-for="title in tabTitles" :key="title" :class="[
        selectedTitle === title ? 'text-green-700  font-heading bg-green-100 ring-offset-2 ring-green-300 hover:ring-offset-4' : 'hover:text-slate-900 text-slate-600 hover:bg-slate-50',
        'cursor-pointer relative transition-all py-2 px-3  text-sm rounded-lg'
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
