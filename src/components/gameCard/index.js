import { useGame } from "@/store/game"

export const useGameCard = () => {
    const { gameUrl } = useGame()

    const getGameUrl = async (id) => {
        try {
            const { data } =  await gameUrl(id)
            const { attributes } = data?.data[0]
            
            const url = attributes['launch-options']['game-url']
            window.open(url, '_blank')
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getGameUrl
    }
} 