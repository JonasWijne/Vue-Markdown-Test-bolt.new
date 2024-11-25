<template>
  <div class="flex items-center">
    <button
      type="button"
      @click="$emit('click')"
      class="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
    >
      <span class="sr-only">{{ label }}</span>
      <component :is="icons[icon]" class="h-5 w-5" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {  computed } from 'vue'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  icon: 'link' | 'code' | 'mention'
}>()

const icons = {
  link: LinkIcon,
  code: CodeBracketIcon,
  mention: AtSymbolIcon
}

const labels = {
  link: 'Insert link',
  code: 'Insert code',
  mention: 'Mention someone'
}

const label = computed(() => {return labels[props.icon];})

defineEmits<{
  (e: 'click'): void
}>()
</script>