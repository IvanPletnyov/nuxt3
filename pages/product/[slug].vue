<template>
  <h1>This is product page info:</h1>
  <p>Название товара: {{ slug }}</p>
  <p>Реферал: {{ ref }}</p>
  <p>Источник: {{ utmSource }}</p>
</template>

<script setup lang="ts">
const route = useRoute()

const slug = computed(() => route.params.slug as string)
const ref = computed(() => route.query.ref as string || '-')
const utmSource = computed(() => route.query.utm_source as string || '-')
</script>