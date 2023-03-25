<script lang="ts" setup>
useHead({
  title: 'Nuxt3',
  titleTemplate: '%s + Tailwind starter template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Good start point for your project',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <section class="relative mx-auto flex h-full w-full flex-1 flex-col">
    <div class="mx-auto max-w-7xl">
      <h1>Test Header</h1>
    </div>
  </section>
</template>
