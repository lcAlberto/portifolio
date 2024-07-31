<template>
  <section id="contact" class="pt-10 px-5 min-h-96 xl:w-1/2 mx-auto">
    <div class="flex items-center justify-center gap-4">
      <hr class="w-1/4 border border-t-2 border-primary" />
      <h1 class="card-title text-5xl">Entre em contato</h1>
      <hr class="w-1/4 border border-t-2 border-primary" />
    </div>
    <div class="flex flex-wrap gap-4 justify-center my-10">
      <div class="card bg-base-100 shadow-xl p-0">
        <div class="card-body flex flex-row items-center">
          <font-awesome-icon :icon="['fas', 'envelope']" size="2xl" />
          <h2 class="card-title text-primary break-all">lcalbertomatoso2012@gmail.com</h2>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl p-0">
        <div class="card-body flex flex-row items-center">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2xl" />
          <h2 class="card-title text-primary break-words">lucas-alberto-matoso</h2>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl p-0">
        <div class="card-body flex flex-row items-center">
          <font-awesome-icon :icon="['fas', 'location-dot']" size="2xl" />
          <h2 class="card-title text-primary break-words">Guarapuava, Praraná, Brasil</h2>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4">
      <hr class="w-screen border border-t-2 border-primary" />
      <div class="flex gap-5">
        <a
          href="https://www.linkedin.com/in/lucas-alberto-matoso/"
          target="_blank"
          class="hover:text-sky-600"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
        </a>
        <a href="https://github.com/lcAlberto/" target="_blank" class="hover:text-github">
          <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
        </a>
        <a
          href="https://www.facebook.com/lucasalberto.matoso.71"
          target="_blank"
          class="hover:text-facebook"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" size="2xl" />
        </a>
        <a
          href="https://www.instagram.com/lcalbertomatoso/"
          target="_blank"
          class="hover:text-instagram"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="2xl" />
        </a>
      </div>
      <hr class="w-screen border border-t-2 border-primary" />
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped></style>
