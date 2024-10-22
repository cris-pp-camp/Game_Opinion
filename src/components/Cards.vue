//    がんばれ!  🌻

<template>
    <main>
      <div class="card" v-for="game in games" :key="game.id">
        <img :src="game.background_image" alt="Game Poster">
        <h2 class="game_title">{{ game.name }}</h2>
        <h4 class="game_title">
            <i class="fa-solid fa-star"></i>
            {{ game.rating }}
        </h4>
        <button @click="redirectTo(game.id)">Rate game</button>
      </div>
    </main>
</template>

<script>
export default {
    name: 'cards-comp',
    // props: {},
    data: function(){
        return {
            games: []
        }
    },
    // computed: {},
    methods: {
        async fetchGames(){
            try{
                const response = await fetch("https://api.rawg.io/api/games?key=e57111ce0c9342f292d1322de79fc9a9")

                if (!response.ok){
                    if (response.status===404){
                        alert(`Game not found.`)
                        return
                    }
                    else {
                        throw new Error(`HTTP Error`+response.status)
                    }
                }

                const json = await response.json()

                console.log(json.results)

                this.addGame(json.results)

            } catch (error) {
                console.log(error)
            }
        },

        addGame(gameData){
            this.games = gameData
            console.log(gameData) },

        redirectTo(id){
            this.$router.push('/game/' + id)
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchGames()
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>

main{
    margin: 2rem auto 4rem auto;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:20px;
}

.card{
    padding: .7rem;
    background: #222;
    width: clamp(250px, 80%, 400px);
}

.card img{
    width: 100%;
    border-radius: 5px;
}

.game_title{
    margin: 1rem auto;
}

i{
    font-size: smaller;
}

button{
    cursor: pointer;
    border: 1px solid #daff7250;
    background: transparent;
    color: #daff72;
    border-radius: 5px;
    padding: .2rem .8rem;
    transition: border 1s;
}

button:hover{
    border: 1px solid #eaffaf;
}

</style>