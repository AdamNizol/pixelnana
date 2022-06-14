<template>
  <div id="app">
    <PixelBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PixelBoard from './components/PixelBoard.vue'

export default {
  name: 'App',
  components: {
    PixelBoard
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding-top: 5px;
  background-color: rgb(100,100,110);
  min-height: 100vh;
  box-sizing: border-box;
}
body{
  margin: 0;
}
</style>
