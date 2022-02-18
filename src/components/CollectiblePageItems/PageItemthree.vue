<template>
    <div class="carousel__case-itemthree">
        <img :src="getItemThreeUrl" :alt="getItemThreeAltName">
    </div>  
</template>

<script>

export default {        
    computed: {        
        getItemThreeUrl() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                const itemThreeObj = this.$store.getters['collectiblePage/getSelectedSeriesItemThree'];                           
                return  this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemThreeObj)[0] + '/item.png';
            } else {                          
                const itemThreeObj = this.$store.getters['collectiblePage/getLatestSeriesData'].collectionItems[2];                
                return this.$store.getters['collectiblePage/getItemImgHost'] + Object.keys(itemThreeObj)[0] + '/item.png';
            }
        },
        getItemThreeAltName() {
            return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;           
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
    .carousel__case-itemthree {
        grid-column: 4;
        grid-row: 1 / 6;        
    }       
</style>
