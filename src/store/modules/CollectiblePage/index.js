import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            selectedCollectionName: null,
            selectedSeriesData: null,
            seriesBtnImgHost: 'http://images.neopets.com/ncmall/collectibles/case/buttons/',
            characterImgHost: 'http://images.neopets.com/ncmall/collectibles/case/collections/',
            logoImgHost: 'http://images.neopets.com/ncmall/collectibles/case/logos/',
            itemImgHost: 'https://images.neopets.com/ncmall/collectibles/',
            imgType: '.png'
        }        
    },
    mutations,
    actions,
    getters
}