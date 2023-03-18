<template>
  <header class="relative flex justify-between items-center px-4 xl:px-0">
    <div id="app-logo" name="app-logo">
      <span>Logo</span>
    </div>
    <nav class="hidden sm:flex">
      <ul role="navigation" name="app-navigation-links" class="list-none  font-body flex gap-x-20">
        <li v-for="link, index in navLinks" :key="index" class="p-1 text-slate-600 hover:bg-slate-50 rounded-lg px-4 py-2 transition-colors cursor-pointer hover:text-slate-900">{{
          link }}</li>
      </ul>
    </nav>
    <div name="actions">
      <Button class="bg-slate-900 hover:bg-slate-800 focus-visible:outline-slate-900">Go to app</Button>
    </div>
  </header>
</template>

<script setup>
const navLinks = ref(['Features', 'Blog', 'Meals', 'Shop']);
</script>