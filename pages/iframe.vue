<template>
  <div class="bg-orange-200">
    <button
      class="mt-2 px-4 py-2 rounded text-white bg-red-400"
      @click="insertIframe($refs.container)"
    >
      Insert new IFRAME
    </button>
    IFRAME element
    <div>
      DIV element 1
      <div ref="container">
        DIV element 2
        <div>DIV element 3</div>
        <iframe
          src="/iframe"
          frameborder="0"
          width="100%"
          height="250"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blank',
  methods: {
    insertIframe(parentElement: Element) {
      const div = document.createElement('div')

      div.innerHTML = `DIV element 1<div>DIV element 2<iframe src="/iframe" frameborder="0" width="100%"></iframe></div>`
      // const iframe = document.createElement('iframe')
      //
      // iframe.src = `/iframe`
      parentElement.appendChild(div)
    },
  },
})
</script>

<style>
body {
  @apply bg-orange-300;
}
</style>
