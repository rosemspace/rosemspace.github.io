import { MetaInfo } from 'vue-meta'

export function preloadCSS(head: MetaInfo, hrefList: string[]): MetaInfo {
  for (const href of hrefList) {
    if (!head.link) {
      head.link = []
    }

    head.link.push({
      rel: 'preload',
      href,
      as: 'style',
      onload: `this.onload=null;this.rel='stylesheet'`,
      crossOrigin: 'anonymous',
    })

    if (!head.noscript) {
      head.noscript = []
    }

    head.noscript.push({
      innerHTML: `<link rel="stylesheet" href="${href}">`,
    })
  }

  return head
}
