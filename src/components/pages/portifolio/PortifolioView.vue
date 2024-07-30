<template>
  <section
    id="portfolio"
    class="pt-10 flex justify-center"
  >
    <div class="xl:w-3/4 mx-auto p-5 flex flex-col items-center">
      <h1 class="text-4xl font-bold mb-5">Portifólio</h1>
      <div class="mt-5 flex flex-wrap items-center justify-center gap-5 my-5">

        <portifolio-card
          v-for="item in 5"
          :key="item"
          image-path="skills/GIT.svg"
          alt="vite-logo"
          title="Typescript"
        />

      </div>
      <a
        href="https://github.com/lcAlberto/"
        data-tip="Perfil no Github"
        class="btn btn-primary my-5 w-52 tooltip flex items-center"
      >
        Ver mais projetos
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
      </a>
    </div>
  </section>
</template>

<style>

</style>
<script setup lang="ts">
import PortifolioCard from '@/components/pages/portifolio/PortifolioCard.vue'
</script>