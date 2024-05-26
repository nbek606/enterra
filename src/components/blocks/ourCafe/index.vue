<template lang="">
    <div class="our__cafe container">
        <div class="our__cafe-wrap">
            <div class="our__cafe-content">
                <div class="our__cafe-content__title">
                    НАШЕ КАФЕ
                </div>
                <div class="our__cafe-content__description">
                    Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                </div>
                <div class="our__cafe-content__button">
                    Посмотреть меню
                </div>
            </div>
            <div class="our__cafe-widget">
                <div 
                    class="our__cafe-widget__item"

                    v-for="widget in widgets"
                >
                    <img class="our__cafe-widget__icon" 
                        :src="`/src/assets/svg/${widget.icon}.svg`"
                    />
                    
                    <span class="our__cafe-widget__text">
                        {{ widget.title }}
                    </span>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>

export default {
    name: "OurCafe",
    
    setup () {
        const widgets = [
            {
                icon: "chef",
                title: "Свежайшие продукты",
            },
            {
                icon: "flash",
                title: "Быстрая доставка",
            },
            {
                icon: "onion",
                title: "Лучшие повора"
            },
            {
                icon: "chef",
                title: "Свежайшие продукты"
            },
        ]

        return {
            widgets
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>