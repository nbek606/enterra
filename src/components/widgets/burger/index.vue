<template>
    <div class="burger">
        <input 
            class="burger-toggle" 
            id="burger-toggle"
            type="checkbox" 
        />
        <label 
            class="burger-btn" 
            for="burger-toggle"
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