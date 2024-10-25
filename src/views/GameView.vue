//    がんばれ!  🌻

<template>
    <main>

        <GameCard :name="this.name"
                  :date="this.date"
                  :rate="this.rate"
                  :image="this.image"
                  :platforms="this.platforms"
                  :description="this.description" />

        <router-link :to="{path:`/game/${this.id}/grades`}">
            
                     <div class="grades_button">
                <button id="gradesButton" @click="hideButton">
                    Ver Opiniones
                </button>
            </div>
        </router-link>
        <router-view></router-view>

    </main>
</template>

<script>

import GameCard from '@/components/GameCard.vue';

export default {
    name: 'grades-view',
    props: {
        id:{
            type: String,
            required: true
        }
    },
    data: function(){
        return {
            name:"",
            platforms:[],
            date:"",
            rate: 0,
            image:"",
            description:"",
        }
    },
    // computed: { },
    methods: {
        async fetchGame(){
            try{
                const response = await fetch("https://api.rawg.io/api/games/"+this.id+"?key=e57111ce0c9342f292d1322de79fc9a9")

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

                console.log(json)

                this.name=json.name
                this.date=json.released
                this.rate=json.rating
                this.image=json.background_image
                this.description=json.description_raw

                json.parent_platforms.forEach((game)=>{
                    game.platform.name
                    // console.log(game.platform.name)
                    this.platforms.push(game.platform.name)
                })

            } catch (error) {
                console.log(error)
            }
        },

        hideButton(){
            document.getElementById('gradesButton').style.display="none"
        }
    },
    // watch: {},
    components: {
        GameCard
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchGame()
    }
    // -- End Lifecycle Methods
}

</script>

<style scoped>

    .grades_button{
        margin: 2rem auto 3rem auto;
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