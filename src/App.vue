<template>
    <Header /> 
    <router-view>
    </router-view>   
</template>

<script>
import Header from '@/components/blocks/header/index.vue'

export default {
    components: {
        Header
    }
}
</script>
<style>
</style>
