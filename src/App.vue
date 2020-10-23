<template>
  <div id="app">
    <Homepage />
  </div>
</template>

<script>
import Homepage from './page/homepage/homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
