<template>
  <div class="greeting">
    <RosemLogo />
    <!--    <img class="ava" src="~assets/ava.jpg" alt="Photo" />-->
    <div class="hello">
      <h1 class="title">
        <span class="brand"
          ><span class="r">R</span><span class="o">o</span>sem</span
        >
        <span class="domain">Space</span>
      </h1>
      <!--      <h1 class="title"><span class="brand"><span class="r">R</span>oshe</span></h1>-->
      <p>
        Forward-looking web packages based on modern standards<br />
        for complex and modular applications written mainly in PHP and
        TypeScript.<br />
        <!--        <em>Work in progress...</em>-->
      </p>
      <ul class="social">
        <li v-for="{ title, url } in links" :key="url">
          <a :href="url" target="_blank" rel="noopener">{{ title }}</a>
        </li>
      </ul>
      <p>
        Hi there! My name is <strong>Roman Shevchenko</strong>. I'm a web
        developer.<br />
        My goal is to create modern web packages for different kind of
        businesses.<br />
        Thanks for inspiration to my <span class="love">❤</span>
        <strong
          ><a
            href="https://rosem-portfolio.netlify.com"
            target="_blank"
            rel="noopener"
            >Romanna Semenyshyn</a
          ></strong
        >.
      </p>
    </div>
  </div>
</template>

<script>
import RosemLogo from '@/components/Logo.vue'
import links from '@/data/links/roshe.json'

export default {
  components: {
    RosemLogo,
  },
  data() {
    return {
      links,
    }
  },
}
</script>

<style scoped>
.greeting {
  @apply text-center;

  flex-grow: 1;
  padding-bottom: 20px;
  font-weight: 200;

  & p {
    & a {
      &:hover {
        border-bottom: solid 1px;
      }
    }
  }
}

.hello {
  @apply flow-root mx-auto my-5 px-5;

  /*background: radial-gradient(#415c8a8f, transparent 105%);*/

  & p {
    @apply my-8 text-white;
  }

  & strong {
    @apply font-bold;
  }
}

.social {
  @apply flex flex-wrap justify-center list-none p-0 m-2;

  color: #e8f2ff;
  background: linear-gradient(to right, transparent, #9b71a545, transparent);

  & li {
    @apply relative mx-3;

    &:hover {
      &::before {
        right: 100%;
      }

      & + li {
        &::before {
          right: calc(100% + 17px);
        }
      }
    }

    &::before,
    &:last-child::after {
      @apply absolute pointer-events-none;

      content: '●';
      /*text-align: end;*/
      /*unicode-bidi: isolate;*/
      /*font-variant-numeric: tabular-nums;*/
      right: calc(100% + 8px);
      top: 0.8rem;
      transition: right 0.1s;
    }

    &:last-child {
      &:hover {
        &::after {
          left: 100%;
        }
      }

      &::after {
        @apply right-auto;

        left: calc(100% + 8px);
        transition: left 0.1s;
      }
    }
  }

  & a {
    @apply block p-3;

    /*color: #e4f9ff;*/
    /*font-weight: 600;*/
    text-decoration: none;
  }
}

.title {
  @apply text-5xl font-bold my-8;

  /*color: var(--secondary-color);*/
  color: #fff2c0;
  /*color: #ffca09;*/

  &:hover {
    & .o {
      &::after {
        animation: planet-spin 3s linear infinite;
        /*transform: rotate(1turn);*/
      }
    }
  }
}

.brand {
  /*color: #ff4f4f;*/
  color: var(--brand-color);
  /*color: #ffdddd;*/
  /*white-space: nowrap;*/
}

.r {
  @apply relative;

  &::after {
    @apply absolute block rounded-full border w-16 h-16;

    content: '';
    top: 50%;
    left: -1rem;
    border-color: inherit;
    transform: translateY(-50%) scale(1.2);
  }
}

.o {
  @apply relative text-transparent;
  /*top: 8px;*/
  /* Move the letter outside the screen instead of transparency to keep currentColor value */
  /*display: inline-block;*/
  /*text-indent: -99999%;*/

  &::after {
    @apply absolute block w-8 h-8 rounded-full border;

    content: '';
    top: 1.8rem;
    left: 0.1rem;
    width: 1.8rem;
    height: 1.8rem;
    border-color: var(--brand-color);
    transform-origin: -1.25rem 0;
    transition: transform 2s linear;
    /*background: currentColor radial-gradient(currentColor, #dc8b38);*/
  }
}

.domain {
  @apply relative lowercase;

  &::before {
    @apply absolute;

    content: '.';
    right: 100%;
  }
}

.love {
  color: tomato;
}

@keyframes planet-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
