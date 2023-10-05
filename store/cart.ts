import { useProducts} from '~/store/products'
import { priceWithDiscount } from '~/helpers/helpersFunc'

interface cartInterface {
    shopingListItems: Record<string, any>[];
    shopingListIds: Record<number, number>;
    // my prefer was code below but i didnt had enough time
    // shopingListIds: Map<number, number>
    shopItemsLength: number;
    totalPrice: number;
    price: number;

}


export const useCart = defineStore('cart', {
    state: () :cartInterface => ({ 
        shopingListItems: [],
        shopingListIds: [],
        shopItemsLength: 0,
        totalPrice: 0,
        price: 0
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
        },
        setupCart() {
            this.totalPrice = 0
            this.price = 0
            const productsStore = useProducts()
            const itemsIds = Object.keys(this.shopingListIds)
            this.shopingListItems = productsStore.productsList.filter(e =>  itemsIds.includes(e.id))
            this.shopingListItems.map(e => {
                e.count = this.shopingListIds[e.id]
                this.price += Number(this.shopingListIds[e.id]*e.price)
                // if item has discount we calculate that discount price and then multplie it with number if ordered item
                if (e.discountPercent) {
                    const discountedPrice = priceWithDiscount(e.price, e.discountPercent)
                    this.totalPrice += Number(this.shopingListIds[e.id]*discountedPrice)
                    console.log('discountedPrice', discountedPrice);
                    console.log('shopingListIds', this.shopingListIds[e.id]);
                    
                } else {
                    this.totalPrice += Number(this.shopingListIds[e.id]*e.price)
                }
            })
            console.log('price', this.price);
            
        }
    }
})