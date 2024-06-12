import { reactive, ref, toRefs } from 'vue'
import { useAuth } from '@/store/auth'
import { useRouter } from 'vue-router'

export const useAuthForm = () => {
    const { auth, setAttributes } = useAuth()
    
    const errorMsg = ref('')
    const router = useRouter()
    
    let refreshTokenInterval

    const form = reactive({
        clientId: 'default',
        login: '',
        password: ''
    })

    const rules = {
        login: [
            value => !!value || 'Name is required'
        ],
        password: [
            value => !!value || 'Password is required'
        ]
    }

    const onSubmit = async() => {
        try {
            const { data } = await auth(form)
            const { attributes } = data?.data[0]

            await setAttributes(attributes)
            
            errorMsg.value = ''

            location.reload()
        } catch (error) {
            errorMsg.value = 'Incorrect login or password'
        }
    }

    return {
        form,
        rules,
        onSubmit,
        errorMsg,
        refreshTokenInterval
    }
}
