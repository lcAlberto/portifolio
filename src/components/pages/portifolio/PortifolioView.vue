<template>
  <section id="portfolio" class="pt-10 flex justify-center">
    <div class="xl:w-3/4 mx-auto p-5 flex flex-col items-center">
      <h1 class="text-4xl font-bold mb-5">
        {{ $t('titles.portfolio') }}
      </h1>
      <div class="mt-5 flex flex-wrap items-center justify-center gap-5 my-5">
        <portifolio-card
          image-path="img/projects/batcaverna.png"
          alt="vite-logo"
          link="https://github.com/lcAlberto/batcaverna"
          :title="$t('portfolio_titles.batcaverna')"
          :subtitle="$t('portfolio_legends.batcaverna')"
        />
        <portifolio-card
          image-path="img/projects/splash.png"
          alt="vite-logo"
          link="https://github.com/lcAlberto/Splash---English-School"
          :title="$t('portfolio_titles.splash')"
          :subtitle="$t('portfolio_legends.splash')"
        />
        <portifolio-card
          image-path="img/projects/goldfinch.png"
          alt="vite-logo"
          link="https://github.com/lcAlberto/goldfinch"
          :title="$t('portfolio_titles.gold_fich')"
          :subtitle="$t('portfolio_legends.gold_fich')"
        />
        <!--        <portifolio-card-->
        <!--          image-path=""-->
        <!--          alt="vite-logo"-->
        <!--          title="Procriare"-->
        <!--        />-->
      </div>
      <a
        href="https://github.com/lcAlberto/"
        :data-tip="$t('github_profile')"
        target="_blank"
        class="btn btn-primary my-5 w-52 tooltip flex items-center"
      >
        {{ $t('see_more_projects') }}
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
      </a>
    </div>
  </section>
</template>

<style></style>
<script setup lang="ts">
import PortifolioCard from '@/components/pages/portifolio/PortifolioCard.vue'
</script>
