<template lang="">
    <header class="header">
        <div class="header__wrap container">
            <div class="header__logo">
                <Logo />
            </div>
            
            <!--desktop list-->
            <div class="header__list">
                <MenuList />
            </div>

            <!---mobile burger-->
            <div class="header__burger">
                <Burger 
                    @clicked="menuToggle = !menuToggle"
                />
            </div>

            <!--mobile toggle-->
            <div 
                class="header__mobile-toggle"
                :class="{ 'header__mobile-toggle__active': menuToggle }"
            >
                <div class="header__mobile-toggle__logo">
                    <Logo />
                    <Closed
                        @click="menuToggle = !menuToggle"
                    />
                </div>

                <div class="header__mobile-toggle__list">
                    <MenuList />
                </div>    
            </div>
        </div>
    </header>
</template>
<script>

import Closed from '@/components/widgets/closed/index.vue'
import Burger from '@/components/widgets/burger/index.vue'
import MenuList from '@/components/widgets/menuList/index.vue'
import Logo from '@/components/widgets/logo/index.vue'

import { ref } from 'vue'

export default {
    name: "Header",
    components: {
        Burger,
        MenuList,
        Logo,
        Closed
    },

    setup () {
        const menuToggle = ref(false)

        return {
            menuToggle 
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>