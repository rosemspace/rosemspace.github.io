<template>
  <div class="container">
    <nuxt-content :document="document" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'fade',
  async asyncData({ $content, route: { path }, error }) {
    const document = await $content(path === '/' ? 'index' : path.slice(1))
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return { document }
  },
  head(this: any) {
    return {
      title: this.document.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.document.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.document.description,
        },
      ],
    }
  },
})
</script>

<style src="~/assets/css/content.pcss" lang="postcss"></style>

<style scoped lang="postcss">
@custom-selector :--content
  .nuxt-content-container >>> .nuxt-content,
  .container >>> .nuxt-content;
@custom-selector :--photo p:first-child;
@custom-selector :--contacts h1#roman-shevchenko + p;
@custom-selector :--grid-h3
  h3[id^='general'],
  h3[id^='platforms'],
  h3[id^='tools'];
@custom-selector :--soft-h4 h4[id*='-automation-'];
@custom-selector :--details-title h4[id^='magento'], h4[id^='internal'];
@custom-selector :--grid-title :--grid-h3, :--soft-h4;

:--content {
  & > :--photo {
    @apply m-0;

    & img {
      @apply float-right mt-10 w-1/4 rounded-full;
    }
  }

  & :--contacts,
  & :--grid-title + p {
    @apply grid;

    text-indent: initial;
    grid-template-columns: auto auto;

    & br {
      @apply hidden;
    }
  }

  & :--grid-title,
  & :--details-title {
    & + p strong {
      @apply font-medium text-gray-700 uppercase;
    }
  }

  & :--grid-title + p {
    @apply grid-cols-2;
  }

  & :--soft-h4 {
    @apply font-semibold;
  }

  & :--details-title + p {
    text-indent: initial;

    &:first-letter {
      @apply text-sm;

      font-weight: inherit;
    }
  }
}

@media print {
  :--content :--photo img {
    @apply mt-0;
  }
}
</style>
