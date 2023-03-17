<template>
  <section id="hero" class="relative flex flex-col gap-y-8">
    <h1 class="text-5xl sm:text-7xl text-slate-900 font-bold">{{ title }}</h1>
    <p class="text-base sm:text-xl text-slate-700">{{ description }}</p>

    <div class="max-w-sm">
      <Button class="px-6 py-3 bg-slate-900">Get started</Button>
    </div>
  </section>
</template>

<script setup>
defineProps(['title', 'description'])
</script>