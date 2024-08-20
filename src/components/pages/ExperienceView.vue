<template>
  <section id="experience" class="pt-10 flex justify-center">
    <div class="xl:w-3/4 min-h-96 mx-auto p-5">
      <h1 class="card-title text-4xl">
        {{ $t('titles.experience') }}
      </h1>
      <hr class="bg-primary -mt-2 h-1 w-1/6 mb-10 ml-10" />
      <div class="text-xl pt-5 flex flex-col items-center gap-4">
        <ul class="timeline timeline-compact timeline-snap-icon timeline-vertical w-9/12">
          <li class="group">
            <hr class="bg-base-content !h-5" />
            <div class="timeline-end mb-10 px-3">
              <div class="chat chat-start">
                <div
                  class="flex flex-col lg:flex-row gap-4 items-center chat-bubble chat-bubble-accent bg-base-100 rounded-md"
                >
                  <span class="border border-0 lg:border-r-4 pr-3">2020</span>
                  <a
                    href="https://www.linkedin.com/company/letscomvc/"
                    target="_blank"
                    :data-tip="$t('experience.tooltips_lets')"
                    class="text-xl font-bold my-2 hover:text-primary hover:underline tooltip"
                  >
                    Let's Grow Sistemas LTDA
                  </a>
                </div>
              </div>
              <h3 class="text-primary font-semibold pt-3 pb-5">
                {{ $t('experience.titles.fullstack_developer') }}
              </h3>
              <p>{{ $t('experience.descriptions.lets') }}</p>
            </div>
            <div class="timeline-middle mt-5 mb-3">
              <span
                class="btn btn-xs btn-circle btn-primary outline outline-offset-4 group-hover:animate-pulse cursor-default" />
            </div>
            <hr class="bg-base-content" />
          </li>

          <li class="group">
            <hr class="bg-base-content !h-5" />
            <div class="timeline-end mb-10 px-3">
              <div class="chat chat-start">
                <div
                  class="flex flex-col lg:flex-row gap-4 items-center chat-bubble chat-bubble-accent bg-base-100 rounded-md"
                >
                  <span class="border border-0 lg:border-r-4 pr-3">2021</span>
                  <a
                    href="https://www.linkedin.com/company/maps-sa/"
                    target="_blank"
                    :data-tip="$t('experience.tooltips_optimum')"
                    class="text-xl font-bold my-2 hover:text-primary hover:underline tooltip"
                  >
                    Optimum Soluções Estratégicas/MAPS S.A
                  </a>
                </div>
              </div>
              <h3 class="text-primary font-semibold pt-3 pb-5">
                {{ $t('experience.titles.front_developer') }}
              </h3>
              <p>{{ $t('experience.descriptions.optimum') }}</p>
            </div>
            <div class="timeline-middle mt-5 mb-3">
              <span
                class="btn btn-xs btn-circle btn-primary outline outline-offset-4 group-hover:animate-pulse cursor-default" />
            </div>
            <hr class="bg-base-content" />
          </li>

          <li class="group">
            <hr class="bg-base-content !h-5" />
            <div class="timeline-end mb-10 px-3">
              <div class="chat chat-start">
                <div
                  class="flex flex-col lg:flex-row gap-4 items-center chat-bubble chat-bubble-accent bg-base-100 rounded-md"
                >
                  <span class="border border-0 lg:border-r-4 pr-3">2023</span>
                  <a
                    href="https://www.linkedin.com/company/3c_plus/"
                    target="_blank"
                    :data-tip="$t('experience.tooltips_3cplus')"
                    class="text-xl font-bold my-2 hover:text-primary hover:underline tooltip"
                  >
                    3Cplus Tecnologia da Informação
                  </a>
                </div>
              </div>
              <h3 class="text-primary font-semibold pt-3 pb-5">
                {{ $t('experience.titles.front_developer') }}
              </h3>
              <p>{{ $t('experience.descriptions.3cplus') }}</p>
            </div>
            <div class="timeline-middle mt-5 mb-3">
              <span
                class="btn btn-xs btn-circle btn-primary outline outline-offset-4 group-hover:animate-pulse cursor-default" />
            </div>
            <hr class="bg-base-content" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style></style>
<script setup lang="ts">
</script>
