<template>
    <div class="home__banner">
        <div class="home__banner-wrap container">
            <div class="home__banner-content">
                <div 
                    class="home__banner-title"
                    v-for="title in bannerTitle"
                    :key="title"
                >
                    <div class="home__banner-title__text">
                        {{  title  }}
                    </div>

                    <div class="home__banner-title__shadow">
                        {{  title  }}
                    </div>
                </div>
                <div class="home__banner-question">
                    <div class="home__banner-question__text">
                        <span>
                            Ещё не пробовал?
                        </span>
                    </div>
                    <div class="home__banner-question__shadow">
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>

export default {
    name: "HomeBanner",

    setup () {
        const bannerTitle = [
            "Доставка ВКУСНЕЙШИХ",
            "БЛЮд за 60 минут"
        ]

        return {
            bannerTitle
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>