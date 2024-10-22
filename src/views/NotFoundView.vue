//    がんばれ!  🌻

<template>
    <main>

        <h1><i class="fa-solid fa-exclamation"></i></h1>
        <h2>404</h2>
        <h4>Page Not Found</h4>

        <router-link :to="{path:`/`}">
            <button>Home</button>
        </router-link>
    </main>
</template>

<script>
export default {
    name: 'notFound-view',
    // props: {},
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
    main{
        margin: 5rem auto;
        color: transparent;
        background: #daff72;
        background: linear-gradient(160deg, #caff38 27%, #f2ffcd60 100%);
        background-clip: text;
    }

    h1{
        font-size: 8rem;
    }

    h2{
        font-size: 4rem;
    }

    button{
        margin-top: 2rem;
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