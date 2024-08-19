<template>
  <div class="navbar !sticky !top-0 flex lg:flex-row flex-col justify-between bg-base-100 max-w-full">

    <div
      :class="{'shadow-2xl': open}"
      class="collapse rounded-t-none rounded-b-badge"
    >
      <input
        v-model="open"
        type="checkbox"
      />
      <button
        :class="open ? 'bg-base-200' : 'bg-base-100'"
        class="collapse-title flex items-center justify-start rounded-t-lg rounded-none btn btn-ghost"
      >
        <font-awesome-icon
          v-if="open"
          :icon="['fas', 'xmark']"
        />
        <font-awesome-icon
          v-else
          :icon="['fas', 'bars']"
        />
        <div>
          <a class="btn btn-ghost text-xl">
            Criado com Vite
            <font-awesome-icon :icon="['fas', 'bolt']" />
          </a>
        </div>
      </button>
      <div class="collapse-content bg-base-200 shadow-2xl">
        <ul>
          <li>
            <a
              href="#about"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              Experience
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              Portifólio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start">
              Contact
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
const open = ref(false)

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
