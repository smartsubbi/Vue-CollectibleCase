<template>    
    <Slide >
        <div class="carousel__item" @click="scn">
            <img :src="imageUrl" :alt="collectionName">
        </div>    
    </Slide >   
</template>

<script>
    import { Slide } from 'vue3-carousel';    
    export default {
        props: ['id', 'collectionName'],
        components: {
            Slide
        },
        computed: {
            imageUrl() {                
                return this.$store.getters['collectiblePage/getSeriesBtnImgType'] + this.collectionName + this.$store.getters['collectiblePage/getImgType']; //
            }           
        },
        methods: {            
            scn() {                   
                const tempOb = new Object();                   
                tempOb.collectionName = this.collectionName;                       
                tempOb.collectionCharactersUrl = this.$store.getters['collectiblePage/getCharactersImgHost'] + this.collectionName + this.$store.getters['collectiblePage/getImgType'];                
                tempOb.collectionLogoUrl = this.$store.getters['collectiblePage/getLogoImgHost'] + this.collectionName + this.$store.getters['collectiblePage/getImgType'];  
                const seriesData = this.$store.getters.getAllCollectibles.filter(element => element.collectionName === this.collectionName);
                tempOb.collectionItems = new Array();            
                seriesData.forEach(data => {
                    var tempObj = {};
                    tempObj[data.year + '_' + data.month] = data.objInfoId;
                    tempOb.collectionItems.push(tempObj);
                })
                this.$store.dispatch('collectiblePage/setCollectionName', {
                    id: this.id, collectionName: this.collectionName, selectedSeriesData: tempOb 
                });                
            }
        }    
    }

</script>