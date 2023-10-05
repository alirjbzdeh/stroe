<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default () {
            return ''
        }
    },
    iconStyle: {
        type: String,
        default () {
            return ''
        }
    },
    compTitle: {
        type: String,
        default () {
            return ''
        }
    },
    titleStyle: {
        type: String,
        default () {
            return ''
        }
    }
})
</script>
<template>
    <div class="flex flex-row items-center gap-1">
        <ToolsIcons width="16" height="16" :svgId="props.icon" :style="props.iconStyle"/>
        <span :class="props.titleStyle">
            {{ props.compTitle }}
        </span>
    </div>
</template>


<style scoped lang="scss">

</style>