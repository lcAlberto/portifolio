<template>
  <div class="!flex flex-row justify-center items-center w-full flex-wrap">
    <ul class="flex flex-wrap justify-center gap-4">
      <a class="btn btn-ghost rounded-b-lg rounded-none text-xl">
        {{ $t('created_with_vite') }}
        <font-awesome-icon :icon="['fas', 'bolt']" />
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('about')"
      >
        {{ $t('navbar.about') }}
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('skills')"
      >
        {{ $t('navbar.skills') }}
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('experience')"
      >
        {{ $t('navbar.experience') }}
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('testimonial')"
      >
        {{ $t('navbar.testimonial') }}
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('portfolio')"
      >
        {{ $t('navbar.portfolio') }}
      </a>
      <a
        :class="activeRoute === 'text-primary'"
        class="btn btn-ghost rounded-b-lg rounded-none"
        @click="scrollTo('contact')"
      >
        {{ $t('navbar.contact') }}
      </a>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-b-lg rounded-none mt-0 m-1">
          <font-awesome-icon :icon="['fas', 'palette']" />
        </div>
        <ul tabindex="0" class="dropdown-content menu rounded-box z-50 w-52 p-2 shadow-2xl">
          <li @click="toggleTheme = 'emerald'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'sun']"
                size="lg"
                class="swap-on"
              />
              {{ $t('themes.light') }}
            </a>
          </li>
          <li @click="toggleTheme = 'night'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'moon']"
                size="lg"
                class="swap-off"
              />
              {{ $t('themes.dark') }}
            </a>
          </li>
          <li @click="toggleTheme = 'default'">
            <a>
              <font-awesome-icon
                :icon="['fas', 'gears']"
                size="lg"
                class="swap-on"
              />
              {{ $t('themes.default') }}
            </a>
          </li>

        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-b-lg rounded-none mt-0 m-1">
          <font-awesome-icon :icon="['fas', 'earth-americas']" />
        </div>
        <ul tabindex="0" class="dropdown-content menu rounded-box z-50 w-52 p-2 shadow-2xl">
          <li
            class="flex"
            @click="changeLanguage('pt-BR')"
          >
            <a class="flex">
              <img
                src="/src/assets/img/flags/br.png"
                alt="br-flag"
                class="w-1/4"
              >
              <span>{{ $t('languages.pt-br') }}</span>
            </a>
          </li>
          <li
            class="flex"
            @click="changeLanguage('en')"
          >
            <a class="flex">
              <img
                src="/src/assets/img/flags/us.png"
                alt="us-flag"
                class="w-1/4"
              >
              <span>{{ $t('languages.en') }}</span>
            </a>
          </li>

        </ul>
      </div>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/theme'
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const emits = defineEmits(['theme'])

const { setTheme } = useTheme()

const route = useRoute()
const router = useRouter()
const activeRoute = route.fullPath
const toggleTheme = ref('default')
const { locale } = useI18n()

watch(() => toggleTheme.value, async (value) => {
  emits('theme', value)
  setTheme(value)
})

function scrollTo(anchor: string) {
  const element = document.getElementById(anchor)
  if (element)
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
  router.push(`#${anchor}`)
}

function changeLanguage(lang: string) {
  locale.value = lang
}


</script>

<style scoped></style>
