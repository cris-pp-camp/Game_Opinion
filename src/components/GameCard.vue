//    がんばれ!  🌻

<template>
    <div class="container">

        <div class="left">
            
            <img :src="image" alt="">
            <h1 class="name_mobile">{{ name }}</h1>
        </div>

        <div class="right">
            <h1 class="name_desk">{{ name }}</h1>

            <h6>Released: {{ date }}</h6>
            
            <h5>{{ platforms.join('  |  ') }}</h5>

            <div class="description">
                <p>{{ description }}</p>
            </div>

            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <h2>{{ rate }}</h2>
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
        width: clamp(310px, 60%, 900px);
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
        mask-image: linear-gradient(0deg, rgba(34,34,34,0) 0%, rgba(34,34,34,0.6728538283062645) 73%, rgba(34,34,34,1) 98%);
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

    i{
        font-size: .8rem;
        margin-left: .5rem;
    }

    .name_desk{
        display: none;
    }

</style>