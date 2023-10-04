export default defineNuxtRouteMiddleware((to, from) => {  
    if (to.name === 'index') {
      return navigateTo('/products')
    }
  })