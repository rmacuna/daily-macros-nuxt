<template>
  <div>

  </div>
  <div class="h-14 w-full border-b border-b-slate-200" id="appbar"></div>
  <!-- Create the layout component -->
  <div class="mx-auto max-w-[1440px]">
    <div class="grid w-full grid-cols-12">
      <div class="col-span-2 border-r border-r-gray-200 h-screen">
        <slot name="sidebar"></slot>
      </div>
      <div class="px-4 col-span-10">
        <!-- Nuxt Page -->
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>