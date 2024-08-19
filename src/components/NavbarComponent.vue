<template>
  <div class="navbar flex lg:flex-row flex-col justify-between bg-base-100 max-w-full">
    <div class="hidden lg:block">
      <a class="btn btn-ghost text-xl">
        Vite
        <font-awesome-icon :icon="['fas', 'bolt']" />
      </a>
    </div>
    <ul class="flex flex-wrap justify-center gap-4">
      <a
        href="#about"
        v-smooth-scroll
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost">
        About
      </a>
      <a
        href="#skills"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost">
        Skills
      </a>
      <a
        href="#experience"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost">
        Experience
      </a>
      <a
        href="#testimonial"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost">
        Testimonial
      </a>
      <a
        href="#portfolio"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost"
      >
        Portifólio
      </a>
      <a
        href="#contact"
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost">
        Contact
      </a>
    </ul>
    <div class="lg:flex-none gap-2 px-5">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost m-1">
          <font-awesome-icon :icon="['fas', 'palette']" />
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li @click="toggleTheme = 'emerald'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'sun']"
                size="lg"
                class="swap-on"
              />
              Claro
            </a>
          </li>
          <li @click="toggleTheme = 'night'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'moon']"
                size="lg"
                class="swap-off"
              />
              Escuro
            </a>
          </li>
          <li @click="toggleTheme = 'default'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'gears']"
                size="lg"
                class="swap-on"
              />
              Padrão
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/theme'
import { watch, ref } from 'vue'

const emits = defineEmits(['theme'])

const { setTheme } = useTheme()

const route = useRoute()
const activeRoute = route.fullPath
const toggleTheme = ref('default')

watch(() => toggleTheme.value, async (value) => {
  emits('theme', value)
  setTheme(value)
})


</script>

<style scoped></style>
