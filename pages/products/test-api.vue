<template>
  <div>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка загрузки</div>
    <div v-else>
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p><strong>Цена:</strong> {{ product.price }}$</p>
      <img :src="product.images[0]" alt="product image" width="300" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

const { data, pending, error } = await useAsyncData<Product>('productData', () =>
    $fetch('https://dummyjson.com/products/1')
)

const product = data.value!
</script>