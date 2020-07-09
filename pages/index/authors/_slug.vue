<template>
  <div class="container">
    <NuxtContent :document="document" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentOptions } from '@/utils/content'

export default Vue.extend({
  scrollToTop: true,
  transition: 'fade',
  ...contentOptions(),
})
</script>

<style src="@/assets/css/content.pcss" lang="postcss"></style>

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
@custom-selector :--grid-h4 h4:not(#evolution);
@custom-selector :--soft-h4 h4[id*='-automation-'];
@custom-selector :--details-title h4[id^='magento'], h4[id^='internal'];
@custom-selector :--grid-title :--grid-h3, :--soft-h4;

:--content {
  & > :--photo {
    @apply m-0;

    & img {
      @apply float-right mt-2 w-1/4 rounded-full;
    }
  }

  & :--contacts,
  & :--grid-title + p {
    @apply grid;

    text-indent: initial;
    grid-template-columns: auto;

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
    @apply grid-cols-1;
  }

  & :--grid-h4 + p {
    @apply grid;
  }

  & :--soft-h4 {
    @apply font-semibold;
  }

  & :--details-title + p {
    text-indent: initial;

    &::first-letter {
      @apply text-sm;

      font-weight: inherit;
    }
  }
}

@screen md {
  :--content {
    & > :--photo {
      & img {
        @apply mt-10;
      }
    }

    & :--contacts,
    & :--grid-title + p {
      grid-template-columns: auto auto;
    }

    & :--grid-title + p {
      @apply grid-cols-2;
    }

    & :--grid-h4 + p {
      @apply block;
    }
  }
}

@media print {
  :--content :--photo img {
    @apply mt-0;
  }
}
</style>
