<template>
    <div class="carousel__case-itembonus">
        <img :src="getItemBonusUrl" :alt="getItemBonusAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemBonusUrl() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemBonusObj = this.$store.getters['collectiblePage/getSelectedSeriesBonusItem'];                   
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemBonusObj)[0] + '/item.png';
            } else {                           
                const itemBonusObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[5];                
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemBonusObj)[0] + '/item.png';
            }
        },
        getItemBonusAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itembonus {
        grid-column: 4;
        grid-row: 6 / 11;        
    }       
</style>
