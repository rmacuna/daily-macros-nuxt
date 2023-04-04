<template>
  <div
    class="flex h-screen fixed flex-grow flex-col overflow-y-auto bg-white pt-5 pb-4"
  >
    <div class="flex flex-shrink-0 items-center space-y-5 px-4">
      <h1 class="font-heading text-lg">Daily Macros</h1>
    </div>
    <div class="mt-5 flex flex-grow flex-col h-full">
      <nav class="flex-1 space-y-1 bg-white px-4" aria-label="Sidebar">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          :class="[
            item.current
              ? 'border-green-600 bg-green-50 text-green-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex font-heading items-center rounded-lg border-l-4 px-3 py-2 text-sm font-medium',
          ]"
        >
          <component
            :is="item.icon"
            :class="[
              item.current
                ? 'text-green-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 h-6 w-6 flex-shrink-0',
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  QueueListIcon
} from "@heroicons/vue/24/outline";


const router = useRoute();

const navigation = computed(() => [
  { name: "Meal Tracker", icon: HomeIcon, to: "/counter", current: router.path === '/counter' },
  { name: "Settings", icon: UsersIcon, to: "/counter/settings", current: router.path.includes('/counter/settings') },
  { name: "Food library", icon: FolderIcon, to: "/counter/foods", current: router.path === '/counter/foods' },
  { name: "Recipies", icon: QueueListIcon, to: "/counter/recipies", current: router.path === '/counter/recipies' },
]);
</script>
