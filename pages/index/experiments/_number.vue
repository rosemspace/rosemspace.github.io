<template>
  <div class="container">
    <h1 class="text-3xl font-bold mb-4">Experiment {{ number }}</h1>
    <div class="flex mb-4">
      <div class="w-full">
        <h2 class="text-xl font-bold">Description</h2>
        <p>
          When the DOM mutation method such as <code>appendChild</code> or
          <code>insertBefore</code> is called add a red border for all inserted
          <code>DIV</code> elements including those in currently inserting
          <code>IFRAME</code> elements.
        </p>
        <div class="flex mt-4">
          <button
            class="px-4 py-2 rounded text-white bg-red-400"
            @click="insertDiv($refs.container)"
          >
            Insert 3 new nested DIVs
          </button>
          <button
            class="ml-4 px-4 py-2 rounded text-white bg-red-400"
            @click="insertIframe($refs.container)"
          >
            Insert new IFRAME
          </button>
          <button
            class="ml-4 px-4 py-2 rounded text-white bg-red-400"
            @click="insertIframe3rd($refs.container)"
          >
            Insert new 3rd-party IFRAME
          </button>
        </div>
        <div ref="container"></div>
      </div>
      <div class="ml-4">
        <h2 class="text-xl font-bold">Solution</h2>
        <p>
          For 3rd-party <code>IFRAME</code>s we can configure a proxy server or
          fetch its content via <code>AJAX</code>, add <code>BASE</code> tag and
          insert the final <code>HTML</code> in <code>srcdoc</code> attribute
          (or encoded <code>HTML</code> in <code>src</code> attribute).
        </p>
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'fade',
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.number)
  },
  async asyncData({ $content }) {
    const document = await $content('experiments/1').fetch()

    return { document }
  },
  data() {
    const number = this.$route.params.number

    return { number }
  },
  methods: {
    insertDiv(parentElement: Element) {
      const div = document.createElement('div')

      div.innerHTML = `DIV element 1<div>DIV element 2<div>DIV element 3</div></div>`
      parentElement.appendChild(div)
    },
    insertIframe(parentElement: Element) {
      const div = document.createElement('div')

      div.innerHTML = `DIV element 1<div>DIV element 2<iframe src="/iframe" frameborder="0" width="100%" height="500"></iframe></div>`
      parentElement.appendChild(div)
    },
    insertIframe3rd(parentElement: Element) {
      const div = document.createElement('div')

      div.innerHTML = `DIV element 1<div>DIV element 2<iframe src="/iframe3rd" frameborder="0" width="100%" height="500"></iframe></div>`
      parentElement.appendChild(div)
    },
  },
  head(this: any) {
    return {
      script: [{ src: `/experiments/${this.number}.js` }],
    }
  },
})
</script>

<style scoped>
.container {
  @apply block self-start mx-6 px-6 py-4 bg-orange-200;
}
</style>
