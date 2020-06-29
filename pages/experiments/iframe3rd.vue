<template>
  <iframe :srcdoc="html" frameborder="0" width="100%" height="500"></iframe>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blank',
  async asyncData({ $axios }) {
    const url = 'https://github.com/roshecode'
    const html = await $axios.$get(url)

    return {
      html: html.replace(
        '<head>',
        `<head><base href=${JSON.stringify(url)} />`
      ),
    }
  },
  methods: {
    insertIframe(parentElement: Element) {
      const div = document.createElement('div')

      div.innerHTML = `DIV element 1<div>DIV element 2<iframe src="/experiments/iframe" frameborder="0" width="100%"></iframe></div>`
      parentElement.appendChild(div)
    },
  },
})
</script>
