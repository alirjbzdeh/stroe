<script setup lang="ts">
const props = defineProps({
  svgId: {
    type: String,
    default () {
      return ''
    }
  },
  width: {
    type: String,
    default () {
      return ''
    }
  },
  height: {
    type: String,
    default () {
      return ''
    }
  },
  classes: {
    type: String,
    default () {
      return ''
    }
  },
  styles: {
    type: String,
    default () {
      return ''
    }
  },
})

</script>
<template>
    <svg :width="props.width" :height="props.height" :class="props.classes" :style="props.styles">
        <use :xlink:href="props.svgId"></use>
    </svg>
</template>


<style scoped lang="scss">

</style>