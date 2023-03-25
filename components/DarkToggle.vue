<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    aria-label="Тема"
    :title="`Choose ${color.value === 'dark' ? 'light' : 'dark'} theme`"
    class="group link inline-block p-1 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 sm:p-2"
    @click="toggleDark()"
  >
    <div class="theme-icon dark:text-light-100 text-zinc-200">
      <ClientOnly>
        <template v-if="color.value === 'dark'">
          <Icon
            name="line-md:moon-filled"
            class="theme-icon icon--on dark:text-light-100"
          />
          <Icon
            name="line-md:moon"
            class="theme-icon icon--off dark:text-light-100"
          />
        </template>
        <template v-else>
          <Icon name="line-md:sunny-outline-loop" class="theme-icon icon--on" />
          <Icon name="line-md:sunny-outline" class="theme-icon icon--off" />
        </template>
        <template #fallback>
          <Icon name="line-md:loading-twotone-loop" class="theme-icon" />
        </template>
      </ClientOnly>
    </div>
  </button>
</template>
