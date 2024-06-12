<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useBalance } from './index.js'

  const { getBalance, listBalance } = useBalance()

  let balanceInterval

  onMounted(async () => {
    await getBalance()

    balanceInterval = setInterval(async () => {
        await getBalance()
        console.log(Date.now())
    }, 30000)
  })

  onUnmounted(() => {
    clearInterval(balanceInterval)
  })

</script>
<template lang="">
    <div 
        v-show="listBalance"
        class="balance__sidebar"
    >
        <ul class="balance__sidebar-list">
            <li 
                class="balance__sidebar-list__item"
                v-for="item in listBalance"
            >
                <p>{{ item.title }}</p>
                <span>
                    {{ item.value }}
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>