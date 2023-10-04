<script setup lang="ts">
import { useProducts } from '~/store/products'

const productsStore = useProducts()

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
        <span class="f16-500 text-neutral-500">
            {{ `${productsStore.productsList?.length} کالا` }}
        </span>
    </nav>
</template>


<style scoped lang="scss">
nav {
    box-shadow: 0 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.05);
}
</style>