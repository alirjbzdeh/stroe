<template>
    <div class="flex flex-row items-center justify-between w-full">
        <span :class="props.titleStyle">
            {{props.compTitle}}
        </span>
        <div class="flex flex-row items-center gap-1">
            <span :class="props.priceStyle">
                {{ props.price }}
            </span>
            <ToolsIcons width="16" height="16" svgId="#toman" :style="props.iconStyle"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    compTitle: {
    type: String,
        default () {
        return ''
        }
    },
    titleStyle: {
    type: String,
        default () {
        return 'text-neutral-500'
        }
    },
    price: {
    type: String,
        default () {
        return '0'
        }
    },
    
    priceStyle: {
    type: String,
        default () {
        return 'text-neutral-500'
        }
    },
    iconStyle: {
    type: String,
        default () {
        return 'fill: #81858b'
        }
    },
})
</script>

<style scoped>

</style>