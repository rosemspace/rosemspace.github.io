import { LinkPropertyHref, MetaInfo } from 'vue-meta'

type Properties = {
  hid: string
  href: string
}

export function preloadStylesheet<T extends MetaInfo>(
  head: T,
  propertiesList: Properties[]
): T {
  if (!head.link) {
    head.link = []
  }

  if (!head.noscript) {
    head.noscript = []
  }

  if (!head.__dangerouslyDisableSanitizersByTagID) {
    head.__dangerouslyDisableSanitizersByTagID = {}
  }

  const dangerMap = head.__dangerouslyDisableSanitizersByTagID

  for (const properties of propertiesList) {
    const link: LinkPropertyHref = {
      once: true,
      hid: properties.hid,
      rel: 'preload',
      as: 'style',
      // onload: `this.onload=null;this.rel='stylesheet'`,
      href: properties.href,
      crossOrigin: 'anonymous',
      media: 'all',
      // @ts-ignore
      callback(this: LinkPropertyHref, element: HTMLLinkElement) {
        // element.removeAttribute('data-hid')
        // link.skip = true
        link.rel = element.rel = 'stylesheet'
      },
    }

    head.link.push(link)
    head.noscript.push({
      hid: properties.hid,
      innerHTML: `<link rel="stylesheet" href="${properties.href}" media="all">`,
    })

    if (!dangerMap[properties.hid]) {
      dangerMap[properties.hid] = []
    }

    if (!dangerMap[properties.hid].includes('innerHTML')) {
      dangerMap[properties.hid].push('innerHTML')
    }
  }

  return head
}

type GoogleFontParams = { family: string; weights?: number[]; display?: string }

export function preloadGoogleFonts<T extends MetaInfo>(
  head: T,
  fonts: GoogleFontParams[]
): T {
  const properties: Properties[] = []

  for (const font of fonts) {
    const {
      family,
      weights = [300, 400, 500, 600, 700],
      display = 'swap',
    } = font

    properties.push({
      hid: family,
      href: `https://fonts.googleapis.com/css?family=${family}:${weights.join(
        ','
      )}&display=${display}`,
    })
  }

  return preloadStylesheet(head, properties)
}
