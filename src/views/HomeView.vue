<script setup lang="ts">
import AboutView from '@/components/pages/AboutView.vue'
import PortifolioView from '@/components/pages/portifolio/PortifolioView.vue'
import SkillsView from '@/components/pages/SkillsView.vue'
import IndexView from '@/components/pages/IndexView.vue'
</script>

<template>
  <main>
    <div class="bg-base-100">
      <index-view />
    </div>
    <div class="bg-base-100">
      <about-view />
    </div>
    <div class="bg-base-100">
      <skills-view />
    </div>
    <div class="bg-base-100 my-5">
    <portifolio-view/>
    </div>
  </main>
</template>
