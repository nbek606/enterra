<template lang="">
    <div class="logo">
        <span>
            <LogoIcon />
        </span>    
        <h1>
            {{ logoText }}
        </h1>
    </div>
</template>
<script>

import { useGlobalVariablesStore } from '@/store/globalVariables.js'

import LogoIcon from '@/assets/svg/logo.svg?component'

export default {
    name: "Logo",
    components: {
        LogoIcon
    },

    setup () {
        const { logoText } = useGlobalVariablesStore()

        return {
            logoText
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>