<template>
  <section id="testimonial" class="pt-10 min-h-96 w-10/12 xl:w-1/2 mx-auto">
    <h1 class="card-title text-5xl mb-5">Testimonial</h1>
    <div class="flex justify-center items-center">
      <div class="p-5">
        <div class="text-xl mt-10 flex">
          <!--        <hr class="w-1/2 border border-t-2 border-primary mt-3 mr-3"/>-->
          <font-awesome-icon
            :icon="['fas', 'quote-left']"
            size="2xl"
            class="text-primary text-5xl -mt-3"
          />
          <p>
            Trabalhei com o Lucas pouco mais de 1 ano. Excelente desenvolvedor front-end, com foco
            em Vue.js, mas que consegue responder rápido às atividades e aprender na necessidade.
            Com certeza recomendo para uma posição de desenvolvedor front-end.
            <font-awesome-icon
              :icon="['fas', 'quote-right']"
              size="2xl"
              class="text-primary text-2xl"
            />
          </p>
        </div>
        <div class="float-end text-xl mt-10 flex">
          <div class="flex flex-col items-end text-end">
            <span class="flex gap-2 font-bold">
              <hr class="w-20 border border-t-2 border-primary mt-3" />
              Fernando Sequeira Sousa,
            </span>
            <span class="font-extralight text-sm">
              Lead Data Engineer, Data Engineering, Machine Learning, AWS SAA, AWS Academy
              Accredited Educator
              <span>Optimum Soluções Estratégicas S.A</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped></style>
