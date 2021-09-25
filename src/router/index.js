import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Technique from '../views/Technique.vue'
import Carte from '../views/Carte.vue'
import Plantes from '../views/Plantes.vue'
import Climat from '../views/Climat.vue'
import DetailTechnique from '../views/DetailTechnique.vue'
import DetailPlante from '../views/DetailPlante.vue'


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
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router