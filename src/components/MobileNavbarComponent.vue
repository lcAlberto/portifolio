<template>
  <div class="navbar !sticky !top-0 flex lg:flex-row flex-col justify-between max-w-full">

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
            {{ $t('created_with_vite') }}
            <font-awesome-icon :icon="['fas', 'bolt']" />
          </a>
        </div>
      </button>
      <div class="collapse-content bg-base-200 shadow-2xl">
        <ul>
          <li>
            <a
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('about')"
            >
              {{ $t('navbar.about') }}
            </a>
          </li>
          <li>
            <a
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('skills')"
            >
              {{ $t('navbar.skills') }}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('experience')"
            >
              {{ $t('navbar.experience') }}
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('testimonial')"
            >
              {{ $t('navbar.testimonial') }}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('portfolio')"
            >
              {{ $t('navbar.portfolio') }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              :class="activeRoute === 'text-primary'"
              class="btn btn-ghost w-full flex justify-start"
              @click="scrollTo('contact')"
            >
              {{ $t('navbar.contact') }}
            </a>
          </li>
        </ul>
        <div class="join join-vertical w-full">
          <div class="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4 h-1" />
            <div class="collapse-title text-sm font-medium">
              <font-awesome-icon :icon="['fas', 'palette']" />
              Themes
            </div>
            <div class="collapse-content bg-base-100 rounded-t-none rounded-b-badge p-0">
              <ul tabindex="0" class=" menu w-full">
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
          </div>
        </div>
        <div class="join join-vertical w-full">
          <div class="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4 h-1" />
            <div class="collapse-title text-sm font-medium">
              <font-awesome-icon :icon="['fas', 'earth-americas']" />
              Languages
            </div>
            <div class="collapse-content bg-base-100 rounded-t-none rounded-b-badge p-0">
              <ul tabindex="0" class=" menu w-full">
                <li @click="changeLanguage('pt-BR')">
                  <a class="flex">
                    <img
                      src="/src/assets/img/flags/br.png"
                      alt="br-flag"
                      class="w-10"
                    >
                    <span>{{ $t('languages.pt-br') }}</span>
                  </a>
                </li>
                <li
                  @click="changeLanguage('en')"
                >
                  <a class="flex">
                    <img
                      src="/src/assets/img/flags/us.png"
                      alt="us-flag"
                      class="w-10"
                    >
                    <span>{{ $t('languages.en') }}</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/theme'
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const emits = defineEmits(['theme'])
const open = ref(false)

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
