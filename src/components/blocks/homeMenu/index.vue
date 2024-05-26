<template>
    <div class="home__menu">
        <div class="home__menu-wrap">
            <div class="home__menu-list">
                <div class="home__menu-container container">
                    <div 
                        class="home__menu-item"
                        :class="{ 'home__menu-item__active': activeMenuItem == menuItem.id }"
                        v-for="menuItem in menuList"
                        :key="menuItem.id"
                        @click="changeActiveMenuItem(menuItem.id)"
                    >
                        {{  menuItem.title  }}
                    </div>
                </div>    
            </div>    
        </div>    
    </div>    
</template>
<script>
import { reactive, ref, onMounted } from 'vue';

export default {
    components: {
       
    },
    setup() {
        const activeMenuItem = ref(null)
        const menuList = reactive([
            {
                id: 1,
                title: "Холодные закуски",
            },
            {
                id: 2,
                title: "Горячие закуски",
            },
            {
                id: 3,
                title: "Мясные блюда",
            },
            {
                id: 4,
                title: "Рыбные блюда",
            },
            {
                id: 5,
                title: "Гриль меню",
            },
            {
                id: 6,
                title: "Фирменные блюда",
            },
            {
                id: 7,
                title: "Напитки",
            }
        ])

        onMounted(() => {
            activeMenuItem.value = menuList[0]?.id
        })

        const changeActiveMenuItem = (menuItemId) => {
            activeMenuItem.value = menuItemId
        }

        return {
            menuList,
            activeMenuItem,
            changeActiveMenuItem
        }
    },
};
</script>
<style lang="scss">
@import './style.scss';
</style>
  