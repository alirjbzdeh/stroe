
interface cartInterface {
    shopingListIds: Record<number, number>
    // my prefer was code below but i didnt had enough time
    // shopingListIds: Map<number, number>
    shopItemsLength: number

}


export const useCart = defineStore('cart', {
    state: () :cartInterface => ({ 
        shopingListIds: [],
        shopItemsLength: 0
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
            this.updateShoppingItemsLength()
        },
        removeFromList (itemId: number) {
            if (this.shopingListIds[itemId] === 1) {
                delete this.shopingListIds[itemId]
            } else {
                this.shopingListIds[itemId] = this.shopingListIds[itemId] - 1
            }
            this.updateShoppingItemsLength()
        },
        updateShoppingItemsLength () {
            this.shopItemsLength = 0
            const objVals = Object.values(this.shopingListIds)
            const objKeys = Object.keys(this.shopingListIds)
            
            objKeys.map((e, index) => {
                this.shopItemsLength += objVals[index]
            })   
        }
    }
})