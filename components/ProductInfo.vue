<template>
  <div>
    <h2>Информация о товаре</h2>
    <p>Название: {{ slug }}</p>
    <p>Реферал: {{ refValue }}</p>
    <p>Источник: {{ utm }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
  refValue: string
  utm: string
}

defineProps<Props>()
</script>