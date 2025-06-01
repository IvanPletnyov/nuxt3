<template>
  <div>
    <h1>Профиль пользователя {{ userId }}</h1>
    <NuxtLink to="/">Назад</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// тип параметров можно уточнить:
const userId = computed(() => route.params.id as string)
</script>