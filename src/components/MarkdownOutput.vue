<template>
  <div class="mt-4">
    <h1 class="text-base font-medium text-2xl uppercase text-red-600">Output</h1>
    <div class="mt-4 border p-4 prose prose-pink">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>