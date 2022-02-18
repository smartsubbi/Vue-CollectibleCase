<template>
    <div class="carousel__case-itemfour">
        <img :src="getItemFourUrl" :alt="getItemFourAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemFourUrl() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemFourObj = this.$store.getters['collectiblePage/getSelectedSeriesItemFour'];                           
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemFourObj)[0] + '/item.png';
            } else {                                          
                const itemFourObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[3];                
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemFourObj)[0] + '/item.png';
            }
        },
        getItemFourAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itemfour {
        grid-column: 2;
        grid-row: 6 / 11;        
    }       
</style>
