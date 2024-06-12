<script setup>
    import GameCard from '@/components/gameCard/index.vue'

    import { onMounted } from 'vue'
    import { useGameList } from './index.js';

    const { getGame, getGameList } = useGameList()

    onMounted(() => {
        getGame()
    })

</script>
<template lang="">
    <div class="game__list">
        <GameCard 
            v-for="game in getGameList"
            v-bind="{ gameId: game.id, 
                gameImg: game.attributes?.image,
                gameTitle: game.attributes?.title 
            }"
        />
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>