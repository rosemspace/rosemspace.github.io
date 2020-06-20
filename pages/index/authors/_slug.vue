<template>
  <div class="container">
    <nuxt-content class="content" :document="document" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import ContentImg from '~/components/ContentImg.vue'

export default Vue.extend({
  transition: 'fade',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ContentImg
  },
  async asyncData({
    $content,
    route: { path }
  }: Context): Promise<object | void> {
    const document = await $content(
      path === '/' ? 'index' : path.slice(1)
    ).fetch()

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
          content: this.document.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.document.description
        }
      ]
    }
  }
})
</script>

<style scoped>
@custom-selector :--photo .content > p:first-of-type;
@custom-selector :--contacts h1 + p;
@custom-selector :--details-title [id^='magento'], [id^='internal'];
@custom-selector :--h4-semibold [id*='-automation-'];
@custom-selector :--page-break-before [id^='platforms'];
@custom-selector :--h3-grid
  :--h4-semibold,
  [id^='general'],
  [id^='platforms'],
  [id^='tools'];

.container,
.content {
  @apply max-w-4xl;
}

.content {
  @apply flow-root mx-auto pt-2 px-20 pb-16 bg-white;

  max-width: 50rem;
}

:--photo {
  @apply m-0;

  & img {
    @apply float-right mt-10 w-1/4 rounded-full;
  }
}

:--contacts,
:--h3-grid + p {
  @apply grid;

  text-indent: initial;
  grid-template-columns: auto auto;

  & br {
    @apply hidden;
  }
}

:--h3-grid + p {
  @apply grid-cols-2 font-medium uppercase;

  & a,
  & span {
    @apply font-normal normal-case;
  }
}

h1 {
  @apply text-2xl font-semibold mt-12;
}

h2 {
  @apply text-xl font-medium uppercase mt-8;
}

h3 {
  @apply text-base font-semibold uppercase mt-4 mb-1 border-b border-gray-300;
}

h4 {
  @apply text-base font-bold mt-2 mb-1 border-b border-gray-300;
}

:--h4-semibold {
  @apply font-semibold;
}

p,
ul,
ol {
  @apply text-sm mt-2;
}

p {
  text-indent: 1rem;

  @nest .content > &:first-letter {
    @apply text-lg font-medium;
  }
}

:--details-title + p {
  text-indent: initial;

  &:first-letter {
    @apply text-sm;

    font-weight: inherit;
  }

  & strong {
    @apply font-medium uppercase;
  }
}

ul,
ol {
  @apply pl-8;
}

ul {
  @apply list-disc;
}

ol {
  @apply list-decimal;
}

a {
  @apply underline;
}

blockquote {
  @apply italic text-center mt-8;
}

table {
  @apply w-full text-left mt-2;
}

th,
td {
  @apply px-3 py-1;
}

th {
  @apply font-semibold bg-gray-100;
}

@media print {
  :--photo img,
  h1 {
    @apply mt-0;
  }

  :--page-break-before {
    /*page-break-before: always;*/
  }

  .content {
    @apply p-0;
  }

  .back {
    @apply hidden;
  }
}

@page {
  margin: 20mm;
}
</style>
