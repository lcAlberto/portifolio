<template>
  <div
    :data-theme="theme"
    class="overflow-hidden scroll-smooth"
  >
    <Navbar @theme="(payload) => theme = payload" />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
import { useTheme } from '@/composables/theme'

const { theme } = useTheme()

</script>

<style scoped></style>
