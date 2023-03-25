<script lang="ts" setup>
import type { MenuItem } from 'types'
// const { data: menu, pending } = useLazyFetch<MenuItem[]>("/api/menu", {
//   // params: {"root": "true"}
//   // server: false,
// });
const { getCatalogMenu } = useMenu()
const catalogMenu = await getCatalogMenu()
const mainMenu: MenuItem[] = [
  { id: 274, name: 'О компании', depth: 1, slug: 'about', submenu: [] },
  { id: 275, name: 'Услуги', depth: 1, slug: 'services', submenu: [] },
  { id: 276, name: 'Контакты', depth: 1, slug: 'contacts', submenu: [] },
]
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-gray-600 bg-gradient-to-r from-gray-900 to-gray-700 text-zinc-200"
  >
    <nav class="mx-auto flex max-w-7xl items-center px-4">
      <PageLogo />
      <!-- <div class="hidden flex-1 items-center justify-end md:flex">
        <div v-if="pending" class="flex animate-pulse gap-5">
          <div class="h-4 w-16 rounded bg-slate-200"></div>
          <div class="h-4 w-16 rounded bg-slate-200"></div>
          <div class="h-4 w-16 rounded bg-slate-200"></div>
          <div class="h-4 w-16 rounded bg-slate-200"></div>
        </div>
        <PageMainMenu v-else :menu="menu ? menu : []" />
      </div> -->
      <div class="hidden flex-1 items-center justify-end md:flex">
        <PageMainMenu :menu="mainMenu" :catalog-menu="catalogMenu" />
      </div>
      <div class="flex flex-1 items-center justify-end md:flex-initial">
        <DarkToggle />
        <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
        <Cart />
      </div>
      <div class="pl-4">
        <PageMobileMenu :menu="mainMenu" :catalog-menu="catalogMenu" />
      </div>
    </nav>
  </header>
</template>

<style>
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

.slide-fade-from-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-left-enter-from,
.slide-fade-from-left-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}
</style>
