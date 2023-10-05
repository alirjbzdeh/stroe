<script setup lang="ts">
import { useCart } from '~/store/cart'

const cartStore = useCart()

cartStore.setupCart()

</script>
<template>
    <!-- <div v-if="cartStore.shopItemsLength === 0" class="flex flex-col gap-2">
        <p class="w-full text-center font-bold">
            چیزی واسه نمایش نیست دادا !
        </p>
        <NuxtLink class="w-full text-center font-bold text-primary-700 underline" to="/products">
            خرید مون نشه ؟
        </NuxtLink>
    </div> -->
    <!-- v-else -->
    <div class="flex w-full h-full">
        <CartShopList />
        <CartFinalPrice />
    </div>
</template>


<style scoped lang="scss">

</style>