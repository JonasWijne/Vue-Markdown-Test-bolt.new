<template>
  <div class="p-8 max-w-4xl mx-auto">
    <MarkdownEditor v-model="markdownInput" />
    <MarkdownOutput :html="markdownOutput" />
    <HtmlOutput :html="markdownOutput" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MarkdownEditor from '@/components/editor/MarkdownEditor.vue'
import MarkdownOutput from '@/components/output/MarkdownOutput.vue'
import HtmlOutput from '@/components/output/HtmlOutput.vue'
import { parseMarkdown } from '@/utils/markdown'

const markdownInput = ref('')
const markdownOutput = ref('')

watch(markdownInput, (value) => {
  markdownOutput.value = parseMarkdown(value)
})
</script>