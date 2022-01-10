import { createRouter, createWebHistory } from 'vue-router'
import Characters from '@/views/Characters'
import Character from '@/views/Character'
import Episodes from '@/views/Episodes'
import Episode from '@/views/Episode'
import Locations from '@/views/Locations'
import Location from '@/views/Location'

const routes = [
    { path: '/', component: Characters},
    { path: '/character/:id',component: Character, props: true },
    { path: '/episodes', component: Episodes},
    { path: '/episode/:id', component: Episode, props: true },
    { path: '/locations', component: Locations },
    { path: '/location/:id', component: Location, props: true },
    { path: "/:catchAll(.*)*", component: () => import('@/views/PageNotFound') }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router