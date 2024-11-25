<template>
  <form action="#" @submit.prevent>
    <TabGroup>
      <TabList class="group flex items-center">
        <Tab as="template" v-slot="{ selected }">
          <button :class="[selected ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900', 'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium']">
            Write
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button :class="[selected ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900', 'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium']">
            Preview
          </button>
        </Tab>

        <div class="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex">
          <div class="flex items-center">
            <button type="button" @click="insertMarkdown('link')" class="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <span class="sr-only">Insert link</span>
              <LinkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="flex items-center">
            <button type="button" @click="insertMarkdown('code')" class="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <span class="sr-only">Insert code</span>
              <CodeBracketIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="flex items-center">
            <button type="button" @click="insertMarkdown('mention')" class="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <span class="sr-only">Mention someone</span>
              <AtSymbolIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </TabList>
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
    </TabGroup>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/20/solid'
import { parseMarkdown } from '../utils/markdown'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const preview = computed(() => parseMarkdown(props.modelValue))

const insertMarkdown = (type: 'link' | 'code' | 'mention') => {
  const templates = {
    link: '[Link text](url)',
    code: '```\ncode block\n```',
    mention: '@username'
  }
  emit('update:modelValue', props.modelValue + '\n' + templates[type])
}
</script>