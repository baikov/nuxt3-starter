<!-- <script setup lang="ts">
import '@/assets/css/main.css'
</script> -->

<template>
  <Html lang="ru-Ru">
    <Body
      class="bg-slate-100 text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-700 dark:text-zinc-200"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
