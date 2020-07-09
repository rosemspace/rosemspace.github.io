<template>
  <iframe :srcdoc="html" width="100%" height="500"></iframe>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blank',
  async asyncData({ $http }) {
    const url = 'https://github.com/roshecode'
    const response = await $http.get(url)
    const html = await response.text()

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

      div.innerHTML = `DIV element 1<div>DIV element 2<iframe src="/experiments/iframe" width="100%"></iframe></div>`
      parentElement.appendChild(div)
    },
  },
})
</script>
