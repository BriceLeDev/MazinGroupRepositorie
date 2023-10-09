import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Service from '../pages/Service.vue'


const routes = [

    {
        path:'/service',
        name: 'service',
        component: Service
    },
    {

        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/about',
        name:'about',
        component: About
    },
 
]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })
const router =createRouter({
    history: createWebHistory(),
    routes
})

export default router