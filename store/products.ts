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
            const { data, pending, error } = await useCustomFetch(urls.products)
            this.skeletonLoading = pending.value
            if (data.value) {
                this.allProductsList = data.value
                this.productsList = data.value
                this.productsFilters = 'all'
            }
            if (error.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'خطا',
                    text: 'مشکلی پیش آمده است مجدد تلاش کنید',
                    confirmButtonText: 'باشه'
                })
            }
            
            
            
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