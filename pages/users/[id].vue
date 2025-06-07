<template>
<div>
  <div>Data of user with id: {{ currentUser.id }}</div>
  <div v-if="pending">Загрузка...</div>
  <div v-else-if="error">Ошибка загрузки</div>
  <div v-else>
    <img :src="currentUser.image" :title="fullName" width="300" alt="alt-img"/>
    <div>User: {{ fullName }}</div>
    <div>Email: {{ currentUser.email }}</div>
  </div>
  <BackLink :return-link="'/'" :return-title="'На главную'" />

  <button @click="counter++">Clicked {{ counter }} times</button>

  <div>
    <input v-model="name" />
    <p>Привет, {{ name }}!</p>
  </div>
</div>

<TextInput v-model="username" />
<p>Текущий логин: {{ username }}</p>
</template>

<script setup lang="ts">
import TextInput from "~/components/Components/TextInput.vue";

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
}

const route = useRoute()
const userId = route.params.id as string
const { data, pending, error } = await useAsyncData<User>('loadUserById', () => $fetch('https://dummyjson.com/users/' + userId))
const currentUser = data.value!
const fullName = computed(() => {
  if (!data.value) return ''
  return `${data.value.firstName} ${data.value.lastName}`
})

const counter = ref(0)
const name = ref('adawd')
console.log(name)
console.log(name.value)

const user = reactive({ firstName: 'Ivan', lastName: 'Petrov' })

const fullNameComputedExample = computed(() => `${user.firstName} ${user.lastName}`)

const username = ref('')

watchEffect(() => {
  console.log('username ' + username.value + ' changed.')
})
</script>