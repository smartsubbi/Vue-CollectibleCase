<template>
    <div class="carousel__case-itemtwo">
        <img :src="getItemTwoUrl" :alt="getItemTwoAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemTwoUrl() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemTwoObj = this.$store.getters['collectiblePage/getSelectedSeriesItemTwo'];                           
                return  this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemTwoObj)[0] + '/item.png';
            } else {                            
                const itemTwoObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[1];                            
                return  this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemTwoObj)[0] + '/item.png';
            }
        },
        getItemTwoAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itemtwo {
        grid-column: 3;
        grid-row: 1 / 6;        
    }       
</style>
