<template>
  <form action="#" @submit.prevent>
    <TabGroup>
      <EditorTabs @insert="handleInsert" />
      <EditorContent
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </TabGroup>
  </form>
</template>

<script setup lang="ts">
import { TabGroup } from '@headlessui/vue'
import EditorTabs from './EditorTabs.vue'
import EditorContent from './EditorContent.vue'
import { useMarkdownTemplates } from '@/composables/useMarkdownTemplates'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { getTemplate } = useMarkdownTemplates()

const handleInsert = (type: 'link' | 'code' | 'mention') => {
  emit('update:modelValue', props.modelValue + '\n' + getTemplate(type))
}
</script>