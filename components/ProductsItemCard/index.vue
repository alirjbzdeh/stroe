<script setup lang="ts">
import { useCart} from '~/store/cart'
import { toLocal } from '~/helpers/helpersFunc'

const cartStore = useCart()
const props = defineProps({
  product: {
    type: Object,
    default () {
      return {}
    }
  },
})

onMounted(() => {
    console.log(props.product);
    
})

const priceWithDiscount = (price: number, percent: number): number => (price - (percent*price)/100)
</script>
<template>
    <NuxtLink class="card py-3 px-4 border-left-bottom rounded-sm cursor-pointer" :to="'/products/'+props.product.id">
        <div class=" h-full w-full">
            <img src="../../assets/svgs/specialTag.svg" alt="">
            <img :src="props.product.image" alt="">
            <ToolsIcons width="24" height="24" svgId="#addCircleOutline" style="fill: #ef394e" @click="cartStore.addToList(props.product.id)"/>
            <div class="add-to-shop w-6 h-6">
                
            </div>
            <span class="f16-900 text-neutral-700">
                {{props.product.title}}
            </span>
            <div class="flex flex-row justify-between mt-6">
                <span v-if="props.product.remainingNumber" class="f12-500 text-primary-700">
                    {{ `تنها ${props.product.remainingNumber} عدد باقی مانده است` }}
                </span>
                <div v-else-if="props.product.deliveryLabel" class="flex flex-row gap-2">
                    <ToolsIcons width="16" height="16" svgId="#deliveryToday" style="fill: #1028ff"/>
                    <span class="f12-500 text-neutral-600">
                        {{props.product.deliveryLabel}}
                    </span>
                </div>
                <div v-else></div>


                <div class="flex flex-row items-center gap-2">
                    <span class="f12-700 text-neutral-700">
                        {{props.product.rate}}
                    </span>
                    <ToolsIcons width="16" height="16" svgId="#starFill" style="fill: #f9bc00"/>
                </div>
            </div>
            <!-- pricing -->
            <div class="flex flex-row justify-between mt-6">
                <div v-if="props.product.discountPercent" class="bg-primary-700 text-white px-2 rounded-2xl">
                    {{props.product.discountPercent ? `${props.product.discountPercent}%` : ''}}
                </div>
                <div v-else class=""></div>
                <div class="flex flex-row items-center gap-2">
                    <span class="f18-800 text-neutral-700">
                        {{ props.product.discountPercent ? toLocal(priceWithDiscount(props.product.price, props.product.discountPercent),0) : toLocal(props.product.price)}}
                    </span>
                    <ToolsIcons width="16" height="16" svgId="#toman" style="fill: #424750"/>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<style scoped lang="scss">
.card{
    transition: 300ms;
    &:hover {
        box-shadow: (0 1px 5px rgba(0,0,0,.2));
    }
}


</style>