<template>
  <div class="home">
    <HelloWorld msg="Game Opinion"/>
    <Cards/>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Cards
  }
}
</script>
