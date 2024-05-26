<template lang="">
    <div class="cold__snacks">
        <PorductSlide 
            v-bind="{ title }"
        />
    </div>
</template>
<script>

import PorductSlide from '@/components/widgets/productSlide/index.vue'

export default {
    name: "ColdSnacks",
    components: {
        PorductSlide
    },

    setup () {
        const title = "ХОЛОДНЫЕ ЗАКУСКИ"

        return {
            title
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>