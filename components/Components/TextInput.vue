<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border px-2 py-1"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>