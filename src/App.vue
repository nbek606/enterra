<script setup>
    import { useAuth } from '@/store/auth'
    import { toRefs } from  'vue'

    const { setAttributes, authRefreshToken, isAuth, removeAttributes } = useAuth()
    const { latestTokenUpdate, tokenLifeTime } = toRefs(useAuth())

    const getRefreshTokenAttributes = async () => {
        try {
            const { data } = await authRefreshToken()
            setAttributes(data)
        } catch {
            await removeAttributes()
            clearInterval(refreshTokenInterval)
            location.reload()
        }
    }

    const refreshTokenInterval = setInterval( async () => {
        if (!isAuth) {
            clearInterval(refreshTokenInterval)
            return
        }

        const interval = ((Date.now() - latestTokenUpdate.value) / 1000)

        if (interval > tokenLifeTime.value - 100) {
            await getRefreshTokenAttributes()
        }
    }, 10000) 
        
</script>
<template>
    <router-view>
    </router-view>  
</template>
