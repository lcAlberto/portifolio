<template>
  <section id="skills" class="pt-10 flex justify-center">
    <div class="xl:w-3/4 min-h-96 mx-auto p-5 flex flex-col items-center">
      <h1 class="text-4xl font-bold mb-5">
        {{ $t('titles.skills') }}
      </h1>
      <div class="mt-5 flex flex-wrap items-center justify-center gap-5">
        <div class="card bg-typescript hover:bg-typescript md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/TYPESCRIPT.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                data-tip="Documentação oficial typescript"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Typescript
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-vue hover:bg-vue md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/VUE.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions mt-auto justify-center">
              <a
                href="https://vuejs.org/"
                target="_blank"
                data-tip="Documentação oficial Vuejs"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Vue
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-nuxt hover:bg-nuxt md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/NUXT.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://nuxt.com/docs/getting-started/introduction"
                target="_blank"
                data-tip="Documentação oficial Nuxt3"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Nuxt
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-vite hover:bg-vite md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/VITE.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://vitejs.dev/guide/"
                target="_blank"
                data-tip="Documentação oficial Vite"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Vite
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-postgresql hover:bg-postgresql md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/POSTGRESQL.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://www.postgresql.org/docs/"
                target="_blank"
                data-tip="Documentação oficial Postgresql"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Postgresql
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-mongo hover:bg-mongo md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/MONGODB.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://www.mongodb.com/pt-br/docs/"
                target="_blank"
                data-tip="Documentação oficial MongoDB"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                MongoDB
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-mysql hover:bg-mysql md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/MYSQL.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://dev.mysql.com/doc/"
                target="_blank"
                data-tip="Documentação oficial MySQL"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                MySQL
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-docker hover:bg-docker md:bg-secondary h-64 w-64 shadow-xl bg-docker">
          <div class="card-body">
            <img src="@/assets/img/skills/DOCKER.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://docs.docker.com/"
                target="_blank"
                data-tip="Documentação oficial Docker"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Docker
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-laravel hover:bg-laravel md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/LARAVEL.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions mt-auto justify-center">
              <a
                href="https://laravel.com/docs/7.x/"
                target="_blank"
                data-tip="Documentação oficial Laravel"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Laravel
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-git hover:bg-git md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/GIT.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://git-scm.com/doc"
                target="_blank"
                data-tip="Documentação oficial GIT"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                GIT
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-ubuntu hover:bg-ubuntu md:bg-secondary h-64 w-64 shadow-xl">
          <div class="card-body">
            <img src="@/assets/img/skills/UBUNTU.svg" alt="vite-logo" class="w-11/12" />
            <div class="card-actions justify-center">
              <a
                href="https://docs.kernel.org/"
                target="_blank"
                data-tip="Documentação oficial Linux"
                class="font-extrabold text-xl hover:underline tooltip"
              >
                Linux
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
<script setup lang="ts"></script>
