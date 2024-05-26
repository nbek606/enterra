<template lang="">
    <div class="product__slide">
        <div class="product__slide-title container">
           <h1>
                {{ title }}
           </h1>
        </div>
        <div class="product__slide-content">
            <Splide
                :options="slideOptions"
                :has-track="false"
            >
                <SplideTrack>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                    <SplideSlide>
                        <ProductCart />
                    </SplideSlide>
                </SplideTrack>    
            </Splide>
        </div>
    </div>
</template>
<script>

import ProductCart from '@/components/widgets/productCart/index.vue'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { toRefs } from 'vue';

export default {
    name: "ProductSlide",
    components: {
        ProductCart,
        Splide,
        SplideTrack,
        SplideSlide,
    },

    props: {
        title: String,
        default: 'title'
    },

    setup (props) {

        const { title } = toRefs(props)

        const slideOptions = {
            type: 'loop',
            rewind:true,
            pagination: false,
            arrows: false,
            padding: 10,
            perPage: 1,
            mediaQuery: 'min',

            breakpoints: {
                330: {
                    padding: 25,
                },

                1440: {
                    perPage: 4,
                    padding: 32
                },

                1440: {
                    perPage: 7,
                    padding: 32
                }
            }
        }

        return {
            slideOptions,
            title
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
    @import '@splidejs/vue-splide/css';
</style>