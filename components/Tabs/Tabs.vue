
<template>
  <div class="tabs">
    <ul class="flex gap-x-3 ">
      <li v-for="title in tabTitles" :key="title" :class="[
        selectedTitle === title && 'text-green-500',
        'cursor-pointer text-slate-900 relative py-1 px-2 text-sm font-semibold'
      ]" @click="handleTabSelected(title)">{{ title }}

        <div v-if="selectedTitle === title" class="w-full h-[2px] bg-green-500 absolute bottom-0 left-0"></div>
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
