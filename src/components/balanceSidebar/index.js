import { useGame } from '@/store/game';
import { ref, computed} from 'vue'

export const useBalance = () => {
    const { balance } = useGame()
    let balanceData = ref()

    const getBalance = async () => {
        try {
            const { data } = await balance()   
            balanceData.value = data?.data[0]
        } catch (error) {
            console.log(error)
        }
    }

    const listBalance = computed(() =>  {
        const attributes = balanceData?.value?.attributes
      
        if (!attributes) {
            return
        }

        return [
            {
                title: 'Available balance',
                value: attributes?.available
            },
            {
                title: 'In play balance',
                value: attributes['in-play']
            },
            {
                title: 'Bonus balance',
                value: attributes?.bonus
            }
        ]
    })

    return {
        listBalance,
        getBalance
    }
}