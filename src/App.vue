<template>
    <the-upper-header></the-upper-header>
    <the-header></the-header>
    <router-view></router-view>
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
}

h1, h2, h3, h4, h5, p { color: #222}
</style>