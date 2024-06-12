import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import { useAuth } from '@/store/auth'
import routePath from './routePath'

const routes = [
    {
        path: '/',
        name: routePath.home,
        component: Home,
        meta: {
           requiresAuth: true
        }
    },
    {
        path: '/auth',
        name: routePath.auth,
        component: Auth,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const { isAuth } = useAuth()
    const requiresAuth = to.meta.requiresAuth 

    if (requiresAuth && !isAuth) return { name: routePath.auth }

    if (isAuth && to.name == routePath.auth ) return { name: routePath.home }
})

export default router