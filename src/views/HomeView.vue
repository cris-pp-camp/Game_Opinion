<template>
  <div class="home">
    <HelloWorld msg="Welcome to Game Grades"/>
    <Cards/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Cards
  }
}
</script>
