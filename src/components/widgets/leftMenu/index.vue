<template lang="">
    <div 
        class="left__menu"
        :class="{ 'left__menu-active': isShowLeftMenu }"
    >
        <div class="left__menu-header">
            <div class="left__menu-logo">
                LOGOS
            </div>    
        </div>
        <div class="left__menu-list">
            <div class="left__menu-item">
                
            </div>    
        </div>
    </div>
</template>
<script>

import { toRefs } from 'vue'

export default {
    name: "LeftMenu",

    props: {
        isShowLeftMenu: {
            type: Boolean,
            default: false
        }
    },

    setup (props) {
        const { isShowLeftMenu } = toRefs(props)

        return {
            isShowLeftMenu
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './style.scss'
</style>