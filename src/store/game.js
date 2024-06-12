import { defineStore } from 'pinia'
import { toRefs } from 'vue'
import axios from '@/plugins/axios'
import { useAuth } from '@/store/auth'

export const useGame = defineStore('game', () => {
    const { token } = toRefs(useAuth())

    const balance = async () => {
        return axios.get(`/v2/users/me/balance?clientId=default&auth=${token?.value}`)
    }

    const game = async () => {
        return axios.get('/v2/casino/games?clientId=default')
    }

    const gameUrl = async (id) => {
        return axios.post(`/v2/casino/games/${id}/session-demo?clientId=default`, {
            clientId: "default", 
            gameId: id        
        })
    }

    return {
        balance,
        game,
        gameUrl
    }
})