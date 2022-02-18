<template>
    <div class="wrapper" >                
        <page-logo></page-logo>
        <page-itemone></page-itemone>
        <page-itemtwo></page-itemtwo>
        <page-itemthree></page-itemthree>
        <page-characters></page-characters>       
        <page-itemfour></page-itemfour>
        <page-itemfive></page-itemfive>
        <page-itembonus></page-itembonus>
    </div>
</template>

<script>
import PageLogo from '../components/CollectiblePageItems/PageCharacters.vue';
import PageCharacters from '../components/CollectiblePageItems/PageLogo.vue';
import PageItemone from './CollectiblePageItems/PageItemone.vue';
import PageItemtwo from '../components/CollectiblePageItems/PageItemtwo.vue';
import PageItemthree from '../components/CollectiblePageItems/PageItemthree.vue';
import PageItemfour from '../components/CollectiblePageItems/PageItemfour.vue';
import PageItemfive from '../components/CollectiblePageItems/PageItemfive.vue';
import PageItembonus from '../components/CollectiblePageItems/PageItembonus.vue';

export default {
    components: {
        PageLogo,
        PageCharacters,
        PageItemone,
        PageItemtwo,
        PageItemthree,
        PageItemfour,
        PageItemfive,
        PageItembonus
    },  
    data() {
        return {
            // collectionName: null,
            // collectionData: null,
            // collectionLogoUrl: null,
            // collectionCharacterUrl: null,
            // collectionItems: []          
        }
    },
    computed: {
        characters() {          
            return 'test';
        },
    },
    methods: {
        getLatestSeriesData() {        
            const tempOb = new Object();    
            const latestSeriesCollectionName = this.$store.getters.getAllCollectibles[0].collectionName;    
            tempOb.collectionName = latestSeriesCollectionName;           
            tempOb.collectionCharacterUrl = this.$store.getters['collectiblePage/getCharactersImgHost'] + latestSeriesCollectionName + this.$store.getters['collectiblePage/getImgType'];                
            tempOb.collectionLogoUrl = this.$store.getters['collectiblePage/getLogoImgHost'] + latestSeriesCollectionName + this.$store.getters['collectiblePage/getImgType'];  
            const seriesData = this.$store.getters.getAllCollectibles.filter(element => element.collectionName === latestSeriesCollectionName);
            tempOb.collectionItems = new Array();            
            seriesData.forEach(data => {
                var tempObj = {};
                tempObj[data.year + '_' + data.month] = data.objInfoId;
                tempOb.collectionItems.push(tempObj);
            })        
            return tempOb;
        }
    },
    created() {
        // const latestSeriesData = this.$store.getters.getLatestSeriesData;       
        // this.collectionName = latestSeriesData.collectionName;
        // this.collectionLogoUrl = latestSeriesData.collectionLogoUrl;
        // this.collectionCharacterUrl = latestSeriesData.collectionCharacterUrl;
    }
        

}
</script>



<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        grid-template-rows: repeat(10, 50px);
        margin-top: 16px;
    }
    .wrapper > div {
        border: 2px solid rgb(233,171,88);
        border-radius: 5px;
        background-color: rgba(233,171,88,.5);
        padding: 1em;
        color: #d9480f;
    }
    .one {
        grid-column: 1;
        grid-row: 1 / 4;
    }
    .two {
        grid-column: 2;
        grid-row: 1 / 6;
    }
    .three {
        grid-column: 3;
        grid-row: 1 / 6;
    }
    .four {
        grid-column: 4;
        grid-row: 1 / 6;
    }
    .five {
        grid-column: 1;
        grid-row: 4 / 11;
    }

    .six {
        grid-column: 2;
        grid-row: 6 / 11;
    }
    .seven {
        grid-column: 3;
        grid-row: 6 / 11;
    }
    .eight {
        grid-column: 4;
        grid-row: 6 / 11;
    }

</style>