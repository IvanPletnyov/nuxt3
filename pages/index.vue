<template>
  <div>
    <h1>Главная страница</h1>
    <NuxtLink to="/about">Перейти на About</NuxtLink> |
    <NuxtLink :to="`/user/42`">Открыть профиль юзера 42</NuxtLink>
  </div>
</template>