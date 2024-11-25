<template>
  <div class="mt-4">
    <h1 class="text-base font-medium text-2xl uppercase text-red-600">Output HTML</h1>
    <CopyButton :text="html" />
    <div class="mt-4 border p-4">
      <code>{{ html }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyButton from './CopyButton.vue'

defineProps<{
  html: string
}>()
</script>