<template>
    <main>

        <img src="@/assets/404.png" alt="404">

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

    }

    img{
        border-radius: 10px;
        width: 50%;
        margin: 0 auto;
        display: block;
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
        transform: scale(2);
    }

    button:hover{
        border: 1px solid #eaffaf;
    }
    
</style>