<template lang="">
    <div class="hot__snacks">
        <PorductSlide
            v-bind="{ title }"
        />
    </div>
</template>
<script>

import PorductSlide from '@/components/widgets/productSlide/index.vue'

export default {
    name: 'HotSnacks',
    components: {
        PorductSlide
    },

    setup () {
        const title = "ГОРЯЧИЕ ЗАКУСКИ"

        return {
            title
        }
    }
}
</script>
<style lang="">
    
</style>