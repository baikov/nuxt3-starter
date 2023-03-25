<script lang="ts" setup>
import type { MenuItem } from 'types'
interface Props {
  catalogMenu?: MenuItem[] | null
  menu: MenuItem[]
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="relative flex h-full cursor-pointer items-center p-4 font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
    :class="catalogMenu ? 'group' : ''"
  >
    <NuxtLink to="/catalog" active-class="underline">
      Каталог
    </NuxtLink>
    <div class="absolute top-full right-0 hidden bg-gray-700 group-hover:block">
      <div
        v-for="item in props.catalogMenu"
        :key="item.id"
        class="relative flex h-full cursor-pointer items-center p-4 font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
        :class="item.submenu ? 'group/level2' : ''"
      >
        <NuxtLink
          :to="`/catalog/${item.slug}`"
          active-class="underline"
          class="whitespace-nowrap"
        >
          {{ item.name }}
        </NuxtLink>
        <div
          class="absolute top-0 left-full hidden bg-gray-700 group-hover/level2:block"
        >
          <NuxtLink
            v-for="subitem in item.submenu"
            :key="subitem.id"
            :to="`/catalog/${subitem.slug}`"
            active-class="underline"
            class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
          >
            <span v-show="subitem.depth === 3">-</span>
            <!-- <Icon v-show="subitem.depth === 3" name="codicon:list-tree" /> -->
            {{ subitem.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="relative flex h-full cursor-pointer items-center p-4 font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
    :class="catalogMenu ? 'group' : ''"
  >
    <NuxtLink :to="`/catalog`" active-class="underline"> Каталог </NuxtLink>
    <div class="absolute top-full right-0 hidden bg-gray-700 group-hover:block">
      <div
        v-for="item in props.catalogMenu"
        :key="item.id"
        class="relative flex h-full cursor-pointer items-center p-4 font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
        :class="item.submenu ? 'group' : ''"
      >
        <NuxtLink
          :to="`/catalog/${item.slug}`"
          active-class="underline"
          class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
        >
          {{ item.name }}
        </NuxtLink>
        <div
          class="absolute top-0 left-full hidden bg-gray-700 group-hover:block"
        >
          <NuxtLink
            v-for="subitem in item.submenu"
            :key="subitem.id"
            :to="`/catalog/${subitem.slug}`"
            active-class="underline"
            class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
          >
            {{ subitem.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div> -->
  <div
    v-for="item in props.menu"
    :key="item.id"
    class="relative flex h-full cursor-pointer items-center p-4 font-bold transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-50"
    :class="item.submenu ? 'group' : ''"
  >
    <NuxtLink :to="`/${item.slug}`" active-class="underline">
      {{ item.name }}
    </NuxtLink>
    <div
      v-if="item.submenu"
      class="absolute top-full right-0 hidden bg-gray-700 group-hover:block"
    >
      <NuxtLink
        v-for="subitem in item.submenu"
        :key="subitem.id"
        :to="`/${item.slug}/${subitem.slug}`"
        active-class="underline"
        class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
      >
        {{ subitem.name }} - {{ `${item.slug}/${subitem.slug}` }}
      </NuxtLink>

      <!-- <a
        v-for="subitem in item.submenu"
        :key="subitem.id"
        class="block cursor-pointer whitespace-nowrap py-2 px-4 transition-colors ease-in-out hover:bg-white/10"
        @click="$router.push(`/${item.slug}/${subitem.slug}`)"
      >
        {{ subitem.name }}
      </a> -->
    </div>
  </div>
</template>
