<template>
  <TabPanels class="mt-2">
    <TabPanel class="-m-0.5 rounded-lg p-0.5">
      <label for="comment" class="sr-only">Comment</label>
      <div>
        <textarea 
          rows="5" 
          name="comment" 
          id="comment" 
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
          placeholder="Add your markdown..." 
        />
      </div>
    </TabPanel>
    <TabPanel class="-m-0.5 rounded-lg p-0.5">
      <div class="border-b">
        <div class="mx-px mt-px px-3 pb-12 pt-2 text-sm text-gray-800 prose prose-pink" v-html="preview"></div>
      </div>
    </TabPanel>
  </TabPanels>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TabPanel, TabPanels } from '@headlessui/vue'
import { parseMarkdown } from '@/utils/markdown'

const props = defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const preview = computed(() => parseMarkdown(props.modelValue))
</script>