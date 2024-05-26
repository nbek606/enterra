<template>
    <div class="menu__burger">
        <input 
            class="menu__burger-toggle" 
            id="menu__burger-toggle"
            type="checkbox" 
        />
        <label 
            class="menu__burger-btn" 
            for="menu__burger-toggle"
            @click="$emit('clicked')"
        >
            <span></span>
        </label>
    </div>
</template>
<script>
export default {
    name: "Burger"
}
</script>
<style lang="scss">
    @import './style.scss';
</style>