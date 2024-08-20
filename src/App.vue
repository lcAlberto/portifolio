<template>
  <div
    id="main"
    :data-theme="theme"
    class="overflow-hidden"
  >
    <MobileNavbarComponent
      class="sm:block md:hidden"
      @theme="(payload) => theme = payload"
    />
    <Navbar
      class="!hidden md:!block"
      @theme="(payload) => theme = payload"
    />
    <scroll-to-home-button />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
import { useTheme } from '@/composables/theme'
import MobileNavbarComponent from '@/components/MobileNavbarComponent.vue'
import ScrollToHomeButton from '@/components/ScrollToHomeButton.vue'

const { theme } = useTheme()

</script>

<style scoped></style>
