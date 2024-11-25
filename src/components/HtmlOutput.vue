<template>
  <div class="mt-4">
    <h1 class="text-base font-medium text-2xl uppercase text-red-600">Output HTML</h1>
    <button
      @click="copyToClipboard"
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
      Copy
    </button>

    <div class="mt-4 border p-4">
      <code @click="copyToClipboard">
        {{ html }}
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  html: string
}>()

const copyToClipboard = () => {
  const el = document.createElement('textarea')
  el.value = props.html
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
</script>