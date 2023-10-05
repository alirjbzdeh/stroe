<script setup lang="ts">
import { toLocal, priceWithDiscount, discountPrice } from '~/helpers/helpersFunc'
const props = defineProps({
    item: {
        type: Object,
        default () {
            return []
        }
    }
})
</script>
<template>
    <NuxtLink :to="'/products/' + props.item.id" class="flex flex-row gap-6 h-full w-full item-container p-4">
        <div class="flex flex-col h-full justify-between items-center">
            <img :src="props.item.image" style="max-width: 100px" alt="">
            <img class="w-16" src="../../assets/svgs/specialTag.svg" alt="">
        </div>
        <div class="flex flex-col">
            <span class="f24-900 text-neutral-700 mb-4">
                {{props.item.title}}
            </span>
            <!-- tags -->
            <CartItemTags compTitle="گارانتی 18 ماهه پیکسل" titleStyle="text-neutral-600" icon="#guarantee" iconStyle="fill: #a1a3a8" />
            <CartItemTags compTitle="آرتین همتا" titleStyle="text-neutral-600" icon="#seller" iconStyle="fill: #a1a3a8" />
            <CartItemTags compTitle="موجود در انبار فروشنده و دیجی‌کالا" titleStyle="text-neutral-600" icon="#productAvailable" iconStyle="fill: #19bfd3" />
            <!-- discount -->
            <div v-if="props.item.discountPercent" class="flex flex-row items-center gap-2 mt-6 mb-2">
                <span class="f14-400 text-primary-700">
                    {{ toLocal(discountPrice(props.item.price, props.item.discountPercent) * props.item.count,0)}}
                </span>
                <ToolsIcons width="16" height="16" svgId="#toman" style="fill: #ef394e"/>
                <span class="f12-500 text-primary-700">
                    تخفیف
                </span>
            </div>
            <!-- price -->
            <div :class="props.item.discountPercent ? '' : 'mt-6'" class="flex flex-row items-center gap-2 mb-2">
                <span class="f24-900 font-bold text-neutral-700">
                    {{ props.item.discountPercent ? toLocal(priceWithDiscount(props.item.price, props.item.discountPercent) * props.item.count,0) : toLocal(props.item.price* props.item.count)}}
                </span>
                <ToolsIcons width="16" height="16" svgId="#toman" style="fill: #424750"/>
            </div>
            <!-- remain only -->
            <span v-if="props.item.remainingNumber" class="f12-500 text-primary-700">
                {{ `تنها ${props.item.remainingNumber} عدد باقی مانده است` }}
            </span>
            <!-- count -->
            <span class="f12-500 text-neutral-700 mt-2">
                {{ `تعداد :‌${props.item.count}` }}
            </span>
        </div>
    </NuxtLink>
</template>


<style scoped lang="scss">
.item-container {
    border-bottom: 1px solid #e0e0e2;
    &:last-child {
        border-bottom: none;
    }
}
</style>