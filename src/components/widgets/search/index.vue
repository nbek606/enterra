<template lang="">
    <div class="search">
        <div class="seacrh__wrap">
            <span class="search__icon search__icon-location">
                <LocationSvg />
            </span>    
            <input 
                class="search__input"
                placeholder="Введите адрес доставки"
            />
            <span class="search__icon search__icon-search">
                <SearchSvg />
            </span>  
        </div>    
    </div>
</template>
<script>

import LocationSvg from '@/assets/svg/location.svg?component'
import SearchSvg from '@/assets/svg/search.svg?component'

export default {
    name: "Search",
    components: {
        LocationSvg,
        SearchSvg
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>