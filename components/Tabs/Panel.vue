<template>
  <div v-if="title === selectedTitle">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['title'])
const selectedTitle = inject('selectedTitle');
</script>
