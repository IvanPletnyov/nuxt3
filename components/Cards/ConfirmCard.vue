<template>
  <div class="p-4 border rounded shadow bg-white">
    <slot/>
    <button @click="emit('clickConfirm')"> {{ buttonText }}</button>
  </div>
</template>
<script setup lang="ts">
interface CardsProps {
  buttonText: string
}
defineProps<CardsProps>()

const emit = defineEmits<{
  (event: 'clickConfirm'): void
}>()
</script>