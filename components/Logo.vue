<template>
  <img
    class="RosemLogo"
    src="~assets/images/logo.png"
    alt="Rosem logo"
    style="width: 242px; height: 242px;"
  />
</template>

<style>
.RosemLogo {
  @apply mx-auto;

  animation: 0.4s appear;
}

.RosemLogo,
.RosemAva {
  width: 34vw;
  min-width: 126px;
  max-width: 242px;
  border: solid 0 #333;
  border-radius: 5%;
  box-shadow: 0 14px 20px #13131380;
  transition: all 0.1s;
}

.RosemAva {
  border: solid 6px #eaf0f9;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(19, 19, 19, 0.4);
}

@keyframes appear {
  0% {
    @apply opacity-0;

    transform: scale(1.1);
  }
  100% {
    @apply opacity-100;
  }
}
</style>
