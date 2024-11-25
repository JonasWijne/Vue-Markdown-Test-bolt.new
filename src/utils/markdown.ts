import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import emoji from 'markdown-it-emoji'
import DOMPurify from 'dompurify'

export const createMarkdownParser = () => {
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>'
        } catch (__) {
          // Handle errors silently
        }
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    },
    html: true,
    linkify: true,
  })

  md.use(emoji)
  return md
}

export const parseMarkdown = (markdown: string): string => {
  const md = createMarkdownParser()
  const dirty = md.render(markdown || '')
  return DOMPurify.sanitize(dirty)
}