<template>
  <div class="px-4 overflow-x-auto hover:bg-slate-50 group transition-all hover:ring-offset-4 py-3 w-full ring-1 outline-none ring-offset-2 rounded-lg ring-slate-200">
    <figure class="flex justify-center items-center py-8 text-slate-600 transition-all group-hover:text-slate-900">
      <slot></slot>
    </figure>
    <div class="flex justify-center items-center flex-col ">
      <h1 v-if="title" class="text-lg font-heading text-slate-900 overflow-auto text-ellipsis">{{ title }}</h1>
      <p v-if="description" class="text-sm text-center font-body text-gray-500">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    default: '',
    required: false
  },
  description: {
    default: '',
    required: false,
  }
})
</script>