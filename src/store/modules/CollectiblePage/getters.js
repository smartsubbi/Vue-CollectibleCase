export default {
    getCaseCollectionName(state) {        
        return state.selectedCollectionName;
    },
    getLatestSeriesData(state, getters, rootState, rootGetters) {        
        const tempOb = new Object();        
        tempOb.collectionName = rootGetters.getAllCollectibles[0].collectionName;           
        tempOb.collectionCharacterUrl = state.characterImgHost + rootGetters.getAllCollectibles[0].collectionName + state.imgType;                
        tempOb.collectionLogoUrl = state.logoImgHost + rootGetters.getAllCollectibles[0].collectionName + state.imgType;  
        const seriesData = rootGetters.getAllCollectibles.filter(element => element.collectionName === rootGetters.getAllCollectibles[0].collectionName);
        tempOb.collectionItems = new Array();            
        seriesData.forEach(data => {
            var tempObj = {};
            tempObj[data.year + '_' + data.month] = data.objInfoId;
            tempOb.collectionItems.push(tempObj);
        })        
        return tempOb;
    },
    getSelectedSeriesLogo(state) {        
        return state.selectedSeriesData.collectionLogoUrl;
    },
    getSelectedSeriesCharacters(state) {        
        return state.selectedSeriesData.collectionCharactersUrl;
    },
    getSelectedSeriesItemOne(state) {
        return state.selectedSeriesData.collectionItems[0];
    },
    getSelectedSeriesItemTwo(state) {
        return state.selectedSeriesData.collectionItems[1];
    },
    getSelectedSeriesItemThree(state) {
        return state.selectedSeriesData.collectionItems[2];
    },
    getSelectedSeriesItemFour(state) {
        return state.selectedSeriesData.collectionItems[3];
    },
    getSelectedSeriesItemFive(state) {
        return state.selectedSeriesData.collectionItems[4];
    },
    getSelectedSeriesBonusItem(state) {
        return state.selectedSeriesData.collectionItems[5];
    },
    getSeriesBtnImgType(state) {
        return state.seriesBtnImgHost;
    },
    getLogoImgHost(state) {
        return state.logoImgHost;
    },    
    getCharactersImgHost(state) {
        console.log(state.characterImgHost)
        return state.characterImgHost;
    },
    getItemImgHost(state) {
        return state.itemImgHost;
    },
    getImgType(state) {
        return state.imgType;
    }
}