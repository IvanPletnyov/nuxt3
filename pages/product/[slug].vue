<template>
  <ProductInfo :slug="slug" :refValue="ref" :utm="utmSource"></ProductInfo>
  <BackLink return-link="/product/productname?ref=googles&utm_source=mysource" return-title="Return to homepage"></BackLink>
  <CustomButton label="Нажми меня" @clicked="onClickHandler" />
</template>

<script setup lang="ts">
const route = useRoute();

const slug = computed(() => route.params.slug as string)
const ref = computed(() => route.query.ref as string || '-')
const utmSource = computed(() => route.query.utm_source as string || '-')

function onClickHandler() {
  console.log('Кнопка была нажата!')
}
</script>