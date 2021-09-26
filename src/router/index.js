import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Technique from '../views/Technique.vue'
import Carte from '../views/Carte.vue'
import Plantes from '../views/Plantes.vue'
import Climat from '../views/Climat.vue'
import DetailTechnique from '../views/DetailTechnique.vue'
import DetailPlante from '../views/DetailPlante.vue'
import Admin from '../views/Admin.vue'
import AddClimat from '../views/AddClimat.vue'
import AddPlante from '../views/AddPlante.vue'
import AddRegion from '../views/AddRegion.vue'


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
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router