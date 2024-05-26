<template lang="">
    <div class="header">
        <div class="header__wrap container">
            <div 
                class="header__menu header__menu-mobile"
            >
                <span class="header__menu-burger">
                    <MenuBurger 
                        @clicked="isShowLeftMenu = !isShowLeftMenu"
                    />
                </span>
                <span class="header__menu-text">
                    меню
                </span>
            </div>
            
            <div class="header__logo">
                LOGOS
            </div>

            <div class="header__search">
                <HeaderSearch />
            </div>

            <div class="header__contacts">
                <span class="header__contacts-icon">
                    <CallSvg />
                </span>
                
                <span class="header__contacts-title">
                    Контакты:
                </span>

                <span class="header__contacts-value">
                    <router-link to="+7 (917) 510-57-59">
                        +7 (917) 510-57-59
                    </router-link>
                </span>
            </div>

            <div class="header__cart">
                <HeaderCart />
            </div>
        </div>    
    </div>
    <LeftMenu 
        v-bind="{ isShowLeftMenu }"
    />
</template>
<script>

import MenuBurger from '@/components/widgets/menuBurger/index.vue'
import HeaderCart from '@/components/widgets/headerCart/index.vue'
import HeaderSearch from '@/components/widgets/search/index.vue'
import LeftMenu from '@/components/widgets/leftMenu/index.vue'

import CallSvg from '@/assets/svg/calling.svg?component'

import { ref } from 'vue'

export default {
    name: "Header",
    components: {
        MenuBurger,
        HeaderCart,
        HeaderSearch,
        LeftMenu,
        CallSvg
    },

    setup () {
        const isShowLeftMenu = ref(false)

        return {
            isShowLeftMenu
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>