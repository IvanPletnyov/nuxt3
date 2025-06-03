<template>
  <button @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'clicked'): void
}>()

function handleClick() {
  emit('clicked')
}
</script>