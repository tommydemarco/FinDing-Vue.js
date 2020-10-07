<template>
    <the-upper-header></the-upper-header>
    <the-header></the-header>
    <router-view v-slot="slotProps" mode="out-in">
      <transition>
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
</template>

<script>
import TheUpperHeader from './components/layouts/TheUpperHeader.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
    components: {
        TheHeader,
        TheUpperHeader
    }
    
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-image: url('./assets/img/6.jpg');
  background-attachment: fixed;
}

h1, h2, h3, h4, h5, p { color: #222}

/* animating the route components */
</style>