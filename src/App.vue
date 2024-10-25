<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

*{
  margin: 0;
  box-sizing: border-box;
}

body{
  background: #444444;
  font-size: 0.875rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
}

</style>
