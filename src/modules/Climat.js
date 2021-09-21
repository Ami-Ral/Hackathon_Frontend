

import Climats from '../service/Climats'




const state = {
    all:{},
    OneClimat:{},
    statusDelete:false
}


const getters = {

    AllClimat:state=>{
        return state.all.items
    },
    getOneClimat:state=>{
        return state.OneClimat
    },
}
const actions = {

    
    register({commit }, climat) {
        commit('registerRequest', climat);
    
        Climats.register(climat)
            .then((res) => {
                    commit('registerSuccess', res.data);

                })
            .catch((error) => {
                commit('registerFailure', error);
            })
    },

    getOneClimat({ commit }, climat) {

        commit('getOneClimatLoading');

        Climats.getOne(climat)
            .then((res)=>{
                commit('getOneClimatSuccess', res.data)
                
            })
            .catch(() => commit('getOneClimatFailure'))

    },

    UpdateClimat({ commit }, climat){
        commit('UpdateClimatLoading');

        Climats.Update(climat)
            .then((res)=>{
                commit('UpdateClimatsSuccess', res.data)
            })
            .catch(() => commit('UpdateClimatFailure'))
    },
    deleteClimat({commit},climat){
        
        commit('deleteClimatLoading');

        Climats.delete(climat.id)
            .then(()=>{
                var statusDelete = true
                commit('deleteClimatSuccess',{climat,statusDelete})
            })
            .catch(() =>{
                var statusDelete = false
                commit('deleteClimatFailure',statusDelete)
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


    getOneClimatLoading(state) {

        state.OneClimat = { loading: true };
    },


    getOneClimatSuccess(state, climat) {

        state.OneClimat = climat;
    },


    getOneClimatFailure(state) {

        state.OneClimat = { };
    },


    UpdateClimatLoading(state) {

        state.all = { loading: true };
    },


    UpdateClimatSuccess(state, climat) {

        state.all = { items: climat };
    },

    UpdateClimatFailure(state) {

        state.all = { items: state.all.items };
    },

    deleteClimatLoading(state) {

        state.statusDelete = null;
    },


    deleteClimatSuccess(state,{climat,statusDelete}) {
        state.statusDelete = statusDelete;
        state.all.items = state.all.items.filter(item => item !== climat)
    },

    deleteClimatFailure(state,statusDelete) {

        state.statusDelete = statusDelete;
    },
};

export const Climat = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

