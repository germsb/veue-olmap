<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <span> | </span>
    <router-link to="/about">about</router-link>
    <span> | </span>
    <router-link to="/abouts">error</router-link>
    <app-view/>
  </div>
</template>

<script>
import AppView from './AppView';

export default {
  components: {
    AppView,
  },
  head: {
    titleTemplate(title) {
      if (title) return `${title} | VueNeue`;
      return 'VueNeue';
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
