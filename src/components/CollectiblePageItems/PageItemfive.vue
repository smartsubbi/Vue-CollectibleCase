<template>
    <div class="carousel__case-itemfive">
        <img :src="getItemFiveUrl" :alt="getItemFiveAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemFiveUrl() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemFiveObj = this.$store.getters['collectiblePage/getSelectedSeriesItemFive'];                    
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemFiveObj)[0] + '/item.png';
            } else {
                const itemFiveObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[4];                
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemFiveObj)[0] + '/item.png';
            }
        },
        getItemFiveAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itemfive {
        grid-column: 3;
        grid-row: 6 / 11;        
    }       
</style>
