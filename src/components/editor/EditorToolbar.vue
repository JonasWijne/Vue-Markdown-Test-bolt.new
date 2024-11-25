<template>
  <div class="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex">
    <ToolbarButton icon="link" @click="$emit('insert', 'link')" />
    <ToolbarButton icon="code" @click="$emit('insert', 'code')" />
    <ToolbarButton icon="mention" @click="$emit('insert', 'mention')" />
  </div>
</template>

<script setup lang="ts">
import ToolbarButton from './ToolbarButton.vue'

defineEmits<{
  (e: 'insert', type: 'link' | 'code' | 'mention'): void
}>()
</script>