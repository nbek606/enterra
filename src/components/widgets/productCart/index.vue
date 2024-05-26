<template lang="">
    <div class="product__cart">
        <div class="product__cart-wrap">
            <div class="product__cart-image">
                <img src="@/assets/images/yagnenok.png" />
            </div>
            <div class="product__cart-content">
                <div class="product__cart-content__title">
                    Ягненок
                </div>
                <div class="product__cart-content__weight">
                    Вес: 225 г
                </div>
                <div class="product__cart-content__description">
                    Фаршированный гречневой кашей, 
                    курагой, апельсином и зеленым яблоком
                </div>
                <div class="product__cart-content__price">
                    620 &#8381
                </div>
                <div class="product__cart-content__cart">
                    <button class="product__cart-content__button">
                        <span>
                            В корзину
                        </span>
                        <CartSvg />
                    </button>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>

import CartSvg from '@/assets/svg/cart.svg?component'

export default {
    name: "ProductCart",
    components: {
        CartSvg
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>