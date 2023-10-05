<script setup lang="ts">
import { useCart } from '~/store/cart'

const cartStore = useCart()

const removeAll = () => {
    cartStore.shopingListItems = []
    cartStore.shopingListIds = []
    cartStore.shopItemsLength = 0
    cartStore.totalPrice = 0
    cartStore.price = 0
    navigateTo('/products')
}
</script>
<template>
    <section class="w-full h-full">
        <div class="flex flex-row items-center justify-between w-full p-4">
            <span class="f16-700 text-black">
                سبد خرید شما
            </span>
            <div class="flex flex-row gap-2 cursor-pointer" @click.prevent="removeAll">
                <span class="f16-700 text-primary-700">
                    حذف همه
                </span>
                <ToolsIcons width="24" height="24" svgId="#delete" style="fill: #ef394e" />
            </div>
        </div>
        <CartItemCard v-for="(item,index) in cartStore.shopingListItems" :key="index" :item="item"  />
    </section>
</template>


<style scoped lang="scss">
section {
    border: 1px solid #e0e0e2;
    border-radius: 8px;
    margin-left: 12px;
}
</style>