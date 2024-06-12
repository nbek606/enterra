<script setup>
    import { useGameCard } from './index.js'

    const props = defineProps({
        gameId: String,
        gameImg: String,
        gameTitle: String
    })

    const { getGameUrl } = useGameCard()

</script>
<template lang="">
    <div class="game__card">
       <div class="game__card-img">
            <img :src="gameImg" />
       </div>
       <div class="game__card-title">
            <p>{{ gameTitle }}</p>
            
            <button 
                class="game__card-button"
                @click="getGameUrl(gameId)"
            >
                Play Demo
            </button>
       </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>