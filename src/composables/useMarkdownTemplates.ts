export const useMarkdownTemplates = () => {
  const templates = {
    link: '[Link text](url)',
    code: '```\ncode block\n```',
    mention: '@username'
  } as const

  const getTemplate = (type: keyof typeof templates) => templates[type]

  return {
    getTemplate
  }
}