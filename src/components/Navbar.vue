//    がんばれ!  🌻

<template>
    <nav>
        <img src="@/assets/lightIcon.png" alt="Icon">
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
        height: 8vh;
        padding: 1vh 5vw;
        display: flex;
        justify-content: space-between;
        background: #1c1c1c;
        align-items: center;
    }

    nav a {
        font-weight: bold;
        text-decoration: none;
        color: #daff7290;
    }

    nav a.router-link-exact-active {
        color: #daff7220;
    }

    nav img{
        height: 90%;
    }
</style>