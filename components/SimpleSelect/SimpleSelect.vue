<template>
  <div>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900 capitalize">{{ name }}</label>
    <div class="mt-2">
      <select   v-model="value" :name="name" :id="id"
        class="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset 
        ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option value="" disabled selected>{{ placeholder }}</option>
        <option v-for="option in data" placeholder="Select a value" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  name: string;
  id: string;
  data: Record<string, string | number>[];
  modelValue: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Select a value"
});
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value);
  }
})
</script>