<template>
  <section id="hero" class="relative flex flex-col gap-y-8">
    <h1 class="font-heading text-5xl lg:text-6xl xl:text-7xl text-slate-900 tracking-tighter font-bold">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">{{ heroTitle.firstWord
      }}</span> {{ heroTitle.restOfTheWords }}
    </h1>
    <p class="text-base font-body sm:text-xl font-light text-slate-700 max-w-xl">{{ description }}</p>

    <div class="max-w-sm">
      <Button class="px-6 py-3 bg-slate-900">Get started</Button>
    </div>
  </section>
</template>

<script setup>
const { title } = defineProps(['title', 'description'])

const heroTitle = computed(() => {
  const [firstWord, ...restOfTheWords] = title.split(' ');
  return { firstWord, restOfTheWords: restOfTheWords.join(' ') }
})
</script>