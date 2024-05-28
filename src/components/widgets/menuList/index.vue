<template lang="">
    <ul class="menu__list">
        <li 
            class="menu__list-item"
            v-for="menuItem in menuList"
            :key="menuItem.key"
        >
            <router-link :to="menuItem.link">
                {{ menuItem.title }}
            </router-link>
        </li>
    </ul>
</template>
<script>

import { useMenuStore } from '@/store/menu.js'

export default {
    name:"MenuList",

    setup () {
        const { menuList } = useMenuStore()

        return {
            menuList
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>