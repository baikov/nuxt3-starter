<script lang="ts" setup>
import type { MenuItem } from 'types'
defineProps<{
  menu?: MenuItem[]
  catalogMenu?: MenuItem[] | null
}>()
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)

const toggleSubmenu = (id: number) => {
  const sub = document.querySelector(`#submenu-${id}`)
  if (sub?.classList.contains('hidden'))
    sub.classList.replace('hidden', 'block')

  else
    sub?.classList.replace('block', 'hidden')
}
</script>

<template>
  <div class="my-auto ml-auto flex items-center md:hidden">
    <div class="cursor-pointer" @click="toggleDrawer()">
      <div
        class="relative h-0.5 w-8 rounded bg-zinc-200 transition-all"
        :class="showDrawer ? 'top-2 rotate-45' : 'top-0 rotate-0'"
      />
      <div
        class="relative mt-1.5 h-0.5 w-8 rounded bg-zinc-200 transition-all"
        :class="showDrawer ? 'opacity-0' : 'opacity-100'"
      />
      <div
        class="relative mt-1.5 h-0.5 w-8 rounded bg-zinc-200 transition-all"
        :class="showDrawer ? '-top-2 -rotate-45' : 'top-0 rotate-0'"
      />
    </div>
    <ClientOnly>
      <!-- drawer -->
      <Transition name="slide-fade-from-left" mode="out-in">
        <div
          v-if="showDrawer"
          class="fixed top-10 left-0 z-50 flex h-screen w-screen flex-col items-center justify-start border-t border-gray-600 bg-gradient-to-r from-gray-900 to-gray-700 p-5 lg:hidden"
        >
          <div
            class="relative my-2 flex w-full cursor-pointer items-center justify-center font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
          >
            <NuxtLink to="/catalog" @click="toggleDrawer()">
              Каталог
            </NuxtLink>
          </div>
          <div
            v-for="item in menu"
            :key="item.id"
            class="relative my-2 w-full cursor-pointer font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
            :class="
              item.submenu
                ? 'group text-center'
                : 'flex items-center justify-center'
            "
            @click="toggleSubmenu(item.id)"
          >
            <NuxtLink :to="item.slug" @click="toggleDrawer()">
              {{ item.name }}
            </NuxtLink>
            <Icon
              v-if="
                item.submenu.length !== 0 /*Object.keys(item.submenu).length*/
              "
              class="inline-block"
              name="mdi:triangle-small-down"
            />
            <!-- class="absolute hidden bg-gray-700 group-hover:block" -->
            <div
              v-if="item.submenu"
              :id="`submenu-${item.id}`"
              class="hidden bg-gray-900"
            >
              <NuxtLink
                v-for="subitem in item.submenu"
                :key="subitem.id"
                :to="subitem.slug"
                class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
                @click="toggleDrawer()"
              >
                {{ subitem.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </ClientOnly>
  </div>
</template>
