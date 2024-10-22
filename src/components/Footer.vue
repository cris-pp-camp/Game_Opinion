//    がんばれ!  🌻

<template>
    <div class="footer">
        <img src="@/assets/lightIcon.png" alt="Icon">
    </div>
</template>

<script>
export default {
    name: 'footer-comp',
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

.footer{
    background: #22222280;
    font-size: .7rem;
    height: 3%;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    height: 90%;
}
    
</style>