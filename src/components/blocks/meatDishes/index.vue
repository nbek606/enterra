<template lang="">
    <div class="meat__dishes">
        <PorductSlide
            v-bind="{ title }"
        />
    </div>
</template>
<script>

import PorductSlide from '@/components/widgets/productSlide/index.vue'

export default {
    name: 'meatDishes',
    components: {
        PorductSlide
    },

    setup () {
        const title = "Мясные блюда"

        return {
            title
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>