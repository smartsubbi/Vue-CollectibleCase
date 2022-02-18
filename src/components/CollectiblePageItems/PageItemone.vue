<template>
    <div class="carousel__case-itemone">
        <img :src="getItemOneUrl" :alt="getItemOneAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemOneUrl() {            
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemOneObj = this.$store.getters['collectiblePage/getSelectedSeriesItemOne'];                           
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemOneObj)[0] + '/item.png';
            } else {
                const itemOneObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[0];                                      
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemOneObj)[0] + '/item.png';
            }
        },
        getItemOneAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itemone {
        grid-column: 2;
        grid-row: 1 / 6;        
    }       
</style>
