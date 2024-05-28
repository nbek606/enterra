import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMenuStore = defineStore('menu', () => {
    const menuList =reactive([
        {
            key: 1,
            title: "О проекте",
            link: "#"
        },
        {
            key: 2,
            title: "Карта",
            link: "#"
        },
        {
            key: 3,
            title: "История",
            link: "#"
        },
        {
            key: 4,
            title: "Топ 5 мест",
            link: "#"
        },
        {
            key: 5,
            title: "Топ 9 лайфхаков",
            link: "#"
        }
    ])
    
    return {
        menuList
    }
})