<template>
  <section
    id="home"
    class="xl:w-3/4 mx-auto grid grid-cols-2 bg-base-100 pb-5"
  >
    <div
      id="text"
      class="flex flex-col justify-center gap-4"
    >
      <h1 class="text-5xl">
        Sou <span class="text-primary">Lucas Alberto</span>
        Desenvolvedor Web Front & Backend
      </h1>
<!--      <button class="btn btn-outline btn-primary w-56">-->
<!--        Entre em contato!-->
<!--      </button>-->
      <div class="relative group mt-14">
        <div class="relative w-56 h-14 opacity-90 overflow-hidden rounded-xl bg-secondary z-10">
          <div class="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"/>
          <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
            <button
              name="text"
              class="input text-sm font-semibold text-primary h-full opacity-90 w-full rounded-xl"
            >
              Entre em contato!
            </button>
          </div>
          <div class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-secondary to-primary blur-[30px]"/>
        </div>
      </div>

    </div>
    <div id="imagw">
      <img
        src="https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
    </div>
    <div class="flex flex-col gap-2 absolute right-5 bottom-32 p-10">
      <a
        href="https://www.linkedin.com/in/lucas-alberto-matoso/"
        target="_blank"
        class="group h-12 hover:bg-sky-600 relative rounded-3xl text-neutral-50 duration-700 font-bold flex justify-end gap-2 items-center p-0 px-6"
      >
      <span class="origin-right inline-flex duration-100 group-hover:duration-300 group-hover:delay-100 opacity-0 group-hover:opacity-100 border-0 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
      >Linkedin</span>
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl"/>
      </a>
      <a
        href="https://github.com/lcAlberto/"
        target="_blank"
        class="group h-12 hover:bg-github relative rounded-3xl text-neutral-50 duration-700 font-bold flex justify-end gap-2 items-center p-0 px-6"
      >
      <span class="origin-right inline-flex duration-100 group-hover:duration-300 group-hover:delay-100 opacity-0 group-hover:opacity-100 border-0 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
      >Github</span>
        <font-awesome-icon :icon="['fab', 'github']" size="2xl"/>
      </a>
      <a
        href="https://www.facebook.com/lucasalberto.matoso.71"
        target="_blank"
        class="group h-12 hover:bg-facebook relative rounded-3xl text-neutral-50 duration-700 font-bold flex justify-end gap-2 items-center p-0 px-6"
      >
      <span class="origin-right inline-flex duration-100 group-hover:duration-300 group-hover:delay-100 opacity-0 group-hover:opacity-100 border-0 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
      >Facebook</span>
        <font-awesome-icon :icon="['fab', 'facebook']" size="2xl"/>
      </a>
      <a
        href="https://www.instagram.com/lcalbertomatoso/"
        target="_blank"
        class="group h-12 hover:bg-instagram relative rounded-3xl text-neutral-50 duration-700 font-bold flex justify-end gap-2 items-center p-0 px-6"
      >
      <span class="origin-right inline-flex duration-100 group-hover:duration-300 group-hover:delay-100 opacity-0 group-hover:opacity-100 border-0 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
      >Instagram</span>
      <font-awesome-icon :icon="['fab', 'instagram']" size="2xl"/>
      </a>
    </div>
  </section>
</template>

<style>

</style>
<script setup lang="ts">
</script>