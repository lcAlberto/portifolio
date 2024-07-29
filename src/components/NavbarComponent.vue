<template>
  <div class="navbar flex justify-between bg-base-100">
    <div class="">
      <a class="btn btn-ghost text-xl">daisyUI</a>{{activeRoute}}
    </div>
    <ul class="flex justify-center gap-4">
      <a
        href="#about"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost"
      >About</a>
      <a
        href="#skills"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost"
      >Skills</a>
      <a
        href="#portfolio"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost"
      >Portifólio</a>
      <a
        href="#contact"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost"
      >Contact</a>
    </ul>
    <div class="flex-none gap-2">
      <label class="input input-sm bg-secondary focus:outline-0 w-24 md:w-auto flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70">
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const activeRoute = route.fullPath
</script>


<style scoped>

</style>