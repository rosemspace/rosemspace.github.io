<template>
  <div class="greeting">
    <img class="logo" src="../assets/logo.png" alt="Logo" />
    <!--    <img class="ava" src="./assets/ava.jpg" alt="Photo" />-->
    <div class="hello">
      <h1 class="title">
        <span class="brand"><span class="r">R</span><span class="o">o</span>sem</span><wbr /><span class="domain"><span class="dot">.</span>space</span>
      </h1>
      <!--      <h1 class="title"><span class="brand"><span class="r">R</span>oshe</span></h1>-->
      <p>
        Forward-looking web packages based on modern standards<br>
        for complex and modular applications written mainly in PHP and TypeScript.<br>
<!--        <em>Work in progress...</em>-->
      </p>
      <ul class="social">
        <li v-for="{ title, url } in links">
          <a :href="url" target="_blank">{{ title }}</a>
        </li>
      </ul>
      <p>
        Hi there! My name is <strong>Roman Shevchenko</strong>. I'm a web developer.<br>
        My goal is to create centralized space of modern web packages for different kind of businesses.<br>
        Thanks for inspiration to my <span class="love">❤</span> <strong><a href="https://rosem-portfolio.netlify.com" target="_blank">Romanna Semenyshyn</a></strong>.
      </p>
    </div>
  </div>
</template>

<script>
import links from '../data/links/roshe.json'

export default {
  name: 'RosemGreeting',

  data() {
    return {
      links,
    }
  },
}
</script>

<style lang="postcss" scoped>
.greeting {
  flex-grow: 1;
  padding-bottom: 20px;
  font-size: 1.6rem;
  font-weight: 200;
  text-align: center;

  & p {
    & a {
      &:hover {
        border-bottom: solid 1px;
      }
    }
  }
}

.hello {
  margin: 20px auto;
  padding: .1px 20px;
  max-width: 850px;
  /*background: radial-gradient(#415c8a8f, transparent 105%);*/

  & p {
    margin: 30px 0;
    /*color: var(--secondary-color);*/
    color: white;
  }

  & strong {
    font-weight: bold;
  }
}

.social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 10px;
  font-size: 1.2rem;
  list-style: none;
  color: #e8f2ff;
  background: linear-gradient(to right, transparent, #9b71a545, transparent);

  & li {
    position: relative;
    margin: 0 12px;

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
      content: '●';
      pointer-events: none;
      /*text-align: end;*/
      /*unicode-bidi: isolate;*/
      /*font-variant-numeric: tabular-nums;*/
      position: absolute;
      right: calc(100% + 8px);
      top: 4px;
      transition: right .1s;
    }

    &:last-child {
      &:hover {
        &::after {
          left: 100%;
        }
      }

      &::after {
        right: auto;
        left: calc(100% + 8px);
        transition: left .1s;
      }
    }
  }

  & a {
    display: block;
    padding: 4px;
    border-bottom: solid 1px transparent;
    /*color: #e4f9ff;*/
    /*font-weight: 600;*/
    text-decoration: none;
  }
}

.logo,
.ava {
  width: 34vw;
  min-width: 126px;
  max-width: 242px;
  border: solid 0 #333;
  border-radius: 5%;
  box-shadow: 0 14px 20px #13131380;
  transition: all .1s;
}

.ava {
  border: solid 6px #eaf0f9;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(19, 19, 19, .4);
}

.title {
  font-size: 5.2rem;
  /*color: var(--secondary-color);*/
  color: var(--domain-color);
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
  font-size: 5rem;
  /*color: #ff4f4f;*/
  color: var(--brand-color);
  /*color: #ffdddd;*/
  /*white-space: nowrap;*/
}

.r {
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    left: -1.5rem;
    display: block;
    width: 6.4rem;
    height: 6.4rem;
    content: '';
    border: solid 1px;
    border-radius: 50%;
    transform: translateY(-50%) scale(1.2);
  }
}

.o {
  position: relative;
  /*top: 8px;*/
  color: transparent;
  /* Move the letter outside the screen instead of transparency to keep currentColor value */
  /*display: inline-block;*/
  /*text-indent: -99999%;*/

  &::after {
    content: '';
    display: block;
    position: absolute;
    /*top: 1.95rem;*/
    /*left: .1rem;*/
    /*width: 3rem;*/
    /*height: 3rem;*/
    top: 3.05rem;
    left: .12rem;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    border: solid 1px var(--brand-color);
    /*background: currentColor radial-gradient(currentColor, #dc8b38);*/
    transform-origin: -2.1rem 0;
    transition: transform 2s linear;
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
