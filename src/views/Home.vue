<template lang="">
    <div class="home">
        <HomeBanner />
        <HomeMenu />
        <ColdSnacks />
        <HotSnacks />
        <MeatDishes />
        <OurCafe />
        <Contacts />
    </div>
</template>
<script>
import HomeMenu from '@/components/blocks/homeMenu/index.vue'
import HomeBanner from '@/components/blocks/homeBanner/index.vue'
import ColdSnacks from '@/components/blocks/coldSnacks/index.vue'
import HotSnacks from '@/components/blocks/hotSnacks/index.vue'
import MeatDishes from '@/components/blocks/meatDishes/index.vue'
import OurCafe from '@/components/blocks/ourCafe/index.vue'
import Contacts from '@/components/blocks/contacts/index.vue'

export default {
    name: "Home",
    components: {
        HomeBanner,
        HomeMenu,
        ColdSnacks,
        HotSnacks,
        MeatDishes,
        OurCafe,
        Contacts
    }
}
</script>