import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Technique from '../views/Technique.vue'
import Carte from '../views/Carte.vue'
import Plantes from '../views/Plantes.vue'
import Climat from '../views/Climat.vue'
import DetailTechnique from '../views/DetailTechnique.vue'
import DetailPlante from '../views/DetailPlante.vue'
import DetailRegion from '../views/DetailRegion.vue'

import Admin from '../views/Admin.vue'
import AddClimat from '../views/AddClimat.vue'
import AddPlante from '../views/AddPlante.vue'
import AddRegion from '../views/AddRegion.vue'
import AddTechnique from '../views/AddTechnique.vue'
import ResultatRecherche from '../views/ResultatRecherche.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/techniques',
        name: 'Technique',
        component: Technique,
    },
    {
        path: '/carte',
        name: 'Carte',
        component: Carte,
    },
    {
        path: '/plantes',
        name: 'Plantes',
        component: Plantes,
    },
    {
        path: '/climat',
        name: 'Climat',
        component: Climat,
    },
    {
        path: '/technique/:id',
        name: 'DetailTechnique',
        props: true ,
        component: DetailTechnique,
    },
    {
        path: '/plantes/:id',
        name: 'DetailPlante',
        props: true ,
        component: DetailPlante,
    },
    {
        path: '/region/:id',
        name: 'DetailRegion',
        props: true ,
        component: DetailRegion,
    },
    {
        path: '/admin/home',
        name: 'Admin',
        props: true ,
        component: Admin,
    },
    {
        path: '/admin/add/climat',
        name: 'AddClimat',
        props: true ,
        component: AddClimat,
    },
    {
        path: '/admin/add/plante',
        name: 'AddPlante',
        props: true ,
        component: AddPlante,
    },
    {
        path: '/admin/add/region',
        name: 'AddRegion',
        props: true ,
        component: AddRegion,
        
    },
    {
        path: '/admin/add/technique',
        name: 'AddTechnique',
        props: true ,
        component: AddTechnique,
    },
    {
        path: '/recherche/:type/:value',
        name: 'ResultatRecherche',
        props: true ,
        component: ResultatRecherche,
    },
    {
        path: '/user/login',
        name: 'Login',
        props: true ,
        component: Login,
    },
    {
        path: '/user/signup',
        name: 'Signup',
        props: true ,
        component: Signup,
    },
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router