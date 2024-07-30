<template>
  <div class="overflow-hidden">
    <Navbar/>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
</script>


<style scoped>

</style>
