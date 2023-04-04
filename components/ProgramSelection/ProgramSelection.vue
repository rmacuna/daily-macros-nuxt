<template>
  <div>
    <h1 class="text-[40px] pb-1 font-semibold text-slate-900 leading-[30px]">
      <span class="text-2xl text-slate-600">{{ name }}'s</span> <br /> Program
    </h1>

    
    <SimpleSelect v-model="selectedProgram" class="mt-2 text-slate-600" name="program-selection" id="program-selection" :data="basicPrograms" />
  </div>
</template>

<script setup lang="ts">
import basicPrograms from '../../constants/basic-programs';

interface Props {
  name: string;
}
defineProps<Props>()
const selectedProgram = ref("");
</script>