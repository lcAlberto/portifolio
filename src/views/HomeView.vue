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
  <main class="scroll-smooth snap-y snap-mandatory">
    <div class="snap-always snap-center bg-base-100">
      <index-view />
    </div>
    <div class="snap-always snap-center bg-base-100">
      <about-view />
    </div>
    <div class="snap-always snap-center bg-base-100">
      <skills-view />
    </div>
    <div class="snap-always snap-center bg-base-100 my-5">
      <portifolio-view />
    </div>
    <div class="snap-always snap-center bg-secondary my-5">
      <experience />
    </div>
    <div class="snap-always snap-center bg-base-100 my-5">
      <testimonial-view />
    </div>
    <div class="snap-always snap-center bg-secondary py-5">
      <contact-view />
    </div>
    <div class="snap-always snap-center bg-base-100">
      <footer-component />
    </div>
  </main>
</template>
