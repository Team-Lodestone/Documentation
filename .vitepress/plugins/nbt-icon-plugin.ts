import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'

export default function nbtIconPlugin(md: MarkdownIt) {
  md.core.ruler.after('inline', 'nbt-icon', state => {
    const tokens = state.tokens

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      // Look for <li class="nbt tagType">
      if (token.type === 'list_item_open' && token.attrs) {
        const classAttr = token.attrs.find(([name]) => name === 'class')
        if (!classAttr) continue

        const classValue = classAttr[1]
        if (!classValue.startsWith('nbt ')) continue

        const [, type] = classValue.split(' ')

        // Inject <NBTIcon type="..." /> at the start of the <li> content
        const nextToken = tokens[i + 1]
        if (nextToken?.type === 'inline') {
          nextToken.content = `<NBTIcon type="${type}" /> ${nextToken.content}`

          nextToken.type = 'html_inline'
          nextToken.tag = ''
          nextToken.children = []
        }
      }
    }
  })
}
