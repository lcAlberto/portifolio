<template>
  <div class="xl:w-3/4 mx-auto">
    <Navbar/>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>


<style scoped>

</style>
