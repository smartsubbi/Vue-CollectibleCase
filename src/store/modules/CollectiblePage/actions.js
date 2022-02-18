export default {
    setCollectionName(context, payload) {            
        context.commit('updateCaseCollectionName', payload);
    }
}