
interface cartInterface {
    shopingListIds: number[]
}


export const useCart = defineStore('cart', {
    state: () :cartInterface => ({ 
        shopingListIds: [],
    }),
    getters: {},
    actions: {
        addToList (itemId: number) {
            // make a object with the key of item Ids and value of number of that product
            if (this.shopingListIds[itemId]) {
                this.shopingListIds[itemId] = this.shopingListIds[itemId] + 1
            } else {
                this.shopingListIds[itemId] = 1
            }
        }
    }
})