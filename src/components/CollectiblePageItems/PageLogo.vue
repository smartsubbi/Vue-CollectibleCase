<template>
    <div class="carousel__case-logo">
        <img :src="getLogoImageUrl" :alt="getLogoAltName">
    </div>  
</template>

<script>
export default {   
  
    computed: {        
        getLogoImageUrl() {                                
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {                
                return this.$store.getters['collectiblePage/getSelectedSeriesLogo'];
            } else {
                return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionLogoUrl;              
            }            
        },
        getLogoAltName() {
            if(this.$store.getters['collectiblePage/getCaseCollectionName']) {
                return this.$store.getters['collectiblePage/getCaseCollectionName'];
            } else {
                return this.$store.getters['collectiblePage/getLatestSeriesData'].collectionName;
            }                       
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
.carousel__case-logo {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
</style>
