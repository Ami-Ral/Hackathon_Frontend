

import Regions from '../service/Regions'



const state = {
    all:{},
    OneRegion:{},
    statusDelete:false
}

const getters = {

    AllRegion:state=>{
        return state.all.items
    },
    getOneRegion:state=>{
        return state.OneRegion
    },
}
const actions = {

    register({commit }, region) {
        commit('registerRequest', region);
    
        Regions.register(region)
            .then((res) => {
                    commit('registerSuccess', res.data);
                })
            .catch((error) => {
                commit('registerFailure', error);
            })
    },

    getRegion({ commit }, region) {

        commit('getOneRegionLoading');
        Regions.getOne(region)
            .then((res)=>{
                commit('getOneRegionSuccess', res.data)
            })
            .catch(() => commit('getOneRegionFailure'))

    },
    
    UpdateRegion({ commit },region){

        commit('UpdateRegionLoading');
        Regions.Update(region)
            .then((res)=>{
                commit('UpdateRegionSuccess', res.data)
            })
            .catch(() => commit('UpdateRegionFailure'))
    },

    deleteRegion({commit},region){
        commit('deleteRegionLoading');
        Regions.delete(region.id)
            .then(()=>{
                var statusDelete = true
                commit('deleteRegionSuccess',{region,statusDelete})
            })
            .catch(() =>{
                var statusDelete = false
                commit('deleteRegionFailure',statusDelete)
            })
    },

    getAllRegion({ commit }){
        commit('getAllRegionLoading');
        Regions.getAll()
            .then((res)=>{
                commit('getAllRegionSuccess',res.data)
            })
            .catch(() => commit('getAllRegionFailure'))
    },
    
   
    
};

const mutations = {
    
    registerRequest(state) {

        state.status = { registering: true };
    },

    registerSuccess(state) {

        state.status = {};
    },

    registerFailure(state) {

        state.status = {};
    },


    getAllRegionLoading(state) {

        state.all = { loading: true };
    },

    getAllRegionSuccess(state, region) {

        state.all= {items:region};
    },


    getAllRegionFailure(state) {

        state.all = {};
    },

    getOneRegionLoading(state) {

        state.all = { loading: true };
    },


    getOneRegionSuccess(state, region) {

        state.OneRegion = region;
    },


    getOneRegionFailure(state) {

        state.OneRegion = {};
    },


    UpdateRegionLoading(state) {

        state.OneRegion = { loading: true };
    },


    UpdateRegionSuccess(state, region) {

        state.all = { items: region };
    },

    UpdateRegionFailure(state) {

        state.all = { items: state.all.items };
    },

    deleteRegionLoading(state) {

        state.statusDelete = null;
    },


    deleteRegionSuccess(state,{region,statusDelete}) {
        state.statusDelete = statusDelete;
        state.all.items = state.all.items.filter(item => item !== region)
    },

    deleteRegionFailure(state,statusDelete) {

        state.statusDelete = statusDelete;
    },
};

export const Region = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

