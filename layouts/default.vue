<template>
   <div class="flex flex-col w-full container mx-auto">
      <Nav :key="route.name" />
      <slot />
   </div>

</template>


<script setup lang="ts">
const route = useRoute()
</script>


<style lang="scss" scoped>
</style>
