<template lang="">
    <div 
        class="closed"
        :style="{
            width: `${width}px`,
        }"
    >
        <span 
            :style="{
                width: `${width}px`,
                height: `${height}px`
            }"
        />
        <span 
            :style="{
                width: `${width}px`,
                height: `${height}px`
            }"
        />
    </div>
</template>
<script>
export default {
    name: "Closed",
    props: {
        width: {
            type: String,
            default: "17"
        },
        height: {
            type: String,
            default: "2"
        }
    }
}
</script>
<style lang="scss">
    @import './style.scss';
</style>