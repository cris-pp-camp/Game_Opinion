<template>
    <div class="container">

        <div class="left">
            
            <img :src="image" alt="">
            <h1 class="name_game">{{ name }}</h1>
        </div>

        <div class="right">

            <h6>Released: {{ date }}</h6>
            
            <h5>{{ platforms.join('  |  ') }}</h5>

            <div class="description">
                <p>{{ description }}</p>
            </div>

            <div class="rating">
                <h2> Rating: {{ rate }}</h2>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'gamecard-comp',
    props: {
        id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        },
        date:{
            type: String,
            required: true
        },
        platforms:{
            type: String,
            required: true
        },
        rate:{
            type: Number,
            required: true
        },
        description:{
            type: String
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        width: clamp(250px, 90%, 400px);
        margin: 2rem auto;
        padding: .5rem 1rem;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background: #222;
    }


    .left{
        color: #daff72;
    }

    .right{
        line-height: 2rem;
    }

    img{
        width: 100%;
        margin: 1rem auto;
        border-radius: 5px;

    }

    .description{
        margin: 1rem auto;
        width: 80%;
        height: 9rem;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: #777 #222 ;
    }

    p{
        font-size: 12px;
        line-height: 1rem;
    }

    .rating{
        margin-top: 30px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
    }


    .button{
        margin: 10 0 0 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>