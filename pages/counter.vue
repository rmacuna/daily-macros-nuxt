<template>
  <div class="w-full h-screen">
    <NuxtLayout name="with-sidebar-layout">
      <template #sidebar>
        <Sidebar />
      </template>
      <template #content>
        <NuxtPage />
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false
  })
</script>
