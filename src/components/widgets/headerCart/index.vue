<template lang="">
    <div class="header__cart">
        <div class="header__cart-mobile header__cart-button">
            <div class="header__cart-mobile__svg">
                <CartSvg />
            </div>
            <div class="header__cart-mobile__text">
                Корзина
            </div>
        </div>

        <div class="header__cart-desktop header__cart-button"> 
            <div class="header__cart-desktop__text">
                Корзина
            </div>
            <div class="header__cart-desktop__counter">
                4
            </div>
        </div>

    </div>
</template>
<script>

import CartSvg from '@/assets/svg/cart.svg?component'

export default {
    name: "HeaderCart",
    components: {
        CartSvg 
    }
}
</script>
<style lang="scss" scoped>
    @import './style.scss'
</style>