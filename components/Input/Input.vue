<template>
  <div>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900 capitalize">{{ name }}</label>
    <div class="mt-2">
      <input v-model="value" :type="type" :name="name"
        :id="id"
        :max="max"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-body px-4 shadow-sm ring-1 ring-inset ring-gray-300 
        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'name', 'id', 'placeholder', 'modelValue', 'max']);
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})


</script>