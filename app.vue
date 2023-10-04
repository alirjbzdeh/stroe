<script setup lang="ts">
import { useInit } from '~/store/init'

const initStore = useInit()


</script>
<template>
  <div>
    <Loading v-if="initStore.routeLoading" />
    <ToolsSvgSprite />
    <NuxtLayout>
      <router-view />
    </NuxtLayout>
  </div>
</template>
