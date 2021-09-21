

import Plantes from '../service/Plantes'


const state = {
    all:{},
    OnePlante:{},
    statusDelete:false
}


const getters = {

    AllPlante:state=>{
        return state.all.items
    },
    getOnePlante:state=>{
        return state.OnePlante
    },
}
const actions = {

    
    register({commit }, plante) {
        commit('registerRequest', plante);
    
        Plantes.register(plante)
            .then((res) => {
                    commit('registerSuccess', res.data);
                })
            .catch((error) => {
                commit('registerFailure', error);
            })
    },

    getOnePlante({ commit }, id) {

        commit('getOnePlanteLoading');

        Plantes.getOne(id)
            .then((res)=>{
                commit('getOneTuteurSuccess', res.data)
               
            })
            .catch(() => commit('getOnePlanteFailure'))
    },

    UpdatePlante({ commit }, plante){
        commit('UpdatePlanteLoading');

        Plantes.Update(plante)
            .then((res)=>{
                commit('UpdatePlanteSuccess', res.data)
            })
            .catch(() => commit('UpdatePlanteFailure'))
    },
    deletePlante({commit},plante){
        commit('deletePlanteLoading');
        Plantes.delete(plante.id)
            .then(()=>{
                var statusDelete = true
                commit('deletePlanteSuccess',{plante,statusDelete})
            })
            .catch(() =>{
                var statusDelete = false
                commit('deletePlanteFailure',statusDelete)
            })
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

    getOnePlanteLoading(state) {

        state.OneTuteur = { loading: true };
    },


    getOnePlanteSuccess(state, plante) {

        state.OneTuteur = plante;
    },


    getOneTuteurFailure(state) {

        state.OneTuteur = {};
    },

    UpdatePlanteLoading(state) {
        state.all = { loading: true };
    },


    UpdatePlanteSuccess(state, plante) {

        state.all = { items: plante };
    },

    UpdatePlanteFailure(state) {

        state.all = { items: state.all.items };
    },
    
    deletePlanteLoading(state) {

        state.statusDelete = null;
    },


    deletePlanteSuccess(state,{plante,statusDelete}) {
        state.statusDelete = statusDelete;
        state.all.items = state.all.items.filter(item => item !== plante)
    },

    deletePlanteFailure(state,statusDelete) {

        state.statusDelete = statusDelete;
    },
};

export const Plante = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

