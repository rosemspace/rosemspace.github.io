<template>
  <img
    class="RosemLogo"
    src="~assets/logo.png"
    alt="Rosem logo"
    width="245"
    height="180"
  />
</template>
<style>
.RosemLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
