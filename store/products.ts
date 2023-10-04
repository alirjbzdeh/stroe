import Swal from 'sweetalert2';
import { useCustomFetch } from '~/composables/useCustomFetch';
import urls from '~/helpers/urls'

type productsFiltersType = 'all' | 'discount'

interface productsInterface {
    skeletonLoading: boolean;
    allProductsList: any;
    productsList: any;
    productsFilters : productsFiltersType
}


export const useProducts = defineStore('products', {
    state: ():productsInterface => ({ 
        skeletonLoading: false,
        allProductsList: [],
        productsList: [],
        productsFilters: 'all'
    }),
    getters: {},
    actions: {
        async getProductsList () {
            const config = useRuntimeConfig()
            

            this.skeletonLoading = true
            
            const res = await $fetch(urls.products, {
                baseURL: config.public.apiBase
            })
            
            this.skeletonLoading = false
            
            
            // if (err) {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'خطا',
            //         text: 'مشکلی پیش آمده است مجدد تلاش کنید',
            //         confirmButtonText: 'باشه'
            //     })
            // } else {
                this.allProductsList = res
                this.productsList = res
                this.productsFilters = 'all'
            // }
        },
        filterProducts (filter: productsFiltersType) {
            this.productsFilters = filter
            if (filter === 'discount') {
                this.productsList = this.allProductsList.filter(e => !!e.discountPercent)
            } else if (filter === 'all') {
                this.productsList = this.allProductsList
            }
        }
    }
})