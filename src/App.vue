<template>
    <base-container>
        <series-carousel></series-carousel>
        <collectible-page></collectible-page>    
    </base-container>
</template>

<script>
import SeriesCarousel from './components/SeriesCarousel.vue'
import CollectiblePage from './components/CollectiblePage.vue'

export default {
    components: {
        SeriesCarousel,
        CollectiblePage        
    },
    methods: {
        getTestMethod() {

        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');

#app {
    font-family: 'Merienda', Arial, Helvetica, sans-serif;
} 
</style>


