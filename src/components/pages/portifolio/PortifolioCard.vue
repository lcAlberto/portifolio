<template>
  <div class="card bg-img w-80 shadow-xl bg-center bg-contain h-72 group"
       :style="`background-image: url('${getImageUrl()}')`">
    <div class="card-body z-10 bg-opacity-0 hover:bg-opacity-80 bg-base-100">
      <div class="hidden group-hover:flex flex-col text-end justify-end">
        <a
          :href="link"
          target="_blank"
          class="font-extrabold text-primary text-2xl"
        >
          {{ props.title }}
          <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="ml-2" />
        </a>
        <p class="m-0">{{ props.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  imagePath: { type: String, default: null },
  alt: { type: String, default: null },
  title: { type: String, default: null },
  description: { type: String, default: null },
  link: { type: String, default: null },
  subtitle: { type: String, default: null }
})

function getImageUrl() {
  return new URL(`../../../assets/${props.imagePath}`, import.meta.url).toString()
}
</script>

<style scoped></style>
