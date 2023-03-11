<template>
  <ul>
    <ListItem v-for="{ title, value } of bodyProfileList" :title="title" :description="value" separators />
  </ul>
</template>

<script setup>
  defineProps(['bodyProfileList']);

</script>