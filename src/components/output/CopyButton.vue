<template>
  <button
    @click="handleCopy"
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
  >
    Copy
  </button>
</template>

<script setup lang="ts">
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'

const props = defineProps<{
  text: string
}>()

const { copy } = useCopyToClipboard()
const handleCopy = () => copy(props.text)
</script>