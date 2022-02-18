export default {
    updateCaseCollectionName(state, payload) {                    
        state.selectedCollectionName = payload.collectionName;
        state.selectedSeriesData = payload.selectedSeriesData;              
    },        
}