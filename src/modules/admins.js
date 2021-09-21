
import Admin from '../service/Admin'

import  router  from '../router/index';
import Vue from 'vue'

var data = sessionStorage.getItem('admin');

var admin;

if(data != undefined){

    admin =  sessionStorage.getItem('admin')

}else{

    admin = undefined

}

const state = admin ? { status: { loggedIn: true }, admin,all:{}} : { status: { loggedIn: false}, admin: null ,all:{}};


const getters = {

    statusConnexion:state=>{
        return state.status.loggedIn
    },
    statusError:state=>{

        return state.all.error
    },
    getAdmin:state=>{
        return state.admin
    }
}
const actions = {

    login({ commit }, admin) {

        commit('loginRequest');
        Admin.login(admin)
        .then(res => {
            if (res.data.token) {
                Vue.$cookies.config('2d')
                sessionStorage.setItem('admin', res.data);
                Vue.$cookies.set('admin', res.data)
                commit('loginSuccess', res.data)
                console.log('admin connected')
                router.push({name: "AdminHome",params:{
                    publier:'publier'
                }});
            }
                
            })
          .catch( error => {
            commit('loginFailure', error.response.data);
            console.log(error.response.data)
        })      
    },

    logout({ commit }) {
        sessionStorage.removeItem('admin');
        Vue.$cookies.remove('admin')
        commit('logout');
        router.push('/admin/login');
    },

    test(){
        Admin.test()
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    register({commit }, admin) {
        commit('registerRequest', admin);
    
        Admin.register(admin)
            .then((res) => {
                    commit('registerSuccess', res.data);
                    router.push({name: "AdminHome",params:{
                        publier:'publier'
                    }});

                })
            .catch((error) => {
                commit('registerFailure', error.response.data);
            })
    },

    getOneAdmin({ commit }, id) {

        commit('getOneLoading');

        Admin.getOne(id)
            .then((res)=>{
                commit('getOneSuccess', res.data)
            })
            .catch(error => commit('getOneFailure', error))

    },

    UpdateAdmin({ commit }, admin){
        commit('UpdateAdminLoading');

        Admin.Update(admin)
            .then((res)=>{
                commit('UpdateAdminSuccess', res.data)
            })
            .catch(() => commit(''))
    }

};

const mutations = {

    loginRequest(state) {

        state.status = { loggingIn: true };

    },

    loginSuccess(state, admin) {

        state.status = { loggedIn: true };
        state.all ={error:null};
        state.admin = admin;
        
    },

    loginFailure(state,error) {
        state.status = {};
        state.all ={error:error};
        state.admin = null;
    },

    logout(state) {
        state.status = { loggedIn: false};
        state.all ={error:null};
        state.admin = null;
    },

    registerRequest(state) {
        state.status = { registering: true };
    },

    registerSuccess(state) {
        state.status = {};
        state.all ={error:null};
    },

    registerFailure(state,error) {
        state.status = {};
        state.all ={error:error};
    },


    getOneLoading(state) {
        state.all = { loading: true };
    },


    getOneSuccess(state, admin) {
        state.all = { items: admin };
    },

    getOneFailure(state, error) {
        state.all = { error };
    },


    UpdateAdminLoading(state) {
        state.all = { loading: true };
    },


    UpdateAdminSuccess(state, admin) {

        state.all = { items: admin };
    },


    UpdateAdminFailure(state) {

        state.all = { items: state.all.items };
    },
};

export const admins = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

