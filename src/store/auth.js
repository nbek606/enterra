import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/plugins/axios'

export const useAuth = defineStore('auth', () => {
    const token = ref('')
    const refreshToken = ref('')
    const latestTokenUpdate = ref(0)
    const tokenLifeTime = ref(0)

    const setAttributes = async(attr) => {   
        token.value = attr['token']
        refreshToken.value = attr['refresh-token']
        latestTokenUpdate.value = Date.now()
        tokenLifeTime.value = attr['life-time']
    }

    const removeAttributes = () => {
        localStorage.removeItem('auth')
    }

    const auth = async(form) => {
        return axios.post('/v2/login?clientId=default', form)
    }

    const authRefreshToken = async() => {
        return axios.post('/auth/token?clientId=default', { 
            clientId: 'default', 
            refreshToken: refreshToken?.value
        })
    }

    const isAuth = computed(() => {
        return !!token?.value
    })

    return {
        token,
        isAuth,
        refreshToken,
        latestTokenUpdate,
        tokenLifeTime,
        auth,
        setAttributes,
        authRefreshToken,
        removeAttributes,
    }
}, 
{
    persist: {
        paths: ['token', 'refreshToken', 'latestTokenUpdate', 'tokenLifeTime']
    }
})