<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">        
        <series-image v-for="image in getCarouselSeriesImages" :key="image.collectionName" :id="image.id" :collectionName="image.collectionName"></series-image>        
        <template #addons>
            <Navigation />
        </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import SeriesImage from '../components/CarouselImages/SeriesImage.vue';

export default {
    name: 'Breakpoints',
    components: {
        Carousel,        
        Navigation,
                
        SeriesImage
    },  
    data: () => ({    
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
        },
    }),
    computed: {
        getCarouselSeriesImages() {
            //console.log();
            //return this.$store.getters['seriesCarousel/getSeriesImages']
            const uniqueValuesSet = new Set();
            return this.$store.getters.getAllCollectibles.filter((obj) => {                
                const isPresentInSet = uniqueValuesSet.has(obj.collectionName);               
                uniqueValuesSet.add(obj.collectionName);                
                return !isPresentInSet;
            }).reverse();                         
            
        },
        
    }
}
</script>
