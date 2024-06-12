import { useGame } from '@/store/game';
import { ref, computed} from 'vue'

export const useGameList = () => {
    const { game } = useGame()

    const gameList = ref(null)

    const getGame = async () => {
        try {
            const { data } = await game()

            gameList.value = data?.data
        } catch (error) {
            console.log(error)
        }
    } 

    const getGameList = computed(() => {
        return gameList?.value?.splice(0, 100)
    })

    return {
        getGame,
        getGameList
    }
}