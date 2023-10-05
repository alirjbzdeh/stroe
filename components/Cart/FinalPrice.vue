<template>
    <aside>
        <div class="flex flex-col gap-8 price-container px-5 py-2">
            <CartPriceInfoRow :price="toLocal(cartStore.price)" compTitle="قیمت کالا ها" />
            <CartPriceInfoRow :price="toLocal(cartStore.totalPrice)" priceStyle="text-neutral-700" compTitle="جمع سبد خرید" titleStyle="text-neutral-700" iconStyle="fill: #23254e" />
            <CartPriceInfoRow v-if="cartStore.price - cartStore.totalPrice != 0" :price="toLocal(cartStore.price - cartStore.totalPrice)" priceStyle="text-primary-700" compTitle="سود شما از خرید" titleStyle="text-primary-700" iconStyle="fill: #ef4056" />
            <button class="bg-primary-700 text-white p-2 p-2 rounded-lg w-full">
                ثبت سفارش
            </button>
        </div>
        <p class="my-3 text-neutral-500">
            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
        </p>
    </aside>
</template>

<script setup lang="ts">
import { toLocal } from '~/helpers/helpersFunc'

import { useCart } from '~/store/cart'

const cartStore = useCart()

</script>

<style scoped lang="scss">
.price-container {
    border-radius: 8px;
    border: 1px solid #e0e0e2;
}
</style>