<template>
  <div class="hello">
    <p>Bienvenido a Game Opinion, el lugar donde los gamers como tú pueden compartir sus experiencias, opiniones y recomendaciones sobre los últimos títulos. Ya sea que te gusten los juegos de acción, aventuras o estrategia, aquí encontrarás reseñas auténticas y discusiones apasionadas. ¡Únete a la conversación y descubre tu próximo juego favorito!</p>
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

<style scoped>

.hello{
  margin: 2rem auto;
  width: 80%;
}

h1{
  font-size: 3rem;
  margin: 2rem 0;
}

p{
  font-size: 1.2rem;
}
</style>
