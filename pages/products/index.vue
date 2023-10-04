<script setup lang="ts">
import { useProducts} from '~/store/products'

const productsStore = useProducts()

onMounted(() => {
    productsStore.getProductsList()
})
</script>
<template>
    <div class="product-list w-full">
        <ProductsItemCard v-for="(product,index) in productsStore.productsList" :key="index" :product="product" />
    </div>
</template>


<style scoped lang="scss">
.product-list {
    display: grid;
    grid-auto-flow: dense;
    grid-template-rows: auto;
    grid-template-columns: repeat(1,1fr);
}


@media (min-width: 640px) {
    .product-list {
        grid-template-columns: repeat(2,1fr);
    }

}
@media (min-width: 1024px) {
    .product-list {
        grid-template-columns: repeat(3,1fr);
    }

}
@media (min-width: 1280px) {
    .product-list {
        grid-template-columns: repeat(3,1fr);
    }
}
@media (min-width: 1440px){
    .product-list {
        grid-template-columns: repeat(4,1fr);
    }
}
@media (min-width: 1676px) {
    .product-list {
        grid-template-columns: repeat(5,1fr);
    }
}

</style>