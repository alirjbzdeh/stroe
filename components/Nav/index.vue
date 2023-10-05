<script setup lang="ts">
import { useProducts } from '~/store/products'
import { useCart } from '~/store/cart'

const productsStore = useProducts()
const cartStore = useCart()

const navItems = [
    {
        name: 'همه',
        filterProperty: 'all',
    },
    {
        name: 'کالا های تخفیف دار',
        filterProperty: 'discount',
    },
]

</script>
<template>
    <nav class="flex flex-row justify-between w-full p-4">
        <!-- links of navabr -->
        <NavFilters :filters="navItems" />
        <!-- show all products -->
        <div class="flex flex-row items-center gap-4">
            <span class="f16-500 text-neutral-500">
                {{ `${productsStore.productsList?.length} کالا` }}
            </span>
            <NuxtLink to="/cart" class="relative inline-flex rounded py-2">
                <div class="flex">
                    <ToolsIcons width="26" height="26" svgId="#cartOff" style="fill: #424750;"/>
                </div>
                <div class="absolute flex items-center justify-center bg-primary-700 text-white -right-1 bottom-2 rounded w-4 h-4">
                    <span class="f10-400 text-white">
                        {{cartStore.shopItemsLength}}
                    </span>
                </div>
            </NuxtLink>
        </div>
    </nav>
</template>


<style scoped lang="scss">
nav {
    box-shadow: 0 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.05);
}
</style>