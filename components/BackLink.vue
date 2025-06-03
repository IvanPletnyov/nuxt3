<template>
  <NuxtLink :to="returnLink"><span>{{ returnTitle }}</span></NuxtLink>
</template>
<script setup lang="ts">
interface BackLinkProps {
  returnTitle: string
  returnLink: string
}
withDefaults(
    defineProps<BackLinkProps>(),
    {
      returnTitle: "Default return link",
      returnLink: "/"
    }
)

</script>