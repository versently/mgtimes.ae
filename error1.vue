<template>
  <section class="nofound">
    <div class="front-section__container nofound__wrapper">
      <h1 class="front-section__title">404</h1>
      <div class="front-section__line"></div>
      <div class="front-section__text">Page not found</div>
      <a href="/" class="front-section__text"
        >Go back to the main page</a
      >
    </div>
  </section> 
</template>

<script setup>
defineProps(["error"]);
</script>

<style>
.nofound__wrapper .front-section__title {
  font-size: 120px;
}
.nofound__wrapper {
  height: unset;
}
.nofound__wrapper .front-section__title {
  color: #000;
}
.nofound__wrapper .front-section__text {
  color: #000;
  font-weight: 500;
  font-size: 16px;
}
.front-section__line {
  margin: 20px auto;
}
.nofound__wrapper a {
  color: #000;
  position: relative;
  padding-left: 40px;
  width: fit-content;
  font-size: 15px;
  padding-top: 15px;
  transition: all 0.4s ease-in-out;
  font-weight: 500;
  white-space: nowrap;
}
.nofound__wrapper a:after {
  content: url(/img/index/services-section/list/arrow.svg);
  position: absolute;
  top: unset;
  bottom: 0;
  transform: rotate(-180deg);
  right: unset;
  height: 24px;
  left: -5px;
  width: 26px;
  transition: all 0.4s ease-in-out;
}
.nofound__wrapper a:hover {
  color: rgb(158, 34, 32);
}
.nofound__wrapper a:hover:after {
  left: -15px;
  content: url(/img/index/services-section/list/arrow-red.svg);
}
</style>
