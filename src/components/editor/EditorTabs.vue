<template>
  <TabList class="group flex items-center">
    <Tab as="template" v-slot="{ selected }">
      <button :class="[
        selected ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900',
        'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
      ]">
        Write
      </button>
    </Tab>
    <Tab as="template" v-slot="{ selected }">
      <button :class="[
        selected ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900',
        'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
      ]">
        Preview
      </button>
    </Tab>
    <EditorToolbar @insert="$emit('insert', $event)" />
  </TabList>
</template>

<script setup lang="ts">
import { Tab, TabList } from '@headlessui/vue'
import EditorToolbar from './EditorToolbar.vue'

defineEmits<{
  (e: 'insert', type: 'link' | 'code' | 'mention'): void
}>()
</script>