<template>
  <div class="card bg-secondary w-80 shadow-xl">
    <div class="card-body">
      <img :src="getImageUrl()" :alt="props.alt" class="w-11/12" />
      <div class="card-actions justify-center">
        <a
          :href="props.link"
          target="_blank"
          class="font-extrabold text-xl"
        >
          {{ props.title }}
        </a>
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
  link: { type: String, default: null }
})

function getImageUrl() {
  return new URL(`../../../assets/${props.imagePath}`, import.meta.url).toString()
}
</script>

<style scoped></style>
