<template>
    <div class="carousel__case-characters">
        <img :src="getCharactersImageUrl" :alt="getCharactersAltName">
    </div>  
</template>

<script>
export default {   
    computed: {
        getCharactersImageUrl() {                       
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                return this.$store.getters['collectiblePage/getSelectedSeriesCharacters'];
            } else {
                return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionCharacterUrl;              
            }
        },
        getCharactersAltName() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                return this.$store.getters['collectiblePage/getCaseCollectionName'];
            } else {
                return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;
            }            
        }
    },
    methods: {
    //    getLatestData() {
           
    //    }
    } 

}
</script>

<style scoped>
.carousel__case-characters {
  grid-column: 1;
  grid-row: 4 / 11;
}
</style>
