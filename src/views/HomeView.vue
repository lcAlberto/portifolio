<script setup lang="ts">
import AboutView from '@/components/pages/AboutView.vue'
import PortifolioView from '@/components/pages/portifolio/PortifolioView.vue'
import SkillsView from '@/components/pages/SkillsView.vue'
import IndexView from '@/components/pages/IndexView.vue'
import Experience from '@/components/pages/ExperienceView.vue'
import TestimonialView from '@/components/pages/TestimonialView.vue'
import ContactView from '@/components/pages/ContactView.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <main class="scroll-smooth snap-y snap-mandatory bg-base-100">
    <div class="snap-always snap-center">
      <index-view />
    </div>
    <div class="snap-always snap-center">
      <about-view />
    </div>
    <div class="snap-always snap-center">
      <skills-view />
    </div>
    <div class="snap-always snap-center my-5">
      <portifolio-view />
    </div>
    <div class="snap-always snap-center bg-secondary my-5">
      <experience />
    </div>
    <div class="snap-always snap-center my-5">
      <testimonial-view />
    </div>
    <div class="snap-always snap-center bg-secondary py-5">
      <contact-view />
    </div>
    <div class="snap-always snap-center">
      <footer-component />
    </div>
  </main>
</template>

<style scoped>
.animated-background {
  background: linear-gradient(-45deg, #f0bf6c, #272829, #181819, #000000);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>