<template>
  <ProductInfo :slug="slug" :refValue="ref" :utm="utmSource"></ProductInfo>
  <BackLink :return-link="productPageData.returnLink" :return-title="productPageData.returnTitle"></BackLink>
  <CustomButton :label="productPageData.label" @clicked="onClickHandler" />
  <ConfirmCard :buttonText="productPageData.buttonText" @clickConfirm="handleClickConfirm()">
    This is a slot content!
  </ConfirmCard>
</template>

<script setup lang="ts">
import ConfirmCard from "~/components/Cards/ConfirmCard.vue"

interface ProductPageDataInterface {
  returnLink: string,
  returnTitle: string,
  label: string,
  buttonText: string
}
const productPageData: ProductPageDataInterface = {
  returnLink: "/product/productname?ref=googles&utm_source=mysource",
  returnTitle: "Return to homepage",
  label: "Нажми меня",
  buttonText: "My test button"
}

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const ref = computed(() => route.query.ref as string || '-')
const utmSource = computed(() => route.query.utm_source as string || '-')

function onClickHandler() {
  console.log('Кнопка была нажата!')
}

function handleClickConfirm()
{
  alert('Emit button event!!')
}
</script>