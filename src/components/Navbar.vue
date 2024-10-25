<template>
    <nav>
        <h1>Game Opinion</h1>
        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
    </nav>
</template>

<script>
export default {
    name: 'navbar-comp',
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


    nav{
        background-color: #1a202c;
        height: 8vh;
        padding: 1vh 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1{
        font-size: 2rem;
        justify-content: left;
        color: greenyellow;
    }
    nav a {
        color: greenyellow;
        transform: scale(2);
    }


</style>