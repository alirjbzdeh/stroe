<template>
    <div class="flex flex-row items-center gap-2">
        <span v-for="(filter, index) in props.filters" :key="index" :class="filter.filterProperty === productsStore.productsFilters ? 'text-primary-700' : 'text-neutral-600'" class="text-center cursor-pointer text-neutral-600 text-body-2" @click="productsStore.filterProducts(filter.filterProperty)">
            {{ filter.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { useProducts } from '~/store/products'

const productsStore = useProducts()


const props = defineProps({
  filters: {
    type: Array,
    default () {
      return []
    }
  },
})

</script>

<style scoped lang="scss">

</style>