<template>
  <div class="hello">

    <!-- Welcoming -->
    <h1>{{ msg }}</h1>
    <p>Sit amet consectetur adipisicing elit. Laborum, quasi. Nihil nulla alias harum facere, adipisci, amet delectus doloribus assumenda a accusamus veniam nisi ullam expedita.</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  margin: 2rem auto;
  width: 80%;
}

h1{
  font-size: 2.5rem;
  margin: 2rem 0;
}

a {
  color: #fdb489;
}
</style>
